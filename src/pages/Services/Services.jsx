import { Link } from 'react-router-dom';
import { Plane, Ship, Truck, Train, ShieldCheck, Boxes, ArrowRight, Check, Zap, Award, Activity } from 'lucide-react';
import { services } from '../../data/services';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import FadeImage from '../../components/Common/FadeImage';
import './Services.css';

const iconMap = { Plane, Ship, Truck, Train, ShieldCheck, Boxes };

export const Services = () => {
  return (
    <div className="services-page">
      <SEO
        title="10 Multimodal Freight & Global Logistics Services — GACIS Intelligence"
        description="Explore 10 core GACIS capabilities across Air Freight, FCL & LCL Ocean, EXW/FCA Shipments, Reefer Cold Chain, CIS Haulage, Customs Clearance, Road Transport, Rail Corridors, and Project Logistics."
        canonical="/services"
      />

      <PageHeader
        eyebrow="GLOBAL LOGISTICS EXECUTION ENGINE"
        title="10 Core Multimodal Services"
        description="Proven linehaul architecture with real-time operational KPIs, direct carrier allocations, and unbroken compliance bridging the Gulf, Central Asia, South Asia, and Europe."
        statusTag="10 FREIGHT CAPABILITIES ACTIVE"
      />

      <section className="section-padding bg-primary">
        <div className="container">
          <div className="services-full-grid">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Boxes;
              const topMetric = service.provenMetrics ? service.provenMetrics[0] : null;

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
                    <div className="sfc-header-row">
                      <div className="sfc-icon-badge">
                        <Icon size={20} />
                        <span className="sfc-icon-title">{service.shortTitle}</span>
                      </div>
                      {topMetric && (
                        <div className="sfc-top-metric-chip" title={topMetric.sub}>
                          <span className="stmc-val">{topMetric.value}</span>
                          <span className="stmc-lbl">{topMetric.label}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="sfc-main-title">{service.title}</h3>
                    <p className="sfc-desc">{service.overview}</p>

                    <div className="sfc-features-block">
                      <span className="sfb-lbl">PROVEN CAPABILITIES & FEATURES:</span>
                      <ul className="sfc-features">
                        {service.features.slice(0, 4).map((feat, j) => (
                          <li key={j}><Check size={14} className="check-icon" /> <span>{feat}</span></li>
                        ))}
                      </ul>
                    </div>

                    <div className="sfc-footer-action">
                      <div className="sfc-stat">
                        <span className="sfc-stat-lbl">Lead Time SLA</span>
                        <span className="sfc-stat-val tabular-nums">{service.leadTime}</span>
                      </div>
                      <div className="sfc-btn-group">
                        <Link to={`/services/${service.id}`} className="btn btn-secondary sfc-link">
                          Explore <ArrowRight size={15} className="arrow-icon" />
                        </Link>
                        <Link
                          to={`/quote?service=${encodeURIComponent(service.shortTitle)}&mode=${encodeURIComponent(service.mode)}`}
                          state={{ mode: service.mode, cargoType: service.shortTitle }}
                          className="btn btn-primary sfc-btn-book"
                        >
                          Book Service
                        </Link>
                      </div>
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
                Our trade lane engineers analyze your cargo volume, time criticality, and sustainability targets to engineer the optimal route.
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
