import { Link } from 'react-router-dom';
import { Package, Workflow, ArrowRightLeft, Target, Globe, Thermometer, Shield, Zap } from 'lucide-react';
import './Solutions.css';

const solutions = [
  {
    icon: <Workflow size={32} />,
    title: 'End-to-End Logistics',
    desc: 'Complete logistics coordination from origin to destination, ensuring seamless handoffs between transportation modes with a single accountable partner.',
    tag: 'Full Service',
  },
  {
    icon: <Target size={32} />,
    title: 'Supply Chain Optimization',
    desc: 'Data-driven analysis to optimise cost, routing, transit time, and transportation modes for your specific operational and budgetary requirements.',
    tag: 'Consulting',
  },
  {
    icon: <ArrowRightLeft size={32} />,
    title: 'EXW / FCA Logistics',
    desc: 'Comprehensive supplier pickup and first-mile transportation management at origin — giving you full control from the factory floor.',
    tag: 'Origin Services',
  },
  {
    icon: <Package size={32} />,
    title: 'Project Cargo',
    desc: 'Specialised handling, routing, and permits for oversized, heavy-lift, and complex industrial cargo requiring exceptional project management.',
    tag: 'Heavy Lift',
  },
  {
    icon: <Globe size={32} />,
    title: 'Cross-Border Logistics',
    desc: 'Deep expertise in Gulf and CIS trade compliance, import/export regulations, and inland customs procedures for reliable cross-border operations.',
    tag: 'Regional Expertise',
  },
  {
    icon: <Thermometer size={32} />,
    title: 'Cold Chain & Pharma',
    desc: 'GDP-compliant temperature-controlled logistics for pharmaceuticals, food, and chemical products requiring strict environmental management.',
    tag: 'Temperature Control',
  },
  {
    icon: <Shield size={32} />,
    title: 'Dangerous Goods (DG)',
    desc: 'IATA/IMDG-certified handling of hazardous materials with compliant packaging, declarations, and carrier approvals across all modes.',
    tag: 'Hazmat',
  },
  {
    icon: <Zap size={32} />,
    title: 'Critical & Express',
    desc: 'Dedicated hand-carry courier, charter aircraft, and priority shipment services for mission-critical cargo with zero tolerance for delay.',
    tag: 'Express',
  },
];

const industries = [
  'Automotive & EV', 'Pharmaceuticals', 'Oil & Energy', 'Electronics & Semicon',
  'Retail & FMCG', 'Industrial Manufacturing', 'Chemicals & Petrochemicals',
  'Construction & Infrastructure', 'Aerospace & Defense', 'Agriculture & Food',
];

const Solutions = () => {
  return (
    <div className="solutions-page">
      <div className="page-header bg-maroon">
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Tailored Logistics</span>
          <h1>Solutions & Industries</h1>
          <p>Purpose-built logistics frameworks for complex, high-value, and time-critical supply chains across every major industry sector.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="section-heading fade-up">
            <span className="eyebrow">Logistics Solutions</span>
            <h2>Engineered for complexity</h2>
            <p>Every business has a different supply chain. GACIS offers a portfolio of specialised logistics solutions designed to address the unique challenges of your operations.</p>
          </div>
          <div className="solutions-grid">
            {solutions.map((sol, i) => (
              <div className={`solution-card fade-up delay-${(i % 4 + 1) * 100}`} key={i}>
                <div className="sc-top">
                  <div className="sc-icon">{sol.icon}</div>
                  <span className="sc-tag">{sol.tag}</span>
                </div>
                <h4>{sol.title}</h4>
                <p>{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="industry-specialisation fade-up">
            <div className="is-left">
              <span className="eyebrow">Industry Specialisations</span>
              <h2>We speak your industry's language</h2>
              <p>GACIS operates dedicated specialist teams for each industry vertical, ensuring you work with logistics professionals who understand your sector's unique compliance requirements, cargo characteristics, and supply chain rhythms.</p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>
                Speak to a Specialist
              </Link>
            </div>
            <div className="is-right">
              <div className="industry-tag-cloud">
                {industries.map((ind, i) => (
                  <span className="industry-tag" key={i}>{ind}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
