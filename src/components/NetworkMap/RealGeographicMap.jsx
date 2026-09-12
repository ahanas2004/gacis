import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Plus, Minus, RotateCcw, Compass, Waves, Building2 } from 'lucide-react';
import { primaryHubs, maritimeSeaDomains } from '../../data/locations';
import './RealGeographicMap.css';

// Calculate smooth curved great-circle arc points between two coordinates
const getCurvedArcPoints = (start, end, numPoints = 40) => {
  const points = [];
  const startLat = start.lat;
  const startLng = start.lng;
  const endLat = end.lat;
  const endLng = end.lng;

  // Midpoint
  const midLat = (startLat + endLat) / 2;
  const midLng = (startLng + endLng) / 2;
  
  // Distance calculation for proportional curvature
  const dLat = endLat - startLat;
  const dLng = endLng - startLng;
  const dist = Math.sqrt(dLat * dLat + dLng * dLng);
  const curvature = Math.min(dist * 0.14, 5.5);

  // Perpendicular curve offset
  const offsetLat = midLat + (dLng > 0 ? curvature : -curvature);
  const offsetLng = midLng;

  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    const lat = (1 - t) * (1 - t) * startLat + 2 * (1 - t) * t * offsetLat + t * t * endLat;
    const lng = (1 - t) * (1 - t) * startLng + 2 * (1 - t) * t * offsetLng + t * t * endLng;
    points.push([lat, lng]);
  }
  return points;
};

