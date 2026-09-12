import { Link } from 'react-router-dom';
import { ArrowRight, Compass, ShieldCheck, Globe2, Activity, ChevronRight } from 'lucide-react';
import HeroNetworkAnimation from './HeroNetworkAnimation';
import './Hero.css';

export const Hero = () => {
  const scrollToSimulator = (e) => {
    e.preventDefault();
    const el = document.getElementById('route-simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-editorial">
      {/* Background Image & Tuned Gradient Backdrop */}
      <div className="hero-backdrop-wrapper">
        <img 
          src="/images/hero_bg.jpg" 
          alt="Global Multimodal Logistics Infrastructure" 
          className="hero-backdrop-img"
          fetchPriority="high"
        />
        <div className="hero-backdrop-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-grid">
          
          {/* Left Column: Core Positioning & CTAs */}
          <div className="hero-content reveal-left">
            <div className="hero-eyebrow-row">
              <span className="hero-eyebrow">Strategic Freight Corridors</span>
              <span className="hero-corridor-tag">Asia ⇄ Africa ⇄ Europe ⇄ North America ⇄ South America</span>
            </div>

            <h1 className="hero-headline">
              Intelligent movement.<br />
              <span className="text-gradient-red">Absolute precision.</span>
            </h1>

            <p className="hero-subtext">
              Powering high-value supply chains across the Gulf, Central Asia, and South Asian corridors with multimodal block trains, sea-air routing, and live corridor tracking.
            </p>

            <div className="hero-actions">
              <a href="#route-simulator" onClick={scrollToSimulator} className="btn btn-primary btn-large">
                <span>Design a Route</span>
                <ArrowRight size={17} className="arrow-icon" />
              </a>
              <Link to="/global-network" className="btn btn-outline-white btn-large">
                <Globe2 size={17} />
                <span>Explore Network</span>
              </Link>
            </div>

            {/* Verified Operational Proof Bar Replaced with Corridors */}
            <div className="hero-corridors-list">
              <div className="corridor-group">
                <span className="cg-title text-export">Export:</span>
                <ul className="cg-list">
                  <li>Indian sub continent - Far East Asia - Mid East Asia</li>
                  <li>Mid East Asia - East & South Africa - South & North America</li>
                  <li>Africa - Indian sub continent - Far East Asia</li>
                  <li>Indian sub continent - South & North America - Europe union</li>
                </ul>
              </div>
              <div className="corridor-group">
                <span className="cg-title text-import">Import:</span>
                <ul className="cg-list">
                  <li>South east Asia & Far East asia - Indian sub Continent</li>
                  <li>Europe union - Indian sub continent - South east Asia & Far East asia</li>
                  <li>South & North America - Indian sub Continent</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Network Intelligence Console */}
          <div className="hero-visual-column reveal-right delay-200">
            <HeroNetworkAnimation />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
