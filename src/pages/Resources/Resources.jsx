import { BookOpen, FileText, Newspaper, TrendingUp, Leaf, Globe2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/Common/SEO';
import './Resources.css';

const guides = [
  { 
    title: 'Incoterms 2020 Complete Operational Breakdown', 
    cat: 'Trade Compliance', 
    desc: 'An in-depth analysis of all 11 Incoterms (DDP, DAP, CIF, FOB, EXW) — risk transfer thresholds, insurance duties, and commercial contract allocation.' 
  },
  { 
    title: 'Air Cargo vs. Trans-Eurasian Rail: Modal Analysis', 
    cat: 'Corridor Optimization', 
    desc: 'Cost per kilogram, lead times, and Scope 3 carbon variance when shifting industrial freight from scheduled airfreight to Silk Road block trains.' 
  },
  { 
    title: 'Customs & TIR Documentation Checklist for CIS Transit', 
    cat: 'Customs Brokerage', 
    desc: 'Every essential document required for seamless transit across the Caspian: Commercial Invoices, Packing Lists, Certificates of Origin, and CMR consignment notes.' 
  },
  { 
    title: 'HS Code Algorithmic Classification Guide', 
    cat: 'Tariff Advisory', 
    desc: 'How to correctly classify dual-use, chemical, and industrial components to prevent customs penalties, demurrage, and tariff miscalculations.' 
  },
  { 
    title: 'Ocean Container Dimensions & Reefer Specifications', 
    cat: 'Equipment Guide', 
    desc: 'Payload limits, volumetric capacities, and power plug standards for 20ft, 40ft High Cube, Open Top, Flat Rack, and active GDP Reefer containers.' 
  },
  { 
    title: 'Gulf–Central Asia Multimodal Corridors Overview', 
    cat: 'Regional Trade Lanes', 
    desc: 'Transit dynamics, gauge changes, seasonal weather impacts, and customs union clearances across the Trans-Caspian international transport route.' 
  }
];

const news = [
  { date: 'Aug 2026', title: 'GACIS expands Malaysia operations with new Klang logistics facility', tag: 'Network Expansion' },
  { date: 'Jul 2026', title: 'New direct air charter capacity between Dubai DWC and Almaty inaugurated', tag: 'Air Cargo' },
  { date: 'Jun 2026', title: 'GACIS achieves ISO 9001:2015 and GDP pharma re-certification', tag: 'Compliance' },
  { date: 'May 2026', title: 'Strategic rail block train agreements signed for Trans-Caspian Middle Corridor', tag: 'Intermodal Rail' }
];

export const Resources = () => {
  return (
    <div className="resources-page">
      <SEO 
        title="Logistics Knowledge Hub & Industry Guides"
        description="Expert logistics trade guides, Incoterms breakdowns, customs checklists, and trade lane operational dispatches from GACIS."
        canonical="/resources"
      />

      <div className="page-header bg-maroon">
        <div className="container">
          <span className="eyebrow eyebrow-light">KNOWLEDGE & INTELLIGENCE</span>
          <h1>Resources & Insights</h1>
          <p>
            Practical freight intelligence, compliance checklists, trade lane analysis, and operational dispatches authored by GACIS supply chain engineers.
          </p>
        </div>
      </div>

      {/* Shipping Guides Grid */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">PRACTICAL INTELLIGENCE</span>
            <h2>Logistics & Trade Compliance Knowledge Base</h2>
            <p>Authoritative guides written for procurement leaders, logistics directors, and global supply chain managers.</p>
          </div>

          <div className="guides-grid">
            {guides.map((g, i) => (
              <div className="guide-card" key={i}>
                <span className="guide-cat">{g.cat}</span>
                <h4>{g.title}</h4>
                <p>{g.desc}</p>
                <Link to="/contact" className="guide-link">
                  Consult Specialist <ArrowRight size={14} className="arrow-icon" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company News & Corridor Updates */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="resources-news-layout">
            <div>
              <span className="eyebrow">OPERATIONAL DISPATCHES</span>
              <h2>Network Developments</h2>
              <p style={{ marginTop: '0.5rem', color: 'var(--text-secondary)' }}>
                Keep informed on route expansions, new block train allocations, and regulatory changes across the Gulf and Eurasian corridors.
              </p>
            </div>

            <div className="news-list">
              {news.map((n, i) => (
                <div className="news-item" key={i}>
                  <div className="news-meta">
                    <span className="news-date tabular-nums">{n.date}</span>
                    <span className="news-tag">{n.tag}</span>
                  </div>
                  <h4>{n.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Sustainability Banner */}
      <section className="section-padding-sm bg-dark">
        <div className="container">
          <div className="sustain-layout">
            <Leaf size={44} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-brand-gold)' }}>SCOPE 3 CARBON INTELLIGENCE</span>
              <h3 style={{ color: 'white', marginBottom: '0.5rem' }}>Lower-Carbon Logistics by Design</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '640px' }}>
                Discover our methodology for GLEC-compliant carbon accounting, modal substitution metrics, and how switching to intermodal rail can reduce your freight emissions by up to 75%.
              </p>
            </div>
            <Link to="/sustainability" className="btn btn-primary" style={{ flexShrink: 0 }}>
              Explore Sustainability <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
