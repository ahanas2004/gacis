import { Link } from 'react-router-dom';
import FadeImage from '../Common/FadeImage';
import './IndustrySection.css';

const industries = [
  { name: 'Automotive', desc: 'Vehicle parts, CKD kits, production line logistics', image: '/images/industry_automotive.png' },
  { name: 'Pharmaceuticals', desc: 'Cold-chain, controlled atmosphere, GDP compliance', image: '/images/industry_pharma.png' },
  { name: 'Electronics & Air Cargo', desc: 'High-value, ESD-safe, expedited air solutions', image: null },
  { name: 'Oil & Energy', desc: 'Heavy equipment, drilling components, project cargo', image: '/images/industry_energy.png' },
  { name: 'Maritime & Retail', desc: 'High-volume, seasonal, omnichannel distribution', image: null },
  { name: 'Manufacturing', desc: 'Raw materials, machinery, and component sourcing', image: '/images/industry_manufacturing.png' },
  { name: 'Hazmat & Chemicals', desc: 'Dangerous goods handling, compliance, dedicated tankers', image: '/images/industry_hazmat.png' },
  { name: 'Corridor Infrastructure', desc: 'Strategic freight routes, site delivery, intermodal hubs', image: null },
];


const IndustrySection = () => {
  return (
    <section className="industry-section section-padding">
      <div className="container">
        <div className="industry-layout">
          <div className="industry-left fade-up">
            <span className="eyebrow">Industry Expertise</span>
            <h2>Sector-specific<br />logistics solutions</h2>
            <p>
              Every industry has unique cargo requirements, compliance obligations, and supply chain rhythms. GACIS operates dedicated specialist teams for each sector, ensuring you receive logistics expertise — not just transportation.
            </p>
            <div className="industry-certifications">
              <Link to="/about" className="cert-badge">IATA Partner Network</Link>
              <Link to="/about" className="cert-badge">ISO 9001:2015 Aligned</Link>
              <Link to="/about" className="cert-badge">GDP Partner Compliant</Link>
              <Link to="/about" className="cert-badge">FIATA Network Member</Link>
            </div>
          </div>

          <div className="industry-right">
            <div className="industry-grid">
              {industries.map((ind, i) => (
                <div className={`industry-tile fade-up delay-${Math.min((i + 1) * 100, 500)}`} key={i}>
                  {ind.image && (
                    <div className="industry-tile-img-wrap">
                      <FadeImage src={ind.image} alt={ind.name} className="industry-tile-img" />
                    </div>
                  )}
                  <div className="industry-tile-content">
                    <h4>{ind.name}</h4>
                    <p>{ind.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