export const RealGeographicMap = ({ 
  activeHub, 
  onSelectHub, 
  activeSeaDomain, 
  onSelectSeaDomain,
  viewMode = 'hubs', // 'hubs' | 'seas'
  selectedLaneFilter = 'ALL',
  hoveredLaneId = null
}) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const hubMarkersRef = useRef({});
  const seaMarkersRef = useRef({});
  const polylineLayersRef = useRef([]);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Cartographic frame spanning Americas, Europe, Middle East, India, Asia
    const initialBounds = [
      [-10.0, -90.0], // SW: Houston / South America / Indian Ocean
      [62.0, 150.0]    // NE: North Sea / Japan / Far East
    ];

    const map = L.map(mapContainerRef.current, {
      center: [26.0, 50.0],
      zoom: window.innerWidth < 768 ? 2.2 : 3.0,
      minZoom: 1.8,
      maxZoom: 9,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: true,
      worldCopyJump: true
    });

    mapInstanceRef.current = map;

    // High-Resolution Tactical Dark Tiles (Esri World Dark Gray Base)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16,
      attribution: 'Esri, DeLorme, NAVTEQ'
    }).addTo(map);

    // Reference labels layer
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16,
      attribution: ''
    }).addTo(map);

    // Initial frame
    map.fitBounds(initialBounds, {
      padding: window.innerWidth < 768 ? [15, 15] : [30, 30],
      maxZoom: 3.5
    });

    // 1. Initialize Hub Markers with clean icon structures
    primaryHubs.forEach((hub) => {
      const isDubai = hub.id === 'uae-desk';
      const isSelected = activeHub?.id === hub.id;
      
      const customIcon = L.divIcon({
        className: 'gacis-map-pin-container',
        html: `
          <div class="clean-hub-pin ${isDubai ? 'is-dubai-hq' : ''} ${isSelected ? 'is-origin-pin' : ''}">
            <div class="pin-radar-ring"></div>
            <div class="pin-dot-core"></div>
            <div class="pin-label-pill">
              <span class="plp-flag">${hub.flag}</span>
              <span class="plp-city">${hub.city}</span>
            </div>
          </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      const marker = L.marker([hub.geo.lat, hub.geo.lng], { 
        icon: customIcon,
        zIndexOffset: isDubai ? 800 : 500
      }).addTo(map);

      marker.on('click', () => {
        onSelectHub && onSelectHub(hub);
      });

      hubMarkersRef.current[hub.id] = marker;
    });

    // 2. Initialize Sea Domain Beacons
    maritimeSeaDomains.forEach((sea) => {
      const isSelected = activeSeaDomain?.id === sea.id;

      const seaIcon = L.divIcon({
        className: 'gacis-map-pin-container gacis-sea-pin-container',
        html: `
          <div class="clean-sea-beacon ${isSelected ? 'is-active-sea' : ''}">
            <div class="sea-radar-ring"></div>
            <div class="sea-beacon-dot">⚓</div>
            <div class="sea-label-pill">
              <span class="slp-name">${sea.name}</span>
            </div>
          </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      const seaMarker = L.marker([sea.geo.lat, sea.geo.lng], { 
        icon: seaIcon,
        zIndexOffset: 350
      }).addTo(map);

      seaMarker.on('click', () => {
        onSelectSeaDomain && onSelectSeaDomain(sea);
      });

      seaMarkersRef.current[sea.id] = seaMarker;
    });

    // Cleanup on unmount
    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update visibility & appearance of markers based on viewMode, activeHub, and activeSeaDomain
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // 1. Remove existing route polyline layers
    polylineLayersRef.current.forEach(layer => map.removeLayer(layer));
    polylineLayersRef.current = [];

    const activeLanes = activeHub?.connectedTradeLanes || [];
    const connectedDestIds = new Set(activeLanes.map(l => l.destinationId));

    // 2. Draw Clean Origin-to-Destination Trade Lanes (when in Hub mode)
    if (viewMode === 'hubs' && activeHub && activeLanes.length > 0) {
      // Filter lanes if selectedLaneFilter is set
      const lanesToDraw = selectedLaneFilter === 'ALL'
        ? activeLanes
        : activeLanes.filter(l => l.modes?.includes(selectedLaneFilter) || l.primaryMode?.toUpperCase().includes(selectedLaneFilter));

      lanesToDraw.forEach((lane) => {
        const destHub = primaryHubs.find(h => h.id === lane.destinationId);
        if (!destHub) return;

        const arcPoints = getCurvedArcPoints(activeHub.geo, destHub.geo);
        const isHovered = hoveredLaneId === lane.destinationId;

        // Color coding by mode
        const isAir = lane.modes?.includes('AIR') && !lane.modes?.includes('SEA');
        const isRail = lane.modes?.includes('RAIL') || lane.primaryMode?.toLowerCase().includes('rail');
        const laneColor = isAir ? '#38bdf8' : isRail ? '#f59e0b' : '#c8202f';
        const flowColor = isAir ? '#e0f2fe' : isRail ? '#fef08a' : '#ffd700';

        // Base sleek glow line
        const glowLine = L.polyline(arcPoints, {
          color: laneColor,
          weight: isHovered ? 4.5 : 2.5,
          opacity: isHovered ? 0.95 : 0.65,
          className: `clean-corridor-line ${isHovered ? 'is-highlighted-lane' : ''}`,
          lineCap: 'round'
        }).addTo(map);

        // Subtle moving dash flow
        const flowLine = L.polyline(arcPoints, {
          color: flowColor,
          weight: isHovered ? 2.5 : 1.5,
          opacity: isHovered ? 1.0 : 0.8,
          dashArray: '6, 8',
          className: 'clean-corridor-flow',
          lineCap: 'round'
        }).addTo(map);

        // Tooltip
        const tooltipHtml = `
          <div class="clean-route-tooltip">
            <div class="crt-header">
              <span class="crt-route">${activeHub.city} ⇄ ${lane.destinationCity}</span>
              <span class="crt-flag">${lane.flag}</span>
            </div>
            <div class="crt-mode-tag">${lane.primaryMode} · ⏱️ ${lane.transitTime}</div>
            <div class="crt-cargo"><strong>Outbound:</strong> ${lane.outboundCargo}</div>
            <div class="crt-cargo"><strong>Inbound:</strong> ${lane.inboundCargo}</div>
          </div>
        `;

        flowLine.bindTooltip(tooltipHtml, {
          sticky: true,
          className: 'clean-tooltip-container'
        });

        flowLine.on('click', () => {
          onSelectHub && onSelectHub(destHub);
        });
        glowLine.on('click', () => {
          onSelectHub && onSelectHub(destHub);
        });

        polylineLayersRef.current.push(glowLine, flowLine);
      });
    }

    // 3. Update Hub Marker Classes & Styles
    primaryHubs.forEach((hub) => {
      const marker = hubMarkersRef.current[hub.id];
      if (!marker) return;

      const isDubai = hub.id === 'uae-desk';
      const isOrigin = activeHub?.id === hub.id;
      const isDestination = connectedDestIds.has(hub.id);
      const isVisibleInMode = viewMode === 'hubs';

      const updatedIcon = L.divIcon({
        className: `gacis-map-pin-container ${!isVisibleInMode ? 'pin-mode-dimmed' : ''}`,
        html: `
          <div class="clean-hub-pin ${isDubai ? 'is-dubai-hq' : ''} ${isOrigin ? 'is-origin-pin' : ''} ${isDestination ? 'is-destination-pin' : ''}">
            <div class="pin-radar-ring"></div>
            <div class="pin-dot-core"></div>
            ${isOrigin ? '<span class="origin-status-badge">ORIGIN</span>' : ''}
            <div class="pin-label-pill">
              <span class="plp-flag">${hub.flag}</span>
              <span class="plp-city">${hub.city}</span>
            </div>
          </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      marker.setIcon(updatedIcon);
      marker.setZIndexOffset(isOrigin ? 1200 : isDestination ? 900 : isDubai ? 750 : 400);
    });

    // 4. Update Sea Domain Markers
    maritimeSeaDomains.forEach((sea) => {
      const marker = seaMarkersRef.current[sea.id];
      if (!marker) return;

      const isSeaActive = activeSeaDomain?.id === sea.id;
      const isVisibleInMode = viewMode === 'seas';

      const updatedSeaIcon = L.divIcon({
        className: `gacis-map-pin-container gacis-sea-pin-container ${!isVisibleInMode ? 'pin-mode-hidden' : ''}`,
        html: `
          <div class="clean-sea-beacon ${isSeaActive ? 'is-active-sea' : ''}">
            <div class="sea-radar-ring"></div>
            <div class="sea-beacon-dot">⚓</div>
            <div class="sea-label-pill">
              <span class="slp-name">${sea.name}</span>
            </div>
          </div>
        `,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      marker.setIcon(updatedSeaIcon);
      marker.setZIndexOffset(isSeaActive ? 1100 : 350);
    });

  }, [activeHub, activeSeaDomain, viewMode, selectedLaneFilter, hoveredLaneId]);

  // Smooth flyTo when activeHub changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !activeHub || viewMode !== 'hubs') return;

    map.flyTo([activeHub.geo.lat, activeHub.geo.lng], 4.2, {
      duration: 1.1,
      easeLinearity: 0.25
    });
  }, [activeHub, viewMode]);

  // Smooth flyTo when activeSeaDomain changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !activeSeaDomain || viewMode !== 'seas') return;

    map.flyTo([activeSeaDomain.geo.lat, activeSeaDomain.geo.lng], activeSeaDomain.zoomLevel || 5.0, {
      duration: 1.2,
      easeLinearity: 0.25
    });
  }, [activeSeaDomain, viewMode]);

  // Zoom and frame handlers
  const handleZoomIn = () => mapInstanceRef.current?.zoomIn();
  const handleZoomOut = () => mapInstanceRef.current?.zoomOut();
  const handleResetView = () => {
    const initialBounds = [
      [-10.0, -90.0],
      [62.0, 150.0]
    ];
    mapInstanceRef.current?.fitBounds(initialBounds, {
      padding: window.innerWidth < 768 ? [15, 15] : [30, 30],
      animate: true,
      duration: 1.0
    });
  };

  return (
    <div className="real-geographic-map-root">
      {/* Leaflet Map Canvas */}
      <div ref={mapContainerRef} className="leaflet-map-element" />

      {/* Map Control Room Telemetry Overlay */}
      <div className="geo-map-status-overlay">
        <span className="gso-dot"></span>
        <span>
          {viewMode === 'hubs' 
            ? `ACTIVE ORIGIN: ${activeHub?.city?.toUpperCase()} · ${activeHub?.connectedTradeLanes?.length || 0} CONNECTED CORRIDORS`
            : `MARITIME DOMAIN: ${activeSeaDomain?.name?.toUpperCase()}`
          }
        </span>
      </div>

      {/* GACIS Floating Map Controls */}
      <div className="geo-map-controls">
        <button 
          type="button" 
          className="gmc-btn" 
          onClick={handleZoomIn} 
          aria-label="Zoom in"
          title="Zoom In"
        >
          <Plus size={16} />
        </button>
        <button 
          type="button" 
          className="gmc-btn" 
          onClick={handleZoomOut} 
          aria-label="Zoom out"
          title="Zoom Out"
        >
          <Minus size={16} />
        </button>
        <button 
          type="button" 
          className="gmc-btn reset-btn" 
          onClick={handleResetView} 
          aria-label="Reset Global View"
          title="Reset Global View"
        >
          <RotateCcw size={14} />
        </button>
      </div>

      {/* Floating Tactical Legend */}
      <div className="geo-map-legend">
        {viewMode === 'hubs' ? (
          <>
            <div className="legend-item">
              <span className="legend-dot origin-dot"></span>
              <span>Selected Origin</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot dest-dot"></span>
              <span>Direct Destination</span>
            </div>
            <div className="legend-item">
              <span className="legend-line corridor-line"></span>
              <span>Active Trade Lane</span>
            </div>
          </>
        ) : (
          <>
            <div className="legend-item">
              <span className="legend-dot sea-active-dot"></span>
              <span>Focused Sea Domain</span>
            </div>
            <div className="legend-item">
              <span className="legend-dot sea-beacon-dot-legend">⚓</span>
              <span>Maritime Waterway</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RealGeographicMap;
