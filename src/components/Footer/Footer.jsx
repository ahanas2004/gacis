import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Leaf, Globe2 } from 'lucide-react';

import './Footer.css';

export const Footer = () => {
  return (
    <footer className="site-footer bg-dark">
      <div className="container">
        
        {/* Footer Top Strip: Statement & Fast Action */}
        <div className="footer-top-strip">
          <div className="footer-brand-col">
            <Link to="/" className="footer-brand-logo" aria-label="GACIS Home">
              <img src="/images/logo.png" alt="GACIS Global Logistics" className="footer-logo-img" />
            </Link>
            <p className="footer-tagline">
              Moving what matters. Across borders with absolute precision.
            </p>
            <div className="footer-badges">
              <span className="footer-badge"><Globe2 size={13} /> 150+ Direct Gateways</span>
              <span className="footer-badge"><ShieldCheck size={13} /> ISO 9001:2015</span>
              <span className="footer-badge"><Leaf size={13} /> Scope 3 Monitored</span>
            </div>
          </div>

          <div className="footer-quick-action-box">
            <div className="fqa-content">
              <span className="fqa-eyebrow">Direct Desk Access</span>
              <h4>Need an engineered freight calculation?</h4>
              <p>Our multimodal trade lane specialists respond with route telemetry within 24 hours.</p>
            </div>
            <div className="fqa-buttons">
              <Link to="/quote" className="btn btn-primary btn-sm">
                Request Route Quote <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn btn-dark btn-sm">
                <Globe2 size={14} /> Global Inquiries
              </Link>
            </div>

          </div>
        </div>

        {/* Navigation Columns */}
        <div className="footer-links-grid">
          <div className="footer-col">
            <h5>Multimodal Services</h5>
            <Link to="/services/air-freight">Air Freight Intelligence</Link>
            <Link to="/services/ocean-freight">Ocean Freight & Seaways</Link>
            <Link to="/services/road-freight">Cross-Border Road Transport</Link>
            <Link to="/services/rail-freight">Intermodal Rail Corridors</Link>
            <Link to="/services/customs-compliance">Customs & Compliance</Link>
            <Link to="/services/project-logistics">Project Cargo & Heavy Lift</Link>
          </div>

          <div className="footer-col">
            <h5>Industry Solutions</h5>
            <Link to="/solutions">Automotive & Mobility</Link>
            <Link to="/solutions">Pharmaceuticals & GDP Cold-Chain</Link>
            <Link to="/solutions">Energy & Infrastructure Projects</Link>
            <Link to="/solutions">Technology & High-Value Cargo</Link>
            <Link to="/solutions">Retail & FMCG Omnichannel</Link>
            <Link to="/solutions">Industrial Manufacturing</Link>
          </div>

          <div className="footer-col">
            <h5>Global Network & Corridor</h5>
            <Link to="/global-network">Dubai Global Headquarters</Link>
            <Link to="/global-network">Chennai South Asia Gateway</Link>
            <Link to="/global-network">Port Klang ASEAN Hub</Link>
            <Link to="/global-network">Colombo Indian Ocean Gateway</Link>
            <Link to="/global-network">Almaty Central Asia Hub</Link>
            <Link to="/global-network">Frankfurt European Gateway</Link>
          </div>

          <div className="footer-col">
            <h5>Corporate & Standards</h5>
            <Link to="/about">About GACIS Story</Link>
            <Link to="/sustainability">Sustainability & ESG Mandate</Link>
            <Link to="/resources">Logistics Knowledge Hub</Link>
            <Link to="/contact">Commercial Contacts</Link>
            <Link to="/quote">Corridor Rate Estimator</Link>
          </div>


        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-legal-copy">
            <span>© {new Date().getFullYear()} GACIS Cargo Services LLC. All global rights reserved.</span>
            <span className="footer-legal-divider">•</span>
            <span>Commercial Registration: Dubai, UAE — P.O. Box 624699</span>
          </div>

          <div className="footer-legal-links">
            <Link to="/about">Compliance & Code of Ethics</Link>
            <Link to="/sustainability">Environmental Policy</Link>
            <Link to="/contact">Support</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
