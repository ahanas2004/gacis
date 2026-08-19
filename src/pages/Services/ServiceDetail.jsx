import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck, Clock, Layers, Leaf, Globe2, Compass } from 'lucide-react';
import { services } from '../../data/services';
import SEO from '../../components/Common/SEO';
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

  return (
    <div className="service-detail-page">
      <SEO 
        title={`${data.title} — Multimodal Capabilities`}
        description={data.tagline}
        canonical={`/services/${data.id}`}
      />

      {/* Hero Header */}
      <div className="page-header bg-maroon">
        <div className="container fade-up">
          <div className="sd-header-badges">
            <span className="sd-mode-tag">{data.mode} FREIGHT INTELLIGENCE</span>
            <span className="sd-metric-tag"><Clock size={13} /> {data.leadTime}</span>
          </div>
          <h1>{data.title}</h1>
          <p>{data.tagline}</p>
        </div>
      </div>

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

              {/* CTA Box */}
              <div className="service-cta-card bg-dark">
                <div>
                  <h3 style={{ color: '#fff' }}>Engineer a {data.shortTitle} Linehaul</h3>
                  <p style={{ color: 'rgba(255,255,255,0.75)' }}>
                    Our commercial desk can provide spot container allocation, chartered capacity, and custom tariff optimization.
                  </p>
                </div>
                <Link to="/quote" className="btn btn-primary">
                  Request {data.shortTitle} Quote <ArrowRight size={15} className="arrow-icon" />
                </Link>
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
