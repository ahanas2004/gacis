import { useState } from 'react';
import { 
  BookOpen, FileText, Newspaper, TrendingUp, Leaf, Globe2, ArrowRight, 
  ShieldCheck, ShieldAlert, Lock, Zap, Compass, Thermometer, Truck, 
  Train, Ship, Plane, Layers, Search, X, Calendar, UserCheck, Eye, Award, CheckCircle2, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import { rareLogisticsArticles } from '../../data/articles';
import './Resources.css';

export const Resources = () => {
  // ─── Filter State ────────────────────────────────────────────────────────
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'ALL', label: 'ALL RARE ARTICLES' },
    { id: 'STRATEGIC & SECRET ROUTES', label: 'STRATEGIC & SECRET ROUTES' },
    { id: 'HIGH-SECURITY & ARMED ESCORT', label: 'HIGH-SECURITY & ARMED ESCORT' },
    { id: 'EXTREME ENVIRONMENT LOGISTICS', label: 'EXTREME ENVIRONMENT LOGISTICS' },
    { id: 'BIOPHARMACEUTICAL COLD-CHAIN', label: 'BIOPHARMACEUTICAL COLD-CHAIN' }
  ];

  const filteredArticles = rareLogisticsArticles.filter((art) => {
    const matchesCategory = activeCategory === 'ALL' || art.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="resources-page">
      <SEO 
        title="Logistics Knowledge Hub & Rare Trade Corridors — GACIS"
        description="Insider logistics intelligence, rare trade corridors, TAPA TSR-1 secure convoy protocols, Arctic navigation, and GDP sub-zero cold chain guides."
        canonical="/resources"
      />

      {/* ═══════════════════════════════════════════════════════════════
          STANDARD GACIS PAGE HEADER (Matches All Subpages)
          ═══════════════════════════════════════════════════════════════ */}
      <PageHeader
        eyebrow="KNOWLEDGE & TRADE INTELLIGENCE HUB"
        eyebrowIcon={BookOpen}
        title="Rare Logistics Corridors & Secret Trade Intelligence"
        description="Exclusive field reports, classified route breakdowns, extreme environment protocols, and high-security freight intelligence authored by senior GACIS supply chain engineers."
        statusTag="VERIFIED FREIGHT INTELLIGENCE & RESEARCH"
      >
        <div className="res-header-actions">
          <Link to="/quote" className="btn btn-primary">
            REQUEST CUSTOM CORRIDOR ANALYSIS <ArrowRight size={15} />
          </Link>
          <Link to="/contact" className="btn btn-outline-white">
            TALK TO SPECIALIST DESK
          </Link>
        </div>
      </PageHeader>

      {/* Quick Category Summary Bar */}
      <div className="res-stats-strip bg-primary">
        <div className="container">
          <div className="rss-grid">
            <div className="rss-card">
              <span className="rss-num text-gold">TITR Corridor</span>
              <span className="rss-lbl">Middle Corridor Secret Caspian Transit</span>
            </div>
            <div className="rss-card">
              <span className="rss-num text-green">TAPA TSR-1</span>
              <span className="rss-lbl">Classified Armed Escort Logistics</span>
            </div>
            <div className="rss-card">
              <span className="rss-num text-primary">NSR Arctic</span>
              <span className="rss-lbl">Nuclear Icebreaker Convoy Corridors</span>
            </div>
            <div className="rss-card">
              <span className="rss-num text-green">-80°C Cryo</span>
              <span className="rss-lbl">Active GDP Bio-Pharma Cold-Chain</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: SEARCH & FILTER BAR
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="section-heading text-center centered-heading">
            <span className="eyebrow text-gold">RARE LOGISTICS KNOWLEDGE HUB</span>
            <h2>Classified Routes, Extreme Corridors & Proven Field Guides</h2>
            <p className="res-lead-text">
              Discover industry secrets, rare trade lanes, high-security escort protocols, and specialized cold-chain engineering that most freight forwarders never disclose.
            </p>
          </div>

          {/* Search Input */}
          <div className="res-search-box">
            <Search size={18} className="rsb-icon" />
            <input 
              type="text" 
              placeholder="Search rare routes, security protocols, cryo pharma, or heavy lift engineering..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="rsb-input"
            />
            {searchQuery && (
              <button type="button" onClick={() => setSearchQuery('')} className="rsb-clear">
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="res-filter-pills">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`rfp-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* ═══════════════════════════════════════════════════════════════
              ARTICLE GRID — HIGH VISIBILITY CARDS WITH DIRECT LINKS
              ═══════════════════════════════════════════════════════════════ */}
          <div className="res-articles-grid">
            {filteredArticles.map((art) => (
              <div className="res-art-card" key={art.id}>
                <div className="rac-top">
                  <span className="rac-tag">{art.categoryTag}</span>
                  <span className="rac-score">{art.rarityScore}</span>
                </div>

                <h3 className="rac-title">
                  <Link to={`/resources/${art.slug}`}>{art.title}</Link>
                </h3>
                
                <p className="rac-excerpt">{art.excerpt}</p>

                <div className="rac-stats-row">
                  {art.stats.map((s, idx) => (
                    <div className="rac-stat-item" key={idx}>
                      <span className="rsi-val">{s.val}</span>
                      <span className="rsi-lbl">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="rac-links-row">
                  {art.externalRef && (
                    <a 
                      href={art.externalRef} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="rac-ext-link"
                      title={`Authority Source: ${art.externalSource}`}
                    >
                      <span>Source: {art.externalSource.split(' ')[0]}</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                  
                  <Link to={`/resources/${art.slug}`} className="rac-direct-link">
                    DIRECT ARTICLE LINK <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="rac-footer">
                  <div className="rac-meta">
                    <span className="rac-author">{art.author}</span>
                    <span className="rac-time">• {art.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="res-empty-box text-center">
              <ShieldAlert size={36} className="text-gold margin-inline-auto" />
              <h3>No articles found matching "{searchQuery}"</h3>
              <p>Try searching for terms like "Caspian", "TAPA", "Cryo", "Rail", or "Arctic".</p>
              <button type="button" onClick={() => { setSearchQuery(''); setActiveCategory('ALL'); }} className="btn btn-secondary btn-sm">
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: SUSTAINABILITY SCOPE 3 LINK BANNER
          ═══════════════════════════════════════════════════════════════ */}
      <section className="section-padding-sm bg-dark text-white">
        <div className="container">
          <div className="sustain-layout">
            <Leaf size={40} style={{ color: 'var(--color-success)', flexShrink: 0 }} />
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-brand-gold)' }}>SCOPE 3 CARBON INTELLIGENCE</span>
              <h3 style={{ color: 'white', marginBottom: '0.35rem', fontSize: '1.25rem', fontWeight: '800' }}>Lower-Carbon Logistics by Design</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '640px', fontSize: '0.875rem', lineHeight: '1.5' }}>
                Discover our methodology for GLEC-compliant carbon accounting, modal substitution metrics, and how switching to intermodal rail can reduce your freight emissions by up to 87%.
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
