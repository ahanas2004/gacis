import { Link } from 'react-router-dom';
import { Globe, Shield, TrendingUp, Users, Award, Layers } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">

      <div className="page-header bg-maroon">
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Our Company</span>
          <h1>About GACIS</h1>
          <p>Connecting businesses to global markets through precision logistics, deep regional expertise, and an unwavering commitment to quality.</p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-text fade-up">
              <span className="eyebrow">Who We Are</span>
              <h2>Built for the world's most complex trade routes</h2>
              <p>
                GACIS — Gulf and Commonwealth of Independent States — is a global freight forwarding and logistics company engineered to deliver seamless, reliable, and efficient transportation solutions across air, sea, land, and rail.
              </p>
              <p>
                We don't simply move cargo. We connect businesses, markets, and supply chains through intelligent, multimodal logistics. With deep expertise across the Gulf and CIS regions and an extensive international partner network, GACIS is positioned to handle the most complex cross-border logistics challenges with precision and speed.
              </p>
              <div className="about-actions">
                <Link to="/contact" className="btn btn-primary">Partner With Us</Link>
                <Link to="/services" className="btn btn-secondary">Our Services</Link>
              </div>
            </div>
            <div className="about-image-col fade-up delay-200">
              <img src="/images/diff_network.jpg" alt="GACIS global operations" className="about-hero-img" />
              <div className="about-badge">
                <div className="badge-num">2012</div>
                <div className="badge-text">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="section-heading fade-up">
            <span className="eyebrow">Our Pillars</span>
            <h2>Why businesses choose GACIS</h2>
          </div>
          <div className="about-pillars-grid">
            {[
              { icon: <Globe size={28} />, title: 'Global Reach, Local Expertise', desc: 'Strategic presence in India, UAE, Sri Lanka, Malaysia, and Kazakhstan with worldwide partner networks spanning 150+ countries.' },
              { icon: <Shield size={28} />, title: 'Reliability & Compliance', desc: 'Rigorous operational standards and deep knowledge of customs regulations in the Gulf, CIS, and South Asian trade lanes.' },
              { icon: <TrendingUp size={28} />, title: 'Supply Chain Optimization', desc: 'Data-driven route and mode selection to balance cost, reliability, and transit speed for your business requirements.' },
              { icon: <Users size={28} />, title: 'Dedicated Account Teams', desc: 'Each client is assigned a dedicated logistics coordinator — a single point of contact for all shipment queries and escalations.' },
              { icon: <Award size={28} />, title: 'Certified Standards', desc: 'IATA-certified, ISO 9001:2015 accredited, and GDP-compliant, ensuring your cargo meets the highest quality and safety benchmarks.' },
              { icon: <Layers size={28} />, title: 'End-to-End Visibility', desc: 'Real-time shipment tracking and proactive milestone alerts keep you informed at every stage — from pickup to final delivery.' },
            ].map((item, i) => (
              <div className={`about-pillar fade-up delay-${(i % 3 + 1) * 100}`} key={i}>
                <div className="about-pillar-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="section-padding about-quote-section bg-maroon">
        <div className="container">
          <blockquote className="about-quote fade-up">
            <p>"Our mission is simple: remove every obstacle between your cargo and its destination. Speed, compliance, and care — those are the three things we promise every client, every time."</p>
            <footer>— GACIS Leadership Team</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm">
        <div className="container">
          <div className="about-cta-row fade-up">
            <div>
              <h3>Ready to streamline your supply chain?</h3>
              <p>Our logistics specialists are available to design the right solution for your business.</p>
            </div>
            <div className="about-cta-actions">
              <Link to="/quote" className="btn btn-primary">Request a Quote</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
