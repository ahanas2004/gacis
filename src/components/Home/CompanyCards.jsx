import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeImage from '../Common/FadeImage';
import './CompanyCards.css';

const CompanyCards = () => {
  return (
    <section className="section-padding bg-secondary company-editorial">
      <div className="container">
        
        <div className="company-ed-stack">
          
          <Link to="/about" className="company-ed-card fade-up delay-100">
            <div className="company-ed-content">
              <span className="eyebrow">Discover GACIS</span>
              <h2>About Us</h2>
              <p>Building smarter logistics networks across the Gulf, CIS and beyond.</p>
              <div className="company-ed-arrow">
                <ArrowRight size={24} />
              </div>
            </div>
            <div className="company-ed-image">
              <FadeImage src="/images/diff_compliance.jpg" alt="About Us" />
            </div>
          </Link>

          <Link to="/sustainability" className="company-ed-card fade-up delay-200">
            <div className="company-ed-content">
              <span className="eyebrow">Our Future</span>
              <h2>Sustainability</h2>
              <p>Supporting a better life for people around the world through sustainable logistics.</p>
              <div className="company-ed-arrow">
                <ArrowRight size={24} />
              </div>
            </div>
            <div className="company-ed-image">
              <FadeImage src="/images/diff_transform.jpg" alt="Sustainability" />
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default CompanyCards;
