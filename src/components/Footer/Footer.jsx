import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-editorial">
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-statement">
            <div className="footer-logo-row">
              <img src="/images/logo.png" alt="GACIS Logo" className="footer-logo-img" />
              <h2>GACIS</h2>
            </div>
            <h1>Moving what matters.<br/>Across borders.</h1>
          </div>
          <div className="footer-search-box">
            <p>Looking for something specific?</p>
            <div className="footer-search-input">
              <input type="text" placeholder="Search..." />
              <button><Search size={20} /></button>
            </div>
          </div>
        </div>
        
        <div className="footer-nav-grid">
          <div className="footer-col">
            <h4>Brand</h4>
            <Link to="/about">Our Story</Link>
            <Link to="/about">Compliance</Link>
            <Link to="/sustainability">Sustainability</Link>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <Link to="/services">Air Freight</Link>
            <Link to="/services">Ocean Freight</Link>
            <Link to="/services">Land Transport</Link>
            <Link to="/solutions">Industry Solutions</Link>
          </div>
          <div className="footer-col">
            <h4>Network</h4>
            <Link to="/global-network">Global Locations</Link>
            <Link to="/global-network">Gulf & CIS Hubs</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div className="footer-col">
            <h4>Action</h4>
            <Link to="/quote" className="footer-action-link">Request a Quote <ArrowRight size={14} /></Link>
            <Link to="/contact" className="footer-action-link">Talk to an Expert <ArrowRight size={14} /></Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© 2026 GACIS Cargo Services</span>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
          <div className="footer-social">
            <Link to="#">LinkedIn</Link>
            <Link to="#">Twitter</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
