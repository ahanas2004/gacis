import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, Plane, Ship, Truck, Train, ArrowRight, ArrowDown, ShieldCheck, 
  CheckCircle2, Globe2, HelpCircle, ChevronDown, ChevronUp, Clock, 
  DollarSign, BarChart3, Compass, Check, AlertCircle, RefreshCw, Send,
  Zap, Layers, Cpu, Award, Trees, Box, FileCheck
} from 'lucide-react';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import { calculateFullRoute } from '../../data/routeCalculationEngine';
import './Sustainability.css';

export const Sustainability = () => {
  // ─── Section 3 Interactive Route Comparator State ───────────────────────
  const [selectedCorridor, setSelectedCorridor] = useState('dubai-almaty');
  
  const corridorConfigs = {
    'dubai-almaty': { origin: 'dubai', dest: 'almaty', label: 'Dubai (UAE) ⇄ Almaty (Kazakhstan)', defaultCargo: 'Industrial Machinery' },
    'chennai-frankfurt': { origin: 'chennai', dest: 'frankfurt', label: 'Chennai (India) ⇄ Frankfurt (Germany)', defaultCargo: 'Automotive CKD' },
    'klang-hamburg': { origin: 'klang', dest: 'hamburg', label: 'Port Klang (Malaysia) ⇄ Hamburg (Germany)', defaultCargo: 'High-Tech Electronics' }
  };

  const activeConfig = corridorConfigs[selectedCorridor];
  const routeAir = calculateFullRoute({ originId: activeConfig.origin, destId: activeConfig.dest, cargoType: activeConfig.defaultCargo, priority: 'Urgent', mode: 'AIR' });
  const routeRail = calculateFullRoute({ originId: activeConfig.origin, destId: activeConfig.dest, cargoType: activeConfig.defaultCargo, priority: 'Standard', mode: 'RAIL' });

  const airCO2 = routeAir ? (routeAir.convCO2 * 3.2).toFixed(2) : '24.50';
  const railCO2 = routeRail ? routeRail.optCO2.toFixed(2) : '3.10';
  const co2Saved = Math.max(0, (parseFloat(airCO2) - parseFloat(railCO2)).toFixed(2));
  const percentSaved = Math.round(((parseFloat(airCO2) - parseFloat(railCO2)) / parseFloat(airCO2)) * 100);
  const treesEquivalent = Math.round(parseFloat(co2Saved) * 45); // Approx 45 trees per ton CO2 saved/yr

  // ─── Section 4 Modal Shift Tab State ─────────────────────────────────────
  const [activeModalTab, setActiveModalTab] = useState('air-rail');

  const modalShiftData = {
    'air-rail': {
      title: 'AIR → INTERMODAL RAIL',
      fromMode: '✈️ Pure Air Freight',
      toMode: '🚆 Trans-Eurasian Block Train',
      baselineCO2: '24.50 tCO₂e',
      optimizedCO2: '3.10 tCO₂e',
      reduction: '-87%',
      baselineTime: '2.5 Days',
      optimizedTime: '8.4 Days',
      howGacisDoesIt: 'We route cargo via electric rail shuttles connecting Caspian ports to Central Asian dry hubs, maintaining high security while avoiding high-altitude flight emissions.',
      idealFor: 'Automotive components, industrial machinery, non-perishable electronics, and consumer retail.'
    },
    'road-rail': {
      title: 'ROAD TRUCKING → RAIL SHUTTLE',
      fromMode: '🚛 Long-Haul Trucking',
      toMode: '🚆 Intermodal Rail Express',
      baselineCO2: '8.40 tCO₂e',
      optimizedCO2: '3.10 tCO₂e',
      reduction: '-63%',
      baselineTime: '7.0 Days',
      optimizedTime: '8.4 Days',
      howGacisDoesIt: 'We replace long-distance diesel truck linehauls with scheduled block trains, using trucks only for short first-mile pick-up and last-mile delivery.',
      idealFor: 'Heavy steel coils, raw chemicals, construction materials, and high-volume containerized inventory.'
    },
    'air-sea': {
      title: 'AIR → SEA-AIR MULTIMODAL',
      fromMode: '✈️ Pure Air Freight',
      toMode: '🚢+✈️ Sea-Air Hybrid (via Dubai)',
      baselineCO2: '24.50 tCO₂e',
      optimizedCO2: '2.40 tCO₂e',
      reduction: '-90%',
      baselineTime: '2.5 Days',
      optimizedTime: '10.2 Days',
      howGacisDoesIt: 'Cargo moves by ocean vessel from Asia to Dubai, transfers rapidly at Jebel Ali Freezone, and flies the final leg to Europe—cutting costs by 50% and emissions by 90%.',
      idealFor: 'Fashion apparel, seasonal consumer goods, electronics accessories, and planned inventory replenishment.'
    }
  };

  // ─── Section 5 Expandable Methodology State ──────────────────────────────
  const [showMethodologyDetails, setShowMethodologyDetails] = useState(false);

  // ─── Section 7 Scorecard Toggle State ─────────────────────────────────────
  const [showScorecardDetails, setShowScorecardDetails] = useState(false);

  return (
    <div className="sustainability-page">
      <SEO 
        title="Lower-Carbon Logistics by Design — GACIS Sustainability"
        description="GACIS enables enterprise Scope 3 carbon reduction through multimodal rail substitution, sea-air optimization, and certified emissions reporting."
        canonical="/sustainability"
      />

      {/* ═══════════════════════════════════════════════════════════════
          STANDARD GACIS PAGE HEADER (Matches All Subpages)
          ═══════════════════════════════════════════════════════════════ */}
      <PageHeader
        eyebrow="SCOPE 3 CARBON REDUCTION"
        eyebrowIcon={Leaf}
        title="Lower-Carbon Logistics by Design"
        description="Moving cargo powers global trade, but every ship, plane, truck, and train uses energy. GACIS helps companies measure their freight carbon footprint and explore smarter, lower-carbon ways to keep supply chains moving."
        statusTag="CERTIFIED GLEC & EN 16258 METHODOLOGY"
      >
        <div className="sust-header-actions">
          <Link to="/quote" className="btn btn-primary">
            CALCULATE ROUTE & AUDIT <ArrowRight size={15} />
          </Link>
          <Link to="/contact" className="btn btn-outline-white">
            TALK TO SUSTAINABILITY TEAM
          </Link>
        </div>
      </PageHeader>

      {/* Quick Impact Stats Strip */}
      <div className="sust-stats-strip bg-primary">
        <div className="container">
          <div className="sss-grid">
            <div className="sss-card">
              <span className="sss-num text-green">-75% CO₂e</span>
              <span className="sss-lbl">Via Intermodal Rail Shift</span>
            </div>
            <div className="sss-card">
              <span className="sss-num text-gold">GLEC v3.0</span>
              <span className="sss-lbl">ISO 14083 Accounting Standard</span>
            </div>
            <div className="sss-card">
              <span className="sss-num text-primary">16 Hubs</span>
              <span className="sss-lbl">Green Trade Corridor Network</span>
            </div>
            <div className="sss-card">
              <span className="sss-num text-green">100% Scope 3</span>
              <span className="sss-lbl">Audit-Ready Carbon Certification</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: WHAT IS A CARBON FOOTPRINT? (EXPLAINED SIMPLY)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary fade-up">
        <div className="container">
          <div className="section-heading text-center centered-heading">
            <span className="eyebrow text-gold">EASY TO UNDERSTAND</span>
            <h2>What Does "Freight Carbon Footprint" Mean?</h2>
            <p className="sust-lead-text">
              Whenever goods travel by air, ocean, road, or rail, engines consume fuel and release greenhouse gases. A freight carbon footprint is simply the total estimated weight of carbon emissions generated to transport your shipment from origin to destination.
            </p>
          </div>

          <div className="sust-plain-card">
            <div className="spc-badge">💡 A SIMPLE EXAMPLE FOR EVERYONE</div>
            <p>
              Imagine shipping <strong>10 tons of machinery</strong> from Dubai to Almaty. Flying it on an airplane burns massive amounts of jet fuel in hours. Shipping it by ocean vessel and electric block train uses significantly less fuel per ton of cargo. <strong>Same shipment, different transport modes = drastically different carbon footprint.</strong>
            </p>
          </div>

          <div className="sust-modes-grid">
            <div className="sust-mode-card">
              <div className="smc-header">
                <div className="smc-icon air"><Plane size={22} /></div>
                <h3>✈️ AIR FREIGHT</h3>
              </div>
              <span className="smc-badge tag-high">Highest Carbon Footprint</span>
              <p className="smc-desc">Fastest transit (1-2 days). Uses high-altitude jet fuel burn (~0.572 kg CO₂/tkm). Best saved for urgent medical or emergency linehaul.</p>
            </div>

            <div className="sust-mode-card">
              <div className="smc-header">
                <div className="smc-icon road"><Truck size={22} /></div>
                <h3>🚛 ROAD TRUCKING</h3>
              </div>
              <span className="smc-badge tag-mid">Flexible • Moderate Footprint</span>
              <p className="smc-desc">Essential for door-to-door delivery. Emissions depend on truck diesel efficiency (~0.078 kg CO₂/tkm) and highway distance.</p>
            </div>

            <div className="sust-mode-card">
              <div className="smc-header">
                <div className="smc-icon sea"><Ship size={22} /></div>
                <h3>🚢 OCEAN FREIGHT</h3>
              </div>
              <span className="smc-badge tag-low">Lowest Footprint per Ton</span>
              <p className="smc-desc">Ultra-efficient for large volumes over water (~0.010 kg CO₂/tkm). Takes longer, but moves thousands of containers simultaneously.</p>
            </div>

            <div className="sust-mode-card">
              <div className="smc-header">
                <div className="smc-icon rail"><Train size={22} /></div>
                <h3>🚆 INTERMODAL RAIL</h3>
              </div>
              <span className="smc-badge tag-low">Very Low Carbon Alternative</span>
              <p className="smc-desc">Runs on electric/diesel rail tracks (~0.028 kg CO₂/tkm). Provides the ideal balance between speed and low carbon over long land corridors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: HOW GACIS WORKS IN SUSTAINABILITY (4 PILLARS)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-primary fade-up">
        <div className="container">
          <div className="section-heading text-center centered-heading">
            <span className="eyebrow text-red">OUR OPERATIONAL EXECUTION</span>
            <h2>How GACIS Works in Sustainability</h2>
            <p className="sust-lead-text">
              Sustainability is not an abstract corporate slogan. GACIS builds lower-carbon logistics directly into our daily operational workflows through four proven mechanisms:
            </p>
          </div>

          <div className="sust-pillars-grid">
            <div className="sust-pillar-box">
              <div className="spb-num">01</div>
              <div className="spb-icon"><Layers size={22} /></div>
              <h3>Modal Shift Engineering</h3>
              <p>We analyze your trade lanes and identify opportunities to shift cargo from high-emission air freight to intermodal rail or sea-air corridors without disrupting your delivery deadlines.</p>
            </div>

            <div className="sust-pillar-box">
              <div className="spb-num">02</div>
              <div className="spb-icon"><BarChart3 size={22} /></div>
              <h3>Real-Time GLEC Carbon Modeling</h3>
              <p>Our calculation engine applies official GLEC v3.0 emission factors and WGS84 Haversine distance math to calculate accurate kg CO₂e metrics for every single shipment mode.</p>
            </div>

            <div className="sust-pillar-box">
              <div className="spb-num">03</div>
              <div className="spb-icon"><Box size={22} /></div>
              <h3>Smart Container Consolidation</h3>
              <p>Shipping empty container space wastes fuel. We maximize cargo fill rates through advanced LCL consolidation hubs, lowering the carbon footprint per unit of cargo moved.</p>
            </div>

            <div className="sust-pillar-box">
              <div className="spb-num">04</div>
              <div className="spb-icon"><Zap size={22} /></div>
              <h3>Green Gateway Preferential Routing</h3>
              <p>We prioritize ocean carriers using LNG/Methanol vessels and rail operators running on electrified European and Eurasian grid networks with zero direct tailpipe emissions.</p>
            </div>
          </div>

          <div className="sust-balance-callout">
            <div className="sbc-icon"><Compass size={24} className="text-gold" /></div>
            <div className="sbc-text">
              <h4>The GACIS Balanced Decision Principle</h4>
              <p>The best logistics solution is a practical balance between <strong>SPEED (Time)</strong>, <strong>COMMERCIAL COST</strong>, <strong>ROUTE RELIABILITY</strong>, and <strong>ENVIRONMENTAL IMPACT (Carbon)</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: LIVE ROUTE & CARBON COMPARATOR (BEFORE & AFTER)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary fade-up">
        <div className="container">
          <div className="section-heading text-center centered-heading">
            <span className="eyebrow text-gold">INTERACTIVE MODEL</span>
            <h2>See How a Different Route Makes a Difference</h2>
            <p>Select a trade lane below to compare the estimated carbon footprint and transit time of conventional air freight vs. GACIS multimodal rail:</p>
          </div>

          {/* Corridor Selection Pills */}
          <div className="sust-corridor-selector">
            {Object.entries(corridorConfigs).map(([key, config]) => (
              <button
                key={key}
                type="button"
                className={`scs-btn ${selectedCorridor === key ? 'active' : ''}`}
                onClick={() => setSelectedCorridor(key)}
              >
                {config.label}
              </button>
            ))}
          </div>

          {/* Before & After Comparison Cards */}
          <div className="sust-comparison-container">
            <div className="scc-card current-route">
              <span className="scc-badge badge-red">CONVENTIONAL ROUTE</span>
              <h3>Pure Airfreight Express</h3>
              <p className="scc-sub">High-altitude jet engine fuel burn</p>
              
              <div className="scc-stat">
                <span className="scc-label">Estimated Carbon Footprint</span>
                <span className="scc-value text-red">{airCO2} <small>tCO₂e</small></span>
              </div>

              <div className="scc-stat">
                <span className="scc-label">Estimated Transit Time</span>
                <span className="scc-value">{routeAir ? `${routeAir.transitTime} Days` : '2.5 Days'}</span>
              </div>
            </div>

            <div className="scc-vs-badge">
              <div className="svb-circle"><ArrowRight size={22} /></div>
              <span className="svb-save-tag">{percentSaved}% LESS CO₂</span>
            </div>

            <div className="scc-card optimized-route">
              <span className="scc-badge badge-green">GACIS OPTIMIZED APPROACH</span>
              <h3>Multimodal Intermodal Rail</h3>
              <p className="scc-sub">Sea + Electric Block Train Corridor</p>
              
              <div className="scc-stat">
                <span className="scc-label">Estimated Carbon Footprint</span>
                <span className="scc-value text-green">{railCO2} <small>tCO₂e</small></span>
              </div>

              <div className="scc-stat">
                <span className="scc-label">Estimated Transit Time</span>
                <span className="scc-value">{routeRail ? `${routeRail.transitTime} Days` : '8.4 Days'}</span>
              </div>
            </div>
          </div>

          {/* Real-World Impact Callout */}
          <div className="sust-impact-banner">
            <Trees size={24} className="text-green flex-shrink-0" />
            <div>
              <strong>Environmental Impact Result:</strong> Choosing the GACIS optimized rail approach saves approximately <strong>{co2Saved} tons of CO₂e</strong> on this shipment—equivalent to the annual carbon absorbed by <strong>~{treesEquivalent} mature trees!</strong>
            </div>
          </div>

          <p className="sust-disclaimer text-center">
            * Estimated based on route distance and 10 Ton cargo weight assumptions. Illustrative model for trade lane evaluation.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: MODAL SHIFT SIMULATOR (3 DETAILED CASE CARDS)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-primary fade-up">
        <div className="container">
          <div className="section-heading text-center centered-heading">
            <span className="eyebrow text-gold">REAL-WORLD MODAL SHIFTS</span>
            <h2>Sometimes, Changing the Mode Changes the Impact</h2>
            <p>Click an option below to explore how switching transportation modes changes emissions and lead time:</p>
          </div>

          <div className="sust-tab-bar">
            <button 
              type="button" 
              className={`stb-tab ${activeModalTab === 'air-rail' ? 'active' : ''}`}
              onClick={() => setActiveModalTab('air-rail')}
            >
              AIR → RAIL
            </button>
            <button 
              type="button" 
              className={`stb-tab ${activeModalTab === 'road-rail' ? 'active' : ''}`}
              onClick={() => setActiveModalTab('road-rail')}
            >
              ROAD → RAIL
            </button>
            <button 
              type="button" 
              className={`stb-tab ${activeModalTab === 'air-sea' ? 'active' : ''}`}
              onClick={() => setActiveModalTab('air-sea')}
            >
              AIR → SEA-AIR
            </button>
          </div>

          {modalShiftData[activeModalTab] && (
            <div className="sust-shift-box">
              <div className="ssb-header">
                <div>
                  <h3>{modalShiftData[activeModalTab].title}</h3>
                  <span className="ssb-route-text">{modalShiftData[activeModalTab].fromMode} ➔ {modalShiftData[activeModalTab].toMode}</span>
                </div>
                <span className="ssb-badge-save">{modalShiftData[activeModalTab].reduction} Carbon Reduction</span>
              </div>

              <div className="ssb-grid">
                <div className="ssb-item">
                  <span className="ssb-lbl">ESTIMATED CARBON IMPACT</span>
                  <div className="ssb-val-row">
                    <span className="ssb-old">{modalShiftData[activeModalTab].baselineCO2}</span>
                    <ArrowRight size={16} />
                    <span className="ssb-new text-green">{modalShiftData[activeModalTab].optimizedCO2}</span>
                  </div>
                </div>

                <div className="ssb-item">
                  <span className="ssb-lbl">TRANSIT IMPACT</span>
                  <div className="ssb-val-row">
                    <span className="ssb-old">{modalShiftData[activeModalTab].baselineTime}</span>
                    <ArrowRight size={16} />
                    <span className="ssb-new">{modalShiftData[activeModalTab].optimizedTime}</span>
                  </div>
                </div>
              </div>

              <div className="ssb-explanation">
                <div className="ssb-exp-block">
                  <strong>How GACIS Executes This:</strong>
                  <p>{modalShiftData[activeModalTab].howGacisDoesIt}</p>
                </div>
                <div className="ssb-exp-block">
                  <strong>Best Suited Cargo:</strong>
                  <p>{modalShiftData[activeModalTab].idealFor}</p>
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
          <div className="section-heading text-center centered-heading">
            <span className="eyebrow text-gold">4 SIMPLE STEPS</span>
            <h2>How Do We Estimate Your Shipment's Carbon Footprint?</h2>
            <p className="sust-lead-text">
              We use information about your cargo and how it travels to estimate the emissions generated along every leg of the journey:
            </p>
          </div>

          <div className="sust-process-row">
            <div className="spr-step">
              <div className="spr-num">1</div>
              <h4>YOUR CARGO</h4>
              <p>Weight, volume, and cargo type classification</p>
            </div>
            <div className="spr-arrow"><ArrowRight size={20} /></div>

            <div className="spr-step">
              <div className="spr-num">2</div>
              <h4>YOUR JOURNEY</h4>
              <p>Origin port, destination dry hub, and transshipment stops</p>
            </div>
            <div className="spr-arrow"><ArrowRight size={20} /></div>

            <div className="spr-step">
              <div className="spr-num">3</div>
              <h4>HOW IT MOVES</h4>
              <p>Air, ocean, intermodal rail, or road transport modes</p>
            </div>
            <div className="spr-arrow"><ArrowRight size={20} /></div>

            <div className="spr-step spr-highlight">
              <div className="spr-num">4</div>
              <h4>ESTIMATED IMPACT</h4>
              <p>Approximate CO₂e carbon report in metric tonnes</p>
            </div>
          </div>

          {/* Expandable Technical Methodology Section */}
          <div className="sust-method-accordion">
            <button 
              type="button" 
              className="sma-btn"
              onClick={() => setShowMethodologyDetails(!showMethodologyDetails)}
            >
              <span>Want to know more about our calculation methodology?</span>
              {showMethodologyDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {showMethodologyDetails && (
              <div className="sma-body">
                <h4>Technical Accounting Framework Details</h4>
                <p>
                  Our calculations follow standard freight emission factors (kg CO₂e per tonne-kilometer) based on the Global Logistics Emissions Council (GLEC) Framework v3.0 / ISO 14083:
                </p>
                <ul>
                  <li><strong>Air Cargo:</strong> ~0.572 kg CO₂e / tonne-km (Jet fuel burn at altitude)</li>
                  <li><strong>Road Haulage:</strong> ~0.078 kg CO₂e / tonne-km (Heavy diesel tractor-trailer)</li>
                  <li><strong>Intermodal Rail:</strong> ~0.028 kg CO₂e / tonne-km (Electric / diesel block train)</li>
                  <li><strong>Ocean Container:</strong> ~0.010 kg CO₂e / tonne-km (Deepsea container vessel linehaul)</li>
                </ul>
                <p className="sma-note">
                  Distances are calculated using WGS84 geographic coordinates adjusted for real-world routing multipliers (ocean channels, road networks, and railway corridors).
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6: WHAT IS CO₂e?
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding-sm bg-primary fade-up">
        <div className="container">
          <div className="sust-co2e-banner">
            <HelpCircle size={28} className="text-gold flex-shrink-0" />
            <div>
              <h3>What is CO₂e?</h3>
              <p>
                <strong>CO₂e means Carbon Dioxide Equivalent.</strong> Different transport fuels produce different greenhouse gases (like carbon dioxide, methane, and nitrous oxide). CO₂e converts all of them into a single, standardized unit so their climate impact can be easily compared.
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
          <div className="section-heading text-center centered-heading">
            <span className="eyebrow text-gold">EASY INTERPRETATION</span>
            <h2>Simple Carbon Scorecard</h2>
            <p>Instead of forcing you to navigate complicated data tables, GACIS provides a simple visual rating for every route:</p>
          </div>

          <div className="sust-scorecard-card">
            <div className="ssc-header">
              <span className="ssc-lane">SHIPMENT: Dubai ⇄ Almaty (10 Tons Industrial Equipment)</span>
              <span className="ssc-rating-chip rating-low">🌱 LOWER CARBON RATING</span>
            </div>

            <div className="ssc-body">
              <p className="ssc-summary-msg">
                "Lower estimated carbon impact compared with the alternative pure air freight route."
              </p>

              <div className="ssc-metrics-row">
                <div className="smr-box">
                  <span className="smr-lbl">Transport Mode</span>
                  <span className="smr-val">Intermodal Rail</span>
                </div>
                <div className="smr-box">
                  <span className="smr-lbl">Transit Time</span>
                  <span className="smr-val">8.4 Days</span>
                </div>
                <div className="smr-box">
                  <span className="smr-lbl">Estimated Emissions</span>
                  <span className="smr-val text-green">3.10 tCO₂e</span>
                </div>
              </div>

              <button 
                type="button" 
                className="ssc-details-toggle"
                onClick={() => setShowScorecardDetails(!showScorecardDetails)}
              >
                {showScorecardDetails ? 'Hide full details ▲' : 'See full details ▼'}
              </button>

              {showScorecardDetails && (
                <div className="ssc-details-table-wrap">
                  <table className="ssc-table">
                    <thead>
                      <tr>
                        <th>Routing Option</th>
                        <th>Estimated CO₂e</th>
                        <th>Transit Time</th>
                        <th>Carbon Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pure Air Freight</td>
                        <td>24.50 tCO₂e</td>
                        <td>2.5 Days</td>
                        <td><span className="tag-high">🔴 Higher</span></td>
                      </tr>
                      <tr className="selected-row">
                        <td><strong>GACIS Intermodal Rail (Selected)</strong></td>
                        <td><strong>3.10 tCO₂e</strong></td>
                        <td><strong>8.4 Days</strong></td>
                        <td><span className="tag-low">🌱 Lower</span></td>
                      </tr>
                      <tr>
                        <td>All-Water Ocean + Feeder</td>
                        <td>2.40 tCO₂e</td>
                        <td>32.0 Days</td>
                        <td><span className="tag-low">🌱 Lower</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8: TRUST & TRANSPARENCY
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-primary fade-up">
        <div className="container">
          <div className="section-heading text-center centered-heading">
            <span className="eyebrow text-gold">DATA ACCURACY</span>
            <h2>Clear About What We Know</h2>
            <p className="sust-lead-text">
              We believe in total transparency. Carbon figures in logistics depend on the quality of available data:
            </p>
          </div>

          <div className="sust-trust-cards">
            <div className="stc-box">
              <span className="stc-tag tag-est">ESTIMATED</span>
              <h3>Estimated Data</h3>
              <p>Calculated based on standard cargo weight, origin, destination, and baseline transport mode emission factors.</p>
            </div>

            <div className="stc-box">
              <span className="stc-tag tag-mod">MODELLED</span>
              <h3>Modelled Data</h3>
              <p>Calculated using routing engine assumptions where exact carrier telemetry is unavailable.</p>
            </div>

            <div className="stc-box">
              <span className="stc-tag tag-act">ACTUAL</span>
              <h3>Actual Data</h3>
              <p>Calculated using direct carrier fuel telemetry, vessel activity logs, and verified shipment telemetry.</p>
            </div>
          </div>

          <div className="sust-alignment-note">
            <ShieldCheck size={22} className="text-gold" />
            <span>Designed to follow recognized freight-emissions accounting principles.</span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 9: FINAL CTA
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-dark text-white fade-up">
        <div className="container text-center">
          <div className="sust-final-box">
            <span className="eyebrow text-gold">GET STARTED TODAY</span>
            <h2 className="text-white">Let's Make Your Logistics Smarter</h2>
            <p className="sust-final-lead">
              Tell us about your regular trade lanes and we'll help you understand the transportation options available to your business — including their estimated time, cost and environmental impact.
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
