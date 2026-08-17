import './IndustrySection.css';

const industries = [
  { name: 'Automotive', desc: 'Vehicle parts, CKD kits, production line logistics' },
  { name: 'Pharmaceuticals', desc: 'Cold-chain, controlled atmosphere, GDP compliance' },
  { name: 'Electronics', desc: 'High-value, ESD-safe, expedited air solutions' },
  { name: 'Oil & Energy', desc: 'Heavy equipment, drilling components, project cargo' },
  { name: 'FMCG & Retail', desc: 'High-volume, seasonal, omnichannel distribution' },
  { name: 'Manufacturing', desc: 'Raw materials, machinery, and component sourcing' },
  { name: 'Chemicals', desc: 'Hazmat handling, compliance, dedicated tankers' },
  { name: 'Construction', desc: 'Oversized loads, project management, site delivery' },
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
              <div className="cert-badge">IATA Certified</div>
              <div className="cert-badge">ISO 9001:2015</div>
              <div className="cert-badge">GDP Compliant</div>
              <div className="cert-badge">FIATA Member</div>
            </div>
          </div>

          <div className="industry-right">
            <div className="industry-grid">
              {industries.map((ind, i) => (
                <div className={`industry-tile fade-up delay-${Math.min((i + 1) * 100, 500)}`} key={i}>
                  <h4>{ind.name}</h4>
                  <p>{ind.desc}</p>
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
