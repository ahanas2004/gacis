import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck, Clock, Layers, Leaf, Globe2, Compass, Zap } from 'lucide-react';
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
        title={`${data.title} — Multimodal Capabilities`}
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
            
            {/* Main Column */}
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

              {/* Premium Direct Routing CTA Box */}
              <div className="service-cta-card">
                <div className="scc-glow-effect" aria-hidden="true" />
                <div className="scc-grid-overlay" aria-hidden="true" />

                <div className="scc-content">
                  <div className="scc-badge-row">
                    <span className="scc-badge">
                      <Zap size={13} className="scc-badge-icon" />
                      <span>CAPACITY & CORRIDOR ALLOCATION</span>
                    </span>
                    <span className="scc-status-live">
                      <span className="scc-dot" /> 24/7 DESK ACTIVE
                    </span>
                  </div>

                  <h3 className="scc-title">Engineer {article} {data.shortTitle} Linehaul</h3>
                  <p className="scc-desc">
                    Our commercial desk provides spot container allocation, dedicated chartered capacity, bonded transit clearance, and custom tariff optimization.
                  </p>

                  <div className="scc-actions">
                    <Link to="/quote" className="btn btn-primary scc-btn-main">
                      Request {data.shortTitle} Quote <ArrowRight size={15} className="arrow-icon" />
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
                <h4>All Core Capabilities</h4>
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
