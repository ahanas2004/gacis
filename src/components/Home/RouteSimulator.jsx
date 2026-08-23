import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Play, RotateCcw, Compass, CheckCircle2, ChevronRight,
  ShieldCheck, AlertCircle, Leaf, Clock, DollarSign,
  ArrowRight, Sliders, Layers, Sparkles, Zap, Anchor,
  TrendingDown, Gauge, Activity
} from 'lucide-react';
import {
  presetRoutes,
  calculateSimulatedRoute,
  getOriginOptions,
  getDestinationOptions,
  getCargoOptions,
  getPriorityOptions,
  modeOptions
} from '../../data/routes';
import './RouteSimulator.css';

// ─── Animated Counter Hook ────────────────────────────────────────────────
function useAnimatedNumber(targetValue, duration = 600) {
  const [displayValue, setDisplayValue] = useState(targetValue);
  const animFrameRef = useRef(null);
  const startRef = useRef(null);
  const startValRef = useRef(targetValue);

  useEffect(() => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    startValRef.current = displayValue;
    startRef.current = null;

    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValRef.current + (targetValue - startValRef.current) * eased;
      setDisplayValue(current);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetValue, duration]);

  return displayValue;
}

// ─── Animated Number Display Component ────────────────────────────────────
function AnimatedNum({ value, decimals = 1, suffix = '', prefix = '' }) {
  const numVal = typeof value === 'number' ? value : parseFloat(value) || 0;
  const animated = useAnimatedNumber(numVal);
  return <>{prefix}{animated.toFixed(decimals)}{suffix}</>;
}

