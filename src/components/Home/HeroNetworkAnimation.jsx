import { useState, useEffect } from 'react';
import { Activity, ArrowRight, Plane, Ship, Train, Truck, CheckCircle2, Navigation, MapPin, Layers, Building2, Anchor } from 'lucide-react';
import './HeroNetworkAnimation.css';

// Multimodal Trade Corridors covering Air Cargo Hubs, Sea Ports, Rail Dry Ports, and Intermodal Terminals
const corridorRoutes = [
  {
    id: 'air-charter-express',
    name: 'Dubai ⇄ Frankfurt ⇄ Almaty',
    sub: 'Global Air Cargo Charter Corridor',
    leadTime: '36 HOURS',
    leadTimeSub: 'Priority Air Cargo',
    co2: 'Optimized Fuel Lift',
    mode: 'AIR CARGO EXPRESS',
    modeType: 'AIR',
    modeIcon: Plane,
    ports: [
      { name: 'DUBAI AIR (DXB)', code: 'DXB', type: 'AIR', typeBadge: 'AIR CARGO', role: 'Global Central Air Tower', status: 'Pallet Build & Security Cleared', x: 60, y: 135, labelY: 26 },
      { name: 'FRANKFURT (FRA)', code: 'FRA', type: 'AIR', typeBadge: 'AIR CARGO', role: 'European CargoCity Hub', status: 'Direct Transit Apron Transfer', x: 190, y: 80, labelY: -16 },
      { name: 'ALMATY AIR (ALA)', code: 'ALA', type: 'AIR', typeBadge: 'AIR CARGO', role: 'Central Asia Air Terminal', status: 'Customs Inward Released', x: 320, y: 65, labelY: 24 },
      { name: 'CHENNAI AIR (MAA)', code: 'MAA', type: 'AIR', typeBadge: 'AIR CARGO', role: 'South Asia Gateway Hub', status: 'Priority Delivery Scheduled', x: 400, y: 40, labelY: -16 }
    ]
  },
  {
    id: 'transcaspian-sea-rail',
    name: 'Dubai ⇄ Aktau ⇄ Almaty',
    sub: 'Trans-Caspian Sea-Rail Belt',
    leadTime: '8.4 DAYS',
    leadTimeSub: '-50% vs Conventional Sea',
    co2: '-38.5% CO₂e',
    mode: 'SEA-RAIL MULTIMODAL',
    modeType: 'RAIL/SEA',
    modeIcon: Train,
    ports: [
      { name: 'JEBEL ALI (DXB)', code: 'DXB', type: 'SEA', typeBadge: 'SEA PORT', role: 'Ocean Consolidation Hub', status: 'Container Loaded & Sealed', x: 60, y: 135, labelY: 26 },
      { name: 'AKTAU CASPIAN', code: 'SCO', type: 'SEA', typeBadge: 'SEA PORT', role: 'Caspian Sea-Rail Ferry Port', status: 'Vessel-to-Rail Handoff', x: 190, y: 80, labelY: -16 },
      { name: 'TASHKENT RAIL (TAS)', code: 'TAS', type: 'RAIL', typeBadge: 'RAIL HUB', role: '1520mm Gauge Railhead', status: 'Customs Pre-Cleared Block Train', x: 320, y: 65, labelY: 24 },
      { name: 'ALMATY DRY PORT', code: 'ALA', type: 'DRY PORT', typeBadge: 'DRY PORT', role: 'Inland Logistics Terminal', status: 'DDP Release & Distribution', x: 400, y: 40, labelY: -16 }
    ]
  },
  {
    id: 'chennai-almaty-hybrid',
    name: 'Chennai ⇄ Colombo ⇄ Almaty',
    sub: 'South Asia · Gulf · CIS Axis',
    leadTime: '11.4 DAYS',
    leadTimeSub: '-62% vs Traditional Ocean',
    co2: '-42.0% CO₂e',
    mode: 'SEA-AIR HYBRID',
    modeType: 'SEA/AIR',
    modeIcon: Plane,
    ports: [
      { name: 'CHENNAI PORT (MAA)', code: 'MAA', type: 'SEA', typeBadge: 'HQ PORT', role: 'Corporate HQ Inward Gate', status: 'Factory Gate-In Verified', x: 60, y: 135, labelY: 26 },
      { name: 'COLOMBO PORT (CMB)', code: 'CMB', type: 'SEA', typeBadge: 'SEA PORT', role: 'Deepwater Transshipment', status: 'Feeder Sync & Slot Confirmed', x: 190, y: 80, labelY: -16 },
      { name: 'DUBAI DWC AIR', code: 'DWC', type: 'AIR', typeBadge: 'AIR HUB', role: 'Air Logistics City Gateway', status: 'Air-Sea Cross-Docked', x: 320, y: 65, labelY: 24 },
      { name: 'ALMATY DRY PORT', code: 'ALA', type: 'DRY PORT', typeBadge: 'DRY PORT', role: 'Inland Customs Bonded CFS', status: 'Bonded Warehouse Discharge', x: 400, y: 40, labelY: -16 }
    ]
  },
  {
    id: 'silkroad-block-train',
    name: 'Shanghai ⇄ Khorgos ⇄ Tashkent',
    sub: 'Eurasian Trans-Silk Rail Corridor',
    leadTime: '6.5 DAYS',
    leadTimeSub: '-70% vs All-Water Ocean',
    co2: '-48.0% CO₂e',
    mode: 'EURASIAN BLOCK TRAIN',
    modeType: 'RAIL',
    modeIcon: Train,
    ports: [
      { name: 'SHANGHAI PORT (PVG)', code: 'PVG', type: 'SEA', typeBadge: 'SEA PORT', role: 'East Asia Marine Terminal', status: 'Container Manifest Dispatched', x: 60, y: 135, labelY: 26 },
      { name: 'YIWU TERMINAL', code: 'YIW', type: 'RAIL', typeBadge: 'RAIL HEAD', role: 'Block Train Staging Railhead', status: 'Full 50-Wagon Block Formed', x: 190, y: 80, labelY: -16 },
      { name: 'KHORGOS DRY PORT', code: 'KHG', type: 'DRY PORT', typeBadge: 'DRY PORT', role: 'Silk Road Bogie Exchange', status: 'Broad-Gauge Transshipment Done', x: 320, y: 65, labelY: 24 },
      { name: 'TASHKENT RAIL (TAS)', code: 'TAS', type: 'RAIL', typeBadge: 'RAIL HUB', role: 'Inland Railway Hub Depot', status: 'Consignee Delivery Handshake', x: 400, y: 40, labelY: -16 }
    ]
  },
  {
    id: 'west-india-central-asia',
    name: 'Mundra ⇄ Dubai ⇄ Tashkent',
    sub: 'India ⇄ Gulf ⇄ Central Asia Axis',
    leadTime: '9.2 DAYS',
    leadTimeSub: '-58% vs Ocean Alternative',
    co2: '-35.4% CO₂e',
    mode: 'MULTIMODAL EXPRESS',
    modeType: 'MULTIMODAL',
    modeIcon: Ship,
    ports: [
      { name: 'MUNDRA PORT (MUN)', code: 'MUN', type: 'SEA', typeBadge: 'SEA PORT', role: 'West Coast Deepwater Port', status: 'Container Gate-In & VGM Cleared', x: 60, y: 135, labelY: 26 },
      { name: 'JEBEL ALI (DXB)', code: 'DXB', type: 'SEA', typeBadge: 'SEA PORT', role: 'Gulf Intermodal Hub', status: 'Transit Bond & Handoff Active', x: 190, y: 80, labelY: -16 },
      { name: 'AKTAU CASPIAN', code: 'SCO', type: 'SEA', typeBadge: 'FERRY HUB', role: 'Caspian Railhead Gateway', status: 'Wagon Transfer In Progress', x: 320, y: 65, labelY: 24 },
      { name: 'TASHKENT RAIL (TAS)', code: 'TAS', type: 'RAIL', typeBadge: 'RAIL HUB', role: 'Eurasian Inland Railhead', status: 'Final Destination Arrival', x: 400, y: 40, labelY: -16 }
    ]
  },
  {
    id: 'asean-gulf-ocean',
    name: 'Port Klang ⇄ Singapore ⇄ Dubai',
    sub: 'Southeast Asia ⇄ Gulf Maritime Seaway',
    leadTime: '8.0 DAYS',
    leadTimeSub: 'Scheduled Feeder String',
    co2: '-31.2% CO₂e',
    mode: 'OCEAN CONTAINER FCL',
    modeType: 'SEA',
    modeIcon: Ship,
    ports: [
      { name: 'PORT KLANG (PKG)', code: 'PKG', type: 'SEA', typeBadge: 'SEA PORT', role: 'ASEAN Marine Container Hub', status: 'Vessel Berth & Crane Loaded', x: 60, y: 135, labelY: 26 },
      { name: 'SINGAPORE AIR (SIN)', code: 'SIN', type: 'AIR', typeBadge: 'AIR/SEA', role: 'Strait Intermodal Airport Hub', status: 'High-Speed Air/Sea Transfer', x: 190, y: 80, labelY: -16 },
      { name: 'COLOMBO PORT (CMB)', code: 'CMB', type: 'SEA', typeBadge: 'SEA PORT', role: 'Indian Ocean Transshipment', status: 'Trans-Ocean Navigation Verified', x: 320, y: 65, labelY: 24 },
      { name: 'DUBAI PORT (DXB)', code: 'DXB', type: 'SEA', typeBadge: 'SEA PORT', role: 'Gulf Destination Hub CFS', status: 'Immediate Container Discharge', x: 400, y: 40, labelY: -16 }
    ]
  }
];

