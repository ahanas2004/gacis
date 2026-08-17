import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CtaBanner.css';

const CtaBanner = () => {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner-inner">
          <div className="cta-banner-text fade-up">
            <h2>Ready to move your cargo?</h2>
            <p>Get a personalised quote from our logistics experts within 24 hours.</p>
          </div>
          <div className="cta-banner-actions fade-up delay-200">
            <Link to="/quote" className="btn btn-primary btn-large">
              Request a Quote <ArrowRight size={18} className="arrow-icon" />
            </Link>
            <Link to="/contact" className="btn btn-outline-white btn-large">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;
