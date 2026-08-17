import { useState } from 'react';
import { MapPin, Mail, Building2, Globe2, ArrowRight, Phone, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import './GlobalNetwork.css';

const locations = [
  {
    id: 'uae',
    country: 'United Arab Emirates',
    city: 'Dubai',
    flag: '🇦🇪',
    role: 'Global Headquarters & Gulf Hub',
    company: 'GACIS CARGO SERVICES LLC',
    address: '#04-028, Fahidi Heights, Office Tower (Al Musalla Tower), 4th Floor, Bur Dubai, UAE — P.O. Box: 624699',
    email: 'info@gaciscargoservices.com',
    services: ['Air Freight', 'Sea Freight (FCL/LCL)', 'Land Freight', 'Multimodal Hub', 'Customs Brokerage'],
    x: 575, y: 245,
  },
  {
    id: 'india',
    country: 'India',
    city: 'Chennai',
    flag: '🇮🇳',
    role: 'South Asia Gateway',
    company: 'GACIS CARGO SERVICES PVT LTD.',
    address: 'Akshaya Plaza, 1st Floor, Off No. F11, No.55/56, Adithanar Salai, Egmore, Chennai-600002, Tamil Nadu, India',
    email: 'pricing.in@gaciscargoservices.com',
    services: ['Air Freight', 'Ocean Consolidation', 'Customs Clearance', 'Door-to-Door Logistics'],
    x: 690, y: 285,
  },
  {
    id: 'srilanka',
    country: 'Sri Lanka',
    city: 'Colombo',
    flag: '🇱🇰',
    role: 'Indian Ocean Transshipment Port',
    company: 'GACIS CARGO SERVICES (PVT) LTD.',
    address: '1st Floor, No. 35/1/1/1, Dawson Street, Colombo-02, Sri Lanka',
    email: 'info@gaciscargoservices.com',
    services: ['Sea Freight Hub', 'Port Clearance', 'Consolidation Services', 'Customs Brokerage'],
    x: 695, y: 320,
  },
  {
    id: 'malaysia',
    country: 'Malaysia',
    city: 'Klang',
    flag: '🇲🇾',
    role: 'Southeast Asia Hub',
    company: 'GACIS CARGO SERVICES SDN BHD',
    address: 'Suite 08-06C, Level 8, Centro No.8, Jalan Batu Tiga Lama, 41300 Klang, Selangor Darul Ehsan, Malaysia',
    email: 'info@gaciscargoservices.com',
    services: ['Sea Freight (Port Klang)', 'Air Cargo (KLIA)', 'ASEAN Cross-Border Land Freight'],
    x: 775, y: 315,
  },
  {
    id: 'kazakhstan',
    country: 'Kazakhstan',
    city: 'Almaty',
    flag: '🇰🇿',
    role: 'CIS & Central Asia Corridor',
    company: 'GACIS CARGO SERVICES (CIS Gateway)',
    address: 'Almaty Logistics Center, Republic of Kazakhstan',
    email: 'info@gaciscargoservices.com',
    services: ['Silk Road Rail Freight', 'Cross-Border Trucking', 'Multimodal CIS Transshipment'],
    x: 660, y: 175,
  },
];

// Flight / Sea Route Connections from Dubai HQ
const routes = [
  { from: { x: 575, y: 245 }, to: { x: 690, y: 285 } }, // Dubai -> Chennai
  { from: { x: 575, y: 245 }, to: { x: 695, y: 320 } }, // Dubai -> Colombo
  { from: { x: 575, y: 245 }, to: { x: 775, y: 315 } }, // Dubai -> Klang
  { from: { x: 575, y: 245 }, to: { x: 660, y: 175 } }, // Dubai -> Almaty
  { from: { x: 690, y: 285 }, to: { x: 775, y: 315 } }, // Chennai -> Klang
];

const GlobalNetwork = () => {
  const [active, setActive] = useState(locations[0]);

  return (
    <div className="global-network-page">
      <div className="page-header bg-maroon">
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>International Footprint</span>
          <h1>Global Network</h1>
          <p>Strategically positioned hubs connecting the Gulf, South Asia, Central Asia (CIS), and Southeast Asia with global trade lanes.</p>
        </div>
      </div>

      {/* Metric Strip */}
      <div className="network-stats-strip">
        <div className="container">
          <div className="nss-grid">
            {[
              { val: '5', label: 'Direct Regional Offices' },
              { val: '150+', label: 'Countries Connected' },
              { val: '40+', label: 'International Trade Lanes' },
              { val: '99.2%', label: 'On-Time Network Delivery' },
            ].map((s, i) => (
              <div className="nss-item" key={i}>
                <span className="nss-val">{s.val}</span>
                <span className="nss-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Map + Details Layout */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="network-layout">

            {/* Left: Vector Map Canvas */}
            <div className="map-panel">
              <div className="map-panel-header">
                <div>
                  <span className="eyebrow">Interactive Global Map</span>
                  <h3>Active Corridors & Hubs</h3>
                </div>
                <span className="map-legend-hint">Click a hub to view details</span>
              </div>

              <div className="vector-map-wrapper">
                <svg
                  viewBox="0 0 1000 500"
                  className="interactive-world-svg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#1e293b" />
                    </linearGradient>
                    <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#c8202f" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.6" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Ocean Base */}
                  <rect width="1000" height="500" rx="12" fill="url(#oceanGrad)" />

                  {/* Lat/Long Grid Lines */}
                  <g stroke="rgba(255,255,255,0.05)" strokeWidth="1">
                    <line x1="0" y1="125" x2="1000" y2="125" />
                    <line x1="0" y1="250" x2="1000" y2="250" />
                    <line x1="0" y1="375" x2="1000" y2="375" />
                    <line x1="250" y1="0" x2="250" y2="500" />
                    <line x1="500" y1="0" x2="500" y2="500" />
                    <line x1="750" y1="0" x2="750" y2="500" />
                  </g>

                  {/* World Continents Rough Geometry */}
                  <g fill="#334155" opacity="0.65">
                    {/* North America */}
                    <path d="M 120 70 Q 180 50, 240 70 Q 280 120, 220 180 Q 170 210, 150 160 Q 100 120, 120 70 Z" />
                    {/* South America */}
                    <path d="M 230 250 Q 290 270, 270 360 Q 240 440, 210 390 Q 200 300, 230 250 Z" />
                    {/* Europe */}
                    <path d="M 450 70 Q 530 60, 560 110 Q 520 150, 460 140 Q 430 110, 450 70 Z" />
                    {/* Africa */}
                    <path d="M 460 160 Q 550 160, 560 250 Q 540 370, 480 370 Q 430 260, 460 160 Z" />
                    {/* Asia */}
                    <path d="M 560 70 Q 750 50, 880 120 Q 850 240, 750 260 Q 640 220, 580 160 Z" />
                    {/* India Subcontinent */}
                    <path d="M 660 210 Q 710 210, 710 290 Q 670 320, 650 250 Z" />
                    {/* Southeast Asia & Indonesia */}
                    <path d="M 760 260 Q 820 270, 830 330 Q 780 360, 750 300 Z" />
                    {/* Australia */}
                    <path d="M 790 350 Q 880 340, 890 410 Q 820 440, 780 390 Z" />
                  </g>

                  {/* Connecting Trade Route Lines */}
                  {routes.map((r, i) => {
                    const midX = (r.from.x + r.to.x) / 2;
                    const midY = (r.from.y + r.to.y) / 2 - 25;
                    return (
                      <g key={i}>
                        <path
                          d={`M ${r.from.x} ${r.from.y} Q ${midX} ${midY}, ${r.to.x} ${r.to.y}`}
                          fill="none"
                          stroke="url(#routeGrad)"
                          strokeWidth="2"
                          strokeDasharray="4,4"
                          className="trade-route-path"
                        />
                      </g>
                    );
                  })}

                  {/* Hub Locations & Pulsing Markers */}
                  {locations.map((loc) => {
                    const isSelected = active.id === loc.id;
                    return (
                      <g
                        key={loc.id}
                        className="map-node-group"
                        onClick={() => setActive(loc)}
                        style={{ cursor: 'pointer' }}
                      >
                        {/* Pulse Ring */}
                        {isSelected && (
                          <circle
                            cx={loc.x}
                            cy={loc.y}
                            r="16"
                            fill="none"
                            stroke="#c8202f"
                            strokeWidth="2"
                            opacity="0.8"
                            className="svg-pulse-ring"
                          />
                        )}

                        {/* Outer Glow Circle */}
                        <circle
                          cx={loc.x}
                          cy={loc.y}
                          r={isSelected ? 9 : 6}
                          fill={isSelected ? '#c8202f' : '#ffffff'}
                          stroke="#0f172a"
                          strokeWidth="2"
                          filter={isSelected ? 'url(#glow)' : undefined}
                        />

                        {/* Center Dot */}
                        <circle
                          cx={loc.x}
                          cy={loc.y}
                          r={isSelected ? 4 : 2.5}
                          fill={isSelected ? '#ffffff' : '#c8202f'}
                        />

                        {/* City Label */}
                        <text
                          x={loc.x}
                          y={loc.y - 12}
                          textAnchor="middle"
                          fill={isSelected ? '#ffffff' : '#cbd5e1'}
                          fontSize={isSelected ? '12' : '10'}
                          fontWeight={isSelected ? '800' : '600'}
                          fontFamily="Plus Jakarta Sans, sans-serif"
                          className="map-city-text"
                        >
                          {loc.city}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Quick Select Hub Buttons */}
              <div className="location-tabs">
                {locations.map(loc => (
                  <button
                    key={loc.id}
                    className={`location-tab ${active.id === loc.id ? 'active' : ''}`}
                    onClick={() => setActive(loc)}
                  >
                    <span className="loc-flag">{loc.flag}</span>
                    <span>{loc.city} ({loc.country.split(' ')[0]})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Selected Office Details */}
            <div className="location-detail-panel">
              <div className="ldp-header">
                <span className="loc-flag-lg">{active.flag}</span>
                <div>
                  <span className="eyebrow" style={{ marginBottom: '0.25rem' }}>{active.role}</span>
                  <h2>{active.city}, {active.country}</h2>
                </div>
              </div>

              <div className="ldp-company-row">
                <Building2 size={16} className="ldp-icon" />
                <span className="ldp-company-text">{active.company}</span>
              </div>

              <div className="ldp-info">
                <div className="ldp-info-row">
                  <MapPin size={18} className="ldp-icon" />
                  <p>{active.address}</p>
                </div>
                <div className="ldp-info-row">
                  <Mail size={18} className="ldp-icon" />
                  <a href={`mailto:${active.email}`}>{active.email}</a>
                </div>
              </div>

              <div className="ldp-services">
                <span className="eyebrow" style={{ marginBottom: '0.75rem' }}>Available Operations</span>
                <div className="ldp-tags">
                  {active.services.map(s => (
                    <span key={s} className="ldp-tag">
                      <Check size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle', color: 'var(--gacis-red)' }} />
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="ldp-actions">
                <Link to="/quote" className="btn btn-primary" style={{ flex: 1 }}>
                  Request Quote <ArrowRight size={15} className="arrow-icon" />
                </Link>
                <Link to="/contact" className="btn btn-secondary" style={{ flex: 1 }}>
                  Contact Office
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Agency Partner Banner */}
      <section className="section-padding-sm bg-maroon network-partner-banner">
        <div className="container">
          <div className="npb-inner">
            <Globe2 size={44} style={{ color: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
            <div>
              <h3 style={{ color: 'white', marginBottom: '0.4rem' }}>Extensive Global Agent Representation</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, fontSize: '0.9375rem' }}>
                Beyond our direct regional hubs in Dubai, Chennai, Colombo, Klang, and Almaty, GACIS operates with vetted logistics alliances across Europe, the Americas, Africa, and East Asia.
              </p>
            </div>
            <Link to="/contact" className="btn btn-outline-white" style={{ flexShrink: 0 }}>
              Enquire Global Lanes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GlobalNetwork;
