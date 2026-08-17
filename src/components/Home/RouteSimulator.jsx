import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, RotateCcw, AlertTriangle, Compass, CheckCircle2, ChevronRight, Gauge, ShieldAlert, Cpu, Globe2 } from 'lucide-react';
import './RouteSimulator.css';

const routesData = {
  'dubai-almaty': {
    id: 'dubai-almaty',
    origin: 'Dubai',
    destination: 'Almaty',
    originFlag: '🇦🇪',
    destFlag: '🇰🇿',
    transitTime: 8.4,
    carbonSavings: 31.8,
    budgetIndex: 72,
    reliability: 98.2,
    optCO2: 1.82,
    convCO2: 2.67,
    avoidedCO2: 0.85,
    handlingPoints: '04',
    strategy: 'Multimodal rail integration reduces transit volatility while lowering estimated emissions by 31.8%. Recommended for high-value machinery, industrial supplies, and automotive components.',
    sequence: [
      { loc: 'Dubai HQ (Jebel Ali)', mode: 'ORIGIN', details: 'Consolidation & Export Clearance' },
      { loc: 'Mumbai Terminal', mode: 'SEA', details: 'Fast FCL Ocean Transit (2.4 Days)' },
      { loc: 'Tashkent Port', mode: 'RAIL', details: 'Trans-Caspian Intermodal Corridor' },
      { loc: 'Almaty Hub', mode: 'ROAD', details: 'Final Mile Delivery & Delivery Duty Paid' }
    ],
    nodes: [
      { name: 'Dubai', x: 575, y: 245 },
      { name: 'Mumbai', x: 670, y: 270 },
      { name: 'Tashkent', x: 650, y: 190 },
      { name: 'Almaty', x: 660, y: 175 }
    ]
  },
  'klang-london': {
    id: 'klang-london',
    origin: 'Klang',
    destination: 'London',
    originFlag: '🇲🇾',
    destFlag: '🇬🇧',
    transitTime: 22.5,
    carbonSavings: 44.2,
    budgetIndex: 45,
    reliability: 95.5,
    optCO2: 4.12,
    convCO2: 7.38,
    avoidedCO2: 3.26,
    handlingPoints: '06',
    strategy: 'Integrated Sea-Air corridor via Colombo Port and Dubai Hub minimizes ocean port bottlenecks while cutting conventional pure-air cargo carbon footprints by over 44%.',
    sequence: [
      { loc: 'Port Klang', mode: 'ORIGIN', details: 'Container Loading & Customs' },
      { loc: 'Colombo Hub', mode: 'SEA', details: 'LCL Ocean consolidation' },
      { loc: 'Dubai Airport (DWC)', mode: 'AIR', details: 'High-speed Cross-docking to Air Cargo' },
      { loc: 'London Heathrow (LHR)', mode: 'ROAD', details: 'Direct-to-Warehouse Logistics' }
    ],
    nodes: [
      { name: 'Klang', x: 775, y: 315 },
      { name: 'Colombo', x: 695, y: 320 },
      { name: 'Dubai', x: 575, y: 245 },
      { name: 'London', x: 455, y: 110 }
    ]
  },
  'shanghai-rotterdam': {
    id: 'shanghai-rotterdam',
    origin: 'Shanghai',
    destination: 'Rotterdam',
    originFlag: '🇨🇳',
    destFlag: '🇳🇱',
    transitTime: 16.2,
    carbonSavings: 38.5,
    budgetIndex: 68,
    reliability: 96.8,
    optCO2: 3.65,
    convCO2: 5.93,
    avoidedCO2: 2.28,
    handlingPoints: '05',
    strategy: 'Eurasian rail block trains bypass traditional maritime lanes, slashing overall transit times by 40% compared to pure sea freight while maintaining cost efficiency and zero sea-swell risk.',
    sequence: [
      { loc: 'Shanghai Terminal', mode: 'ORIGIN', details: 'Priority Rail Consolidation' },
      { loc: 'Xi\'an Junction', mode: 'RAIL', details: 'Overland Rail block train' },
      { loc: 'Duisburg Hub', mode: 'RAIL', details: 'Intermodal terminal cross-docking' },
      { loc: 'Rotterdam Terminal', mode: 'ROAD', details: 'Just-in-Time warehouse delivery' }
    ],
    nodes: [
      { name: 'Shanghai', x: 800, y: 215 },
      { name: 'Xi\'an', x: 740, y: 215 },
      { name: 'Duisburg', x: 475, y: 115 },
      { name: 'Rotterdam', x: 460, y: 110 }
    ]
  },
  'singapore-dubai': {
    id: 'singapore-dubai',
    origin: 'Singapore',
    destination: 'Dubai',
    originFlag: '🇸🇬',
    destFlag: '🇦🇪',
    transitTime: 7.2,
    carbonSavings: 28.4,
    budgetIndex: 82,
    reliability: 98.9,
    optCO2: 1.15,
    convCO2: 1.61,
    avoidedCO2: 0.46,
    handlingPoints: '03',
    strategy: 'Direct high-speed maritime corridor utilizing GACIS priority terminal slots at PSA Singapore and Jebel Ali Port, maximizing raw material flow with 98.9% schedule reliability.',
    sequence: [
      { loc: 'Singapore Hub', mode: 'ORIGIN', details: 'Export staging & loading' },
      { loc: 'Malacca Strait', mode: 'SEA', details: 'Direct sea voyage (Vessel slot contract)' },
      { loc: 'Dubai Port (JAFZA)', mode: 'ROAD', details: 'Bonded trucking & final mile warehouse' }
    ],
    nodes: [
      { name: 'Singapore', x: 770, y: 325 },
      { name: 'Malacca', x: 760, y: 310 },
      { name: 'Dubai', x: 575, y: 245 }
    ]
  },
  'mumbai-frankfurt': {
    id: 'mumbai-frankfurt',
    origin: 'Mumbai',
    destination: 'Frankfurt',
    originFlag: '🇮🇳',
    destFlag: '🇩🇪',
    transitTime: 11.8,
    carbonSavings: 35.6,
    budgetIndex: 60,
    reliability: 97.4,
    optCO2: 2.38,
    convCO2: 3.69,
    avoidedCO2: 1.31,
    handlingPoints: '04',
    strategy: 'Sea-Air multimodal strategy utilizing Mumbai port to Dubai Sea terminal, followed by priority air cargo connection from Dubai to Frankfurt Airport. Balances speed and cost parameters.',
    sequence: [
      { loc: 'Nhava Sheva (Mumbai)', mode: 'ORIGIN', details: 'Ocean container dispatch' },
      { loc: 'Dubai Port & Air Hub', mode: 'SEA', details: 'Bonded sea-air transfer (Under 6 hours)' },
      { loc: 'Frankfurt Airport (FRA)', mode: 'AIR', details: 'Priority cargo flight route' },
      { loc: 'Frankfurt Logistics Park', mode: 'ROAD', details: 'Final local distribution' }
    ],
    nodes: [
      { name: 'Mumbai', x: 670, y: 270 },
      { name: 'Dubai', x: 575, y: 245 },
      { name: 'Frankfurt', x: 470, y: 115 }
    ]
  }
};

