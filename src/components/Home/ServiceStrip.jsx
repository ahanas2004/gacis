import { Link } from 'react-router-dom';
import { Plane, Ship, Truck, Train, FileCheck, Boxes, ArrowRight } from 'lucide-react';
import './ServiceStrip.css';

const services = [
  { icon: <Plane size={28} />, label: 'Air Freight', path: '/services/air-freight', desc: 'Time-definite global air cargo' },
  { icon: <Ship size={28} />, label: 'Sea Freight', path: '/services/sea-freight', desc: 'FCL & LCL ocean transport' },
  { icon: <Truck size={28} />, label: 'Land Freight', path: '/services/land-freight', desc: 'FTL & LTL cross-border haulage' },
  { icon: <Train size={28} />, label: 'Rail Freight', path: '/services/rail-freight', desc: 'Asia–CIS–Europe corridors' },
  { icon: <FileCheck size={28} />, label: 'Customs Clearance', path: '/services/customs-clearance', desc: 'Expert trade compliance' },
  { icon: <Boxes size={28} />, label: 'Multimodal', path: '/services/multimodal', desc: 'Integrated end-to-end solutions' },
];

const ServiceStrip = () => {
  return (
    <section className="service-strip-section section-padding-sm">
      <div className="container">
        <div className="service-strip-header fade-up">
          <div>
            <span className="eyebrow">Core Capabilities</span>
            <h2>How we move cargo</h2>
          </div>
          <Link to="/services" className="btn btn-secondary service-strip-all">
            All Services <ArrowRight size={16} className="arrow-icon" />
          </Link>
        </div>
        <div className="service-strip-grid">
          {services.map((svc, i) => (
            <Link
              key={i}
              to={svc.path}
              className={`service-strip-tile fade-up delay-${(i + 1) * 100}`}
            >
              <div className="sst-icon">{svc.icon}</div>
              <div className="sst-text">
                <h4>{svc.label}</h4>
                <p>{svc.desc}</p>
              </div>
              <ArrowRight size={18} className="sst-arrow" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStrip;
