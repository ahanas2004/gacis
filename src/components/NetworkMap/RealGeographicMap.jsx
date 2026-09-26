import { useEffect, useRef, useState } from 'react';
import { Map as LeafletMap, tileLayer, marker as createMarker, icon, divIcon, polyline, LatLngBounds, map as createMap } from 'leaflet/dist/leaflet-src.esm.js';
import 'leaflet/dist/leaflet.css';
import { Plus, Minus, RotateCcw, Compass, Waves, Building2 } from 'lucide-react';
import { primaryHubs, maritimeSeaDomains } from '../../data/locations';
import './RealGeographicMap.css';

// ─── Utility: Calculate smooth curved great-circle arc points ─────────────────────
function getCurvedArcPoints(start, end, numPoints = 40) {
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
}

// ─── Service-port map coordinates ─────────────────────────────────────────────
// Coordinates are map-display coordinates for the service coverage directory.
// They are intentionally kept separate from primary hub data so the existing
// hub/sea network remains unchanged.
const SERVICE_PORT_COORDS = {
  'Shanghai': [31.2304, 121.4737],
  'Ningbo-Zhoushan': [29.8683, 121.5440],
  'Shenzhen — Yantian / Shekou': [22.55, 114.27],
  'Qingdao': [36.0671, 120.3826],
  'Tianjin / Xingang': [39.0, 117.75],
  'Xiamen': [24.4798, 118.0894],
  'Guangzhou / Nansha': [22.62, 113.70],
  'Dalian': [38.9140, 121.6147],
  'Lianyungang': [34.75, 119.15],
  'Rizhao': [35.39, 119.53],
  'Kwai Tsing Container Terminals': [22.33, 114.11],
  'Kaohsiung': [22.61, 120.30],
  'Keelung': [25.13, 121.74],
  'Taichung': [24.22, 120.50],
  'Port of Singapore': [1.2644, 103.82],
  'Port Klang': [3.00, 101.40],
  'Tanjung Pelepas': [1.36, 103.55],
  'Penang': [5.40, 100.35],
  'Johor Port': [1.46, 103.92],
  'Kuantan': [3.97, 103.43],
  'Tanjung Priok / Jakarta': [-6.10, 106.88],
  'Tanjung Perak / Surabaya': [-7.20, 112.75],
  'Belawan / Medan': [3.78, 98.68],
  'Tanjung Emas / Semarang': [-6.95, 110.42],
  'Makassar': [-5.10, 119.43],
  'Busan': [35.08, 129.04],
  'Incheon': [37.46, 126.62],
  'Gwangyang': [34.91, 127.70],
  'Pyeongtaek-Dangjin': [36.98, 126.84],
  'Laem Chabang': [13.08, 100.88],
  'Bangkok Port': [13.71, 100.51],
  'Map Ta Phut': [12.69, 101.15],
  'Songkhla': [7.20, 100.59],
  'Cai Mep-Thi Vai': [10.55, 107.05],
  'Cat Lai / Ho Chi Minh City': [10.77, 106.70],
  'Hai Phong': [20.86, 106.68],
  'Da Nang': [16.05, 108.20],
  'Sihanoukville Autonomous Port': [10.63, 103.50],
  'Phnom Penh Autonomous Port': [11.57, 104.93],
  'Yangon / Thilawa': [16.75, 96.27],
  'Kyaukphyu': [19.43, 93.55],
  'Tokyo': [35.65, 139.78],
  'Yokohama': [35.45, 139.65],
  'Nagoya': [35.08, 136.88],
  'Kobe': [34.68, 135.19],
  'Osaka': [34.65, 135.43],
  'Hakata / Fukuoka': [33.60, 130.40],
  'Felixstowe': [51.96, 1.35],
  'Southampton': [50.90, -1.40],
  'London Gateway': [51.50, 0.55],
  'Liverpool': [53.44, -3.02],
  'Gioia Tauro': [38.43, 15.90],
  'Genoa': [44.40, 8.93],
  'La Spezia': [44.10, 9.82],
  'Trieste': [45.65, 13.77],
  'Livorno': [43.55, 10.31],
  'Hamburg': [53.54, 9.97],
  'Bremerhaven': [53.55, 8.58],
  'Wilhelmshaven': [53.53, 8.14],
  'Le Havre': [49.49, 0.12],
  'Marseille Fos': [43.34, 4.87],
  'Dunkirk': [51.03, 2.38],
  'Nantes-Saint-Nazaire': [47.28, -2.20],
  'Antwerp-Bruges': [51.26, 4.40],
  'Port of Varna': [43.20, 27.92],
  'Port of Burgas': [42.49, 27.47],
  'Rotterdam': [51.95, 4.14],
  'Amsterdam': [52.40, 4.90],
  'Basel Rhine Ports': [47.56, 7.59],
  'Valencia': [39.45, -0.32],
  'Barcelona': [41.35, 2.17],
  'Algeciras': [36.13, -5.43],
  'Vienna Danube Port': [48.20, 16.48],
  'Jebel Ali / Dubai': [25.00, 55.06],
  'Khalifa Port / Abu Dhabi': [24.80, 54.67],
  'Khor Fakkan': [25.34, 56.36],
  'Chennai': [13.08, 80.29],
  'Nhava Sheva / JNPT': [18.95, 72.95],
  'Mundra': [22.74, 69.72],
  'Kolkata / Haldia': [22.00, 88.05],
  'Cochin / Kochi': [9.97, 76.27],
  'Visakhapatnam': [17.69, 83.28],
  // Common connection aliases used by the service directory.
  'Colombo': [6.95, 79.84],
  'Dubai / Jebel Ali': [25.00, 55.06],
  'Singapore': [1.2644, 103.82],
  'Los Angeles / Long Beach': [33.75, -118.25],
  'New York / New Jersey': [40.67, -74.05],
  'Jebel Ali': [25.00, 55.06],
  'Jakarta / Tanjung Priok': [-6.10, 106.88],
  'Tokyo / Yokohama': [35.55, 139.72],
  'Surabaya': [-7.20, 112.75],
  'Sihanoukville': [10.63, 103.50],
  'Chittagong': [22.31, 91.80],
  'Piraeus': [37.94, 23.63],
  'Constanta': [44.17, 28.65],
  'Kandla': [23.03, 70.22],
  'Mombasa': [-4.04, 39.67],
  'Durban': [-29.87, 31.05],
  'Shenzhen / Yantian': [22.55, 114.27],
  'Hong Kong': [22.33, 114.11]
};

