import { Link } from 'react-router-dom';
import { Plane, Ship, Truck, Train, FileCheck, Boxes, ArrowRight, Check } from 'lucide-react';
import './Services.css';

const servicesList = [
  {
    id: 'air-freight',
    image: '/images/air_freight_cargo.jpg',
    icon: <Plane size={24} />,
    title: 'Air Freight',
    tagline: 'Speed without compromise',
    description: 'Time-critical, door-to-door and airport-to-airport air cargo solutions for urgent shipments. We partner with leading airlines to secure capacity on major global trade lanes.',
    features: ['Express & standard air services', 'Charter options for oversized cargo', 'Temperature-sensitive solutions', 'Real-time cargo tracking'],
  },
  {
    id: 'sea-freight',
    image: '/images/sea_freight_vessel.jpg',
    icon: <Ship size={24} />,
    title: 'Sea Freight',
    tagline: 'Capacity at scale',
    description: 'Full Container Load (FCL) and Less-than-Container Load (LCL) ocean freight solutions, optimised for cost-efficiency across major global shipping lanes.',
    features: ['FCL & LCL consolidation', 'Port-to-port & door-to-door', 'Reefer & hazmat containers', 'Caspian & Black Sea specialists'],
  },
  {
    id: 'land-freight',
    image: '/images/diff_transform.jpg',
    icon: <Truck size={24} />,
    title: 'Land Freight',
    tagline: 'Cross-border road expertise',
    description: 'Domestic and international road transport covering FTL and LTL shipments across the Gulf, CIS, and South Asian corridors with full customs support.',
    features: ['FTL & LTL options', 'Cross-border permits', 'GPS-tracked fleet', 'Gulf & CIS corridor expertise'],
  },
  {
    id: 'rail-freight',
    image: '/images/diff_network.jpg',
    icon: <Train size={24} />,
    title: 'Rail Freight',
    tagline: 'The Silk Road advantage',
    description: 'Cost-efficient overland rail freight linking Asia, Central Asia, CIS, and Europe with scheduled departures and predictable transit times.',
    features: ['China–Europe rail corridors', 'CIS intermodal solutions', 'Container block trains', 'Customs bond & documentation'],
  },
  {
    id: 'customs-clearance',
    image: '/images/diff_compliance.jpg',
    icon: <FileCheck size={24} />,
    title: 'Customs Clearance',
    tagline: 'Compliance, guaranteed',
    description: 'Expert customs brokerage ensuring smooth, compliant cross-border operations across all major trade zones, with dedicated teams for each corridor.',
    features: ['Import & export declarations', 'HS classification advisory', 'Duty & tax management', 'Trade compliance consulting'],
  },
  {
    id: 'multimodal',
    image: '/images/hero_bg.jpg',
    icon: <Boxes size={24} />,
    title: 'Multimodal Transport',
    tagline: 'Integrated end-to-end logistics',
    description: 'Combine air, sea, rail, and road freight into a single, shipment solution — optimised for cost, time, and complexity of your supply chain.',
    features: ['Single bill of lading', 'Optimised modal selection', 'Risk-managed handoffs', 'Full track & trace visibility'],
  },
];

const Services = () => {
  return (
    <div className="services-page">
      <div className="page-header bg-maroon">
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Core Capabilities</span>
          <h1>Our Services</h1>
          <p>Comprehensive freight forwarding and logistics solutions engineered for reliability, compliance, and speed across every mode and trade lane.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="services-full-grid">
            {servicesList.map((service, i) => (
              <div key={service.id} className={`service-full-card fade-up delay-${(i % 3 + 1) * 100}`}>
                {service.image && (
                  <div className="sfc-image-wrapper">
                    <img src={service.image} alt={service.title} className="sfc-img" />
                  </div>
                )}
                
                <div className="sfc-top">
                  <div className="sfc-icon-badge">
                    {service.icon}
                    <span className="sfc-icon-title">{service.title}</span>
                  </div>
                  <span className="sfc-tagline">{service.tagline}</span>
                </div>
                
                <p className="sfc-desc">{service.description}</p>
                
                <ul className="sfc-features">
                  {service.features.map((feat, j) => (
                    <li key={j}><Check size={14} /> {feat}</li>
                  ))}
                </ul>
                
                <Link to={`/services/${service.id}`} className="btn btn-secondary sfc-link">
                  Explore {service.title} <ArrowRight size={15} className="arrow-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta-strip bg-maroon section-padding-sm">
        <div className="container">
          <div className="services-cta-inner">
            <div>
              <h3 style={{ color: 'white' }}>Need a customised logistics solution?</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0 }}>Our team will analyse your supply chain and provide the optimal routing and pricing.</p>
            </div>
            <Link to="/quote" className="btn btn-primary btn-large">
              Request a Quote <ArrowRight size={16} className="arrow-icon" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
