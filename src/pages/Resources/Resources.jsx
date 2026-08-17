import { BookOpen, FileText, Newspaper, TrendingUp, Leaf, Globe2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Resources.css';

const guides = [
  { title: 'Incoterms 2020 Explained', cat: 'Trade Guide', desc: 'A complete breakdown of all 11 Incoterms — who is responsible, where risk transfers, and how to choose the right one for your contract.' },
  { title: 'Air vs Sea Freight: When to Use Each', cat: 'Mode Guide', desc: 'Compare cost, transit time, and cargo suitability to decide the optimal transport mode for your next shipment.' },
  { title: 'Customs Documentation Checklist', cat: 'Compliance', desc: 'Every document you need for smooth customs clearance — Commercial Invoice, Bill of Lading, Packing List, COO, and more.' },
  { title: 'HS Code Classification Guide', cat: 'Compliance', desc: 'How to correctly classify your goods under the Harmonized System to avoid delays, penalties, and duty miscalculations.' },
  { title: 'Container Types & Specifications', cat: 'Sea Freight', desc: 'Dimensions, capacities, and best use cases for 20ft, 40ft, HC, Reefer, Open Top, Flat Rack, and more container types.' },
  { title: 'CIS Trade Lane Overview', cat: 'Regional', desc: 'Key customs regulations, documentation requirements, and transit considerations for cargo moving through CIS countries.' },
];

const news = [
  { date: 'Aug 2026', title: 'GACIS expands Malaysia operations with new Klang facility', tag: 'Network' },
  { date: 'Jul 2026', title: 'New direct air freight routes between Dubai and Almaty launched', tag: 'Air Freight' },
  { date: 'Jun 2026', title: 'GACIS achieves ISO 9001:2015 re-certification for third consecutive year', tag: 'Certification' },
  { date: 'May 2026', title: 'Partnership signed with leading CIS rail operator for weekly block trains', tag: 'Rail' },
];

const Resources = () => {
  return (
    <div className="resources-page">
      <div className="page-header bg-maroon">
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>Knowledge Hub</span>
          <h1>Resources & Insights</h1>
          <p>Expert logistics knowledge, compliance guides, trade lane insights, and the latest news from GACIS.</p>
        </div>
      </div>

      {/* Shipping Guides */}
      <section className="section-padding">
        <div className="container">
          <div className="section-heading fade-up">
            <span className="eyebrow">Shipping Guides</span>
            <h2>Logistics knowledge base</h2>
            <p>Practical guides written by our logistics specialists to help you navigate complex shipping decisions.</p>
          </div>
          <div className="guides-grid">
            {guides.map((g, i) => (
              <div className={`guide-card fade-up delay-${(i % 3 + 1) * 100}`} key={i}>
                <span className="guide-cat">{g.cat}</span>
                <h4>{g.title}</h4>
                <p>{g.desc}</p>
                <button className="btn btn-ghost guide-link">
                  Read Guide <ArrowRight size={14} className="arrow-icon" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="resources-news-layout">
            <div className="fade-up">
              <span className="eyebrow">Company News</span>
              <h2>Latest from GACIS</h2>
            </div>
            <div className="news-list">
              {news.map((n, i) => (
                <div className={`news-item fade-up delay-${(i + 1) * 100}`} key={i}>
                  <div className="news-meta">
                    <span className="news-date">{n.date}</span>
                    <span className="news-tag">{n.tag}</span>
                  </div>
                  <h4>{n.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="section-padding-sm bg-maroon">
        <div className="container">
          <div className="sustain-layout fade-up">
            <Leaf size={40} style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
            <div>
              <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Our Commitment</span>
              <h3 style={{ color: 'white', marginBottom: '0.75rem', marginTop: '0.3rem' }}>Sustainability at GACIS</h3>
              <p style={{ color: 'rgba(255,255,255,0.72)', margin: 0, maxWidth: '600px' }}>
                We are committed to responsible logistics. By leveraging multimodal transport, rail alternatives, and route optimisation, we help clients reduce emissions and improve supply chain efficiency. Measurable environmental targets are in development with our sustainability team.
              </p>
            </div>
            <Link to="/contact" className="btn btn-outline-white" style={{ flexShrink: 0 }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
