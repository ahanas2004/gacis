import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import { primaryHubs } from '../../data/locations';
import './RealGeographicMap.css';

// Calculate curved great-circle arc points between two coordinates
const getCurvedArcPoints = (start, end, numPoints = 40) => {
  const points = [];
  const startLat = start.lat;
  const startLng = start.lng;
  const endLat = end.lat;
  const endLng = end.lng;

  // Calculate midpoint with curved offset
  const midLat = (startLat + endLat) / 2;
  const midLng = (startLng + endLng) / 2;
  
  // Calculate distance for curvature height
  const dLat = endLat - startLat;
  const dLng = endLng - startLng;
  const dist = Math.sqrt(dLat * dLat + dLng * dLng);
  const curvature = Math.min(dist * 0.18, 6.5);

  // Perpendicular curve vector
  const offsetLat = midLat + (dLng > 0 ? curvature : -curvature);
  const offsetLng = midLng;

  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints;
    // Quadratic Bezier interpolation in lat/lng space
    const lat = (1 - t) * (1 - t) * startLat + 2 * (1 - t) * t * offsetLat + t * t * endLat;
    const lng = (1 - t) * (1 - t) * startLng + 2 * (1 - t) * t * offsetLng + t * t * endLng;
    points.push([lat, lng]);
  }
  return points;
};

// Hub Connections Definition
const hubRoutes = [
  { from: 'uae-hq', to: 'europe-frankfurt', mode: 'AIR/RAIL', name: 'Dubai ⇄ Frankfurt' },
  { from: 'uae-hq', to: 'cis-almaty', mode: 'RAIL/SEA', name: 'Dubai ⇄ Almaty Silk Corridor' },
  { from: 'uae-hq', to: 'india-hub', mode: 'SEA/AIR', name: 'Dubai ⇄ Chennai' },
  { from: 'uae-hq', to: 'srilanka-gateway', mode: 'OCEAN', name: 'Dubai ⇄ Colombo' },
  { from: 'india-hub', to: 'malaysia-hub', mode: 'FEEDER', name: 'Chennai ⇄ Port Klang' },
  { from: 'srilanka-gateway', to: 'malaysia-hub', mode: 'DEEPSEA', name: 'Colombo ⇄ Port Klang' }
];