export const RouteSimulator = () => {
  const [selectedRouteId, setSelectedRouteId] = useState('dubai-almaty');
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  const [customParams, setCustomParams] = useState({
    originId: 'dubai',
    destId: 'almaty',
    cargoType: 'Industrial Machinery',
    priority: 'Standard',
    mode: 'Multimodal'
  });
  const [customResult, setCustomResult] = useState(null);
  const calcTimeoutRef = useRef(null);

  // ─── Preset Selection ───────────────────────────────────────────────────
  const selectedPreset = presetRoutes.find(r => r.id === selectedRouteId) || presetRoutes[0];

  // ─── Custom Route Calculation with Debounce ─────────────────────────────
  const recalculate = useCallback((params) => {
    setIsCalculating(true);

    if (calcTimeoutRef.current) clearTimeout(calcTimeoutRef.current);
    calcTimeoutRef.current = setTimeout(() => {
      const result = calculateSimulatedRoute(params);
      setCustomResult(result);
      setIsCalculating(false);
    }, 300); // 300ms debounce for responsive feel
  }, []);

  useEffect(() => {
    if (isCustomMode) {
      recalculate(customParams);
    }
    return () => {
      if (calcTimeoutRef.current) clearTimeout(calcTimeoutRef.current);
    };
  }, [isCustomMode, customParams, recalculate]);

  // Active route data — either preset or custom-calculated
  const activeRoute = isCustomMode && customResult
    ? customResult
    : selectedPreset;

  // ─── Handle Custom Param Changes ────────────────────────────────────────
  const handleCustomChange = (field, val) => {
    setCustomParams(prev => {
      const next = { ...prev, [field]: val };
      // If origin changes, ensure destination isn't the same
      if (field === 'originId' && val === prev.destId) {
        const options = getDestinationOptions(val);
        next.destId = options[0]?.value || 'almaty';
      }
      if (field === 'destId' && val === prev.originId) {
        const options = getOriginOptions();
        next.originId = options.find(o => o.value !== val)?.value || 'dubai';
      }
      return next;
    });
  };

  // ─── Available dropdown options ─────────────────────────────────────────
  const originOptions = getOriginOptions();
  const destinationOptions = getDestinationOptions(customParams.originId);
  const cargoOptions = getCargoOptions();
  const priorityOptions = getPriorityOptions();

  return (
    <section id="route-simulator" className="route-simulator-section section-padding bg-dark">
      <div className="container">

        {/* Section Header */}
        <div className="section-heading-dark">
          <div className="sh-badge-row">
            <span className="eyebrow eyebrow-light">MULTIMODAL ROUTE PLANNER</span>
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
                    value={customParams.originId}
                    onChange={e => handleCustomChange('originId', e.target.value)}
                  >
                    {originOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="rs-custom-field">
                  <label>Destination Hub</label>
                  <select
                    value={customParams.destId}
                    onChange={e => handleCustomChange('destId', e.target.value)}
                  >
                    {destinationOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="rs-custom-field">
                  <label>Cargo Classification</label>
                  <select
                    value={customParams.cargoType}
                    onChange={e => handleCustomChange('cargoType', e.target.value)}
                  >
                    {cargoOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="rs-custom-field">
                  <label>Priority Level</label>
                  <select
                    value={customParams.priority}
                    onChange={e => handleCustomChange('priority', e.target.value)}
                  >
                    {priorityOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="rs-custom-field">
                  <label>Modal Preference</label>
                  <select
                    value={customParams.mode}
                    onChange={e => handleCustomChange('mode', e.target.value)}
                  >
                    {modeOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Main Console Body Grid */}
          <div className={`rs-workspace-grid ${isCalculating ? 'is-calculating' : ''}`} key={isCustomMode ? 'custom' : selectedRouteId}>

            {/* Left Column: Corridor Specs & Carbon Intelligence */}
            <div className="rs-specs-col">
              <div className="rs-specs-card">
                <div className="rs-corridor-header">
                  <span className="rs-specs-eyebrow">CORRIDOR SPECIFICATIONS</span>
                  <h3 className="rs-specs-title">
                    {activeRoute.origin} ⇄ {activeRoute.destination}
                  </h3>
                  <span className="rs-mode-badge">{activeRoute.primaryMode || 'Multimodal Routing'}</span>
                  {activeRoute._meta && (
                    <span className="rs-distance-tag">
                      {activeRoute._meta.totalDistanceKm?.toLocaleString()} km total route
                    </span>
                  )}
                </div>

                {/* Primary Metric Dials */}
                <div className="rs-metrics-stack">
                  <div className="rs-metric-box">
                    <span className="rm-lbl"><Clock size={13} /> ESTIMATED TRANSIT</span>
                    <span className="rm-val tabular-nums">
                      <AnimatedNum value={activeRoute.transitTime} decimals={1} /> <small>DAYS</small>
                    </span>
                    <span className="rm-sub">End-to-End Delivery Duty Paid</span>
                  </div>

                  <div className="rs-metric-box carbon-box">
                    <span className="rm-lbl"><Leaf size={13} /> CO₂ EMISSIONS SAVED</span>
                    <span className="rm-val text-gold tabular-nums">
                      -<AnimatedNum value={activeRoute.carbonSavings} decimals={1} />%
                    </span>
                    <span className="rm-sub">Vs. Conventional Mixed Logistics</span>
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
                      <span className="tabular-nums">
                        <AnimatedNum value={activeRoute.convCO2} decimals={2} /> t
                      </span>
                    </div>
                    <div className="rcg-bar-track">
                      <div className="rcg-bar-fill baseline" style={{ width: '100%' }}></div>
                    </div>
                  </div>

                  <div className="rcg-bar-group">
                    <div className="rcg-bar-label">
                      <span>GACIS Optimized Corridor</span>
                      <span className="text-gold tabular-nums">
                        <AnimatedNum value={activeRoute.optCO2} decimals={2} /> t
                      </span>
                    </div>
                    <div className="rcg-bar-track">
                      <div
                        className="rcg-bar-fill optimized"
                        style={{
                          width: `${Math.max(20,
                            activeRoute.convCO2 > 0
                              ? (activeRoute.optCO2 / activeRoute.convCO2) * 100
                              : 50
                          )}%`
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* KPI Micro-Grid */}
                <div className="rs-kpi-grid">
                  <div className="kpi-cell">
                    <span className="kpi-label"><DollarSign size={10} /> COST INDEX</span>
                    <span className="kpi-val tabular-nums">
                      <AnimatedNum value={activeRoute.budgetIndex} decimals={0} /> / 100
                    </span>
                  </div>
                  <div className="kpi-cell">
                    <span className="kpi-label"><Activity size={10} /> RELIABILITY</span>
                    <span className="kpi-val tabular-nums">
                      <AnimatedNum value={activeRoute.reliability} decimals={1} />%
                    </span>
                  </div>
                  <div className="kpi-cell">
                    <span className="kpi-label"><Layers size={10} /> HANDLING</span>
                    <span className="kpi-val">{activeRoute.handlingPoints} Hubs</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Route Map, Waypoints & Multi-Route Comparison */}
            <div className="rs-visual-col">

              {/* Calculating Overlay */}
              {isCalculating && (
                <div className="rs-calculating-overlay">
                  <div className="rs-calc-spinner"></div>
                  <span>Recalculating corridor...</span>
                </div>
              )}

              {/* Route Waypoint Sequence Strip */}
              <div className="rs-waypoints-card">
                <span className="rs-panel-label">TRANSIT STOPS & ROUTE SEQUENCE</span>
                <div className="rs-sequence-timeline">
                  {(activeRoute.sequence || [
                    { loc: activeRoute.origin, mode: 'ORIGIN', details: 'Export Consolidation' },
                    { loc: 'Primary Transshipment Hub', mode: 'SEA/RAIL', details: 'Linehaul Connection' },
                    { loc: activeRoute.destination, mode: 'DESTINATION', details: 'Final Mile Delivery' }
                  ]).map((seq, idx) => (
                    <div className={`sequence-step ${idx === 0 ? 'is-origin' : ''}`} key={idx}>
                      <div className="step-badge">{seq.mode}</div>
                      <div className="step-info">
                        <span className="step-loc">{seq.loc}</span>
                        <span className="step-det">{seq.details}</span>
                      </div>
                      {seq.delayRisk && (
                        <span className={`step-risk risk-${seq.delayRisk.toLowerCase()}`}>
                          {seq.delayRisk} Risk
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategy Directive Card */}
              <div className="rs-strategy-card">
                <div className="rs-strat-header">
                  <Sparkles size={16} className="strat-spark" />
                  <h4>Corridor Routing Strategy</h4>
                </div>
                <p>{activeRoute.strategy}</p>
              </div>

              {/* Alternative Route Comparison Matrix */}
              <div className="rs-alternatives-card">
                <span className="rs-panel-label">ROUTING OPTIONS COMPARISON</span>
                <div className="rs-alternatives-grid">
                  {(activeRoute.alternatives || [
                    { type: 'FASTEST', label: 'Air Express', time: '2.5 Days', cost: '$$$$', co2: '5.2 tCO₂e', desc: 'Direct widebody flight' },
                    { type: 'BALANCED', label: 'Multimodal (Optimal)', time: `${activeRoute.transitTime} Days`, cost: '$$', co2: `${activeRoute.optCO2} tCO₂e`, desc: 'Sea feeder to rail block' },
                    { type: 'LOW_CARBON', label: 'Inland Rail Belt', time: '14.0 Days', cost: '$', co2: '0.9 tCO₂e', desc: 'Maximum rail haulage ratio' }
                  ]).map((alt, i) => {
                    const altMode = alt.type === 'FASTEST' ? 'Air Freight' : alt.type === 'LOW_CARBON' ? 'Rail Freight' : (activeRoute.primaryMode || 'Multimodal');
                    const altPriority = alt.type === 'FASTEST' ? 'Urgent' : (customParams.priority || 'Standard');
                    const altParams = new URLSearchParams({
                      origin: activeRoute.origin || '',
                      destination: activeRoute.destination || '',
                      cargoType: customParams.cargoType || 'Industrial Machinery',
                      priority: altPriority,
                      mode: altMode,
                      transitTime: alt.time ? String(alt.time).replace(' Days', '') : '',
                      optCO2: alt.co2 ? String(alt.co2).replace(' tCO₂e', '') : '',
                      prefilled: 'true'
                    }).toString();

                    return (
                      <Link
                        key={i}
                        to={{
                          pathname: '/quote',
                          search: `?${altParams}`
                        }}
                        state={{
                          origin: activeRoute.origin,
                          destination: activeRoute.destination,
                          cargoType: customParams.cargoType || 'Industrial Machinery',
                          priority: altPriority,
                          mode: altMode,
                          transitTime: alt.time,
                          optCO2: alt.co2,
                          isSimulatedCorridor: true
                        }}
                        className={`alt-card ${alt.type === 'BALANCED' ? 'is-recommended' : ''}`}
                        title={`Book ${alt.label} corridor quote`}
                      >
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
                      </Link>
                    );
                  })}
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
              <Link
                to={{
                  pathname: '/quote',
                  search: `?${new URLSearchParams({
                    origin: activeRoute.origin || '',
                    destination: activeRoute.destination || '',
                    cargoType: customParams.cargoType || 'Industrial Machinery',
                    priority: customParams.priority || 'Standard',
                    mode: activeRoute.primaryMode || customParams.mode || 'Multimodal',
                    transitTime: activeRoute.transitTime ? String(activeRoute.transitTime) : '',
                    optCO2: activeRoute.optCO2 ? String(activeRoute.optCO2) : '',
                    prefilled: 'true'
                  }).toString()}`
                }}
                state={{
                  origin: activeRoute.origin,
                  destination: activeRoute.destination,
                  cargoType: customParams.cargoType || 'Industrial Machinery',
                  priority: customParams.priority || 'Standard',
                  mode: activeRoute.primaryMode || customParams.mode || 'Multimodal',
                  transitTime: activeRoute.transitTime,
                  optCO2: activeRoute.optCO2,
                  isSimulatedCorridor: true
                }}
                className="btn btn-primary"
              >
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
