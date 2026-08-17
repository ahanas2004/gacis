import { ArrowRight } from 'lucide-react';
import './Differentiators.css';

const Differentiators = () => {
  return (
    <section className="section-padding diff-editorial">
      <div className="container">
        
        <div className="section-heading fade-up">
          <h2>GACIS Brand</h2>
          <p>Commitment to quality, a global business network, and accelerating supply chain transformation.</p>
        </div>

        <div className="diff-asymmetric-grid">
          
          <div className="diff-ed-card card-half fade-up delay-100">
            <div className="diff-img-wrapper">
              <img src="/images/diff_compliance.jpg" alt="Compliance" />
              <div className="diff-overlay"></div>
            </div>
            <div className="diff-content">
              <div className="diff-meta">
                <span className="diff-num">01</span>
                <span className="diff-cat">Standards</span>
              </div>
              <h3>Compliance & Quality</h3>
              <ArrowRight size={24} className="diff-arrow" />
            </div>
          </div>

          <div className="diff-ed-card card-half fade-up delay-200">
            <div className="diff-img-wrapper">
              <img src="/images/diff_network.jpg" alt="Global Network" />
              <div className="diff-overlay"></div>
            </div>
            <div className="diff-content">
              <div className="diff-meta">
                <span className="diff-num">02</span>
                <span className="diff-cat">Connectivity</span>
              </div>
              <h3>Global Network</h3>
              <ArrowRight size={24} className="diff-arrow" />
            </div>
          </div>

          <div className="diff-ed-card card-full fade-up delay-300">
            <div className="diff-img-wrapper">
              <img src="/images/diff_transform.jpg" alt="Transformation" />
              <div className="diff-overlay"></div>
            </div>
            <div className="diff-content">
              <div className="diff-meta">
                <span className="diff-num">03</span>
                <span className="diff-cat">Innovation</span>
              </div>
              <h3>Accelerating Transformation</h3>
              <ArrowRight size={24} className="diff-arrow" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Differentiators;