export const HeroNetworkAnimation = () => {
  const [routeIndex, setRouteIndex] = useState(0);
  const [portIndex, setPortIndex] = useState(0);

  // Exact 1.5 Second interval: cycles through all ports (Air, Train/Rail, Sea, Dry Ports) smoothly
  useEffect(() => {
    const timer = setInterval(() => {
      setPortIndex((prevPort) => {
        if (prevPort < 3) {
          return prevPort + 1; // Advance to next port along the active route
        } else {
          // Reached end of 4 ports -> cycle to next trade corridor and restart at port 0
          setRouteIndex((prevRoute) => (prevRoute + 1) % corridorRoutes.length);
          return 0;
        }
      });
    }, 1500); // 1.5s per port change

    return () => clearInterval(timer);
  }, []);

  const currentRoute = corridorRoutes[routeIndex];
  const activePort = currentRoute.ports[portIndex];
  const ModeIcon = currentRoute.modeIcon || Ship;

  return (
    <div className="hero-network-console">
      {/* Console Top Bar */}
      <div className="hnc-top-bar">
        <div className="hnc-title-row">
          <span className="live-radar-dot"></span>
          <span className="hnc-system-title">GACIS MULTIMODAL ROUTE MONITOR</span>
        </div>
        <div className="hnc-status-badge">
          <Activity size={14} className="pulse-icon" />
          <span>PORT CYCLE: 1.5s</span>
        </div>
      </div>

      {/* Interactive Vector Network Visualizer */}
      <div className="hnc-visualizer-canvas">
        <svg viewBox="0 0 460 190" className="hnc-svg" aria-label="Dubai to Almaty Multimodal Corridor Diagram">
          <defs>
            <linearGradient id="corridorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#68151d" />
              <stop offset="50%" stopColor="#c8202f" />
              <stop offset="100%" stopColor="#d4a843" />
            </linearGradient>

            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Grid Lines */}
          <line x1="20" y1="95" x2="440" y2="95" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
          <line x1="20" y1="50" x2="440" y2="50" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
          <line x1="20" y1="140" x2="440" y2="140" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />

          {/* Static Track Guide */}
          <path
            d="M 60,135 C 120,135 140,80 190,80 C 240,80 280,125 320,65 C 345,30 375,40 400,40"
            fill="none"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="3"
            strokeDasharray="5 5"
          />

          {/* Active Flow Line with gradient */}
          <path
            d="M 60,135 C 120,135 140,80 190,80 C 240,80 280,125 320,65 C 345,30 375,40 400,40"
            fill="none"
            stroke="url(#corridorGrad)"
            strokeWidth="4"
            className="corridor-flow-path"
          />

          {/* 4 Port Nodes along the curve */}
          {currentRoute.ports.map((port, idx) => {
            const isActive = idx === portIndex;
            const isCompleted = idx < portIndex;

            return (
              <g 
                key={`${currentRoute.id}-${port.code}-${idx}`} 
                transform={`translate(${port.x}, ${port.y})`} 
                className={`map-node ${isActive ? 'is-active-port' : isCompleted ? 'is-completed-port' : 'is-pending-port'}`}
              >
                {/* Pulsing Beacon Ring on Active Port */}
                {isActive && (
                  <>
                    <circle r="18" fill="none" stroke="#d4a843" className="active-port-ping" />
                    <circle r="12" fill="none" stroke="#c8202f" opacity="0.7" />
                  </>
                )}

                {/* Node Center Circle */}
                <circle 
                  r={isActive ? 8 : 6.5} 
                  fill={isActive ? '#d4a843' : isCompleted ? '#22c55e' : '#68151d'} 
                  stroke="#ffffff" 
                  strokeWidth={isActive ? 2.5 : 1.5}
                />
                <circle r={isActive ? 3.2 : 2.2} fill="#ffffff" />

                {/* Port Label */}
                <text 
                  x="0" 
                  y={port.labelY} 
                  textAnchor="middle" 
                  className={`node-label ${isActive ? 'label-active' : ''}`}
                >
                  {port.name}
                </text>
              </g>
            );
          })}

          {/* Smooth Traveling Cargo Particle linked directly to active port coordinate */}
          <g 
            transform={`translate(${activePort.x}, ${activePort.y})`}
            className="traveling-beacon-particle"
          >
            <circle r="12" fill="#d4a843" opacity="0.4" filter="url(#glow)" />
            <circle r="5.5" fill="#ffffff" filter="url(#glow)" />
          </g>
        </svg>
      </div>

      {/* Corridor & Active Port Telemetry Grid */}
      <div className="hnc-data-grid">
        <div className="hnc-data-cell">
          <span className="hdc-label">ACTIVE HUB ({portIndex + 1}/4)</span>
          <div className="hdc-port-title-wrap">
            <span className="hdc-val primary-corridor text-gold font-mono-val">{activePort.name}</span>
            <span className="port-type-tag">{activePort.typeBadge}</span>
          </div>
          <span className="hdc-sub">{activePort.role}</span>
        </div>

        <div className="hnc-data-cell">
          <span className="hdc-label">MULTIMODAL CORRIDOR</span>
          <span className="hdc-val">{currentRoute.name}</span>
          <span className="hdc-sub">{currentRoute.sub}</span>
        </div>

        <div className="hnc-data-cell">
          <span className="hdc-label">TRANSIT & CARBON</span>
          <span className="hdc-val stat-value">{currentRoute.leadTime}</span>
          <span className="hdc-sub text-success">{currentRoute.co2}</span>
        </div>

        <div className="hnc-data-cell">
          <span className="hdc-label">PORT TELEMETRY</span>
          <span className="hdc-val text-success">{activePort.status}</span>
          <span className="hdc-sub">{currentRoute.mode}</span>
        </div>
      </div>

      {/* Live Stage Tracker Strip */}
      <div className="hnc-stage-strip">
        <div className="hss-header">
          <span className="hss-step">
            <ModeIcon size={14} className="inline-icon" /> CORRIDOR {routeIndex + 1} OF {corridorRoutes.length}: {currentRoute.mode}
          </span>
          <span className="hss-status">{activePort.status}</span>
        </div>

        {/* 4-Step Port Sequence in 2x2 Grid Layout */}
        <div className="hss-leg-stepper-2x2">
          {currentRoute.ports.map((p, i) => (
            <div 
              key={p.code} 
              className={`hss-port-card-2x2 ${i === portIndex ? 'is-current' : i < portIndex ? 'is-past' : ''}`}
              title={`${p.name} — ${p.role}`}
            >
              <div className="hpc-left">
                <span className="hss-step-dot"></span>
                <span className="hss-mode-prefix">[{p.typeBadge}]</span>
              </div>
              <div className="hpc-right">
                <span className="hss-step-code">{p.code}</span>
                <span className="hss-step-name">{p.name.split(' (')[0]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Corridor Selector Indicators */}
        <div className="hss-route-pills">
          {corridorRoutes.map((route, idx) => (
            <button
              key={route.id}
              type="button"
              className={`hss-pill ${routeIndex === idx ? 'is-active' : ''}`}
              onClick={() => {
                setRouteIndex(idx);
                setPortIndex(0);
              }}
              aria-label={`Switch to ${route.name}`}
              title={route.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroNetworkAnimation;
