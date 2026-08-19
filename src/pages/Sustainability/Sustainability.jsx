import { Link } from 'react-router-dom';
import { Leaf, Award, Compass, TrendingDown, ArrowRight, ShieldCheck, FileCheck, CheckCircle2, Globe2 } from 'lucide-react';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import './Sustainability.css';

const modalShifts = [
  {
    from: 'Pure Air Freight',
    to: 'Trans-Caspian Rail Block',
    savings: '75%',
    timeImpact: '+5 to 7 Days',
    idealFor: 'Automotive components, industrial machinery, non-perishable consumer electronics'
  },
  {
    from: 'Long-Haul Road Freight',
    to: 'Intermodal Rail Shuttle',
    savings: '48%',
    timeImpact: 'Zero / Lead-Time Neutral',
    idealFor: 'Bulk commodities, heavy steel coils, chemicals, retail inventory'
  },
  {
    from: 'Pure Air Freight',
    to: 'Sea-Air Hybrid (Dubai/Colombo)',
    savings: '44%',
    timeImpact: '-14 Days vs Ocean',
    idealFor: 'High-value apparel, seasonal consumer goods, medical devices'
  }
];

export const Sustainability = () => {
  return (
    <div className="sustainability-page">
      <SEO 
        title="Sustainability & Carbon Intelligence"
        description="Lower-carbon logistics by design. GACIS enables enterprise Scope 3 carbon reduction through multimodal rail substitution, sea-air optimization, and certified emissions telemetry."
        canonical="/sustainability"
      />

      {/* Hero Header */}
      <PageHeader
        eyebrow="SCOPE 3 CARBON INTELLIGENCE"
        eyebrowIcon={Leaf}
        title="Lower-carbon logistics by design."
        description="Decarbonizing global supply chains is not an abstract corporate pledge. We achieve measurable emissions reduction through mathematical corridor optimization and modal substitution."
        statusTag="CERTIFIED GLEC & EN 16258 METHODOLOGY"
      />

      {/* Carbon Intelligence Metrics Section */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">MEASURABLE ESG IMPACT</span>
            <h2>Modal Shift Architecture</h2>
            <p>
              Replacing carbon-heavy linehauls with high-capacity intermodal rail and sea-air corridors delivers dramatic scope 3 emissions reductions without sacrificing supply chain resilience.
            </p>
          </div>

          <div className="modal-shift-grid">
            {modalShifts.map((shift, idx) => (
              <div className="shift-card" key={idx}>
                <div className="shift-badge-row">
                  <span className="shift-save-badge">-{shift.savings} CO₂e</span>
                  <span className="shift-time-tag">{shift.timeImpact}</span>
                </div>

                <div className="shift-route-indicator">
                  <div className="sri-item from">
                    <span className="sri-lbl">BASELINE</span>
                    <span className="sri-mode">{shift.from}</span>
                  </div>
                  <div className="sri-arrow">
                    <ArrowRight size={18} />
                  </div>
                  <div className="sri-item to">
                    <span className="sri-lbl">GACIS OPTIMIZED</span>
                    <span className="sri-mode">{shift.to}</span>
                  </div>
                </div>

                <div className="shift-ideal">
                  <span className="si-label">OPTIMAL APPLICATION:</span>
                  <p>{shift.idealFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Matrix & Case Study */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="sustain-matrix-wrapper">
            <div className="smw-content">
              <span className="eyebrow">CORRIDOR BENCHMARK</span>
              <h2>Dubai ⇄ Almaty Transit Comparison</h2>
              <p>
                How GACIS multimodal rail integration outperforms both pure air and all-water alternatives across time, cost, and environmental metrics.
              </p>

              <div className="benchmark-rows">
                <div className="bm-row">
                  <div className="bm-header">
                    <span className="bm-name">Standard Pure Airfreight</span>
                    <span className="bm-val tabular-nums">5.42 tCO₂e • 1.8 Days • $$$$</span>
                  </div>
                  <div className="bm-bar-track">
                    <div className="bm-bar-fill air" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div className="bm-row active-bm">
                  <div className="bm-header">
                    <span className="bm-name text-gold">GACIS Intermodal Rail (Recommended)</span>
                    <span className="bm-val text-gold tabular-nums">1.82 tCO₂e • 8.4 Days • $$</span>
                  </div>
                  <div className="bm-bar-track">
                    <div className="bm-bar-fill gacis-rail" style={{ width: '33.5%' }}></div>
                  </div>
                  <span className="bm-saving-callout">-31.8% Carbon Reduction vs Baseline</span>
                </div>

                <div className="bm-row">
                  <div className="bm-header">
                    <span className="bm-name">All-Water Ocean + Feeder</span>
                    <span className="bm-val tabular-nums">1.14 tCO₂e • 32.0 Days • $</span>
                  </div>
                  <div className="bm-bar-track">
                    <div className="bm-bar-fill ocean" style={{ width: '21%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculation Methodology & Governance */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">GOVERNANCE & STANDARDS</span>
            <h2>Emissions Accounting Methodology</h2>
            <p>
              Our carbon telemetry adheres to internationally recognized carbon calculation frameworks, enabling direct integration into your annual ESG reporting.
            </p>
          </div>

          <div className="methodology-grid">
            <div className="method-card">
              <div className="method-icon"><ShieldCheck size={24} /></div>
              <h4>GLEC Framework Compliant</h4>
              <p>Emissions calculations follow the Global Logistics Emissions Council (GLEC) Framework (ISO 14083), factoring in fuel burn, load factors, and empty return mileage.</p>
            </div>

            <div className="method-card">
              <div className="method-icon"><FileCheck size={24} /></div>
              <h4>Scope 3 Freight Reporting</h4>
              <p>Clients receive quarterly verified shipment emissions certificates detailing Well-to-Wheel (WTW) and Tank-to-Wheel (TTW) carbon metrics for audit compliance.</p>
            </div>

            <div className="method-card">
              <div className="method-icon"><Globe2 size={24} /></div>
              <h4>Green Gateway Preferential Routing</h4>
              <p>Where available, we prioritize ocean vessels operating with bio-LNG blends and electrified rail corridors with zero direct tailpipe emissions.</p>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="sustain-cta-strip bg-dark">
            <div className="scs-content">
              <h4>Request a Carbon Baseline Audit for Your Trade Lanes</h4>
              <p>Our sustainability analysts will benchmark your current freight routing and model potential emissions savings.</p>
            </div>
            <Link to="/quote" className="btn btn-primary">
              Request Carbon Audit <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