export const RealGeographicMap = ({ activeHub, onSelectHub }) => {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markersRef = useRef({});
  const polylineLayersRef = useRef([]);

  // Map Default Initial Viewport (Middle East / Eurasia context)
  const initialCenter = [27.0, 58.0];
  const initialZoom = window.innerWidth < 768 ? 2.5 : 3.2;

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Network geographic boundary spanning Frankfurt to Klang / Almaty to Colombo
    const networkBounds = [
      [1.5, 4.0],   // SW: South of Klang/Colombo, West of Frankfurt
      [52.5, 104.0] // NE: North of Frankfurt/Almaty, East of Klang
    ];

    // Initialize Leaflet Map
    const map = L.map(mapContainerRef.current, {
      center: [28.0, 54.0],
      zoom: window.innerWidth < 768 ? 2.2 : 3.0,
      minZoom: 2.0,
      maxZoom: 7,
      zoomControl: false,
      attributionControl: false,
      scrollWheelZoom: true,
      maxBounds: [
        [-30, -30],
        [75, 145]
      ]
    });

    mapInstanceRef.current = map;

    // High-Resolution Dark Cartographic Tiles (CartoDB Dark Matter)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(map);

    // Initial frame to fit all 6 hubs perfectly with padding
    map.fitBounds(networkBounds, {
      padding: window.innerWidth < 768 ? [20, 20] : [36, 36],
      maxZoom: 4
    });

    // Create Hub Markers
    primaryHubs.forEach((hub) => {
      const isDubai = hub.id === 'uae-hq';
      
      const customIcon = L.divIcon({
        className: 'gacis-geo-marker-wrapper',
        html: `
          <div class="gacis-marker-node ${isDubai ? 'is-dubai-hq' : ''} ${activeHub.id === hub.id ? 'is-selected' : ''}">
            <div class="node-halo-pulse"></div>
            <div class="node-center-core"></div>
            <span class="node-city-title">${hub.city}</span>
          </div>
        `,
        iconSize: [80, 40],
        iconAnchor: [40, 20]
      });

      const marker = L.marker([hub.geo.lat, hub.geo.lng], { icon: customIcon }).addTo(map);

      marker.on('click', () => {
        onSelectHub(hub);
      });

      markersRef.current[hub.id] = marker;
    });

    // Cleanup on unmount
    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  // Update Route Polylines when activeHub changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Remove existing polylines
    polylineLayersRef.current.forEach(layer => map.removeLayer(layer));
    polylineLayersRef.current = [];

    // Draw Great-Arc Curved Corridors
    hubRoutes.forEach((route) => {
      const startHub = primaryHubs.find(h => h.id === route.from);
      const endHub = primaryHubs.find(h => h.id === route.to);

      if (!startHub || !endHub) return;

      const isConnected = activeHub.id === route.from || activeHub.id === route.to;
      const arcPoints = getCurvedArcPoints(startHub.geo, endHub.geo);

      // Base Glow Track Polyline
      const glowPolyline = L.polyline(arcPoints, {
        color: isConnected ? '#c8202f' : 'rgba(212, 168, 67, 0.35)',
        weight: isConnected ? 4 : 2,
        opacity: isConnected ? 0.9 : 0.35,
        className: isConnected ? 'geo-corridor-active' : 'geo-corridor-subtle',
        lineCap: 'round'
      }).addTo(map);

      // Animated Flowing Dashed Polyline
      const flowPolyline = L.polyline(arcPoints, {
        color: isConnected ? '#ffd700' : '#ffffff',
        weight: isConnected ? 2.5 : 1.5,
        opacity: isConnected ? 1 : 0.4,
        dashArray: isConnected ? '8, 8' : '4, 8',
        className: isConnected ? 'geo-flow-animated' : 'geo-flow-subtle',
        lineCap: 'round'
      }).addTo(map);

      polylineLayersRef.current.push(glowPolyline, flowPolyline);
    });

    // Update marker active styles
    primaryHubs.forEach((hub) => {
      const marker = markersRef.current[hub.id];
      if (marker) {
        const isDubai = hub.id === 'uae-hq';
        const isSelected = activeHub.id === hub.id;
        
        const updatedIcon = L.divIcon({
          className: 'gacis-geo-marker-wrapper',
          html: `
            <div class="gacis-marker-node ${isDubai ? 'is-dubai-hq' : ''} ${isSelected ? 'is-selected' : ''}">
              <div class="node-halo-pulse"></div>
              <div class="node-center-core"></div>
              <span class="node-city-title">${hub.city}</span>
            </div>
          `,
          iconSize: [80, 40],
          iconAnchor: [40, 20]
        });

        marker.setIcon(updatedIcon);
      }
    });

  }, [activeHub]);

  // Smooth flyTo / pan when activeHub changes
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !activeHub) return;

    map.flyTo([activeHub.geo.lat, activeHub.geo.lng], map.getZoom(), {
      duration: 1.1,
      easeLinearity: 0.25
    });
  }, [activeHub]);

  // Zoom controls
  const handleZoomIn = () => mapInstanceRef.current?.zoomIn();
  const handleZoomOut = () => mapInstanceRef.current?.zoomOut();
  const handleResetView = () => {
    const networkBounds = [
      [1.5, 4.0],
      [52.5, 104.0]
    ];
    mapInstanceRef.current?.fitBounds(networkBounds, {
      padding: window.innerWidth < 768 ? [20, 20] : [36, 36],
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
        <span>REAL-WORLD CARTOGRAPHIC TOPOLOGY</span>
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
          aria-label="Reset View"
          title="Reset View"
        >
          <RotateCcw size={14} />
        </button>
      </div>
    </div>
  );
};

export default RealGeographicMap;
