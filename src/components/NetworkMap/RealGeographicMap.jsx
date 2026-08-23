import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Plus, Minus, RotateCcw, Compass, Waves, Navigation, Anchor } from 'lucide-react';
import { primaryHubs, maritimeSeaDomains } from '../../data/locations';
import './RealGeographicMap.css';

// Calculate curved great-circle arc points between two coordinates
const getCurvedArcPoints = (start, end, numPoints = 40) => {
  const points = [];
  const startLat = start.lat;
  const startLng = start.lng;
  const endLat = end.lat;
  const endLng = end.lng;

  // Midpoint
  const midLat = (startLat + endLat) / 2;
  const midLng = (startLng + endLng) / 2;
  
  // Distance
  const dLat = endLat - startLat;
  const dLng = endLng - startLng;
  const dist = Math.sqrt(dLat * dLat + dLng * dLng);
  const curvature = Math.min(dist * 0.16, 6.0);

  // Perpendicular curve vector
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

// Strategic Intermodal Hub Connections
const hubRoutes = [
  { from: 'india-hq', to: 'uae-desk', mode: 'SEA/AIR' },
  { from: 'uae-desk', to: 'cis-almaty', mode: 'SEA/RAIL' },
  { from: 'india-hq', to: 'cis-almaty', mode: 'MULTIMODAL' }
];

export const RealGeographicMap = ({ 
  activeHub, 
  onSelectHub, 
  activeSeaDomain, 
  onSelectSeaDomain,
  viewMode = 'all' // 'all' | 'hubs' | 'seas'
}) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const hubMarkersRef = useRef({});
  const seaMarkersRef = useRef({});
  const polylineLayersRef = useRef([]);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Global cartographic viewport spanning Americas to Far East
    const initialBounds = [
      [-15.0, -100.0], // SW: Houston / South Americas / Indian Ocean
      [65.0, 155.0]    // NE: North Sea / Japan / Bering
    ];

    const map = L.map(mapContainerRef.current, {
      center: [25.0, 45.0],
      zoom: window.innerWidth < 768 ? 2.0 : 2.8,
      minZoom: 1.8,
      maxZoom: 9,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: true,
      worldCopyJump: true
    });

    mapInstanceRef.current = map;

    // High-Resolution Dark Tactical Map Tiles (CartoDB Dark Matter)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    // Initial frame
    map.fitBounds(initialBounds, {
      padding: window.innerWidth < 768 ? [15, 15] : [30, 30],
      maxZoom: 3.5
    });

    // 1. Render Strategic Hub Markers
    primaryHubs.forEach((hub) => {
      const isDubai = hub.id === 'uae-desk';
      
      const customIcon = L.divIcon({
        className: 'gacis-geo-marker-wrapper',
        html: `
          <div class="gacis-marker-node ${isDubai ? 'is-dubai-hq' : ''} ${activeHub?.id === hub.id ? 'is-selected' : ''}">
            <div class="node-halo-pulse"></div>
            <div class="node-center-core"></div>
            <span class="node-city-title">${hub.city}</span>
          </div>
        `,
        iconSize: [85, 42],
        iconAnchor: [42, 21]
      });

      const marker = L.marker([hub.geo.lat, hub.geo.lng], { 
        icon: customIcon,
        zIndexOffset: isDubai ? 1000 : 500
      }).addTo(map);

      marker.on('click', () => {
        onSelectHub && onSelectHub(hub);
      });

      hubMarkersRef.current[hub.id] = marker;
    });

    // 2. Render 19 Maritime Sea Domain Beacons
    maritimeSeaDomains.forEach((sea) => {
      const seaIcon = L.divIcon({
        className: 'gacis-sea-marker-wrapper',
        html: `
          <div class="gacis-sea-beacon ${activeSeaDomain?.id === sea.id ? 'is-sea-active' : ''}">
            <div class="sea-wave-ring"></div>
            <div class="sea-wave-pulse"></div>
            <div class="sea-core-dot"></div>
            <span class="sea-title-badge">⚓ ${sea.name}</span>
          </div>
        `,
        iconSize: [110, 44],
        iconAnchor: [55, 22]
      });

      const seaMarker = L.marker([sea.geo.lat, sea.geo.lng], { 
        icon: seaIcon,
        zIndexOffset: 300
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

  // Update Route Polylines when activeHub or activeSeaDomain changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Remove existing lines
    polylineLayersRef.current.forEach(layer => map.removeLayer(layer));
    polylineLayersRef.current = [];

    // Draw Great-Arc Curved Hub Corridors
    hubRoutes.forEach((route) => {
      const startHub = primaryHubs.find(h => h.id === route.from);
      const endHub = primaryHubs.find(h => h.id === route.to);

      if (!startHub || !endHub) return;

      const isConnected = activeHub?.id === route.from || activeHub?.id === route.to;
      const arcPoints = getCurvedArcPoints(startHub.geo, endHub.geo);

      // Base Glow Polyline
      const glowPolyline = L.polyline(arcPoints, {
        color: isConnected ? '#c8202f' : 'rgba(212, 168, 67, 0.32)',
        weight: isConnected ? 4.5 : 2,
        opacity: isConnected ? 0.95 : 0.3,
        className: isConnected ? 'geo-corridor-active' : 'geo-corridor-subtle',
        lineCap: 'round'
      }).addTo(map);

      // Animated Dashed Line
      const flowPolyline = L.polyline(arcPoints, {
        color: isConnected ? '#ffd700' : '#ffffff',
        weight: isConnected ? 2.5 : 1.2,
        opacity: isConnected ? 1 : 0.35,
        dashArray: isConnected ? '8, 8' : '4, 8',
        className: isConnected ? 'geo-flow-animated' : 'geo-flow-subtle',
        lineCap: 'round'
      }).addTo(map);

      polylineLayersRef.current.push(glowPolyline, flowPolyline);
    });

    // Update Hub Markers Active State
    primaryHubs.forEach((hub) => {
      const marker = hubMarkersRef.current[hub.id];
      if (marker) {
        const isDubai = hub.id === 'uae-desk';
        const isSelected = activeHub?.id === hub.id;
        
        const updatedIcon = L.divIcon({
          className: 'gacis-geo-marker-wrapper',
          html: `
            <div class="gacis-marker-node ${isDubai ? 'is-dubai-hq' : ''} ${isSelected ? 'is-selected' : ''}">
              <div class="node-halo-pulse"></div>
              <div class="node-center-core"></div>
              <span class="node-city-title">${hub.city}</span>
            </div>
          `,
          iconSize: [85, 42],
          iconAnchor: [42, 21]
        });

        marker.setIcon(updatedIcon);
      }
    });

    // Update Sea Markers Active State
    maritimeSeaDomains.forEach((sea) => {
      const marker = seaMarkersRef.current[sea.id];
      if (marker) {
        const isSeaSelected = activeSeaDomain?.id === sea.id;
        
        const updatedSeaIcon = L.divIcon({
          className: 'gacis-sea-marker-wrapper',
          html: `
            <div class="gacis-sea-beacon ${isSeaSelected ? 'is-sea-active' : ''}">
              <div class="sea-wave-ring"></div>
              <div class="sea-wave-pulse"></div>
              <div class="sea-core-dot"></div>
              <span class="sea-title-badge">⚓ ${sea.name}</span>
            </div>
          `,
          iconSize: [110, 44],
          iconAnchor: [55, 22]
        });

        marker.setIcon(updatedSeaIcon);
      }
    });

  }, [activeHub, activeSeaDomain]);

  // Smooth flyTo when activeHub changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !activeHub || activeSeaDomain) return;

    map.flyTo([activeHub.geo.lat, activeHub.geo.lng], 4.2, {
      duration: 1.1,
      easeLinearity: 0.25
    });
  }, [activeHub]);

  // Smooth flyTo when activeSeaDomain changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !activeSeaDomain) return;

    map.flyTo([activeSeaDomain.geo.lat, activeSeaDomain.geo.lng], activeSeaDomain.zoomLevel || 5.0, {
      duration: 1.2,
      easeLinearity: 0.25
    });
  }, [activeSeaDomain]);

  // Zoom controls
  const handleZoomIn = () => mapInstanceRef.current?.zoomIn();
  const handleZoomOut = () => mapInstanceRef.current?.zoomOut();
  const handleResetView = () => {
    const initialBounds = [
      [-15.0, -100.0],
      [65.0, 155.0]
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
        <span>GLOBAL TOPOLOGY & 19 MARITIME SEA DOMAINS</span>
      </div>

      {/* Custom GACIS Floating Map Controls */}
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

      {/* Floating Legend */}
      <div className="geo-map-legend">
        <div className="legend-item">
          <span className="legend-dot red-dot"></span>
          <span>Regional Hubs</span>
        </div>
        <div className="legend-item">
          <span className="legend-dot cyan-dot"></span>
          <span>19 Strategic Seas</span>
        </div>
        <div className="legend-item">
          <span className="legend-line gold-line"></span>
          <span>Active Sea/Rail Linehauls</span>
        </div>
      </div>
    </div>
  );
};

export default RealGeographicMap;
