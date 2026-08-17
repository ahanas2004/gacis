import { ArrowRight, Globe2, Compass, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSimulator = () => {
    const section = document.querySelector('.route-simulator-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-editorial">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        {/* Left Column: Headline and Positioning */}
        <div className="hero-text-content">
          <span className="eyebrow hero-eyebrow fade-up delay-100">GLOBAL INFRASTRUCTURE & MULTIMODAL</span>
          <h1 className="fade-up delay-200">
            Intelligent movement.<br />
            Absolute precision.
          </h1>
          <p className="hero-subcopy fade-up delay-300">
            Powering high-value supply chains across the Gulf, CIS, and South Asian corridors with engineered route efficiency, carbon optimization, and absolute compliance.
          </p>
          
          <div className="hero-ctas fade-up delay-400">
            <button className="btn btn-primary btn-large" onClick={() => navigate('/quote')}>
              Request a Route Quote <ArrowRight size={18} className="arrow-icon" />
            </button>
            <button className="btn btn-outline-white btn-large" onClick={scrollToSimulator}>
              Simulate Transit Corridor
            </button>
          </div>

          <div className="hero-badges fade-up delay-500">
            <span className="hero-badge">150+ Countries Connected</span>
            <span className="hero-badge">IATA Accredited</span>
            <span className="hero-badge">ISO 9001:2015 Certified</span>
          </div>
        </div>

        {/* Right Column: Premium Interactive Enterprise Command Panel */}
        <div className="hero-command-panel fade-up delay-500">
          <div className="command-header">
            <Globe2 size={16} className="command-globe-icon" />
            <span className="command-title">NETWORK COMMAND PANEL</span>
            <span className="status-indicator">
              <span className="status-dot pulsing"></span>
              LIVE
            </span>
          </div>

          <div className="command-form">
            {/* Visual Globe Emblem Housing */}
            <div className="hero-globe-visual-container">
              <div className="globe-glow-overlay"></div>
              <img src="/images/logo.png" alt="GACIS Globe Logo" className="hero-brand-globe" />
            </div>

            {/* Network Stats Overlay */}
            <div className="network-coordinates-list">
              <div className="coord-row">
                <span className="coord-label"><Compass size={12} /> DUBAI HQ</span>
                <span className="coord-val">25.2048° N, 55.2708° E</span>
              </div>
              <div className="coord-row">
                <span className="coord-label"><Compass size={12} /> CHENNAI HUB</span>
                <span className="coord-val">13.0827° N, 80.2707° E</span>
              </div>
              <div className="coord-row">
                <span className="coord-label"><ShieldCheck size={12} /> INTEGRITY INDEX</span>
                <span className="coord-val">99.2% Security Rating</span>
              </div>
              <div className="coord-row">
                <span className="coord-label"><Zap size={12} /> ON-TIME FLOW</span>
                <span className="coord-val">98.2% Schedule Adherence</span>
              </div>
            </div>

            <button className="btn btn-secondary full-width-btn command-cta" onClick={scrollToSimulator}>
              Launch Corridor Simulator <ArrowRight size={16} className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
