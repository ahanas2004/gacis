import { useParams, Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, PhoneCall, ShieldCheck, Clock, Layers, Leaf, 
  Globe2, Compass, Zap, Award, Activity, FileText, Check, Cpu, Server, Lock 
} from 'lucide-react';
import { services } from '../../data/services';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import FadeImage from '../../components/Common/FadeImage';
import './Services.css';

// Support legacy route aliases
const aliasMap = {
  'land-freight': 'road-freight',
  'sea-freight': 'ocean-freight',
  'customs-clearance': 'customs-compliance',
  'multimodal': 'rail-freight'
};

export const ServiceDetail = () => {
  const { serviceId } = useParams();
  const targetId = aliasMap[serviceId] || serviceId;
  const data = services.find(s => s.id === targetId) || services[0];
  const article = /^[aeiou]/i.test(data.shortTitle) ? 'an' : 'a';

  return (
    <div className="service-detail-page">
      <SEO 
        title={`${data.title} — Proven Multimodal Capabilities & Execution`}
        description={data.tagline}
        canonical={`/services/${data.id}`}
      />

      {/* Hero Header */}
      <PageHeader
        backLink={{ to: '/services', label: 'Back to All Freight Services' }}
        eyebrow={`${data.mode} FREIGHT INTELLIGENCE`}
        title={data.title}
        description={data.tagline}
        statusTag={`LEAD TIME: ${data.leadTime}`}
      />

      <section className="section-padding bg-primary">
        <div className="container">
          <div className="service-detail-grid">
            
            {/* Main Content Column */}
            <div className="service-main-content">
              {data.image && (
                <div className="service-detail-image-wrapper">
                  <FadeImage 
                    src={data.image} 
                    alt={data.title} 
                    className="service-detail-image"
                  />
                  <div className="sdi-overlay-badge">
                    <Globe2 size={15} /> <span>Coverage: {data.coverage}</span>
                  </div>
                </div>
              )}

              {/* Proven Metrics Bar */}
              {data.provenMetrics && (
                <div className="sd-proven-metrics-block">
                  <span className="eyebrow text-gold">PROVEN OPERATIONAL KPIS</span>
                  <h3 className="sd-metrics-title">Real-Time Performance Metrics</h3>
                  <div className="sd-metrics-grid">
                    {data.provenMetrics.map((m, idx) => (
                      <div className="sd-metric-card" key={idx}>
                        <span className="sd-m-val tabular-nums">{m.value}</span>
                        <span className="sd-m-lbl">{m.label}</span>
                        <span className="sd-m-sub">{m.sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Overview & Architecture */}
              <div className="sd-section-block">
                <span className="eyebrow">OPERATIONAL ARCHITECTURE</span>
                <h2>Linehaul Execution & Value Proposition</h2>
                <p className="service-body-p">{data.overview}</p>
              </div>

              {/* Four Capabilities Grid */}
              <div className="sd-caps-grid">
                {data.capabilities.map((cap, i) => (
                  <div className="sd-cap-card" key={i}>
                    <div className="sd-cap-icon"><CheckCircle2 size={18} /></div>
                    <div>
                      <h4>{cap.name}</h4>
                      <p>{cap.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* How GACIS Does It (Execution Pillars) */}
              {data.howGacisDoesIt && (
                <div className="sd-how-gacis-block">
                  <div className="sd-hg-header">
                    <span className="eyebrow text-red">EXECUTION METHODOLOGY</span>
                    <h3>{data.howGacisDoesIt.headline}</h3>
                    <p className="sd-hg-summary">{data.howGacisDoesIt.summary}</p>
                  </div>
                  <div className="sd-hg-pillars-grid">
                    {data.howGacisDoesIt.pillars.map((pillar, pIdx) => (
                      <div className="sd-hg-pillar-card" key={pIdx}>
                        <div className="sd-hg-pillar-num">0{pIdx + 1}</div>
                        <h4>{pillar.title}</h4>
                        <p>{pillar.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Proven Case Study Showcase */}
              {data.provenCaseStudy && (
                <div className="sd-case-study-box">
                  <div className="sd-cs-badge-row">
                    <span className="sd-cs-badge"><Award size={14} /> PROVEN CASE STUDY</span>
                    <span className="sd-cs-sector">{data.provenCaseStudy.clientSector}</span>
                  </div>
                  <h3 className="sd-cs-title">{data.provenCaseStudy.title}</h3>
                  
                  <div className="sd-cs-grid">
                    <div className="sd-cs-col">
                      <span className="sd-cs-col-lbl text-red">THE CHALLENGE</span>
                      <p>{data.provenCaseStudy.challenge}</p>
                    </div>
                    <div className="sd-cs-col">
                      <span className="sd-cs-col-lbl text-gold">GACIS SOLUTION</span>
                      <p>{data.provenCaseStudy.solution}</p>
                    </div>
                  </div>

                  <div className="sd-cs-results-block">
                    <span className="sd-cs-col-lbl text-success">MEASURABLE ROI & RESULTS</span>
                    <ul className="sd-cs-results-list">
                      {data.provenCaseStudy.results.map((res, rIdx) => (
                        <li key={rIdx}><Check size={16} className="check-icon-green" /> <span>{res}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Technical Specs & Compliance Grid */}
              {data.technicalSpecs && (
                <div className="sd-tech-specs-block">
                  <span className="eyebrow">EQUIPMENT & COMPLIANCE SPECS</span>
                  <h3>Technical Specifications & Operating Limits</h3>
                  <div className="sd-specs-table">
                    {data.technicalSpecs.map((spec, sIdx) => (
                      <div className="sd-spec-row" key={sIdx}>
                        <span className="sd-spec-label">{spec.label}</span>
                        <span className="sd-spec-value">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* End-to-End Operational Workflow */}
              <div className="service-workflow-block">
                <span className="eyebrow">MILESTONE EXECUTION</span>
                <h3>End-to-End Operational Workflow</h3>
                <div className="workflow-steps-timeline">
                  {data.workflow.map((wf) => (
                    <div className="wf-step-item" key={wf.step}>
                      <div className="wf-step-num tabular-nums">{wf.step}</div>
                      <div className="wf-step-content">
                        <h4>{wf.title}</h4>
                        <p>{wf.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sustainability Profile */}
              <div className="sd-sustainability-box">
                <Leaf size={24} className="sdb-icon" />
                <div>
                  <h4>Carbon & ESG Profile</h4>
                  <p>{data.co2Profile}. Integrated with GLEC-compliant emissions tracking.</p>
                </div>
              </div>

              {/* Premium Direct Routing CTA / Lead Generation Box */}
              <div className="service-cta-card">
                <div className="scc-glow-effect" aria-hidden="true" />
                <div className="scc-grid-overlay" aria-hidden="true" />

                <div className="scc-content">
                  <div className="scc-badge-row">
                    <span className="scc-badge">
                      <Zap size={13} className="scc-badge-icon" />
                      <span>DIRECT LEAD GENERATOR & ALLOCATION DESK</span>
                    </span>
                    <span className="scc-status-live">
                      <span className="scc-dot" /> 24/7 DESK ACTIVE
                    </span>
                  </div>

                  <h3 className="scc-title">Simulate & Book {article} {data.shortTitle} Linehaul</h3>
                  <p className="scc-desc">
                    Get an instant rate quote, lead-time estimate, and guaranteed capacity allocation for {data.shortTitle}. Our trade engineers pre-fill your corridor specifications automatically.
                  </p>

                  <div className="scc-actions">
                    <Link 
                      to={`/quote?service=${encodeURIComponent(data.shortTitle)}&mode=${encodeURIComponent(data.mode)}`} 
                      state={{ mode: data.mode, cargoType: data.shortTitle }}
                      className="btn btn-primary scc-btn-main"
                    >
                      Book {data.shortTitle} Corridor <ArrowRight size={15} className="arrow-icon" />
                    </Link>
                    <Link to="/contact" className="btn btn-outline-white scc-btn-alt">
                      <PhoneCall size={14} /> Speak with Sector Lead
                    </Link>
                  </div>
                </div>
              </div>
            </div>


            {/* Sidebar Navigation */}
            <aside className="service-sidebar">
              <div className="sidebar-widget">
                <h4>All Core Capabilities (12 Services)</h4>
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

export default ServiceDetail;
