import { useParams, Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, PhoneCall, Leaf, Globe2, Compass, Zap, Award, Check,
  Plane, Ship, Truck, Train, ShieldCheck, Boxes, Activity, Gauge, BarChart3
} from 'lucide-react';
import { services } from '../../data/services';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import FadeImage from '../../components/Common/FadeImage';
import './ServicePage.css';

const modeColors = {
  AIR: { accent: '#d4a843', bg: 'rgba(212,168,67,0.12)', label: 'AIR FREIGHT' },
  SEA: { accent: '#0284c7', bg: 'rgba(2,132,199,0.12)', label: 'OCEAN FREIGHT' },
  ROAD: { accent: '#ea580c', bg: 'rgba(234,88,12,0.12)', label: 'ROAD FREIGHT' },
  RAIL: { accent: '#16a34a', bg: 'rgba(22,163,74,0.12)', label: 'RAIL FREIGHT' },
  COLD: { accent: '#0ea5e9', bg: 'rgba(14,165,233,0.12)', label: 'COLD CHAIN' },
  CUSTOMS: { accent: '#c8202f', bg: 'rgba(200,32,47,0.12)', label: 'CUSTOMS' },
  PROJECT: { accent: '#92400e', bg: 'rgba(146,64,14,0.12)', label: 'PROJECT' },
};

const iconMap = { Plane, Ship, Truck, Train, ShieldCheck, Boxes };

