import { Link } from 'react-router-dom';
import { ShieldCheck, Compass, Gauge, Zap, Globe2, ArrowRight } from 'lucide-react';
import './Differentiators.css';

const differentiatorsData = [
  {
    title: 'Corridor Specialization',
    eyebrow: 'STRATEGIC GEOGRAPHY',
    desc: 'Unmatched operational footprint across the Gulf, Central Asia (CIS), and South Asia trade belt with direct bonded border access.',
    image: '/images/diff_network.jpg',
    metric: '150+ Direct Corridors',
    icon: Globe2
  },
  {
    title: 'Multimodal Orchestration',
    eyebrow: 'MODAL AGILITY',
    desc: 'Seamless intermodal transitions between deepsea vessels, block trains, and cross-border road fleets that reduce transit times by up to 50%.',
    image: '/images/diff_transform.jpg',
    metric: '8.4d Dubai–Almaty',
    icon: Compass
  },
  {
    title: 'Regulatory & Trade Compliance',
    eyebrow: 'ZERO-DELAY CLEARANCE',
    desc: 'In-house licensed customs brokers and digital pre-clearance gateways eliminating port dwell times and tariff bottlenecks.',
    image: '/images/diff_compliance.jpg',
    metric: 'ISO 9001 & GDP Certified',
    icon: ShieldCheck
  }
];

export const Differentiators = () => {
  return (
    <section className="differentiators-section section-padding bg-secondary">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-heading fade-up">
          <span className="eyebrow">THE GACIS ADVANTAGE</span>
          <h2>Built for the Corridors That Matter</h2>
          <p>
            Traditional forwarders treat Central Asia and the Gulf as secondary trade lanes. We engineered our entire operational infrastructure to dominate them.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="diff-cards-grid">
          {differentiatorsData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className={`diff-card fade-up delay-${(idx % 3) * 100 + 100}`} key={idx}>
                <div className="diff-img-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="diff-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="diff-img-overlay"></div>
                  <span className="diff-metric-badge">{item.metric}</span>
                </div>

                <div className="diff-card-content">
                  <div className="diff-eyebrow-row">
                    <Icon size={16} className="diff-icon" />
                    <span className="diff-eyebrow">{item.eyebrow}</span>
                  </div>
                  <h3 className="diff-title">{item.title}</h3>
                  <p className="diff-desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Differentiators;
