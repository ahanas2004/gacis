import { Link } from 'react-router-dom';
import { Plane, Ship, Truck, Train, ShieldCheck, Boxes, ArrowRight, Check } from 'lucide-react';
import { services } from '../../data/services';
import SEO from '../../components/Common/SEO';
import FadeImage from '../../components/Common/FadeImage';
import './Services.css';

const iconMap = { Plane, Ship, Truck, Train, ShieldCheck, Boxes };

export const Services = () => {
  return (
    <div className="services-page">
      <SEO 
        title="Multimodal Freight & Global Logistics Services"
        description="Explore GACIS core capabilities across Air Cargo Charters, Deepsea Linehauls, Trans-Eurasian Rail, Cross-Border Road Fleets, and Customs Brokerage."
        canonical="/services"
      />

      <div className="page-header bg-maroon">
        <div className="container fade-up">
          <span className="eyebrow eyebrow-light">CORE FREIGHT CAPABILITIES</span>
          <h1>Multimodal Logistics Intelligence</h1>
          <p>
            Precision linehaul architecture bridging the Gulf, Central Asia, South Asia, and Europe across air, deepsea, overland, and rail corridors.
          </p>
        </div>
      </div>

      <section className="section-padding bg-primary">
        <div className="container">
          <div className="services-full-grid">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Boxes;
              return (
                <div key={service.id} className={`service-full-card fade-up delay-${(i % 3) * 100 + 100}`}>
                  {service.image && (
                    <div className="sfc-image-wrapper">
                      <FadeImage 
                        src={service.image} 
                        alt={service.title} 
                        className="sfc-img"
                      />
                      <span className="sfc-mode-pill">{service.mode}</span>
                    </div>
                  )}
                  
                  <div className="sfc-body">
                    <div className="sfc-icon-badge">
                      <Icon size={20} />
                      <span className="sfc-icon-title">{service.shortTitle}</span>
                    </div>
                    
                    <h3 className="sfc-main-title">{service.title}</h3>
                    <p className="sfc-desc">{service.overview}</p>
                    
                    <div className="sfc-features-block">
                      <span className="sfb-lbl">KEY OPERATIONAL CAPABILITIES:</span>
                      <ul className="sfc-features">
                        {service.features.slice(0, 4).map((feat, j) => (
                          <li key={j}><Check size={14} className="check-icon" /> <span>{feat}</span></li>
                        ))}
                      </ul>
                    </div>

                    <div className="sfc-footer-action">
                      <div className="sfc-stat">
                        <span className="sfc-stat-lbl">Transit Benchmark</span>
                        <span className="sfc-stat-val tabular-nums">{service.leadTime}</span>
                      </div>
                      <Link to={`/services/${service.id}`} className="btn btn-secondary sfc-link">
                        Explore Capability <ArrowRight size={15} className="arrow-icon" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services-cta-strip bg-dark section-padding-sm">
        <div className="container">
          <div className="services-cta-inner fade-up">
            <div>
              <h3 style={{ color: 'white' }}>Need a customized multimodal supply chain solution?</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0 }}>
                Our trade lane engineers will analyze your cargo volume, time criticality, and sustainability targets to engineer the optimal route.
              </p>
            </div>
            <Link to="/quote" className="btn btn-primary btn-large">
              Request Route Simulation <ArrowRight size={16} className="arrow-icon" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
