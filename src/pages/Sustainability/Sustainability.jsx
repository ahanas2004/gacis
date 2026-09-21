import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Leaf, Plane, Ship, Truck, Train, ArrowRight, ShieldCheck,
  HelpCircle, ChevronDown, ChevronUp, BarChart3, Compass, Zap,
  Layers, Trees, Box, Filter, Globe2, Radio, Activity, Sparkles,
  Recycle, Gauge, Database, FileText, CheckCircle2, Route as RouteIcon,
  Waves
} from 'lucide-react';
import SEO from '../../components/Common/SEO';
import { calculateFullRoute } from '../../data/routeCalculationEngine';
import './Sustainability.css';

export const Sustainability = () => {
  // ─── Section 3 Interactive Route & Cargo Comparator State ─────────────
  const [selectedCorridor, setSelectedCorridor] = useState('dubai-almaty');
  const [selectedCargo, setSelectedCargo] = useState('Industrial Machinery');

  const corridorConfigs = {
    'dubai-almaty': { origin: 'dubai', dest: 'almaty', label: 'Dubai (UAE) ⇄ Almaty (Kazakhstan)', flagA: '🇦🇪', flagB: '🇰🇿' },
    'chennai-frankfurt': { origin: 'chennai', dest: 'frankfurt', label: 'Chennai (India) ⇄ Frankfurt (Germany)', flagA: '🇮🇳', flagB: '🇩🇪' },
    'klang-hamburg': { origin: 'klang', dest: 'hamburg', label: 'Port Klang (Malaysia) ⇄ Hamburg (Germany)', flagA: '🇲🇾', flagB: '🇩🇪' }
  };

  const cargoOptions = [
    { id: 'Industrial Machinery', label: 'Industrial Machinery' },
    { id: 'Automotive CKD', label: 'Automotive CKD Parts' },
    { id: 'High-Tech Electronics', label: 'High-Tech Electronics' },
    { id: 'Pharmaceuticals', label: 'Pharma / Cold-Chain' }
  ];

  const activeConfig = corridorConfigs[selectedCorridor];
  const routeAir = calculateFullRoute({ originId: activeConfig.origin, destId: activeConfig.dest, cargoType: selectedCargo, priority: 'Urgent', mode: 'AIR' });
  const routeRail = calculateFullRoute({ originId: activeConfig.origin, destId: activeConfig.dest, cargoType: selectedCargo, priority: 'Standard', mode: 'RAIL' });

  const airCO2Num = routeAir ? routeAir.convCO2 * 3.2 : 24.5;
  const railCO2Num = routeRail ? routeRail.optCO2 : 3.1;
  const airCO2 = airCO2Num.toFixed(2);
  const railCO2 = railCO2Num.toFixed(2);
  const co2Saved = Math.max(0, airCO2Num - railCO2Num).toFixed(2);
  const percentSaved = Math.round(((airCO2Num - railCO2Num) / airCO2Num) * 100);
  const treesEquivalent = Math.round(parseFloat(co2Saved) * 45);
  const railMeterPct = Math.max(8, Math.round((railCO2Num / airCO2Num) * 100));

  // ─── Section 4 Modal Shift Tab State ─────────────────────────────────────
  const [activeModalTab, setActiveModalTab] = useState('air-rail');

  const modalShiftData = {
    'air-rail': {
      title: 'Air Freight → Intermodal Rail',
      route: '✈️ Pure Air  ➔  🚆 Trans-Eurasian Block Train',
      baselineCO2: '24.50 tCO₂e',
      optimizedCO2: '3.10 tCO₂e',
      reduction: '-87%',
      baselineTime: '2.5 Days',
      optimizedTime: '8.4 Days',
      howGacisDoesIt: 'We route cargo via electric rail shuttles connecting Caspian ports to Central Asian dry hubs, maintaining high security while avoiding high-altitude flight emissions.',
      idealFor: 'Automotive components, industrial machinery, non-perishable electronics, and consumer retail.'
    },
    'road-rail': {
      title: 'Road Trucking → Rail Shuttle',
      route: '🚛 Long-Haul Trucking  ➔  🚆 Intermodal Rail Express',
      baselineCO2: '8.40 tCO₂e',
      optimizedCO2: '3.10 tCO₂e',
      reduction: '-63%',
      baselineTime: '7.0 Days',
      optimizedTime: '8.4 Days',
      howGacisDoesIt: 'We replace long-distance diesel truck linehauls with scheduled block trains, using trucks only for short first-mile pick-up and last-mile delivery.',
      idealFor: 'Heavy steel coils, raw chemicals, construction materials, and high-volume containerized inventory.'
    },
    'air-sea': {
      title: 'Air Freight → Sea-Air Hybrid',
      route: '✈️ Pure Air  ➔  🚢+✈️ Sea-Air Multimodal (via Dubai)',
      baselineCO2: '24.50 tCO₂e',
      optimizedCO2: '2.40 tCO₂e',
      reduction: '-90%',
      baselineTime: '2.5 Days',
      optimizedTime: '10.2 Days',
      howGacisDoesIt: 'Cargo moves by ocean vessel from Asia to Dubai, transfers rapidly at Jebel Ali Freezone, and flies the final leg to Europe — cutting costs by 50% and emissions by 90%.',
      idealFor: 'Fashion apparel, seasonal consumer goods, electronics accessories, and planned inventory replenishment.'
    }
  };

  // ─── Section 5 Expandable Methodology State ──────────────────────────────
  const [showMethodologyDetails, setShowMethodologyDetails] = useState(false);

  // ─── Section 7 Scorecard Active View State ────────────────────────────────
  const [activeScorecardRating, setActiveScorecardRating] = useState('low');
  const [showScorecardDetails, setShowScorecardDetails] = useState(false);

  const scorecardData = {
    low: {
      badge: 'LOWER CARBON',
      emoji: '🌱',
      mode: 'Intermodal Rail (GACIS Multimodal)',
      transit: '8.4 Days',
      emissions: '3.10 tCO₂e',
      index: 15,
      msg: 'Lower estimated carbon impact (-87%) compared with alternative pure air freight route.',
      tagClass: 'chip-green'
    },
    mod: {
      badge: 'MODERATE CARBON',
      emoji: '🟡',
      mode: 'Long-Haul Road Haulage',
      transit: '7.0 Days',
      emissions: '8.40 tCO₂e',
      index: 50,
      msg: 'Moderate estimated carbon impact. Suitable for regional cross-border truck transfers.',
      tagClass: 'chip-amber'
    },
    high: {
      badge: 'HIGHER CARBON',
      emoji: '🔴',
      mode: 'Pure Airfreight Express',
      transit: '2.5 Days',
      emissions: '24.50 tCO₂e',
      index: 85,
      msg: 'Higher estimated carbon impact due to high-altitude jet fuel burn. Best reserved for urgent charter cargo.',
      tagClass: 'chip-red'
    }
  };

  const emissionModes = [
    { id: 'air', icon: Plane, name: 'Air Freight', factor: '0.572', unit: 'kg CO₂e / t·km', level: 100, tone: 'tone-air', blurb: 'Fastest transit (1–2 days) with high-altitude jet fuel burn. Best saved for urgent medical or emergency linehaul.' },
    { id: 'road', icon: Truck, name: 'Road Haulage', factor: '0.078', unit: 'kg CO₂e / t·km', level: 36, tone: 'tone-road', blurb: 'Essential for door-to-door delivery. Emissions scale with diesel efficiency and highway distance.' },
    { id: 'rail', icon: Train, name: 'Intermodal Rail', factor: '0.028', unit: 'kg CO₂e / t·km', level: 20, tone: 'tone-rail', blurb: 'Electric / diesel block trains give the ideal balance of speed and low carbon over long land corridors.' },
    { id: 'sea', icon: Ship, name: 'Ocean Freight', factor: '0.010', unit: 'kg CO₂e / t·km', level: 12, tone: 'tone-sea', blurb: 'Ultra-efficient at scale — one voyage moves thousands of containers for the lowest per-ton footprint.' }
  ];

  const pillars = [
    { num: '01', icon: Layers, title: 'Modal Shift Engineering', desc: 'We analyze your trade lanes and shift cargo from high-emission air freight to intermodal rail or sea-air corridors without disrupting delivery deadlines.' },
    { num: '02', icon: BarChart3, title: 'Real-Time GLEC Carbon Modeling', desc: 'Our engine applies official GLEC v3.0 emission factors and WGS84 Haversine distance math for accurate kg CO₂e on every shipment mode.' },
    { num: '03', icon: Box, title: 'Smart Container Consolidation', desc: 'We maximize cargo fill rates through advanced LCL consolidation hubs, lowering the carbon footprint per unit of cargo moved.' },
    { num: '04', icon: Zap, title: 'Green Gateway Preferential Routing', desc: 'We prioritize LNG/Methanol ocean carriers and electrified rail networks with zero direct tailpipe emissions.' }
  ];

  return (
    <div className="sustainability-page">
      <SEO
        title="Lower-Carbon Logistics by Design — GACIS Sustainability"
        description="GACIS enables enterprise Scope 3 carbon reduction through multimodal rail substitution, sea-air optimization, and partner-verified emissions reporting."
        canonical="/sustainability"
      />

      {/* ═══════════════════════════════════════════════════════════════
          HERO — SUSTAINABILITY COMMAND CENTER
          ═══════════════════════════════════════════════════════════════ */}
      <section className="sust-hero-command">
        <div className="sust-hero-glow" aria-hidden="true" />
        <div className="container">
          <div className="shc-badge-row">
            <span className="shc-pulse-badge">
              <Radio size={14} className="shc-radar-svg" />
              <span>GACIS SUSTAINABILITY ENGINE</span>
            </span>
            <span className="shc-telemetry-tag">
              <Leaf size={13} /> GLEC v3.0 · ISO 14083 · EN 16258
            </span>
          </div>

          <h1 className="shc-title">
            Lower-Carbon Logistics <span className="shc-title-accent">by Design</span>
          </h1>
          <p className="shc-desc">
            Moving cargo powers global trade, but every ship, plane, truck, and train uses energy.
            GACIS measures your freight carbon footprint and engineers smarter, lower-carbon ways
            to keep supply chains moving — without compromising speed or reliability.
          </p>

          <div className="shc-actions">
            <Link to="/quote" className="btn btn-primary btn-large">
              CALCULATE ROUTE & AUDIT <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-outline-white btn-large">
              TALK TO SUSTAINABILITY TEAM
            </Link>
          </div>

          {/* Telemetry KPI Bar */}
          <div className="sust-telemetry-bar">
            <div className="stb-stat">
              <span className="stb-val text-gold tabular-nums">-75%</span>
              <span className="stb-label">CO₂e via Intermodal Rail Shift</span>
            </div>
            <div className="stb-divider" />
            <div className="stb-stat">
              <span className="stb-val text-cyan tabular-nums">GLEC v3.0</span>
              <span className="stb-label">ISO 14083 Accounting Standard</span>
            </div>
            <div className="stb-divider" />
            <div className="stb-stat">
              <span className="stb-val tabular-nums">16</span>
              <span className="stb-label">Green Trade Corridor Hubs</span>
            </div>
            <div className="stb-divider" />
            <div className="stb-stat">
              <span className="stb-val text-gold tabular-nums">100%</span>
              <span className="stb-label">Scope 3 Audit-Ready Certification</span>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="sust-feature-section">
        <div className="container">
          <img src="/images/sustainability-gacis.png" alt="GACIS sustainable logistics with renewable energy and lower-carbon freight" className="sust-feature-image" loading="lazy" decoding="async" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: EMISSION SPECTRUM — HOW TRANSPORT MODES COMPARE
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary fade-up">
        <div className="container">
          <div className="sust-section-heading">
            <span className="sust-eyebrow sust-eyebrow-dark"><Sparkles size={13} /> EASY TO UNDERSTAND</span>
            <h2>What Does a Freight Carbon Footprint Actually Mean?</h2>
            <p>
              Whenever goods travel by air, ocean, road, or rail, engines consume fuel and release
              greenhouse gases. A freight carbon footprint is the total estimated weight of emissions
              generated to move your shipment from origin to destination — and it changes dramatically
              with the mode you choose.
            </p>
          </div>

          {/* Example callout */}
          <div className="sust-example-card">
            <div className="sec-icon"><Globe2 size={20} /></div>
            <div className="sec-body">
              <span className="sec-badge">💡 A SIMPLE EXAMPLE</span>
              <p>
                Shipping <strong>10 tons of machinery</strong> from Dubai to Almaty: flying burns massive jet fuel
                in hours; moving it by ocean vessel + electric block train uses dramatically less fuel per ton.
                <strong> Same shipment, different modes = drastically different carbon footprint.</strong>
              </p>
            </div>
          </div>

          {/* Emission spectrum cards */}
          <div className="sust-spectrum-grid">
            {emissionModes.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.id} className="sust-spectrum-card">
                  <div className={`spectrum-icon ${m.tone}`}><Icon size={20} /></div>
                  <div className="spectrum-head">
                    <h3>{m.name}</h3>
                    <span className="spectrum-factor tabular-nums">{m.factor} <small>{m.unit}</small></span>
                  </div>
                  <div className="spectrum-track">
                    <div
                      className={`spectrum-fill ${m.tone}`}
                      style={{ width: `${m.level}%` }}
                    />
                  </div>
                  <p className="spectrum-note">{m.blurb}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: HOW GACIS WORKS — 4 PILLARS (DARK)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="sust-dark-section fade-up">
        <div className="sust-dark-glow" aria-hidden="true" />
        <div className="container">
          <div className="sust-section-heading">
            <span className="sust-eyebrow"><Recycle size={13} /> OUR OPERATIONAL EXECUTION</span>
            <h2 className="text-white">How GACIS Works in Sustainability</h2>
            <p className="sust-lead-dark">
              Sustainability is not an abstract corporate slogan. GACIS builds lower-carbon logistics
              directly into daily operational workflows through four proven mechanisms.
            </p>
          </div>

          <div className="sust-pillars-grid">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.num} className="sust-pillar">
                  <span className="sust-pillar-num tabular-nums">{p.num}</span>
                  <div className="sust-pillar-icon"><Icon size={22} /></div>
                  <h3 className="text-white">{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Balanced decision principle */}
          <div className="sust-balance-card">
            <div className="sust-balance-icon"><Compass size={24} /></div>
            <div className="sust-balance-body">
              <h4 className="text-white">The GACIS Balanced Decision Principle</h4>
              <p>
                The best logistics solution is a practical balance between{' '}
                <strong className="sust-hl-gold">SPEED</strong>,{' '}
                <strong className="sust-hl-gold">COST</strong>,{' '}
                <strong className="sust-hl-gold">RELIABILITY</strong> and{' '}
                <strong className="sust-hl-green">CARBON IMPACT</strong> — never optimizing one at the expense of all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: LIVE ROUTE & CARBON COMPARATOR (BEFORE & AFTER)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary fade-up">
        <div className="container">
          <div className="sust-section-heading">
            <span className="sust-eyebrow sust-eyebrow-dark"><Activity size={13} /> INTERACTIVE CALCULATOR</span>
            <h2>See How a Different Route Makes a Difference</h2>
            <p>
              Select a trade lane and cargo type to dynamically compute estimated emissions and transit
              time for the conventional vs. the GACIS optimized approach.
            </p>
          </div>

          {/* Selector console */}
          <div className="sust-console">
            <div className="sust-console-label">
              <span><Radio size={13} /> LIVE COMPARISON CONSOLE</span>
            </div>

            <div className="sust-corridor-tabs" role="tablist" aria-label="Trade corridor selection">
              {Object.entries(corridorConfigs).map(([key, config]) => (
                <button
                  key={key}
                  type="button"
                  className={`scorr-btn ${selectedCorridor === key ? 'active' : ''}`}
                  onClick={() => setSelectedCorridor(key)}
                >
                  <span className="scorr-flags">{config.flagA} {config.flagB}</span>
                  {config.label}
                </button>
              ))}
            </div>

            <div className="sust-cargo-row">
              <span className="sust-cargo-lbl"><Filter size={13} /> Cargo Category:</span>
              <div className="sust-cargo-chips">
                {cargoOptions.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    className={`scargo-chip ${selectedCargo === c.id ? 'active' : ''}`}
                    onClick={() => setSelectedCargo(c.id)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Before / After comparison */}
          <div className="sust-compare-grid">
            {/* Conventional */}
            <div className="compare-card current">
              <div className="compare-head">
                <span className="compare-badge badge-red">CONVENTIONAL ROUTE</span>
                <span className="compare-live-dot" />
              </div>
              <h3>Pure Airfreight Express</h3>
              <p className="compare-sub">High-altitude jet engine fuel burn · {selectedCargo}</p>

              <div className="compare-metric">
                <span className="compare-metric-label">Estimated Carbon Footprint</span>
                <span className="compare-metric-value text-red tabular-nums">
                  {airCO2} <small>tCO₂e</small>
                </span>
              </div>
              <div className="compare-meter-track">
                <div className="compare-meter-fill fill-red" style={{ width: '100%' }} />
              </div>

              <div className="compare-metric">
                <span className="compare-metric-label">Estimated Transit Time</span>
                <span className="compare-metric-value tabular-nums">
                  {routeAir ? `${routeAir.transitTime} Days` : '2.5 Days'}
                </span>
              </div>
            </div>

            {/* VS badge */}
            <div className="compare-vs" aria-hidden="true">
              <div className="compare-vs-circle"><ArrowRight size={22} /></div>
              <span className="compare-save-pill">{percentSaved}% LESS CO₂</span>
            </div>

            {/* Optimized */}
            <div className="compare-card optimized">
              <div className="compare-head">
                <span className="compare-badge badge-green">GACIS OPTIMIZED APPROACH</span>
                <span className="compare-live-dot live-green" />
              </div>
              <h3>Multimodal Intermodal Rail</h3>
              <p className="compare-sub">Sea + Electric Block Train Corridor · {selectedCargo}</p>

              <div className="compare-metric">
                <span className="compare-metric-label">Estimated Carbon Footprint</span>
                <span className="compare-metric-value text-green tabular-nums">
                  {railCO2} <small>tCO₂e</small>
                </span>
              </div>
              <div className="compare-meter-track">
                <div className="compare-meter-fill fill-green" style={{ width: `${railMeterPct}%` }} />
              </div>

              <div className="compare-metric">
                <span className="compare-metric-label">Estimated Transit Time</span>
                <span className="compare-metric-value tabular-nums">
                  {routeRail ? `${routeRail.transitTime} Days` : '8.4 Days'}
                </span>
              </div>
            </div>
          </div>

          {/* Real-world impact panel */}
          <div className="sust-impact-panel">
            <div className="sust-impact-left">
              <div className="sust-impact-icon"><Trees size={22} /></div>
              <div>
                <span className="sust-impact-title">Environmental Impact Result</span>
                <p>
                  Choosing the GACIS optimized rail approach for <strong>{selectedCargo}</strong> saves approximately{' '}
                  <strong className="text-green tabular-nums">{co2Saved} tons of CO₂e</strong> on this shipment.
                </p>
              </div>
            </div>
            <div className="sust-impact-stat">
              <span className="sust-impact-num tabular-nums">~{treesEquivalent}</span>
              <span className="sust-impact-lbl">Mature trees absorbing CO₂ for a full year</span>
            </div>
          </div>

          <p className="sust-disclaimer">
            * Estimated based on route distance and 10 Ton cargo weight assumptions. Illustrative model for trade lane evaluation.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: MODAL SHIFT SIMULATOR (DARK)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="sust-dark-section fade-up">
        <div className="sust-dark-glow" aria-hidden="true" />
        <div className="container">
          <div className="sust-section-heading">
            <span className="sust-eyebrow"><RouteIcon size={13} /> REAL-WORLD MODAL SHIFTS</span>
            <h2 className="text-white">Sometimes, Changing the Mode Changes the Impact</h2>
            <p className="sust-lead-dark">
              Explore three proven modal-shift strategies GACIS executes every day for shippers across
              the corridor network.
            </p>
          </div>

          <div className="sust-shift-tabs" role="tablist" aria-label="Modal shift scenarios">
            {Object.entries(modalShiftData).map(([key, data]) => (
              <button
                key={key}
                type="button"
                className={`sust-shift-tab ${activeModalTab === key ? 'active' : ''}`}
                onClick={() => setActiveModalTab(key)}
              >
                {data.title.split(' → ')[0]} <ArrowRight size={13} /> {data.title.split(' → ')[1]}
              </button>
            ))}
          </div>

          {modalShiftData[activeModalTab] && (
            <div className="sust-shift-panel">
              <div className="shift-panel-head">
                <div>
                  <h3 className="text-white">{modalShiftData[activeModalTab].title}</h3>
                  <span className="shift-route-line">{modalShiftData[activeModalTab].route}</span>
                </div>
                <span className="shift-badge-save tabular-nums">
                  {modalShiftData[activeModalTab].reduction} CARBON REDUCTION
                </span>
              </div>

              <div className="shift-metrics">
                <div className="shift-metric-box">
                  <span className="shift-metric-label">ESTIMATED CARBON IMPACT</span>
                  <div className="shift-metric-values">
                    <span className="shift-old tabular-nums">{modalShiftData[activeModalTab].baselineCO2}</span>
                    <ArrowRight size={15} />
                    <span className="shift-new text-green tabular-nums">{modalShiftData[activeModalTab].optimizedCO2}</span>
                  </div>
                  <div className="shift-mini-track">
                    <div className="shift-mini-fill" style={{ width: '100%' }} />
                    <div className="shift-mini-fill mini-green" style={{ width: '18%' }} />
                  </div>
                </div>

                <div className="shift-metric-box">
                  <span className="shift-metric-label">TRANSIT IMPACT</span>
                  <div className="shift-metric-values">
                    <span className="shift-old tabular-nums">{modalShiftData[activeModalTab].baselineTime}</span>
                    <ArrowRight size={15} />
                    <span className="shift-new tabular-nums">{modalShiftData[activeModalTab].optimizedTime}</span>
                  </div>
                  <div className="shift-mini-track">
                    <div className="shift-mini-fill mini-gold" style={{ width: '26%' }} />
                    <div className="shift-mini-fill mini-blue" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>

              <div className="shift-explain">
                <div className="shift-explain-block">
                  <span className="shift-explain-icon"><Waves size={16} /></span>
                  <div>
                    <strong>How GACIS Executes This</strong>
                    <p>{modalShiftData[activeModalTab].howGacisDoesIt}</p>
                  </div>
                </div>
                <div className="shift-explain-block">
                  <span className="shift-explain-icon"><Box size={16} /></span>
                  <div>
                    <strong>Best Suited Cargo</strong>
                    <p>{modalShiftData[activeModalTab].idealFor}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: HOW CARBON IS ESTIMATED (4 STEPS + ACCORDION)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary fade-up">
        <div className="container">
          <div className="sust-section-heading">
            <span className="sust-eyebrow sust-eyebrow-dark"><BarChart3 size={13} /> 4 SIMPLE STEPS</span>
            <h2>How Do We Estimate Your Shipment's Carbon Footprint?</h2>
            <p>
              We combine information about your cargo, the route, and the transport modes used to estimate
              emissions along every leg of the journey.
            </p>
          </div>

          <div className="sust-process-track">
            {[
              { num: 1, icon: Box, title: 'YOUR CARGO', desc: 'Weight, volume, and cargo type classification' },
              { num: 2, icon: Globe2, title: 'YOUR JOURNEY', desc: 'Origin port, destination dry hub, and transshipment stops' },
              { num: 3, icon: Train, title: 'HOW IT MOVES', desc: 'Air, ocean, intermodal rail, or road transport modes' },
              { num: 4, icon: Leaf, title: 'ESTIMATED IMPACT', desc: 'Approximate CO₂e carbon report in metric tonnes', highlight: true }
            ].map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.num} className="sust-process-step-wrap">
                  <div className={`sust-process-step ${s.highlight ? 'step-highlight' : ''}`}>
                    <div className="sust-step-num tabular-nums">{s.num}</div>
                    <div className="sust-step-icon"><Icon size={20} /></div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                  {i < 3 && <div className="sust-step-line" aria-hidden="true"><ArrowRight size={18} /></div>}
                </div>
              );
            })}
          </div>

          {/* Expandable technical methodology */}
          <div className="sust-method-accordion">
            <button
              type="button"
              className="sust-accordion-btn"
              aria-expanded={showMethodologyDetails}
              onClick={() => setShowMethodologyDetails(!showMethodologyDetails)}
            >
              <span className="sust-accordion-q">
                <HelpCircle size={16} />
                Want to know more about our calculation methodology?
              </span>
              {showMethodologyDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {showMethodologyDetails && (
              <div className="sust-accordion-body">
                <h4>Technical Accounting Framework Details</h4>
                <p>
                  Our calculations follow standard freight emission factors (kg CO₂e per tonne-kilometer)
                  based on the Global Logistics Emissions Council (GLEC) Framework v3.0 / ISO 14083:
                </p>
                <ul>
                  <li><strong>Air Cargo:</strong> ~0.572 kg CO₂e / tonne-km (jet fuel burn at altitude)</li>
                  <li><strong>Road Haulage:</strong> ~0.078 kg CO₂e / tonne-km (heavy diesel tractor-trailer)</li>
                  <li><strong>Intermodal Rail:</strong> ~0.028 kg CO₂e / tonne-km (electric / diesel block train)</li>
                  <li><strong>Ocean Container:</strong> ~0.010 kg CO₂e / tonne-km (deepsea container linehaul)</li>
                </ul>
                <p className="sust-accordion-note">
                  Distances are calculated using WGS84 geographic coordinates adjusted for real-world
                  routing multipliers (ocean channels, road networks, and railway corridors).
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6: WHAT IS CO₂e? (DARK BANNER)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="sust-co2e-section fade-up">
        <div className="sust-co2e-glow" aria-hidden="true" />
        <div className="container">
          <div className="sust-co2e-panel">
            <div className="sust-co2e-icon"><HelpCircle size={28} /></div>
            <div className="sust-co2e-body">
              <span className="sust-co2e-eyebrow">QUICK EXPLAINER</span>
              <h3 className="text-white">What is CO₂e?</h3>
              <p>
                <strong>CO₂e means Carbon Dioxide Equivalent.</strong> Different transport fuels produce
                different greenhouse gases (carbon dioxide, methane, nitrous oxide). CO₂e converts them all
                into a single, standardized unit so their climate impact can be compared on a like-for-like basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7: SIMPLE CARBON SCORECARD
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary fade-up">
        <div className="container">
          <div className="sust-section-heading">
            <span className="sust-eyebrow sust-eyebrow-dark"><Gauge size={13} /> EASY INTERPRETATION</span>
            <h2>Simple Carbon Scorecard</h2>
            <p>
              Instead of complicated data tables, GACIS provides a simple visual rating for every route —
              select a mode to see how it scores.
            </p>
          </div>

          <div className="sust-scorecard-shell">
            {/* Rating selector tabs */}
            <div className="sust-rating-tabs" role="tablist" aria-label="Carbon rating selection">
              <button
                type="button"
                className={`sust-rating-tab ${activeScorecardRating === 'low' ? 'active tab-green' : ''}`}
                onClick={() => setActiveScorecardRating('low')}
              >
                🌱 Low Impact (Rail)
              </button>
              <button
                type="button"
                className={`sust-rating-tab ${activeScorecardRating === 'mod' ? 'active tab-amber' : ''}`}
                onClick={() => setActiveScorecardRating('mod')}
              >
                🟡 Moderate (Road)
              </button>
              <button
                type="button"
                className={`sust-rating-tab ${activeScorecardRating === 'high' ? 'active tab-red' : ''}`}
                onClick={() => setActiveScorecardRating('high')}
              >
                🔴 High Impact (Air)
              </button>
            </div>

            <div className="sust-scorecard-header">
              <span className="sust-scorecard-lane">SHIPMENT PROFILE: Dubai ⇄ Almaty · 10 Tons Equipment</span>
              <span className={`sust-rating-chip ${scorecardData[activeScorecardRating].tagClass}`}>
                {scorecardData[activeScorecardRating].emoji} {scorecardData[activeScorecardRating].badge}
              </span>
            </div>

            {/* Visual gauge */}
            <div className="sust-gauge">
              <div className="sust-gauge-track">
                <div
                  className={`sust-gauge-marker ${scorecardData[activeScorecardRating].tagClass}`}
                  style={{ left: `${scorecardData[activeScorecardRating].index}%` }}
                >
                  <span className="sust-gauge-dot" />
                </div>
              </div>
              <div className="sust-gauge-labels">
                <span>LOW IMPACT</span>
                <span>MODERATE</span>
                <span>HIGH IMPACT</span>
              </div>
            </div>

            <p className="sust-scorecard-message">
              “{scorecardData[activeScorecardRating].msg}”
            </p>

            <div className="sust-scorecard-metrics">
              <div className="sust-scorecard-metric">
                <span className="sust-scorecard-metric-label">Transport Mode</span>
                <span className="sust-scorecard-metric-value">{scorecardData[activeScorecardRating].mode}</span>
              </div>
              <div className="sust-scorecard-metric">
                <span className="sust-scorecard-metric-label">Transit Time</span>
                <span className="sust-scorecard-metric-value tabular-nums">{scorecardData[activeScorecardRating].transit}</span>
              </div>
              <div className="sust-scorecard-metric">
                <span className="sust-scorecard-metric-label">Estimated Emissions</span>
                <span className={`sust-scorecard-metric-value tabular-nums ${activeScorecardRating === 'low' ? 'text-green' : activeScorecardRating === 'high' ? 'text-red' : 'text-gold'}`}>
                  {scorecardData[activeScorecardRating].emissions}
                </span>
              </div>
            </div>

            <button
              type="button"
              className="sust-scorecard-toggle"
              aria-expanded={showScorecardDetails}
              onClick={() => setShowScorecardDetails(!showScorecardDetails)}
            >
              {showScorecardDetails ? (
                <>Hide full comparison table <ChevronUp size={14} /></>
              ) : (
                <>See full comparison table <ChevronDown size={14} /></>
              )}
            </button>

            {showScorecardDetails && (
              <div className="sust-scorecard-table-wrap">
                <table className="sust-scorecard-table">
                  <thead>
                    <tr>
                      <th>Routing Option</th>
                      <th>Estimated CO₂e</th>
                      <th>Transit Time</th>
                      <th>Carbon Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={activeScorecardRating === 'high' ? 'selected-row' : ''}>
                      <td>Pure Air Freight</td>
                      <td>24.50 tCO₂e</td>
                      <td>2.5 Days</td>
                      <td><span className="tag-high">🔴 Higher</span></td>
                    </tr>
                    <tr className={activeScorecardRating === 'low' ? 'selected-row' : ''}>
                      <td><strong>GACIS Intermodal Rail (Selected)</strong></td>
                      <td><strong>3.10 tCO₂e</strong></td>
                      <td><strong>8.4 Days</strong></td>
                      <td><span className="tag-low">🌱 Lower</span></td>
                    </tr>
                    <tr className={activeScorecardRating === 'mod' ? 'selected-row' : ''}>
                      <td>Long-Haul Road Haulage</td>
                      <td>8.40 tCO₂e</td>
                      <td>7.0 Days</td>
                      <td><span className="tag-mid">🟡 Moderate</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8: TRUST & TRANSPARENCY (DARK)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="sust-dark-section fade-up">
        <div className="sust-dark-glow" aria-hidden="true" />
        <div className="container">
          <div className="sust-section-heading">
            <span className="sust-eyebrow"><ShieldCheck size={13} /> DATA ACCURACY</span>
            <h2 className="text-white">Clear About What We Know</h2>
            <p className="sust-lead-dark">
              We believe in total transparency. Carbon figures in logistics depend on the quality of
              available data — we always tell you which tier your number comes from.
            </p>
          </div>

          <div className="sust-trust-grid">
            <div className="sust-trust-card">
              <div className="sust-trust-icon"><Database size={20} /></div>
              <span className="sust-trust-tag tag-est">ESTIMATED</span>
              <h3 className="text-white">Estimated Data</h3>
              <p>Calculated based on standard cargo weight, origin, destination, and baseline transport mode emission factors.</p>
            </div>
            <div className="sust-trust-card">
              <div className="sust-trust-icon"><FileText size={20} /></div>
              <span className="sust-trust-tag tag-mod">MODELLED</span>
              <h3 className="text-white">Modelled Data</h3>
              <p>Calculated using routing engine assumptions where exact carrier telemetry is unavailable.</p>
            </div>
            <div className="sust-trust-card">
              <div className="sust-trust-icon"><Activity size={20} /></div>
              <span className="sust-trust-tag tag-act">ACTUAL</span>
              <h3 className="text-white">Actual Data</h3>
              <p>Calculated using direct carrier fuel telemetry, vessel activity logs, and verified shipment telemetry.</p>
            </div>
          </div>

          <div className="sust-align-note">
            <CheckCircle2 size={18} />
            <span>Designed to follow recognized freight-emissions accounting principles — GLEC v3.0 & ISO 14083.</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 9: FINAL CTA
          ═══════════════════════════════════════════════════════════════ */}
      <section className="sust-final-cta fade-up">
        <div className="sust-final-glow" aria-hidden="true" />
        <div className="container">
          <div className="sust-final-box">
            <span className="sust-eyebrow">GET STARTED TODAY</span>
            <h2 className="text-white">Let's Make Your Logistics Smarter</h2>
            <p>
              Tell us about your regular trade lanes and we'll help you understand the transportation
              options available to your business — including estimated time, cost, and environmental impact.
            </p>

            <div className="sust-final-btns">
              <Link to="/quote" className="btn btn-primary btn-large">
                CALCULATE A CORRIDOR <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline-white btn-large">
                CONTACT GACIS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
