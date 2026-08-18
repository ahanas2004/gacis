import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, RotateCcw, Compass, CheckCircle2, ChevronRight, 
  ShieldCheck, AlertCircle, Leaf, Clock, DollarSign, 
  ArrowRight, Sliders, Layers, Sparkles
} from 'lucide-react';
import { presetRoutes, calculateSimulatedRoute } from '../../data/routes';
import './RouteSimulator.css';

export const RouteSimulator = () => {
  const [selectedRouteId, setSelectedRouteId] = useState('dubai-almaty');
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [customParams, setCustomParams] = useState({
    origin: 'Dubai (DXB)',
    destination: 'Almaty (ALA)',
    cargoType: 'Industrial Machinery',
    priority: 'Standard',
    mode: 'Multimodal'
  });

  const selectedPreset = presetRoutes.find(r => r.id === selectedRouteId) || presetRoutes[0];
  const activeRoute = isCustomMode 
    ? { ...selectedPreset, ...calculateSimulatedRoute(customParams) }
    : selectedPreset;

  const handleCustomChange = (field, val) => {
    setCustomParams(prev => ({ ...prev, [field]: val }));
  };

  return (
    <section id="route-simulator" className="route-simulator-section section-padding bg-dark">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-heading-dark">
          <div className="sh-badge-row">
            <span className="eyebrow eyebrow-light">CORRIDOR INTELLIGENCE ENGINE</span>
            <span className="sh-version-tag">SIMULATOR V2.4</span>
          </div>
          <h2 className="sh-title">
            Simulate Your Multimodal Trade Corridor
          </h2>
          <p className="sh-desc">
            Calculate transit lead times, intermodal carbon reductions, and route resilience across the Gulf, Central Asia, and Europe in real time.
          </p>
        </div>

        {/* Console Workspace Container */}
        <div className="rs-console-wrapper">
          
          {/* Top Control Bar: Presets & Custom Switch */}
          <div className="rs-control-bar">
            <div className="rs-presets-strip">
              <span className="rs-bar-label">STANDARD CORRIDORS:</span>
              <div className="rs-preset-buttons">
                {presetRoutes.map((rt) => (
                  <button
                    key={rt.id}
                    className={`rs-preset-btn ${selectedRouteId === rt.id && !isCustomMode ? 'is-active' : ''}`}
                    onClick={() => {
                      setSelectedRouteId(rt.id);
                      setIsCustomMode(false);
                    }}
                    aria-pressed={selectedRouteId === rt.id && !isCustomMode}
                  >
                    <span>{rt.originFlag} {rt.origin} ⇄ {rt.destination} {rt.destFlag}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              className={`rs-custom-toggle-btn ${isCustomMode ? 'is-custom-active' : ''}`}
              onClick={() => setIsCustomMode(prev => !prev)}
            >
              <Sliders size={14} />
              <span>{isCustomMode ? 'Using Custom Parameters' : 'Custom Route Parameters'}</span>
            </button>
          </div>

          {/* Custom Parameter Input Drawer */}
          {isCustomMode && (
            <div className="rs-custom-drawer">
              <div className="rs-custom-grid">
                <div className="rs-custom-field">
                  <label>Origin Hub / Port</label>
                  <select 
                    value={customParams.origin} 
                    onChange={e => handleCustomChange('origin', e.target.value)}
                  >
                    <option value="Dubai (DXB / JAFZA)">Dubai (DXB / Jebel Ali), UAE</option>
                    <option value="Chennai (MAA)">Chennai Port / Airport, India</option>
                    <option value="Port Klang (PKG)">Port Klang, Malaysia</option>
                    <option value="Colombo (CMB)">Colombo Port, Sri Lanka</option>
                    <option value="Frankfurt (FRA)">Frankfurt CargoCity, Germany</option>
                  </select>
                </div>

                <div className="rs-custom-field">
                  <label>Destination Hub</label>
                  <select 
                    value={customParams.destination} 
                    onChange={e => handleCustomChange('destination', e.target.value)}
                  >
                    <option value="Almaty (ALA)">Almaty Logistics Park, Kazakhstan</option>
                    <option value="Tashkent (TAS)">Tashkent Rail Dry Port, Uzbekistan</option>
                    <option value="London (LHR)">London Heathrow / Tilbury, UK</option>
                    <option value="Frankfurt (FRA)">Frankfurt Hub, Germany</option>
                    <option value="Riyadh Dry Port">Riyadh Dry Port, Saudi Arabia</option>
                  </select>
                </div>

                <div className="rs-custom-field">
                  <label>Cargo Classification</label>
                  <select 
                    value={customParams.cargoType} 
                    onChange={e => handleCustomChange('cargoType', e.target.value)}
                  >
                    <option value="Industrial Machinery">Industrial Machinery & Parts</option>
                    <option value="Pharmaceuticals">GDP Pharmaceuticals (+2°C to +8°C)</option>
                    <option value="Automotive CKD">Automotive Assembly Parts (CKD)</option>
                    <option value="High-Tech Electronics">High-Value Microelectronics</option>
                    <option value="Dangerous Goods">Dangerous Goods (IATA DGR)</option>
                  </select>
                </div>

                <div className="rs-custom-field">
                  <label>Priority Level</label>
                  <select 
                    value={customParams.priority} 
                    onChange={e => handleCustomChange('priority', e.target.value)}
                  >
                    <option value="Standard">Standard (Balanced Transit & Cost)</option>
                    <option value="Express">Express (Priority Linehaul)</option>
                    <option value="Urgent">Urgent Charter / Next-Flight-Out</option>
                  </select>
                </div>

                <div className="rs-custom-field">
                  <label>Modal Preference</label>
                  <select 
                    value={customParams.mode} 
                    onChange={e => handleCustomChange('mode', e.target.value)}
                  >
                    <option value="Multimodal">Optimal Multimodal (Sea-Rail-Road)</option>
                    <option value="AIR">Air Cargo Express Line</option>
                    <option value="RAIL">Trans-Eurasian Block Train</option>
                    <option value="SEA">Deepsea Container Line</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Main Console Body Grid */}
          <div className="rs-workspace-grid">
            
            {/* Left Column: Corridor Specs & Carbon Intelligence */}
            <div className="rs-specs-col">
              <div className="rs-specs-card">
                <div className="rs-corridor-header">
                  <span className="rs-specs-eyebrow">ACTIVE CORRIDOR TELEMETRY</span>
                  <h3 className="rs-specs-title">
                    {activeRoute.origin} ⇄ {activeRoute.destination}
                  </h3>
                  <span className="rs-mode-badge">{activeRoute.primaryMode || 'Multimodal Routing'}</span>
                </div>

                {/* Primary Metric Dials */}
                <div className="rs-metrics-stack">
                  <div className="rs-metric-box">
                    <span className="rm-lbl"><Clock size={13} /> ESTIMATED TRANSIT</span>
                    <span className="rm-val tabular-nums">{activeRoute.transitTime} <small>DAYS</small></span>
                    <span className="rm-sub">End-to-End Delivery Duty Paid</span>
                  </div>

                  <div className="rs-metric-box carbon-box">
                    <span className="rm-lbl"><Leaf size={13} /> CO₂ EMISSIONS SAVED</span>
                    {/* CRITICAL AUDIT FIX: dynamically bound instead of static 31.8% */}
                    <span className="rm-val text-gold tabular-nums">-{activeRoute.carbonSavings}%</span>
                    <span className="rm-sub">Vs. Conventional Pure Air/Road</span>
                  </div>
                </div>

                {/* Carbon Comparison Bar Graph */}
                <div className="rs-carbon-graph">
                  <div className="rcg-header">
                    <span>Emissions Footprint (tCO₂e / TEU)</span>
                  </div>
                  
                  <div className="rcg-bar-group">
                    <div className="rcg-bar-label">
                      <span>Standard Routing</span>
                      <span className="tabular-nums">{activeRoute.convCO2} t</span>
                    </div>
                    <div className="rcg-bar-track">
                      <div className="rcg-bar-fill baseline" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div className="rcg-bar-group">
                    <div className="rcg-bar-label">
                      <span>GACIS Optimized Corridor</span>
                      <span className="text-gold tabular-nums">{activeRoute.optCO2} t</span>
                    </div>
                    <div className="rcg-bar-track">
                      <div 
                        className="rcg-bar-fill optimized" 
                        style={{ width: `${Math.max(20, 100 - activeRoute.carbonSavings)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* KPI Micro-Grid */}
                <div className="rs-kpi-grid">
                  <div className="kpi-cell">
                    <span className="kpi-label">COST INDEX</span>
                    <span className="kpi-val tabular-nums">{activeRoute.budgetIndex || 72} / 100</span>
                  </div>
                  <div className="kpi-cell">
                    <span className="kpi-label">RELIABILITY</span>
                    <span className="kpi-val tabular-nums">{activeRoute.reliability || 98.2}%</span>
                  </div>
                  <div className="kpi-cell">
                    <span className="kpi-label">HANDLING STAGES</span>
                    <span className="kpi-val">{activeRoute.handlingPoints || '04'} Hubs</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Route Map, Waypoints & Multi-Route Comparison */}
            <div className="rs-visual-col">
              
              {/* Route Waypoint Sequence Strip */}
              <div className="rs-waypoints-card">
                <span className="rs-panel-label">TRANSIT NODES & MODAL SEQUENCE</span>
                <div className="rs-sequence-timeline">
                  {(activeRoute.sequence || [
                    { loc: activeRoute.origin, mode: 'ORIGIN', details: 'Export Consolidation' },
                    { loc: 'Primary Transshipment Hub', mode: 'SEA/RAIL', details: 'Linehaul Connection' },
                    { loc: activeRoute.destination, mode: 'DESTINATION', details: 'Final Mile Delivery' }
                  ]).map((seq, idx) => (
                    <div className="sequence-step" key={idx}>
                      <div className="step-badge">{seq.mode}</div>
                      <div className="step-info">
                        <span className="step-loc">{seq.loc}</span>
                        <span className="step-det">{seq.details}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategy Directive Card */}
              <div className="rs-strategy-card">
                <div className="rs-strat-header">
                  <Sparkles size={16} className="strat-spark" />
                  <h4>Logistics Intelligence Strategy</h4>
                </div>
                <p>{activeRoute.strategy}</p>
              </div>

              {/* Alternative Route Comparison Matrix */}
              <div className="rs-alternatives-card">
                <span className="rs-panel-label">SCENARIO COMPARISON MATRIX</span>
                <div className="rs-alternatives-grid">
                  {(activeRoute.alternatives || [
                    { type: 'FASTEST', label: 'Air Express', time: '2.5 Days', cost: '$$$$', co2: '5.2 tCO₂e', desc: 'Direct widebody flight' },
                    { type: 'BALANCED', label: 'Multimodal (Optimal)', time: `${activeRoute.transitTime} Days`, cost: '$$', co2: `${activeRoute.optCO2} tCO₂e`, desc: 'Sea feeder to rail block' },
                    { type: 'LOW_CARBON', label: 'Inland Rail Belt', time: '14.0 Days', cost: '$', co2: '0.9 tCO₂e', desc: 'Maximum rail haulage ratio' }
                  ]).map((alt, i) => (
                    <div className={`alt-card ${alt.type === 'BALANCED' ? 'is-recommended' : ''}`} key={i}>
                      <div className="alt-header">
                        <span className={`alt-badge ${alt.type.toLowerCase()}`}>{alt.type}</span>
                        <span className="alt-time tabular-nums">{alt.time}</span>
                      </div>
                      <h5 className="alt-title">{alt.label}</h5>
                      <p className="alt-desc">{alt.desc}</p>
                      <div className="alt-footer">
                        <span className="alt-co2">{alt.co2}</span>
                        <span className="alt-cost">{alt.cost}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Console Bottom Action Strip */}
          <div className="rs-console-footer">
            <div className="rcf-text">
              <h4>Ready to engineer your customized trade lane?</h4>
              <p>Book this simulated corridor or request customized spot container allocations with our commercial desk.</p>
            </div>
            <div className="rcf-actions">
              <Link to="/quote" className="btn btn-primary">
                Book This Corridor <ChevronRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-dark">
                Speak with Trade Specialist
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RouteSimulator;