const SERVICE_PORT_ALIASES = {
  'Dubai / Jebel Ali': 'Jebel Ali / Dubai',
  'Jebel Ali': 'Jebel Ali / Dubai',
  'Singapore': 'Port of Singapore',
  'Jakarta / Tanjung Priok': 'Tanjung Priok / Jakarta',
  'Tokyo / Yokohama': 'Yokohama',
  'Surabaya': 'Tanjung Perak / Surabaya',
  'Sihanoukville': 'Sihanoukville Autonomous Port',
  'Shenzhen / Yantian': 'Shenzhen — Yantian / Shekou',
  'Hong Kong': 'Kwai Tsing Container Terminals'
};

function resolveServicePortName(name) {
  return SERVICE_PORT_ALIASES[name] || name;
}

export const RealGeographicMap = ({ 
  activeHub, 
  onSelectHub, 
  activeSeaDomain, 
  onSelectSeaDomain,
  viewMode = 'hubs', // 'hubs' | 'seas'
  selectedLaneFilter = 'ALL',
  hoveredLaneId = null,
  servicePortNetwork = [],
  activeServicePort = null,
  onSelectServicePort
}) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const hubMarkersRef = useRef({});
  const seaMarkersRef = useRef({});
  const servicePortMarkersRef = useRef({});
  const connectionMarkersRef = useRef({});
  const polylineLayersRef = useRef([]);
  const hasInitializedServicePortRef = useRef(false);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // Prevent double initialization in React strict mode

    // Cartographic frame spanning Americas, Europe, Middle East, India, Asia
    const initialBounds = [
      [-10.0, -90.0], // SW: Houston / South America / Indian Ocean
      [62.0, 150.0]    // NE: North Sea / Japan / Far East
    ];

    const mapInstance = createMap(mapContainerRef.current, {
      center: [26.0, 50.0],
      zoom: window.innerWidth < 768 ? 2.2 : 3.0,
      minZoom: 1.8,
      maxZoom: 9,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: window.innerWidth >= 768,
      worldCopyJump: true
    });

    mapInstanceRef.current = mapInstance;

    // High-Resolution Tactical Dark Tiles (Esri World Dark Gray Base)
    tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16,
      attribution: 'Esri, DeLorme, NAVTEQ'
    }).addTo(mapInstance);

    // Reference labels layer
    tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16,
      attribution: ''
    }).addTo(mapInstance);

    // Initial frame
    mapInstance.fitBounds(initialBounds, {
      padding: window.innerWidth < 768 ? [15, 15] : [30, 30],
      maxZoom: 3.5
    });

    // 1. Initialize Hub Markers with clean icon structures
    primaryHubs.forEach((hub) => {
      const isDubai = hub.id === 'uae-desk';
      const isSelected = activeHub?.id === hub.id;
      
      const customIcon = divIcon({
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

      const hubMarker = createMarker([hub.geo.lat, hub.geo.lng], { 
        icon: customIcon,
        zIndexOffset: isDubai ? 800 : 500
      }).addTo(mapInstance);

      hubMarker.on('click', () => {
        onSelectHub && onSelectHub(hub);
      });

      hubMarkersRef.current[hub.id] = hubMarker;
    });

    // 2. Initialize Sea Domain Beacons
    maritimeSeaDomains.forEach((sea) => {
      const isSelected = activeSeaDomain?.id === sea.id;

      const seaIcon = divIcon({
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

      const seaMarker = createMarker([sea.geo.lat, sea.geo.lng], { 
        icon: seaIcon,
        zIndexOffset: 350
      }).addTo(mapInstance);

      seaMarker.on('click', () => {
        onSelectSeaDomain && onSelectSeaDomain(sea);
      });

      seaMarkersRef.current[sea.id] = seaMarker;
    });

    // 3. Initialize Global Service Port Markers.
    // These are intentionally lighter than primary hub pins so the map can
    // expose the full port directory without replacing the existing hub UI.
    servicePortNetwork.forEach((country) => {
      country.ports.forEach((port) => {
        const coords = SERVICE_PORT_COORDS[port.name];
        if (!coords) return;

        const portIcon = divIcon({
          className: 'gacis-service-port-container',
          html: `
            <button
              type="button"
              class="service-port-pin"
              aria-label="Open ${port.name} service port"
              title="${port.name} · ${country.country}"
            >
              <span class="service-port-pulse"></span>
              <span class="service-port-core"></span>
              <span class="service-port-label">
                <span class="service-port-flag">${country.flag}</span>
                <span>${port.name}</span>
                <small>${port.code}</small>
              </span>
            </button>
          `,
          iconSize: [16, 16],
          iconAnchor: [8, 8]
        });

        const marker = createMarker(coords, {
          icon: portIcon,
          zIndexOffset: 250
        }).addTo(mapInstance);

        marker.on('click', () => {
          onSelectServicePort && onSelectServicePort({ ...port, country: country.country, countryId: country.id, flag: country.flag });
        });

        servicePortMarkersRef.current[`${country.id}:${port.name}`] = marker;
      });
    });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
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
        const glowLine = polyline(arcPoints, {
          color: laneColor,
          weight: isHovered ? 4.5 : 2.5,
          opacity: isHovered ? 0.95 : 0.65,
          className: `clean-corridor-line ${isHovered ? 'is-highlighted-lane' : ''}`,
          lineCap: 'round'
        }).addTo(map);

        // Subtle moving dash flow
        const flowLine = polyline(arcPoints, {
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

      const updatedIcon = divIcon({
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

    // 4. Update Global Service Port Markers + active connection routes.
    // Keep the full directory visible, while visually elevating the selected
    // port and its connected destinations.
    const activeServiceConnections = activeServicePort?.connections || [];
    const activeServiceName = activeServicePort?.name || null;
    const connectedServiceNames = new Set(
      activeServiceConnections.map((name) => resolveServicePortName(name))
    );

    Object.entries(servicePortMarkersRef.current).forEach(([key, marker]) => {
      const [, portName] = key.split(':');
      const canonicalName = resolveServicePortName(portName);
      const isOrigin = canonicalName === resolveServicePortName(activeServiceName || '');
      const isDestination = connectedServiceNames.has(canonicalName);
      const updatedPortIcon = divIcon({
        className: `gacis-service-port-container ${viewMode !== 'hubs' ? 'is-service-hidden' : ''} ${isOrigin ? 'is-service-origin' : ''} ${isDestination ? 'is-service-destination' : ''}`,
        html: `
          <button
            type="button"
            class="service-port-pin"
            aria-label="Open ${portName} service port"
            title="${portName}"
          >
            <span class="service-port-pulse"></span>
            <span class="service-port-core"></span>
            ${isOrigin || isDestination ? `
              <span class="service-port-label">
                <span>${isOrigin ? '◉' : '•'}</span>
                <span>${portName}</span>
              </span>
            ` : ''}
          </button>
        `,
        iconSize: [16, 16],
        iconAnchor: [8, 8]
      });
      marker.setIcon(updatedPortIcon);
      marker.setZIndexOffset(isOrigin ? 1300 : isDestination ? 1000 : 250);
    });

    // Remove connection-only markers from the previous selected port.
    Object.values(connectionMarkersRef.current).forEach(marker => map.removeLayer(marker));
    connectionMarkersRef.current = {};

    if (viewMode === 'hubs' && activeServicePort?.name && activeServiceConnections.length > 0) {
      const originCoords = SERVICE_PORT_COORDS[activeServicePort.name];
      if (originCoords) {
        activeServiceConnections.forEach((connection, index) => {
          const canonical = resolveServicePortName(connection);
          const destinationCoords = SERVICE_PORT_COORDS[canonical] || SERVICE_PORT_COORDS[connection];
          if (!destinationCoords) return;

          const arcPoints = getCurvedArcPoints(
            { lat: originCoords[0], lng: originCoords[1] },
            { lat: destinationCoords[0], lng: destinationCoords[1] },
            32
          );

          const routeLine = polyline(arcPoints, {
            color: canonical === resolveServicePortName(activeServicePort.name) ? '#ffd700' : '#38bdf8',
            weight: 2,
            opacity: 0.55,
            dashArray: '5, 9',
            className: 'service-port-connection-line',
            lineCap: 'round'
          }).addTo(map);

          polylineLayersRef.current.push(routeLine);

          // If the destination is not already in the service directory,
          // create a connection-only marker so the route endpoint remains visible.
          const hasDirectoryPort = Object.keys(servicePortMarkersRef.current)
            .some(key => key.endsWith(`:${canonical}`));

          if (!hasDirectoryPort) {
            const externalIcon = divIcon({
              className: 'gacis-service-port-container connection-only',
              html: `
                <button
                  type="button"
                  class="service-port-pin is-external-destination"
                  aria-label="Service destination ${connection}"
                  title="${connection}"
                >
                  <span class="service-port-pulse"></span>
                  <span class="service-port-core"></span>
                  <span class="service-port-label">
                    <span>•</span><span>${connection}</span>
                  </span>
                </button>
              `,
              iconSize: [14, 14],
              iconAnchor: [7, 7]
            });

            const externalMarker = createMarker(destinationCoords, {
              icon: externalIcon,
              zIndexOffset: 850
            }).addTo(map);

            externalMarker.on('click', () => {
              const matching = servicePortNetwork
                .flatMap(country => country.ports.map(port => ({ ...port, country: country.country, countryId: country.id, flag: country.flag })))
                .find(port => resolveServicePortName(port.name) === canonical);

              if (matching) {
                onSelectServicePort && onSelectServicePort(matching);
              }
            });

            connectionMarkersRef.current[`${connection}-${index}`] = externalMarker;
          }
        });
      }
    }

    // 5. Update Sea Domain Markers
    maritimeSeaDomains.forEach((sea) => {
      const marker = seaMarkersRef.current[sea.id];
      if (!marker) return;

      const isSeaActive = activeSeaDomain?.id === sea.id;
      const isVisibleInMode = viewMode === 'seas';

      const updatedSeaIcon = divIcon({
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

  }, [activeHub, activeSeaDomain, activeServicePort, servicePortNetwork, viewMode, selectedLaneFilter, hoveredLaneId, onSelectServicePort]);

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

  // Smooth flyTo when a service port is selected.
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !activeServicePort?.name || viewMode !== 'hubs') return;
    if (!hasInitializedServicePortRef.current) {
      hasInitializedServicePortRef.current = true;
      return;
    }

    const coords = SERVICE_PORT_COORDS[activeServicePort.name];
    if (!coords) return;

    map.flyTo(coords, 4.6, {
      duration: 1.1,
      easeLinearity: 0.25
    });
  }, [activeServicePort, viewMode]);

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