const ServicePageTemplate = ({ serviceData }) => {
  const { serviceId } = useParams();
  const data = serviceData || services.find(s => s.id === serviceId) || services[0];
  const article = /^[aeiou]/i.test(data.shortTitle) ? 'an' : 'a';
  const modeStyle = modeColors[data.mode] || modeColors.AIR;
  const Icon = iconMap[data.icon] || Boxes;

  return (
    <div className="service-page">
      <SEO
        title={`${data.title} — Proven Multimodal Capabilities & Execution`}
        description={data.tagline}
        canonical={`/services/${data.id}`}
      />

      <PageHeader
        backLink={{ to: '/services', label: 'Back to All Freight Services' }}
        eyebrow={`${data.mode} FREIGHT INTELLIGENCE`}
        title={data.title}
        description={data.tagline}
        statusTag={`${modeStyle.label}: ${data.leadTime}`}
        videoSrc={data.videoSrc}
      />

      <section className="section-padding bg-primary">
        <div className="container">
          <div className="service-page-grid">

            {/* ── Main Content ── */}
            <div className="service-page-main">

              {/* Hero Image */}
              {data.image && (
                <div className="sp-hero-image-wrap">
                  <FadeImage src={data.image} alt={data.title} className="sp-hero-image" />
                  <div className="sp-overlay-badge">
                    <Globe2 size={15} /> <span>Coverage: {data.coverage}</span>
                  </div>
                </div>
              )}

              {/* Proven Metrics */}
              {data.provenMetrics && (
                <div className="sp-metrics-block" style={{ borderLeftColor: modeStyle.accent, background: modeStyle.bg }}>
                  <span className="eyebrow" style={{ color: modeStyle.accent }}>PROVEN OPERATIONAL KPIs</span>
                  <h3 className="sp-metrics-title">Real-Time Performance Metrics</h3>
                  <div className="sp-metrics-grid">
                    {data.provenMetrics.map((m, idx) => (
                      <div className="sp-metric-card" key={idx}>
                        <span className="sp-m-val tabular-nums" style={{ color: modeStyle.accent }}>{m.value}</span>
                        <span className="sp-m-lbl">{m.label}</span>
                        <span className="sp-m-sub">{m.sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Overview */}
              <div className="sp-section">
                <span className="eyebrow">OPERATIONAL ARCHITECTURE</span>
                <h2>Linehaul Execution & Value Proposition</h2>
                <p className="sp-body">{data.overview}</p>
              </div>

              {/* Features */}
              {data.features && (
                <div className="sp-section">
                  <span className="eyebrow">PROVEN CAPABILITIES & FEATURES</span>
                  <h3>What We Deliver on Every Shipment</h3>
                  <div className="sp-features-grid">
                    {data.features.map((feat, idx) => (
                      <div className="sp-feature-card" key={idx}>
                        <CheckCircle2 size={18} className="sp-feature-icon" style={{ color: modeStyle.accent }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Capabilities */}
              <div className="sp-section">
                <span className="eyebrow">CORE CAPABILITIES</span>
                <h3>Service Delivery Capabilities</h3>
                <div className="sp-caps-grid">
                  {data.capabilities.map((cap, i) => (
                    <div className="sp-cap-card" key={i}>
                      <div className="sp-cap-icon"><CheckCircle2 size={18} /></div>
                      <div>
                        <h4>{cap.name}</h4>
                        <p>{cap.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How GACIS Does It */}
              {data.howGacisDoesIt && (
                <div className="sp-how-block">
                  <div className="sp-how-header">
                    <span className="eyebrow" style={{ color: modeStyle.accent }}>EXECUTION METHODOLOGY</span>
                    <h3>{data.howGacisDoesIt.headline}</h3>
                    <p className="sp-how-summary">{data.howGacisDoesIt.summary}</p>
                  </div>
                  <div className="sp-pillars-grid">
                    {data.howGacisDoesIt.pillars.map((pillar, pIdx) => (
                      <div className="sp-pillar-card" key={pIdx}>
                        <div className="sp-pillar-num tabular-nums">0{pIdx + 1}</div>
                        <h4>{pillar.title}</h4>
                        <p>{pillar.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Case Study */}
              {data.provenCaseStudy && (
                <div className="sp-case-study">
                  <div className="sp-cs-badge-row">
                    <span className="sp-cs-badge"><Award size={14} /> PROVEN CASE STUDY</span>
                    <span className="sp-cs-sector">{data.provenCaseStudy.clientSector}</span>
                  </div>
                  <h3 className="sp-cs-title">{data.provenCaseStudy.title}</h3>
                  <div className="sp-cs-grid">
                    <div className="sp-cs-col">
                      <span className="sp-cs-lbl" style={{ color: modeStyle.accent }}>THE CHALLENGE</span>
                      <p>{data.provenCaseStudy.challenge}</p>
                    </div>
                    <div className="sp-cs-col">
                      <span className="sp-cs-lbl" style={{ color: modeStyle.accent }}>GACIS SOLUTION</span>
                      <p>{data.provenCaseStudy.solution}</p>
                    </div>
                  </div>
                  <div className="sp-cs-results">
                    <span className="sp-cs-lbl" style={{ color: modeStyle.accent }}>MEASURABLE ROI & RESULTS</span>
                    <ul>
                      {data.provenCaseStudy.results.map((res, rIdx) => (
                        <li key={rIdx}><Check size={16} className="sp-check-green" /> <span>{res}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Technical Specs */}
              {data.technicalSpecs && (
                <div className="sp-specs-block">
                  <span className="eyebrow">EQUIPMENT & COMPLIANCE SPECS</span>
                  <h3>Technical Specifications & Operating Limits</h3>
                  <div className="sp-specs-table">
                    {data.technicalSpecs.map((spec, sIdx) => (
                      <div className="sp-spec-row" key={sIdx}>
                        <span className="sp-spec-label">{spec.label}</span>
                        <span className="sp-spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Workflow */}
              {data.workflow && (
                <div className="sp-workflow-block">
                  <span className="eyebrow">MILESTONE EXECUTION</span>
                  <h3>End-to-End Operational Workflow</h3>
                  <div className="sp-workflow-grid">
                    {data.workflow.map((wf) => (
                      <div className="sp-wf-step" key={wf.step}>
                        <div className="sp-wf-num tabular-nums" style={{ color: modeStyle.accent }}>{wf.step}</div>
                        <div>
                          <h4>{wf.title}</h4>
                          <p>{wf.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sustainability */}
              <div className="sp-sustain-box">
                <Leaf size={24} className="sp-sust-icon" style={{ color: modeStyle.accent }} />
                <div>
                  <h4>Carbon & ESG Profile</h4>
                  <p>{data.co2Profile}. Integrated with GLEC-compliant emissions tracking.</p>
                </div>
              </div>

              {/* CTA */}
              <div className="sp-cta-card">
                <div className="sp-cta-glow" aria-hidden="true" />
                <div className="sp-cta-content">
                  <div className="sp-cta-badge-row">
                    <span className="sp-cta-badge">
                      <Zap size={13} /> DIRECT LEAD GENERATOR & ALLOCATION DESK
                    </span>
                    <span className="sp-cta-live">
                      <span className="sp-cta-dot" /> 24/7 DESK ACTIVE
                    </span>
                  </div>
                  <h3 className="sp-cta-title">Simulate & Book {article} {data.shortTitle} Linehaul</h3>
                  <p className="sp-cta-desc">
                    Get an instant rate quote, lead-time estimate, and guaranteed capacity allocation for {data.shortTitle}. Our trade engineers pre-fill your corridor specifications automatically.
                  </p>
                  <div className="sp-cta-actions">
                    <Link
                      to={`/quote?service=${encodeURIComponent(data.shortTitle)}&mode=${encodeURIComponent(data.mode)}`}
                      state={{ mode: data.mode, cargoType: data.shortTitle }}
                      className="btn btn-primary sp-cta-btn"
                    >
                      Book {data.shortTitle} Corridor <ArrowRight size={15} />
                    </Link>
                    <Link to="/contact" className="btn btn-outline-white sp-cta-btn-alt">
                      <PhoneCall size={14} /> Speak with Sector Lead
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="service-page-sidebar">
              <div className="sidebar-widget">
                <h4>All Core Capabilities ({services.length} Services)</h4>
                <div className="sidebar-links-list">
                  {services.map((srv) => (
                    <Link
                      key={srv.id}
                      to={`/services/${srv.id}`}
                      className={`sidebar-link ${srv.id === data.id ? 'active' : ''}`}
                    >
                      <span>{srv.shortTitle}</span>
                      <span className="sidebar-mode-tag">{srv.mode}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="sidebar-widget bg-secondary">
                <span className="eyebrow">PRIMARY CORRIDORS</span>
                <h4 style={{ marginBottom: '0.75rem' }}>Direct Linehaul Routes</h4>
                <ul className="sd-corridors-list">
                  {data.corridors.map((c, i) => (
                    <li key={i}><Compass size={14} className="corridor-compass" /> {c}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget bg-dark" style={{ color: 'white' }}>
                <span className="eyebrow" style={{ color: 'var(--color-brand-gold)' }}>DIRECT DESK</span>
                <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Speak with a Route Engineer</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', marginBottom: '1.25rem' }}>
                  24/7 central desk access for priority rate quotes and chartered space.
                </p>
                <Link to="/contact" className="btn btn-outline-white" style={{ width: '100%' }}>
                  Contact Desk
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicePageTemplate;
