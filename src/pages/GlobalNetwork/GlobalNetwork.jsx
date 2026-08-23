import { useState } from 'react';
import { 
  MapPin, Mail, Building2, Globe2, ArrowRight, Phone, Check, 
  Activity, Plane, Ship, Train, Truck, ShieldCheck, Compass, Radio,
  Layers, ChevronRight, Boxes, Waves, Anchor, Navigation, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { primaryHubs, maritimeSeaDomains, networkRegions } from '../../data/locations';
import RealGeographicMap from '../../components/NetworkMap/RealGeographicMap';
import SEO from '../../components/Common/SEO';
import './GlobalNetwork.css';

export const GlobalNetwork = () => {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'middle-east' | 'fareast-asia' | 'european-union' | 'africa' | 'central-asia' | 'americas'
  const [activeViewMode, setActiveViewMode] = useState('seas'); // 'seas' | 'hubs'
  const [activeHub, setActiveHub] = useState(primaryHubs[0]);
  const [activeSeaDomain, setActiveSeaDomain] = useState(maritimeSeaDomains[0]);

  // Filtered Hubs & Seas based on region tab
  const filteredHubs = activeTab === 'all' 
    ? primaryHubs 
    : primaryHubs.filter(h => h.regionId === activeTab);

  const filteredSeas = activeTab === 'all'
    ? maritimeSeaDomains
    : maritimeSeaDomains.filter(s => s.regionId === activeTab);

  const handleSelectSea = (sea) => {
    setActiveSeaDomain(sea);
    setActiveViewMode('seas');
    // Scroll smoothly to map console if needed
    const el = document.getElementById('strategic-map-console');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSelectHub = (hub) => {
    setActiveHub(hub);
    setActiveSeaDomain(null);
    setActiveViewMode('hubs');
    const el = document.getElementById('strategic-map-console');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="global-network-page">
      <SEO 
        title="Global Network & Trade Corridors — Strategic Freight Operations"
        description="Explore GACIS trade lanes spanning India, the Gulf, and Central Asia (CIS) with multimodal block trains, sea-air routing, and regional desks."
        canonical="/global-network"
      />

      {/* ─── 01. COMMAND CENTER HERO HEADER ─── */}
      <section className="network-hero-command">
        <div className="container">
          <div className="nhc-badge-row">
            <span className="nhc-pulse-badge">
              <Radio size={14} className="radar-signal-svg" />
              <span>GACIS OPERATIONAL NETWORK</span>
            </span>
            <span className="nhc-telemetry-tag">
              <Waves size={13} /> INDIA · GULF · CENTRAL ASIA (CIS)
            </span>
          </div>

          <h1 className="nhc-title">Regional Operating Desks & Trade Corridors</h1>
          <p className="nhc-desc">
            Direct operations bridging Chennai Corporate Headquarters, Dubai Commercial Desk, and Central Asia / Trans-Caspian intermodal routes with synchronized customs clearance and scheduled linehauls.
          </p>

          {/* Quick Telemetry KPI Bar */}
          <div className="network-telemetry-bar">
            <div className="ntb-stat">
              <span className="ntb-val text-cyan tabular-nums">14</span>
              <span className="ntb-label">Direct Operating Desks & Hubs</span>
            </div>
            <div className="ntb-divider" />
            <div className="ntb-stat">
              <span className="ntb-val text-gold tabular-nums">19</span>
              <span className="ntb-label">Strategic Maritime Domains</span>
            </div>
            <div className="ntb-divider" />
            <div className="ntb-stat">
              <span className="ntb-val tabular-nums">100%</span>
              <span className="ntb-label">Legitimate Operations</span>
            </div>
            <div className="ntb-divider" />
            <div className="ntb-stat">
              <span className="ntb-val tabular-nums">24/7</span>
              <span className="ntb-label">Commercial Coordination</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02. REGIONAL & MARITIME VIEW CONTROLLER ─── */}
      <section className="section-padding bg-secondary" id="strategic-map-console">
        <div className="container">

          {/* Mode & Region Filters Bar */}
          <div className="network-filter-toolbar">
            
            {/* View Mode Toggle: Sea Domains vs Continental Hubs */}
            <div className="view-mode-switch-group">
              <button
                type="button"
                className={`vms-btn ${activeViewMode === 'seas' ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveViewMode('seas');
                  if (!activeSeaDomain) setActiveSeaDomain(maritimeSeaDomains[0]);
                }}
              >
                <Waves size={15} />
                <span>19 Sea Domains</span>
              </button>
              <button
                type="button"
                className={`vms-btn ${activeViewMode === 'hubs' ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveViewMode('hubs');
                  setActiveSeaDomain(null);
                  if (!activeHub) setActiveHub(primaryHubs[0]);
                }}
              >
                <Building2 size={15} />
                <span>Continental Hubs</span>
              </button>
            </div>

            {/* Regional Filter Deck */}
            <div className="corridor-filter-deck">
              <span className="cfd-label">REGION FILTER:</span>
              <div className="cfd-buttons">
                {networkRegions.map((reg) => (
                  <button
                    key={reg.id}
                    type="button"
                    className={`cfd-btn ${activeTab === reg.id ? 'is-active' : ''}`}
                    onClick={() => setActiveTab(reg.id)}
                  >
                    {reg.flag && <span className="cfd-flag">{reg.flag}</span>}
                    <span>{reg.label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* ─── INTERACTIVE CONSOLE GRID ─── */}
          <div className="network-console-grid">

            {/* Left: Real Geographic Leaflet Map */}
            <div className="map-console-wrapper">
              <div className="mcw-header">
                <div>
                  <span className="mcw-eyebrow">
                    {activeViewMode === 'seas' ? 'MARITIME SHIPPING CORRIDORS' : 'CONTINENTAL LOGISTICS HUBS'}
                  </span>
                  <h3>Real-World Cartographic Logistics View</h3>
                </div>
                <div className="mcw-live-indicator">
                  <span className="live-radar-dot"></span>
                  <span>LIVE AIS SHIP TRACKING</span>
                </div>
              </div>

              {/* Real Geographic Map Component */}
              <RealGeographicMap 
                activeHub={activeHub} 
                onSelectHub={handleSelectHub}
                activeSeaDomain={activeSeaDomain}
                onSelectSeaDomain={handleSelectSea}
                viewMode={activeViewMode}
              />

              {/* Quick-Select Switcher: Sea Domains or Regional Hubs */}
              {activeViewMode === 'seas' ? (
                <div className="sea-switcher-wrapper">
                  <div className="ssw-header">
                    <span>SELECT STRATEGIC SEA DOMAIN TO FOCUS MAP:</span>
                    <small>{filteredSeas.length} Seas Filtered</small>
                  </div>
                  <div className="sea-switcher-strip">
                    {filteredSeas.map((sea) => {
                      const isSelected = activeSeaDomain?.id === sea.id;
                      return (
                        <button
                          key={sea.id}
                          type="button"
                          className={`hss-btn sea-btn ${isSelected ? 'is-selected' : ''}`}
                          onClick={() => handleSelectSea(sea)}
                        >
                          <span className="sea-btn-icon">⚓</span>
                          <span className="hss-city">{sea.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="sea-switcher-wrapper">
                  <div className="ssw-header">
                    <span>SELECT REGIONAL HUB TO FOCUS MAP:</span>
                    <small>{filteredHubs.length} Hubs Filtered</small>
                  </div>
                  <div className="hub-switcher-strip">
                    {filteredHubs.map((hub) => {
                      const isSelected = activeHub?.id === hub.id;
                      return (
                        <button
                          key={hub.id}
                          type="button"
                          className={`hss-btn ${isSelected ? 'is-selected' : ''}`}
                          onClick={() => handleSelectHub(hub)}
                        >
                          <span className="hss-flag">{hub.flag}</span>
                          <span className="hss-city">{hub.city}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Dynamic Dossier Panel (Sea Domain or Hub) */}
            {activeViewMode === 'seas' && activeSeaDomain ? (
              /* ─── MARITIME SEA DOMAIN DOSSIER CARD ─── */
              <div className="gateway-dossier-card sea-dossier-card" key={activeSeaDomain.id}>
                <div className="gdc-header">
                  <div className="gdc-flag-wrap sea-flag-wrap">
                    <Waves size={28} className="sea-dossier-icon" />
                  </div>
                  <div>
                    <span className="gdc-tier-tag sea-tier-tag">STRATEGIC MARITIME DOMAIN</span>
                    <h2>{activeSeaDomain.name}</h2>
                    <span className="gdc-role-subtitle">{activeSeaDomain.regionName}</span>
                  </div>
                </div>

                {/* Maritime Telemetry Grid */}
                <div className="gdc-telemetry-grid">
                  <div className="gdc-tele-item">
                    <span className="gti-lbl">TRANSIT RELIABILITY</span>
                    <span className="gti-val text-gold tabular-nums">{activeSeaDomain.transitIndex}</span>
                  </div>
                  <div className="gdc-tele-item">
                    <span className="gti-lbl">AVG SEAWAY TRANSIT</span>
                    <span className="gti-val tabular-nums">{activeSeaDomain.leadTimeAvg}</span>
                  </div>
                  <div className="gdc-tele-item">
                    <span className="gti-lbl">SCOPE 3 EFFICIENCY</span>
                    <span className="gti-val text-cyan" style={{ fontSize: '0.8125rem' }}>{activeSeaDomain.scope3Rating}</span>
                  </div>
                </div>

                {/* Strategic Chokepoint & Primary Corridor */}
                <div className="gdc-address-box sea-info-box">
                  <div className="gab-row">
                    <Navigation size={16} className="gab-icon" />
                    <div>
                      <strong className="sea-field-label">STRATEGIC CHOKEPOINT:</strong>
                      <p>{activeSeaDomain.strategicChokepoint}</p>
                    </div>
                  </div>
                  <div className="gab-row">
                    <Anchor size={16} className="gab-icon" />
                    <div>
                      <strong className="sea-field-label">PRIMARY CORRIDOR LINEHAUL:</strong>
                      <p>{activeSeaDomain.primaryCorridor}</p>
                    </div>
                  </div>
                </div>

                {/* Key Gateways & Ports */}
                <div className="gdc-capabilities-box">
                  <span className="gcb-lbl">PRIMARY DEEPSEA GATEWAYS & PORTS:</span>
                  <div className="sea-ports-tag-cloud">
                    {activeSeaDomain.keyGateways.map((port, i) => (
                      <span key={i} className="sea-port-pill">
                        <Check size={12} className="spp-check" />
                        <span>{port}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specialized Cargo Focus */}
                <div className="sea-cargo-profile-box">
                  <span className="gcb-lbl">SPECIALIZED CARGO PROFILE:</span>
                  <p>{activeSeaDomain.cargoFocus}</p>
                </div>

                {/* Action Buttons */}
                <div className="gdc-action-buttons">
                  <Link to="/quote" className="btn btn-primary gdc-cta">
                    Calculate Rate for {activeSeaDomain.name} <ArrowRight size={15} />
                  </Link>
                  <Link to="/contact" className="btn btn-secondary gdc-cta">
                    Consult Maritime Desk
                  </Link>
                </div>
              </div>
            ) : (
              /* ─── STRATEGIC REGIONAL HUB DOSSIER CARD ─── */
              <div className="gateway-dossier-card">
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
            )}

          </div>

        </div>
      </section>

      {/* ─── 03. COMPLETE 19 MARITIME SEA DOMAINS DIRECTORY ─── */}
      <section className="section-padding bg-primary" id="maritime-domains">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">MARITIME DOMAINS & CHOKEPOINTS</span>
            <h2>19 Strategic Sea Domains & Waterways</h2>
            <p>
              GACIS synchronizes container capacity, breakbulk charters, and short-sea feeders across all 19 vital maritime water basins worldwide.
            </p>
          </div>

          <div className="sea-domains-grid">
            {maritimeSeaDomains.map((sea) => (
              <div 
                key={sea.id}
                className={`sea-domain-card ${activeSeaDomain?.id === sea.id ? 'is-active-sea-card' : ''}`}
                onClick={() => handleSelectSea(sea)}
              >
                <div className="sdc-top">
                  <span className="sdc-icon-badge"><Anchor size={16} /></span>
                  <span className="sdc-region">{sea.regionName}</span>
                </div>

                <h3 className="sdc-title">{sea.name}</h3>
                <p className="sdc-summary">{sea.summary}</p>

                <div className="sdc-specs">
                  <div className="sdc-spec-row">
                    <span className="sdc-lbl">Chokepoint:</span>
                    <span className="sdc-val">{sea.strategicChokepoint}</span>
                  </div>
                  <div className="sdc-spec-row">
                    <span className="sdc-lbl">Key Ports:</span>
                    <span className="sdc-val">{sea.keyGateways.slice(0, 3).join(', ')}</span>
                  </div>
                  <div className="sdc-spec-row">
                    <span className="sdc-lbl">Reliability:</span>
                    <span className="sdc-val text-gold">{sea.transitIndex}</span>
                  </div>
                </div>

                <button 
                  type="button" 
                  className="btn btn-secondary btn-sm sdc-plot-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectSea(sea);
                  }}
                >
                  <span>Plot on Tactical Map</span>
                  <Navigation size={13} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 04. STRATEGIC REGIONAL CONTINENTAL HUBS ─── */}
      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">CONTINENTAL REACH</span>
            <h2>14 Strategic Regional Hubs & Desks</h2>
            <p>
              Direct company-operated commercial headquarters and intermodal freight stations bridging every major global economy.
            </p>
          </div>

          <div className="gateway-cards-grid">
            {primaryHubs.map((hub) => (
              <div 
                className={`gateway-station-card ${activeHub?.id === hub.id && activeViewMode === 'hubs' ? 'active-station' : ''}`}
                key={hub.id}
                onClick={() => handleSelectHub(hub)}
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
                    <span>Flights / Trains</span>
                    <strong className="tabular-nums">{hub.stats.weeklyFlights}</strong>
                  </div>
                  <div className="gsc-spec-item">
                    <span>Bonded Warehouse</span>
                    <strong className="tabular-nums">{hub.stats.warehouseSqFt} sq ft</strong>
                  </div>
                </div>

                <button type="button" className="btn btn-secondary btn-sm gsc-inspect-btn">
                  Inspect Hub Details <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 05. GLOBAL AGENCY ALLIANCE BANNER ─── */}
      <section className="section-padding-sm bg-dark">
        <div className="container">
          <div className="global-alliance-inner">
            <Globe2 size={48} className="gai-globe-icon" />
            <div>
              <span className="eyebrow" style={{ color: 'var(--color-brand-gold)' }}>WORLDWIDE REACH</span>
              <h3 style={{ color: '#ffffff', marginBottom: '0.4rem' }}>Allied Agency Representation in 150+ Countries</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', margin: 0, maxWidth: '680px' }}>
                Beyond our direct regional headquarters in Dubai, Riyadh, Shanghai, Tokyo, Klang, Frankfurt, Rotterdam, Djibouti, Mombasa, Almaty, and Houston, GACIS operates vetted carrier alliances and licensed customs brokers across 150+ nations.
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
