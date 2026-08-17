import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ServicesOverview.css';

const ServicesOverview = () => {
  return (
    <section className="section-padding services-editorial">
      <div className="container">
        
        <div className="section-heading fade-up">
          <h2>Capabilities</h2>
          <p>End-to-end supply chain architecture for modern business.</p>
        </div>

        <div className="services-ed-grid">
          
          <Link to="/services" className="service-ed-row fade-up delay-100">
            <div className="service-ed-meta">
              <span className="service-ed-num">01</span>
              <span className="service-ed-cat">Air · Sea · Land</span>
            </div>
            <div className="service-ed-content">
              <h3>Transportation</h3>
              <ArrowRight size={24} className="service-ed-arrow" />
            </div>
          </Link>

          <Link to="/services" className="service-ed-row fade-up delay-200">
            <div className="service-ed-meta">
              <span className="service-ed-num">02</span>
              <span className="service-ed-cat">Complex Cargo</span>
            </div>
            <div className="service-ed-content">
              <h3>Specialized Handling</h3>
              <ArrowRight size={24} className="service-ed-arrow" />
            </div>
          </Link>

          <Link to="/solutions" className="service-ed-row fade-up delay-300">
            <div className="service-ed-meta">
              <span className="service-ed-num">03</span>
              <span className="service-ed-cat">End-to-End</span>
            </div>
            <div className="service-ed-content">
              <h3>Logistics Solutions</h3>
              <ArrowRight size={24} className="service-ed-arrow" />
            </div>
          </Link>

          <Link to="/solutions" className="service-ed-row fade-up delay-400">
            <div className="service-ed-meta">
              <span className="service-ed-num">04</span>
              <span className="service-ed-cat">Sector Expertise</span>
            </div>
            <div className="service-ed-content">
              <h3>Industries</h3>
              <ArrowRight size={24} className="service-ed-arrow" />
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ServicesOverview;
