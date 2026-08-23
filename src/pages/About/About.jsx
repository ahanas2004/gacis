import { Link } from 'react-router-dom';
import { Globe, Shield, TrendingUp, Users, Award, Layers } from 'lucide-react';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import SocialProof from '../../components/Home/SocialProof';
import FadeImage from '../../components/Common/FadeImage';
import './About.css';

export const About = () => {
  return (
    <div className="about-page">
      <SEO 
        title="About GACIS — Corporate History & Operational Heritage"
        description="Built for the world's most complex trade corridors. Learn about GACIS global infrastructure, multimodal heritage, and operational leadership across the Gulf and Central Asia."
        canonical="/about"
      />

      <PageHeader 
        eyebrow="CORPORATE HERITAGE & INFRASTRUCTURE"
        title="About GACIS"
        description="Connecting global commerce through multimodal engineering, deep regional trade lane mastery, and operational precision."
        statusTag="ESTABLISHED CORRIDOR OPERATOR"
      />

      {/* Mission & Vision */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-text">
              <span className="eyebrow">WHO WE ARE</span>
              <h2>Built for the World's Most Strategic Trade Routes</h2>
              <p>
                GACIS — Gulf and Commonwealth of Independent States — is an enterprise logistics and freight forwarding platform engineered to deliver seamless transportation solutions across air, deepsea, trans-Eurasian rail, and cross-border road networks.
              </p>
              <p>
                We do not simply move freight. We build resilient supply chains through multimodal agility and route optimization. With direct operating desks in Chennai (India), Dubai (UAE), and Central Asia (CIS), GACIS eliminates border friction and delivers transparent tracking and visibility to enterprise procurement teams.
              </p>
              <div className="about-actions">
                <Link to="/quote" className="btn btn-primary">Calculate a Corridor</Link>
                <Link to="/services" className="btn btn-secondary">Explore Capabilities</Link>
              </div>
            </div>
            <div className="about-image-col">
              <FadeImage 
                src="/images/diff_network.jpg" 
                alt="GACIS global logistics center" 
                className="about-hero-img"
              />
              <div className="about-badge">
                <div className="badge-num tabular-nums">2012</div>
                <div className="badge-text">Established Heritage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OPERATIONAL PILLARS</span>
            <h2>Why Enterprise Shippers Choose GACIS</h2>
          </div>
          <div className="about-pillars-grid">
            {[
              { icon: <Globe size={28} />, title: 'Corridor Mastery', desc: 'Direct operating desks in Chennai (India), Dubai (Gulf), and Central Asia (CIS) with global carrier alliance connectivity.' },
              { icon: <Shield size={28} />, title: 'Rigorous Compliance', desc: 'Licensed customs brokers ensuring total conformity with GCC Common Customs, TIR Carnet, and Eurasian Customs Union protocols.' },
              { icon: <TrendingUp size={28} />, title: 'Multimodal Optimization', desc: 'Data-driven modal substitution balancing transit velocity against carbon emissions and holding costs.' },
              { icon: <Users size={28} />, title: 'Dedicated Control Towers', desc: 'Enterprise accounts are supported by single-point-of-contact logistics coordinators and 24/7 central desk tracking.' },
              { icon: <Award size={28} />, title: 'Certified Standards', desc: 'ISO 9001:2015 accredited, GDP pharma certified, and IATA registered cargo operations.' },
              { icon: <Layers size={28} />, title: 'End-to-End Visibility', desc: 'Live corridor tracking, automated milestone timestamps, and verified Scope 3 carbon reporting.' },
            ].map((item, i) => (
              <div className="about-pillar" key={i}>
                <div className="about-pillar-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications and Alliances */}
      <SocialProof />

      {/* Quote */}
      <section className="section-padding about-quote-section bg-maroon">
        <div className="container">
          <blockquote className="about-quote">
            <p>"Our objective is straightforward: eliminate every layer of friction between your cargo and its final consignee. Speed, regulatory certainty, and precision — that is our operational commitment across every corridor."</p>
            <footer>— GACIS Executive Leadership</footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding-sm bg-primary">
        <div className="container">
          <div className="about-cta-row">
            <div>
              <h3>Ready to optimize your global trade corridors?</h3>
              <p>Our trade lane specialists are available to analyze your routing requirements.</p>
            </div>
            <div className="about-cta-actions">
              <Link to="/quote" className="btn btn-primary">Request a Quote</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Our Desk</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
