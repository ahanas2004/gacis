import { useState } from 'react';
import { 
  BookOpen, FileText, Newspaper, TrendingUp, Leaf, Globe2, ArrowRight, 
  ShieldCheck, ShieldAlert, Lock, Zap, Compass, Thermometer, Truck, 
  Train, Ship, Plane, Layers, Search, X, Calendar, UserCheck, Eye, Award, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import './Resources.css';

// ─── RARE & STRATEGIC LOGISTICS ARTICLES KNOWLEDGE DATABASE ────────────────
const rareLogisticsArticles = [
  {
    id: 'titr-caspian-bypass',
    title: 'The Trans-Caspian Secret: Navigating the Middle Corridor Bypass',
    category: 'STRATEGIC & SECRET ROUTES',
    categoryTag: 'STRATEGIC ROUTE',
    rarityScore: '5/5 Classified Route',
    author: 'GACIS Trade Lane Intelligence Unit',
    readTime: '6 min read',
    date: 'August 2026',
    excerpt: 'How high-value enterprise cargo bypasses traditional maritime chokepoints and geopolitical blockades through Baku, Aktau, and Kuryk port feeder networks across the Caspian Sea.',
    fullContent: `
      ### The Strategic Imperative of the Trans-Caspian Corridor

      Global supply chain disruptions, Suez Canal congestion, and regional maritime chokepoints have forced enterprise logistics directors to seek alternative, high-security land-sea bridges. The Trans-Caspian International Transport Route (TITR), known as the **Middle Corridor**, represents one of the world's most strategic and complex multimodal linehauls.

      #### How the Caspian Feeder Network Operates
      
      1. **East-to-West Railway Linehaul**: Cargo originates in inland hubs (Xi'an, Chengdu, Tashkent, Almaty) moving on 1,520mm broad-gauge block trains toward the Port of Aktau or Port of Kuryk in Kazakhstan.
      2. **Caspian Vessel Feeder Crossing**: Containers are loaded onto specialized Ro-Pax feeder vessels and dedicated container barges crossing the Caspian Sea directly to the Port of Baku (Alat), Azerbaijan in 24 to 36 hours.
      3. **Caucasian & Black Sea Transit**: Freight moves via electric rail across Azerbaijan and Georgia to Poti / Batumi ports, or continues overland through Turkey's Marmaray Rail Tunnel into Southeastern Europe.

      #### Key Technical & Customs Mechanisms
      * **Single-Document TIR Carnet**: GACIS utilizes unified TIR Carnet transit customs bonds, eliminating border inspection delays at 5 international frontiers.
      * **Gauge Exchange Synchronization**: Automatic twist-lock gantry cranes transfer 40ft High Cube containers between Russian broad-gauge (1,520mm) and European standard-gauge (1,435mm) rail wagons in under 42 minutes.
      * **Scope 3 Carbon Impact**: Shifting Asia-to-Europe freight from air cargo to the Middle Corridor rail-sea hybrid reduces Scope 3 carbon emissions by **87.4%** while delivering a reliable 12 to 14-day door-to-door transit time.
    `,
    stats: [
      { label: 'Transit Time', val: '12-14 Days' },
      { label: 'CO₂ Savings', val: '-87.4%' },
      { label: 'Border Clearance SLA', val: '< 45 Mins' }
    ]
  },
  {
    id: 'tapa-tsr1-fortress-convoys',
    title: 'TAPA TSR-1 Fortress Convoys: The Safest High-Value Cargo Route',
    category: 'HIGH-SECURITY & ARMED ESCORT',
    categoryTag: 'SECURITY PROTOCOL',
    rarityScore: '5/5 Classified Security',
    author: 'GACIS Secure Freight Security Desk',
    readTime: '7 min read',
    date: 'August 2026',
    excerpt: 'Inside the 4,200km overland convoy protocol protecting billion-dollar semiconductor, gold bullion, and high-tech shipments between Europe, Dubai, and Central Asia with zero theft incidents.',
    fullContent: `
      ### High-Value Cargo Transport in High-Risk Transit Zones

      Transporting semiconductor lithography equipment, microchip wafers, currency, and high-tech electronics across international borders presents extreme theft and hijacking vulnerabilities. GACIS operates TAPA TSR-1 (Transport Security Requirements Level 1) certified fortress convoys across Europe, Turkey, and Central Asia.

      #### The 5 Pillars of Fortress Convoy Engineering
      
      1. **TAPA TSR Level 1 Hardened Equipment**: High-cube trailers equipped with double-walled reinforced steel doors, internal hydraulic deadbolts, acoustic tamper sensors, and anti-cut Kevlar side curtains.
      2. **Dual-Driver & Armed Security Escorts**: Vehicles maintain continuous 24/7 rolling movement. Two certified heavy-haul drivers are paired with trailing armored escort vehicles staffed by licensed armed security personnel.
      3. **Satellite Geofencing & Remote Ignition Kill**: Every trailer is linked to the GACIS Global Control Center via dual-redundant L-band satellite and cellular telemetry. If a vehicle strays >50 meters from its pre-approved GPS corridor, automated anti-theft protocols lock the brakes and disable fuel injection remotely.
      4. **Secure Haven Parking Grid**: Convoys stop only at pre-surveyed TAPA PSR (Parking Security Requirements) Level 1 gated facilities with thermal perimeter fencing, armed guards, and 4K CCTV surveillance.
      5. **Zero Cargo Loss Track Record**: Over 1.2 million transit kilometers logged over 12 consecutive years with **0% cargo loss, zero pilferage, and zero security breaches**.
    `,
    stats: [
      { label: 'Cargo Loss Rate', val: '0.00%' },
      { label: 'TAPA Security Level', val: 'TSR-1 Certified' },
      { label: 'Control SLA', val: 'Real-Time Satellite' }
    ]
  },
  {
    id: 'cryo-pharma-corridors',
    title: 'Sub-Zero Cryo-Logistics: Flying -80°C Active Bio-Pharma Corridors',
    category: 'BIOPHARMACEUTICAL COLD-CHAIN',
    categoryTag: 'CRYO COLD-CHAIN',
    rarityScore: '4/5 GDP Certified',
    author: 'GACIS GDP Cold-Chain Engineering Team',
    readTime: '5 min read',
    date: 'July 2026',
    excerpt: 'Operational mechanics of flying GDP-certified active dry-ice temperature-controlled containers (+2°C to +8°C and -80°C) for live vaccines and gene therapy cargo across extreme ambient climates.',
    fullContent: `
      ### Defying Desert Heat with Active Cryogenic Logistics

      Moving life-saving biopharmaceuticals, clinical trial materials, and live mRNA vaccines through transit hubs like Dubai (where tarmac temperatures exceed +48°C) requires zero-tolerance cold chain precision.

      #### Technical Execution Protocols
      
      * **Active ThermoKing & Envirotainer Flight ULDs**: Active compressor-driven RAP e2 airfreight containers maintain continuous internal setpoints of -80°C to +5°C without relying on dry ice replenishment.
      * **Sub-7 Minute Tarmac Transfer SLA**: GACIS tarmac operations utilize climate-controlled dollies with direct apron-to-aircraft hoist doors, keeping ambient tarmac exposure under 7 minutes.
      * **Dual BLE Telemetry & GPS Shock Sensors**: Every container transmits real-time internal temperature, relative humidity, light exposure, and G-force shock metrics directly to the carrier cockpit and GACIS pharma control room.
      * **GDP Certified Airport Cold Rooms**: Dedicated +2°C to +8°C, +15°C to +25°C, and -20°C deep freeze vaults with 100% emergency generator backup at Dubai (DXB/DWC), Frankfurt (FRA), and Almaty (ALA).
    `,
    stats: [
      { label: 'Temperature Setpoint', val: '-80°C to +5°C' },
      { label: 'Tarmac Exposure SLA', val: '< 7 Minutes' },
      { label: 'GDP Compliance', val: '100% Audit-Ready' }
    ]
  },
  {
    id: 'polar-northern-sea-route',
    title: 'The Polar Shortcut: Northern Sea Route (NSR) Icebreaker Cargo Convoys',
    category: 'EXTREME ENVIRONMENT LOGISTICS',
    categoryTag: 'ARCTIC MARITIME',
    rarityScore: '5/5 Polar Passage',
    author: 'GACIS Marine Operations Division',
    readTime: '8 min read',
    date: 'July 2026',
    excerpt: 'Navigating Class 1A ARC7 heavy ice-breaking container vessels through sub-zero Arctic sea ice (-40°C), cutting East Asia-to-Europe maritime transit times by 40%.',
    fullContent: `
      ### Opening the Northern Maritime Corridor

      The Northern Sea Route (NSR), running along the Arctic coast of Siberia from the Bering Strait to the Kara Gate, provides a shortcut connecting East Asian ports (Yokohama, Shanghai, Busan) to Northern European destinations (Rotterdam, Hamburg).

      #### Cold-Climate Marine Engineering & Escort Dynamics
      
      1. **ARC7 Heavy Ice-Class Vessel Design**: Vessels feature reinforced bow plating, specialized low-temperature steel hulls capable of operating in -50°C ambient temperatures, and azimuth pod propulsion.
      2. **Nuclear Icebreaker Convoy Lead**: Convoys of 3 to 5 cargo vessels travel directly behind 50MW nuclear-powered icebreakers (such as *Arktika* class) breaking 3-meter thick multi-year sea ice.
      3. **Distance & Fuel Savings**: NSR transit reduces maritime distance from Shanghai to Rotterdam from 10,500 nautical miles (via Suez) to just **6,600 nautical miles**, cutting transit time from 34 days to **18 days**.
      4. **Hydrographic & Weather Telemetry**: Real-time synthetic aperture radar (SAR) satellite imagery maps sea-ice drift vectors, preventing vessel freeze-ins.
    `,
    stats: [
      { label: 'Distance Saved', val: '-3,900 NM' },
      { label: 'Transit Reduction', val: '18 Days vs 34 Days' },
      { label: 'Ice Capability', val: '3m Sea Ice' }
    ]
  },
  {
    id: 'heavy-spmt-monolith',
    title: '600-Ton Monolith SPMT Transport: Mountain & Desert Heavy-Lift Engineering',
    category: 'EXTREME ENVIRONMENT LOGISTICS',
    categoryTag: 'PROJECT CARGO',
    rarityScore: '4/5 Heavy Industrial',
    author: 'GACIS Project Cargo Engineering Desk',
    readTime: '6 min read',
    date: 'June 2026',
    excerpt: 'The physics and engineering behind moving 600-tonne gas turbines and chemical reactors through unpaved mountain passes and desert bridges using 36-axle hydraulic SPMTs.',
    fullContent: `
      ### Engineering the Impossible: Super-Heavy Industrial Linehaul

      Transporting non-divisible industrial equipment—such as 600-metric-ton gas turbines, hydrocracker reactors, and desuperheaters—requires custom civil engineering, bridge reinforcement, and specialized hydraulic trailers.

      #### Execution Architecture
      
      * **36-Axle Hydraulic SPMT Configurations**: Self-Propelled Modular Transporters (SPMTs) equipped with 144 independently steerable wheels and hydraulic suspension that maintains 100% level cargo orientation on 12% grade mountain inclines.
      * **Civil Structural Bypass Engineering**: Before convoy movement, GACIS civil engineers perform structural load testing on all highway bridges, constructing temporary steel bypass culverts and unpaved desert bypass roads where bridge weight limits are exceeded.
      * **Police Escort & Wire Clearance Support**: Nighttime rolling roadblocks with utility crew escorts lifting overhead high-voltage power lines and street signs along the 850km inland route.
    `,
    stats: [
      { label: 'Max Payload Capacity', val: '600+ Metric Tons' },
      { label: 'Axle Levelling Precision', val: '0mm Tilt Variance' },
      { label: 'Bypass Bridges Built', val: '14 Temporary Corridors' }
    ]
  },
  {
    id: 'multi-gauge-rail-swap',
    title: 'The Multi-Gauge Fast Rail Swap: 1520mm to 1435mm Gantry Crane Engineering',
    category: 'STRATEGIC & SECRET ROUTES',
    categoryTag: 'INTERMODAL RAIL',
    rarityScore: '4/5 Intermodal Tech',
    author: 'GACIS Eurasian Rail Logistics Desk',
    readTime: '5 min read',
    date: 'June 2026',
    excerpt: 'How transcontinental Silk Road block trains swap 40ft High-Cube containers between 1,520mm broad-gauge and 1,435mm standard-gauge rail tracks in under 42 minutes.',
    fullContent: `
      ### Overcoming the Great Railway Gauge Divide

      Rail tracks in China and Western Europe use 1,435mm standard gauge, while railways across Central Asia, Kazakhstan, Russia, and Belarus operate on 1,520mm broad gauge. How do Eurasian block trains maintain high-speed schedules across this physical gap?

      #### Dual Transshipment Engineering at Khorgos & Dostyk
      
      1. **High-Speed Overhead Gantry Cranes**: Dual-rail gantry cranes straddle parallel 1,435mm and 1,520mm tracks, lifting 40ft High Cube containers off incoming wagons and locking them onto waiting outbound flatcars in 90 seconds per container.
      2. **Automated Twist-Lock Verification**: Laser sensors scan container corner castings to ensure 100% automatic twist-lock engagement before train departure.
      3. **Electronic CMR & CIM Consignment Conversion**: GACIS Customs Gateways convert rail consignment documentation electronically, enabling continuous train movement without physical customs bond re-entry.
    `,
    stats: [
      { label: 'Container Swap SLA', val: '< 42 Minutes' },
      { label: 'Gantry Crane Speed', val: '90s / Container' },
      { label: 'Consignment Conversion', val: '100% Digital CIM/SMGS' }
    ]
  }
];

export const Resources = () => {
  // ─── Filter State ────────────────────────────────────────────────────────
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

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
              ARTICLE GRID
              ═══════════════════════════════════════════════════════════════ */}
          <div className="res-articles-grid">
            {filteredArticles.map((art) => (
              <div className="res-art-card" key={art.id}>
                <div className="rac-top">
                  <span className="rac-tag">{art.categoryTag}</span>
                  <span className="rac-score">{art.rarityScore}</span>
                </div>

                <h3>{art.title}</h3>
                <p className="rac-excerpt">{art.excerpt}</p>

                <div className="rac-stats-row">
                  {art.stats.map((s, idx) => (
                    <div className="rac-stat-item" key={idx}>
                      <span className="rsi-val">{s.val}</span>
                      <span className="rsi-lbl">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="rac-footer">
                  <div className="rac-meta">
                    <span className="rac-author">{art.author}</span>
                    <span className="rac-time">• {art.readTime}</span>
                  </div>

                  <button 
                    type="button" 
                    onClick={() => setSelectedArticle(art)}
                    className="rac-read-btn"
                  >
                    READ FULL INTELLIGENCE <Eye size={14} />
                  </button>
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
          SECTION 2: EXPANDABLE ARTICLE MODAL / READER
          ═══════════════════════════════════════════════════════════════ */}
      {selectedArticle && (
        <div className="res-modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div className="res-modal-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="rmc-close" onClick={() => setSelectedArticle(null)}>
              <X size={20} />
            </button>

            <div className="rmc-header">
              <div className="rmc-tags">
                <span className="rac-tag">{selectedArticle.categoryTag}</span>
                <span className="rac-score">{selectedArticle.rarityScore}</span>
              </div>
              <h2>{selectedArticle.title}</h2>
              <div className="rmc-author-bar">
                <span>By <strong>{selectedArticle.author}</strong></span>
                <span>• Published {selectedArticle.date}</span>
                <span>• {selectedArticle.readTime}</span>
              </div>
            </div>

            <div className="rmc-stats-banner">
              {selectedArticle.stats.map((s, idx) => (
                <div className="rsb-box" key={idx}>
                  <span className="rsb-val">{s.val}</span>
                  <span className="rsb-lbl">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="rmc-body-content">
              {selectedArticle.fullContent.split('\n\n').map((paragraph, idx) => {
                if (paragraph.trim().startsWith('###')) {
                  return <h3 key={idx}>{paragraph.replace('###', '').trim()}</h3>;
                }
                if (paragraph.trim().startsWith('####')) {
                  return <h4 key={idx}>{paragraph.replace('####', '').trim()}</h4>;
                }
                if (paragraph.trim().startsWith('* ') || paragraph.trim().startsWith('1. ')) {
                  return (
                    <div key={idx} className="rmc-list-block">
                      <p>{paragraph.trim()}</p>
                    </div>
                  );
                }
                return <p key={idx}>{paragraph.trim()}</p>;
              })}
            </div>

            <div className="rmc-footer">
              <div className="rmc-guarantee">
                <ShieldCheck size={20} className="text-gold" />
                <span>Verified GACIS Freight Intelligence Dispatch</span>
              </div>
              <div className="rmc-btns">
                <button type="button" onClick={() => setSelectedArticle(null)} className="btn btn-secondary">
                  Close Article
                </button>
                <Link to="/quote" className="btn btn-primary">
                  BOOK THIS CORRIDOR <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: SUSTAINABILITY SCOPE 3 LINK BANNER
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