const RouteSimulator = () => {
  const [selectedRouteId, setSelectedRouteId] = useState('dubai-almaty');
  const [isSimulating, setIsSimulating] = useState(false);
  const [progress, setProgress] = useState(100);
  const [activeSegment, setActiveSegment] = useState(-1);

  const route = routesData[selectedRouteId];

  // Animate the route calculation when route changes
  useEffect(() => {
    setIsSimulating(true);
    setProgress(0);
    setActiveSegment(-1);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          return 100;
        }
        const nextVal = prev + 4;
        // Map progress to active sequence segment
        const segmentIndex = Math.floor((nextVal / 100) * route.sequence.length);
        setActiveSegment(segmentIndex);
        return nextVal;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [selectedRouteId]);

  return (
    <section className="route-simulator-section section-padding bg-dark">
      <div className="container">
        
        {/* Header Block */}
        <div className="rs-section-header">
          <div className="rs-header-left">
            <span className="eyebrow rs-eyebrow">Corridor Intelligence Console</span>
            <h2>GACIS Global Route Simulator</h2>
            <p>Select an international trade lane to calculate multimodal routing options, carbon emissions index, and estimated transit times dynamically.</p>
          </div>
          <div className="rs-header-right">
            <div className="system-status-indicator">
              <span className="status-dot pulsing"></span>
              <span className="status-text">NETWORK OPERATIONAL — 24.6° N</span>
            </div>
            <div className="system-coordinates">
              <span>SYSTEM RECOMMENDATION ACTIVE</span>
            </div>
          </div>
        </div>

        {/* Main Grid Console */}
        <div className="rs-console-grid">

          {/* Left Panel: Control and Settings */}
          <div className="rs-control-panel">
            <div className="console-panel-header">
              <Cpu size={16} />
              <span>ROUTING CONFIGURATION</span>
            </div>

            <div className="control-groups">
              <div className="control-group">
                <label>Select Active Trade Route Corridor</label>
                <div className="route-selector-buttons">
                  {Object.values(routesData).map(r => (
                    <button
                      key={r.id}
                      className={`route-select-card ${selectedRouteId === r.id ? 'active' : ''}`}
                      onClick={() => setSelectedRouteId(r.id)}
                    >
                      <span className="route-card-flags">{r.originFlag} ➔ {r.destFlag}</span>
                      <span className="route-card-names">{r.origin} to {r.destination}</span>
                      <span className="route-card-meta">Transit Time: {r.transitTime} Days</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Strategy Output */}
              <div className="strategy-recommendation-box">
                <div className="strategy-title">
                  <Compass size={14} />
                  <span>INTELLIGENCE STRATEGY</span>
                </div>
                <p className="strategy-text">{route.strategy}</p>
                <div className="strategy-tags">
                  <span className="stag">CO₂ AVOIDED: {route.avoidedCO2} T</span>
                  <span className="stag">RELIABILITY: {route.reliability}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Panel: Map Canvas */}
          <div className="rs-map-panel">
            <div className="console-panel-header">
              <Globe2 size={16} />
              <span>LIVE TRACKING CANVAS / INTERACTIVE MAP</span>
              {isSimulating && <span className="calculating-badge">CALCULATING...</span>}
            </div>

            <div className="vector-canvas-wrapper">
              <svg viewBox="0 0 1000 500" className="rs-world-svg">
                <rect width="1000" height="500" rx="8" fill="#0d1117" />
                
                {/* Horizontal & Vertical Grid Lines */}
                <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
                  {[100, 200, 300, 400].map(y => <line key={y} x1="0" y1={y} x2="1000" y2={y} />)}
                  {[200, 400, 600, 800].map(x => <line key={x} x1={x} y1="0" x2={x} y2="500" />)}
                </g>

                {/* Continental outlines (simplified) */}
                <g fill="#21262d" opacity="0.3">
                  <path d="M 120 70 Q 180 50, 240 70 Q 280 120, 220 180 Q 170 210, 150 160 Q 100 120, 120 70 Z" />
                  <path d="M 230 250 Q 290 270, 270 360 Q 240 440, 210 390 Q 200 300, 230 250 Z" />
                  <path d="M 450 70 Q 530 60, 560 110 Q 520 150, 460 140 Q 430 110, 450 70 Z" />
                  <path d="M 460 160 Q 550 160, 560 250 Q 540 370, 480 370 Q 430 260, 460 160 Z" />
                  <path d="M 560 70 Q 750 50, 880 120 Q 850 240, 750 260 Q 640 220, 580 160 Z" />
                  <path d="M 660 210 Q 710 210, 710 290 Q 670 320, 650 250 Z" />
                  <path d="M 760 260 Q 820 270, 830 330 Q 780 360, 750 300 Z" />
                  <path d="M 790 350 Q 880 340, 890 410 Q 820 440, 780 390 Z" />
                </g>

                {/* SVG Route Paths (Predefined connections) */}
                {route.nodes.map((node, idx) => {
                  if (idx === route.nodes.length - 1) return null;
                  const nextNode = route.nodes[idx + 1];
                  const midX = (node.x + nextNode.x) / 2;
                  const midY = (node.y + nextNode.y) / 2 - 30;
                  
                  // Calculate animated dash offsets
                  return (
                    <path
                      key={idx}
                      d={`M ${node.x} ${node.y} Q ${midX} ${midY}, ${nextNode.x} ${nextNode.y}`}
                      fill="none"
                      stroke={progress >= ((idx + 1) / route.nodes.length) * 100 ? 'var(--gacis-red)' : 'rgba(255,255,255,0.08)'}
                      strokeWidth="2"
                      strokeDasharray={isSimulating ? '5,5' : '0,0'}
                      className="rs-map-path"
                    />
                  );
                })}

                {/* SVG Route Node Pins */}
                {route.nodes.map((node, idx) => {
                  const isActive = progress >= (idx / route.nodes.length) * 100;
                  return (
                    <g key={idx} transform={`translate(${node.x}, ${node.y})`}>
                      {isActive && (
                        <circle r="14" fill="none" stroke="var(--gacis-red)" strokeWidth="1.5" className="svg-pulse-ring" />
                      )}
                      <circle r={idx === 0 || idx === route.nodes.length - 1 ? 7 : 5} fill={isActive ? 'var(--gacis-red)' : '#30363d'} stroke="#0d1117" strokeWidth="2" />
                      <text y="-14" textAnchor="middle" fill={isActive ? '#ffffff' : '#8b949e'} fontSize="11" fontWeight="700" fontFamily="var(--font-primary)">
                        {node.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Horizontal scrollable route stages */}
              <div className="route-stages-timeline">
                {route.sequence.map((seq, idx) => (
                  <div key={idx} className={`stage-node ${activeSegment >= idx ? 'active' : ''}`}>
                    <div className="stage-num">0{idx + 1}</div>
                    <div className="stage-meta">
                      <span className="stage-mode">{seq.mode}</span>
                      <h4>{seq.loc}</h4>
                      <p>{seq.details}</p>
                    </div>
                    {idx < route.sequence.length - 1 && <ChevronRight size={16} className="stage-connector" />}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Metrics Dashboard */}
          <div className="rs-metrics-panel">
            <div className="console-panel-header">
              <Gauge size={16} />
              <span>EMISSION & COST LOGISTICS METRICS</span>
            </div>

            <div className="metrics-column">
              {/* Massive Transit Time Metrics */}
              <div className="metric-headline-box">
                <span className="mhb-label">ESTIMATED TRANSIT TIME</span>
                <span className="mhb-value">{isSimulating ? '...' : `${route.transitTime} Days`}</span>
              </div>

              {/* CO2 Emissions comparative details */}
              <div className="carbon-impact-showcase">
                <span className="mhb-label">CARBON IMPACT ANALYSIS</span>
                <div className="carbon-bar-comp">
                  <div className="carbon-comp-row">
                    <span>GACIS Optimized Route</span>
                    <span className="co2-value opt">{route.optCO2} t CO₂</span>
                  </div>
                  <div className="carbon-bar-track">
                    <div className="carbon-bar-fill opt" style={{ width: `${(route.optCO2 / route.convCO2) * 100}%` }}></div>
                  </div>
                </div>

                <div className="carbon-bar-comp">
                  <div className="carbon-comp-row">
                    <span>Conventional Routing</span>
                    <span className="co2-value conv">{route.convCO2} t CO₂</span>
                  </div>
                  <div className="carbon-bar-track">
                    <div className="carbon-bar-fill conv" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="carbon-avoided-bubble">
                  <span className="avoided-num">-{route.carbonSavings}%</span>
                  <div className="avoided-text">
                    <h4>{route.avoidedCO2} t CO₂ Avoided</h4>
                    <p>Optimized carbon reduction pathway</p>
                  </div>
                </div>
              </div>

              {/* Numerical Metrics Stacks */}
              <div className="performance-numbers-grid">
                <div className="pn-item">
                  <span className="pn-label">COST INDEX</span>
                  <span className="pn-value">{route.budgetIndex} / 100</span>
                </div>
                <div className="pn-item">
                  <span className="pn-label">RELIABILITY</span>
                  <span className="pn-value">{route.reliability}%</span>
                </div>
                <div className="pn-item">
                  <span className="pn-label">HANDLING STAGES</span>
                  <span className="pn-value">{route.handlingPoints} Points</span>
                </div>
                <div className="pn-item">
                  <span className="pn-label">EMISSION SAVINGS</span>
                  <span className="pn-value">31.8%</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Console CTA Section */}
        <div className="console-cta-footer">
          <div className="ccf-text">
            <h4>Ready to calculate custom route parameters?</h4>
            <p>Our global pricing desk offers real-time route optimization matching your budget and transit targets.</p>
          </div>
          <div className="ccf-actions">
            <Link to="/quote" className="btn btn-primary">
              Build Your Route <ChevronRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Talk to GACIS
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RouteSimulator;
