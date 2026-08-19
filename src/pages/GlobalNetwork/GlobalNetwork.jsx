import { useState } from 'react';
import { 
  MapPin, Mail, Building2, Globe2, ArrowRight, Phone, Check, 
  Activity, Plane, Ship, Train, Truck, ShieldCheck, Compass, Radio,
  Layers, ChevronRight, Boxes
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { primaryHubs } from '../../data/locations';
import RealGeographicMap from '../../components/NetworkMap/RealGeographicMap';
import SEO from '../../components/Common/SEO';
import './GlobalNetwork.css';

export const GlobalNetwork = () => {
  const [activeHub, setActiveHub] = useState(primaryHubs[0]);

  return (
    <div className="global-network-page">
      <SEO 
        title="Global Network & Strategic Trade Gateways"
        description="Real-world geographic logistics network bridging Dubai, Chennai, Port Klang, Colombo, Almaty, and Frankfurt with synchronized linehauls and bonded transit clearance."
        canonical="/global-network"
      />

      {/* ─── 01. COMMAND CENTER HERO HEADER ─── */}
      <section className="network-hero-command">
        <div className="container">
          <div className="nhc-badge-row">
            <span className="nhc-pulse-badge">
              <Radio size={14} className="radar-signal-svg" />
              <span>STRATEGIC ARTERIES · GLOBAL LOGISTICS CONSOLE</span>
            </span>
            <span className="nhc-telemetry-tag">
              <Activity size={13} /> 99.2% ON-TIME NETWORK RELIABILITY
            </span>
          </div>

          <h1 className="nhc-title">Global Network & Trade Gateways</h1>
          <p className="nhc-desc">
            Direct Tier-1 trade gateways linking the Gulf, Central Asia (CIS), South Asia, Southeast Asia, and Europe with scheduled multimodal block trains, sea-air linehauls, and bonded customs transit clearance.
          </p>

          {/* Quick Telemetry KPI Bar */}
          <div className="network-telemetry-bar">
            <div className="ntb-stat">
              <span className="ntb-val tabular-nums">6</span>
              <span className="ntb-label">Tier-1 Gateway Desks</span>
            </div>
            <div className="ntb-divider" />
            <div className="ntb-stat">
              <span className="ntb-val tabular-nums">42+</span>
              <span className="ntb-label">Multimodal Corridors</span>
            </div>
            <div className="ntb-divider" />
            <div className="ntb-stat">
              <span className="ntb-val tabular-nums">150+</span>
              <span className="ntb-label">Allied Gateways & Ports</span>
            </div>
            <div className="ntb-divider" />
            <div className="ntb-stat">
              <span className="ntb-val text-gold tabular-nums">24/7</span>
              <span className="ntb-label">Dubai HQ Central Control</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02. REAL GEOGRAPHIC MAP & GATEWAY DOSSIER ─── */}
      <section className="section-padding bg-secondary">
        <div className="container">

          <div className="network-console-grid">

            {/* Left: Real Geographic Leaflet Map */}
            <div className="map-console-wrapper">
              <div className="mcw-header">
                <div>
                  <span className="mcw-eyebrow">ACTIVE TELEMETRY MAP</span>
                  <h3>Real-World Strategic Trade Topology</h3>
                </div>
                <div className="mcw-live-indicator">
                  <span className="live-radar-dot"></span>
                  <span>LIVE CORRIDOR TELEMETRY</span>
                </div>
              </div>

              {/* Real Geographic Map Component */}
              <RealGeographicMap 
                activeHub={activeHub} 
                onSelectHub={setActiveHub} 
              />

              {/* Hub Quick-Select Switcher */}
              <div className="hub-switcher-strip">
                {primaryHubs.map((hub) => {
                  const isSelected = activeHub.id === hub.id;
                  return (
                    <button
                      key={hub.id}
                      type="button"
                      className={`hss-btn ${isSelected ? 'is-selected' : ''}`}
                      onClick={() => setActiveHub(hub)}
                    >
                      <span className="hss-flag">{hub.flag}</span>
                      <span className="hss-city">{hub.city}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Selected Gateway Dossier Panel */}
            <div className="gateway-dossier-card fade-up" key={activeHub.id}>
              <div className="gdc-header">
                <div className="gdc-flag-wrap">
                  <span className="gdc-flag">{activeHub.flag}</span>
                </div>
                <div>
                  <span className="gdc-tier-tag">{activeHub.tier}</span>
                  <h2>{activeHub.city}, {activeHub.country}</h2>
                  <span className="gdc-role-subtitle">{activeHub.role}</span>
                </div>
              </div>

              {/* Real-time Gateway Telemetry Grid */}
              <div className="gdc-telemetry-grid">
                <div className="gdc-tele-item">
                  <span className="gti-lbl">WEEKLY LINEHAULS</span>
                  <span className="gti-val text-gold tabular-nums">{activeHub.stats.weeklyFlights}</span>
                </div>
                <div className="gdc-tele-item">
                  <span className="gti-lbl">THROUGHPUT VOLUME</span>
                  <span className="gti-val tabular-nums">{activeHub.stats.oceanTEU}</span>
                </div>
                <div className="gdc-tele-item">
                  <span className="gti-lbl">BONDED LOGISTICS STAGING</span>
                  <span className="gti-val tabular-nums">{activeHub.stats.warehouseSqFt} sq ft</span>
                </div>
              </div>

              {/* Operating Office Contact Details */}
              <div className="gdc-address-box">
                <div className="gab-row">
                  <MapPin size={16} className="gab-icon" />
                  <p>{activeHub.address}</p>
                </div>
                <div className="gab-row">
                  <Phone size={16} className="gab-icon" />
                  <a href={`tel:${activeHub.phone}`}>{activeHub.phone}</a>
                </div>
                <div className="gab-row">
                  <Mail size={16} className="gab-icon" />
                  <a href={`mailto:${activeHub.email}`}>{activeHub.email}</a>
                </div>
              </div>

              {/* Operational Capabilities List */}
              <div className="gdc-capabilities-box">
                <span className="gcb-lbl">HUB OPERATIONAL CAPABILITIES:</span>
                <ul className="gcb-list">
                  {activeHub.capabilities.map((cap, i) => (
                    <li key={i}>
                      <Check size={13} className="gcb-check" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="gdc-action-buttons">
                <Link to="/quote" className="btn btn-primary gdc-cta">
                  Route Freight via {activeHub.city} <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="btn btn-secondary gdc-cta">
                  Connect with Regional Desk
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── 03. ALL 6 STRATEGIC GATEWAY CARDS ─── */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">GLOBAL PRESENCE</span>
            <h2>Directly Operated Gateway Hubs</h2>
            <p>
              Explore our core regional headquarters and multimodal logistics stations bridging every major global manufacturing and consumption center.
            </p>
          </div>

          <div className="gateway-cards-grid">
            {primaryHubs.map((hub) => (
              <div 
                className={`gateway-station-card ${activeHub.id === hub.id ? 'active-station' : ''}`}
                key={hub.id}
                onClick={() => {
                  setActiveHub(hub);
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
              >
                <div className="gsc-top">
                  <span className="gsc-flag">{hub.flag}</span>
                  <span className="gsc-tier">{hub.tier}</span>
                </div>

                <h3 className="gsc-city">{hub.city}</h3>
                <span className="gsc-country">{hub.country}</span>
                <p className="gsc-role">{hub.role}</p>

                <div className="gsc-specs">
                  <div className="gsc-spec-item">
                    <span>Flights / Block Trains</span>
                    <strong className="tabular-nums">{hub.stats.weeklyFlights}</strong>
                  </div>
                  <div className="gsc-spec-item">
                    <span>Bonded Warehouse</span>
                    <strong className="tabular-nums">{hub.stats.warehouseSqFt} sq ft</strong>
                  </div>
                </div>

                <button type="button" className="btn btn-secondary btn-sm gsc-inspect-btn">
                  Inspect Hub Telemetry <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 04. GLOBAL AGENCY ALLIANCE BANNER ─── */}
      <section className="section-padding-sm bg-dark">
        <div className="container">
          <div className="global-alliance-inner">
            <Globe2 size={48} className="gai-globe-icon" />
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-brand-gold)' }}>WORLDWIDE REACH</span>
              <h3 style={{ color: '#ffffff', marginBottom: '0.4rem' }}>Allied Agency Representation in 150+ Countries</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
                Beyond our direct regional headquarters in Dubai, Chennai, Colombo, Klang, Almaty, and Frankfurt, GACIS manages vetted carrier alliances and licensed customs brokers across North America, South America, Western Europe, East Asia, and Africa.
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary" style={{ flexShrink: 0 }}>
              Enquire Global Trade Lanes <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default GlobalNetwork;
