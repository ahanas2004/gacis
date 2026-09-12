import { useState, useEffect } from 'react';
import { Activity, ArrowRight, Ship, Plane, Train, Globe2, Anchor, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import './HeroNetworkAnimation.css';

// 7 Dedicated Multimodal Trade Corridors (Export & Import) with Indian Subcontinent Gateways
export const corridorRoutes = [
  // ─── EXPORT CORRIDORS ───
  {
    id: 'export-ind-fareast-mideast',
    tradeType: 'EXPORT',
    name: 'Indian Subcontinent ⇄ Far East Asia ⇄ Mid East Asia',
    category: 'Asia & Middle East Maritime Corridor',
    mode: 'Multimodal Sea-Air & Linehaul',
    modeIcon: Ship,
    indianGateways: [
      { name: 'Bombay (JNPT)', type: 'sea', label: '⚓ Bombay (JNPT)' },
      { name: 'Chennai Port', type: 'sea', label: '⚓ Chennai' },
      { name: 'Visakhapatnam', type: 'rail', label: '🚆 Vizag Rail' },
      { name: 'Mundra Mega Port', type: 'sea', label: '⚓ Mundra' },
      { name: 'Mumbai Air Hub', type: 'air', label: '✈️ BOM Air' }
    ],
    ports: [
      { name: 'BOMBAY / JNPT (BOM)', code: 'BOM', typeBadge: 'SEA / RAIL', role: 'Premier West Coast Container Gateway & Railhead', status: 'Export Customs Cleared & Vessel Berth Confirmed', x: 60, y: 135, labelY: 26 },
      { name: 'CHENNAI PORT (MAA)', code: 'MAA', typeBadge: 'SEA HUB', role: 'Coromandel Coast Direct Export Gateway', status: 'Container Staged & Feeder Synchronized', x: 190, y: 80, labelY: -16 },
      { name: 'SHANGHAI PORT (SHA)', code: 'SHA', typeBadge: 'FAR EAST', role: 'Far East Asia Mega Transshipment Hub', status: 'Transshipment & Crane Allocation Active', x: 320, y: 65, labelY: 24 },
      { name: 'JEBEL ALI / DUBAI (DXB)', code: 'DXB', typeBadge: 'MID EAST', role: 'Mid East Central Distribution Hub', status: 'Inbound Discharge & Gulf Regional Forwarding', x: 400, y: 40, labelY: -16 }
    ]
  },
  {
    id: 'export-mideast-africa-americas',
    tradeType: 'EXPORT',
    name: 'Mid East Asia ⇄ East & South Africa ⇄ South & North America',
    category: 'Trans-Oceanic Intercontinental Seaway',
    mode: 'Ocean Container Linehaul & Rail',
    modeIcon: Ship,
    indianGateways: [
      { name: 'Mundra Port', type: 'sea', label: '⚓ Mundra Port' },
      { name: 'Bombay (JNPT)', type: 'sea', label: '⚓ Bombay (JNPT)' },
      { name: 'Cochin Vallarpadam', type: 'sea', label: '⚓ Cochin ICTT' },
      { name: 'Hazira Terminal', type: 'rail', label: '🚆 Hazira Rail' }
    ],
    ports: [
      { name: 'JEBEL ALI (DXB)', code: 'DXB', typeBadge: 'MID EAST', role: 'Arabian Gulf Transshipment Hub', status: 'Export Manifest Cleared & Vessel Cast-off', x: 60, y: 135, labelY: 26 },
      { name: 'MOMBASA (MBA)', code: 'MBA', typeBadge: 'E. AFRICA', role: 'East Africa Gateway & Northern Corridor Rail', status: 'Feeder Transfer & Customs Transit Cleared', x: 190, y: 80, labelY: -16 },
      { name: 'DURBAN (DUR)', code: 'DUR', typeBadge: 'S. AFRICA', role: 'Southern Africa Linehaul Hub', status: 'Intermodal Rail Connection Confirmed', x: 320, y: 65, labelY: 24 },
      { name: 'SANTOS / NY (SSZ/NYC)', code: 'NYC', typeBadge: 'AMERICAS', role: 'Pan-American Inbound Seaboard Hub', status: 'Direct Berth Inward Handshake Complete', x: 400, y: 40, labelY: -16 }
    ]
  },
  {
    id: 'export-africa-ind-fareast',
    tradeType: 'EXPORT',
    name: 'Africa ⇄ Indian Subcontinent ⇄ Far East Asia',
    category: 'Indo-Pacific Multimodal Highway',
    mode: 'Sea-Rail-Air Multimodal String',
    modeIcon: Ship,
    indianGateways: [
      { name: 'Visakhapatnam', type: 'rail', label: '🚆 Vizag (Rail/Sea)' },
      { name: 'Cochin Vallarpadam', type: 'sea', label: '⚓ Cochin ICTT' },
      { name: 'Bombay (JNPT)', type: 'sea', label: '⚓ Bombay (JNPT)' },
      { name: 'Chennai Air Hub', type: 'air', label: '✈️ MAA Air' }
    ],
    ports: [
      { name: 'DJIBOUTI / DURBAN (JIB)', code: 'JIB', typeBadge: 'AFRICA', role: 'East African Export Marine Hub', status: 'Raw Material & Mineral Export Staging', x: 60, y: 135, labelY: 26 },
      { name: 'COCHIN ICTT (COK)', code: 'COK', typeBadge: 'IND HUB', role: 'Vallarpadam Deepwater Transshipment Hub', status: 'Direct Mother Vessel Connection Verified', x: 190, y: 80, labelY: -16 },
      { name: 'VISAKHAPATNAM (VTZ)', code: 'VTZ', typeBadge: 'IND HUB', role: 'Hinterland Rail & Bulk Cargo Gateway', status: 'Block Train Handoff & Vessel Load-in', x: 320, y: 65, labelY: 24 },
      { name: 'SINGAPORE (SIN)', code: 'SIN', typeBadge: 'FAR EAST', role: 'Far East Primary Transshipment Terminal', status: 'Final Stage Discharge & Regional Forwarding', x: 400, y: 40, labelY: -16 }
    ]
  },
  {
    id: 'export-ind-americas-eu',
    tradeType: 'EXPORT',
    name: 'Indian Subcontinent ⇄ South & North America ⇄ European Union',
    category: 'Transatlantic & Euro-American Loop',
    mode: 'Multimodal Express & Block Train',
    modeIcon: Ship,
    indianGateways: [
      { name: 'Mundra Mega Port', type: 'sea', label: '⚓ Mundra Port' },
      { name: 'Bombay (JNPT)', type: 'sea', label: '⚓ Bombay (JNPT)' },
      { name: 'Delhi NCR (TKD)', type: 'rail', label: '🚆 Delhi DFC Rail' },
      { name: 'Chennai Port', type: 'sea', label: '⚓ Chennai Port' }
    ],
    ports: [
      { name: 'MUNDRA PORT (MUN)', code: 'MUN', typeBadge: 'IND HUB', role: 'Northwest Deepwater Mega Container Port', status: 'Dedicated Freight Corridor Rail Inward Verified', x: 60, y: 135, labelY: 26 },
      { name: 'NEW YORK / NJ (NYC)', code: 'NYC', typeBadge: 'N. AMERICA', role: 'North America Commercial Gateway', status: 'Customs AMS Release & Intermodal Rail Dispatch', x: 190, y: 80, labelY: -16 },
      { name: 'SANTOS PORT (SSZ)', code: 'SSZ', typeBadge: 'S. AMERICA', role: 'South America Primary Seaport Terminal', status: 'Terminal Discharged & Bonded Transit Forwarding', x: 320, y: 65, labelY: 24 },
      { name: 'ROTTERDAM (RTM)', code: 'RTM', typeBadge: 'EU UNION', role: 'EU Gateway with Rhine Barge & Rail Net', status: 'Final Destination Handover Complete', x: 400, y: 40, labelY: -16 }
    ]
  },

  // ─── IMPORT CORRIDORS ───
  {
    id: 'import-seasia-fareast-ind',
    tradeType: 'IMPORT',
    name: 'South East Asia & Far East Asia ⇄ Indian Subcontinent',
    category: 'Direct Far East Inbound Seaway',
    mode: 'High-Speed Container Feeder Line',
    modeIcon: Ship,
    indianGateways: [
      { name: 'Chennai Port', type: 'sea', label: '⚓ Chennai Port' },
      { name: 'Visakhapatnam (Vizag)', type: 'rail', label: '🚆 Vizag Port' },
      { name: 'Kolkata / Haldia', type: 'sea', label: '⚓ Kolkata / Haldia' },
      { name: 'Bombay (JNPT)', type: 'sea', label: '⚓ Bombay (JNPT)' }
    ],
    ports: [
      { name: 'PORT KLANG / SIN (PKG)', code: 'PKG', typeBadge: 'SE ASIA', role: 'ASEAN Marine Container Hub', status: 'Inbound Vessel Loading & Cast-off Done', x: 60, y: 135, labelY: 26 },
      { name: 'SHANGHAI PORT (SHA)', code: 'SHA', typeBadge: 'FAR EAST', role: 'China Mega Container Port', status: 'Direct Linehaul Sailing in Progress', x: 190, y: 80, labelY: -16 },
      { name: 'CHENNAI PORT (MAA)', code: 'MAA', typeBadge: 'IND HUB', role: 'Direct Inward Customs Clearance Hub', status: 'Vessel Berthed & Container Discharge Active', x: 320, y: 65, labelY: 24 },
      { name: 'BOMBAY / JNPT (BOM)', code: 'BOM', typeBadge: 'IND HUB', role: 'Commercial Rail Depot & Delivery Terminal', status: 'Factory Door Handover Complete', x: 400, y: 40, labelY: -16 }
    ]
  },
  {
    id: 'import-eu-ind-seasia-fareast',
    tradeType: 'IMPORT',
    name: 'European Union ⇄ Indian Subcontinent ⇄ South East Asia & Far East Asia',
    category: 'Eurasian Trans-Continental String',
    mode: 'Sea-Air & Multimodal Intermodal',
    modeIcon: Ship,
    indianGateways: [
      { name: 'Bombay (JNPT)', type: 'sea', label: '⚓ Bombay (JNPT)' },
      { name: 'Mundra Port', type: 'sea', label: '⚓ Mundra Port' },
      { name: 'Delhi Air Cargo', type: 'air', label: '✈️ DEL Air Hub' },
      { name: 'Cochin Port', type: 'sea', label: '⚓ Cochin Port' }
    ],
    ports: [
      { name: 'HAMBURG / ANTWERP (HAM)', code: 'HAM', typeBadge: 'EU UNION', role: 'European Union Central Outward Gate', status: 'Heavy Cargo Inbound Lift & Stowing', x: 60, y: 135, labelY: 26 },
      { name: 'BOMBAY / JNPT (BOM)', code: 'BOM', typeBadge: 'IND HUB', role: 'National Capital Logistics Railhead', status: 'Bonded Warehouse & Feeder Transfer Active', x: 190, y: 80, labelY: -16 },
      { name: 'SINGAPORE (SIN)', code: 'SIN', typeBadge: 'SE ASIA', role: 'Strait Transshipment & Distribution Center', status: 'Linehaul Connection Confirmed', x: 320, y: 65, labelY: 24 },
      { name: 'TOKYO / BUSAN (TYO)', code: 'TYO', typeBadge: 'FAR EAST', role: 'North Pacific Destination Terminals', status: 'Final Consignee Delivery Handshake', x: 400, y: 40, labelY: -16 }
    ]
  },
  {
    id: 'import-americas-ind',
    tradeType: 'IMPORT',
    name: 'South & North America ⇄ Indian Subcontinent',
    category: 'Pan-American Direct Inbound Seaway',
    mode: 'Ocean Container Express & Rail',
    modeIcon: Ship,
    indianGateways: [
      { name: 'Bombay (JNPT)', type: 'sea', label: '⚓ Bombay (JNPT)' },
      { name: 'Mundra Mega Port', type: 'sea', label: '⚓ Mundra Port' },
      { name: 'Visakhapatnam', type: 'rail', label: '🚆 Vizag Rail' },
      { name: 'Chennai Port', type: 'sea', label: '⚓ Chennai Port' }
    ],
    ports: [
      { name: 'HOUSTON / LA (HOU)', code: 'HOU', typeBadge: 'N. AMERICA', role: 'Gulf & Pacific Coast Export Staging', status: 'FCL Cargo Container Sealed & Loaded', x: 60, y: 135, labelY: 26 },
      { name: 'SANTOS PORT (SSZ)', code: 'SSZ', typeBadge: 'S. AMERICA', role: 'Latin America Principal Export Marine Gate', status: 'Ocean Transit Navigating Atlantic String', x: 190, y: 80, labelY: -16 },
      { name: 'MUNDRA PORT (MUN)', code: 'MUN', typeBadge: 'IND HUB', role: 'Direct Inward Customs Examination Gate', status: 'Customs Out-of-Charge & Rail Block Loading', x: 320, y: 65, labelY: 24 },
      { name: 'BOMBAY / JNPT (BOM)', code: 'BOM', typeBadge: 'IND HUB', role: 'Premier National Gateway CFS Terminal', status: 'Final Delivery & Container De-stuffing', x: 400, y: 40, labelY: -16 }
    ]
  }
];

export const HeroNetworkAnimation = () => {
  const [routeIndex, setRouteIndex] = useState(0);
  const [portIndex, setPortIndex] = useState(0);

  // Exact 1.5 Second interval: cycles through all 4 ports smoothly
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
  const isExport = currentRoute.tradeType === 'EXPORT';

  return (
    <div className="hero-network-console">
      {/* ── Console Header Bar ── */}
      <div className="hnc-top-bar">
        <div className="hnc-title-row">
          <span className="live-radar-dot"></span>
          <span className="hnc-system-title">GACIS MULTIMODAL ROUTE MONITOR</span>
        </div>
        <div className="hnc-top-right-group">
          <span className={`trade-top-tag ${isExport ? 'tag-export' : 'tag-import'}`}>
            {isExport ? <ArrowUpRight size={12} className="tag-arrow" /> : <ArrowDownLeft size={12} className="tag-arrow" />}
            {currentRoute.tradeType}
          </span>
          <div className="hnc-status-badge">
            <Activity size={13} className="pulse-icon" />
            <span>PORT CYCLE: 1.5s</span>
          </div>
        </div>
      </div>

      {/* ── Visualizer SVG Canvas ── */}
      <div className="hnc-visualizer-canvas">
        <svg viewBox="0 0 460 175" className="hnc-svg" aria-label="GACIS Global Trade Corridor Network Diagram">
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
          <line x1="20" y1="90" x2="440" y2="90" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
          <line x1="20" y1="45" x2="440" y2="45" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
          <line x1="20" y1="135" x2="440" y2="135" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />

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

      {/* ── Clear, High-Legibility Telemetry Grid ── */}
      <div className="hnc-telemetry-panel">
        
        {/* Active Hub Card */}
        <div className="hnc-hub-card">
          <div className="hub-card-header">
            <span className="hub-step-label">ACTIVE HUB ({portIndex + 1}/4)</span>
            <span className="hub-badge">{activePort.typeBadge}</span>
          </div>
          <div className="hub-name-row">
            <span className="hub-title text-gold">{activePort.name}</span>
          </div>
          <div className="hub-role-text">{activePort.role}</div>
          <div className="hub-status-row">
            <span className="status-live-dot"></span>
            <span className="hub-status-text">{activePort.status}</span>
          </div>
        </div>

        {/* Indian Subcontinent Infrastructure & Route Gateways */}
        <div className="hnc-route-card">
          <div className="route-card-header">
            <span className="route-type-badge">{currentRoute.tradeType}</span>
            <span className="route-corridor-title">{currentRoute.name}</span>
          </div>
          
          <div className="indian-ports-section">
            <span className="indian-ports-label">INDIAN SUBCONTINENT ACTIVE HUBS & ROUTES:</span>
            <div className="indian-ports-pills">
              {currentRoute.indianGateways.map((gateway, gIdx) => (
                <span key={gIdx} className={`indian-port-pill pill-${gateway.type}`}>
                  {gateway.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Live Stage Stepper & Controls ── */}
      <div className="hnc-stage-strip">
        <div className="hss-header">
          <span className="hss-step">
            CORRIDOR {routeIndex + 1} OF {corridorRoutes.length}: [{currentRoute.tradeType}] {currentRoute.category}
          </span>
          <span className="hss-mode-badge">{currentRoute.mode}</span>
        </div>

        {/* 4-Step Port Sequence Cards */}
        <div className="hss-port-cards-row">
          {currentRoute.ports.map((p, i) => (
            <div 
              key={`${p.code}-${i}`} 
              className={`hss-port-card-item ${i === portIndex ? 'is-current' : i < portIndex ? 'is-past' : ''}`}
              title={`${p.name} — ${p.role}`}
            >
              <div className="hpc-top">
                <span className="hss-step-dot"></span>
                <span className="hss-step-code">{p.code}</span>
              </div>
              <span className="hss-step-name">{p.name.split(' (')[0].split(' /')[0]}</span>
            </div>
          ))}
        </div>

        {/* Corridor Switcher Indicators */}
        <div className="hss-route-pills">
          {corridorRoutes.map((route, idx) => (
            <button
              key={route.id}
              type="button"
              className={`hss-pill ${routeIndex === idx ? 'is-active' : ''} ${route.tradeType === 'EXPORT' ? 'pill-export' : 'pill-import'}`}
              onClick={() => {
                setRouteIndex(idx);
                setPortIndex(0);
              }}
              aria-label={`Switch to ${route.tradeType}: ${route.name}`}
              title={`[${route.tradeType}] ${route.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroNetworkAnimation;
