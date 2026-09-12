import { useState } from 'react';
import { 
  MapPin, Mail, Building2, Globe2, ArrowRight, Phone, Check, 
  Activity, Plane, Ship, Train, Truck, ShieldCheck, Compass, Radio,
  Layers, ChevronRight, Boxes, Waves, Anchor, Navigation, Zap, Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { primaryHubs, maritimeSeaDomains, networkRegions } from '../../data/locations';
import RealGeographicMap from '../../components/NetworkMap/RealGeographicMap';
import SEO from '../../components/Common/SEO';
import './GlobalNetwork.css';

export const GlobalNetwork = () => {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'middle-east' | 'fareast-asia' | 'european-union' | 'africa' | 'central-asia' | 'americas'
  const [activeViewMode, setActiveViewMode] = useState('hubs'); // 'hubs' | 'seas'
  const [activeHub, setActiveHub] = useState(primaryHubs[0]);
  const [activeSeaDomain, setActiveSeaDomain] = useState(maritimeSeaDomains[0]);
  const [laneModeFilter, setLaneModeFilter] = useState('ALL'); // 'ALL' | 'AIR' | 'SEA' | 'RAIL' | 'ROAD'
  const [hubDossierTab, setHubDossierTab] = useState('corridors'); // 'corridors' | 'operations' | 'contact'
  const [hoveredLaneId, setHoveredLaneId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered Hubs & Seas based on region tab and search query
  const filteredHubs = primaryHubs.filter(h => {
    const matchesRegion = activeTab === 'all' || h.regionId === activeTab;
    const matchesSearch = searchQuery === '' || 
      h.city.toLowerCase().includes(searchQuery.toLowerCase()) || 
      h.country.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const filteredSeas = maritimeSeaDomains.filter(s => {
    const matchesRegion = activeTab === 'all' || s.regionId === activeTab;
    const matchesSearch = searchQuery === '' || 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      s.regionName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  const activeTradeLanes = activeHub?.connectedTradeLanes || [];
  const filteredTradeLanes = laneModeFilter === 'ALL'
    ? activeTradeLanes
    : activeTradeLanes.filter(l => l.modes?.includes(laneModeFilter) || l.primaryMode?.toUpperCase().includes(laneModeFilter));

  const handleSelectSea = (sea) => {
    setActiveSeaDomain(sea);
    setActiveViewMode('seas');
    const el = document.getElementById('strategic-map-console');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectHub = (hub) => {
    setActiveHub(hub);
    setActiveSeaDomain(null);
    setActiveViewMode('hubs');
    const el = document.getElementById('strategic-map-console');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
              <Waves size={13} /> INDIA · GULF · CIS · ASIA · EUROPE · AMERICAS
            </span>
          </div>

          <h1 className="nhc-title">Regional Operating Desks & Trade Corridors</h1>
          <p className="nhc-desc">
            Direct freight operations bridging Chennai Corporate Headquarters, Dubai Commercial Desk, and Central Asia intermodal routes with synchronized customs clearance and dedicated scheduled linehauls.
          </p>

          {/* Quick Telemetry KPI Bar */}
          <div className="network-telemetry-bar">
            <div className="ntb-stat">
              <span className="ntb-val text-cyan tabular-nums">14</span>
              <span className="ntb-label">Operating Desks & Hubs</span>
            </div>
            <div className="ntb-divider" />
            <div className="ntb-stat">
              <span className="ntb-val text-gold tabular-nums">19</span>
              <span className="ntb-label">Strategic Maritime Seas</span>
            </div>
            <div className="ntb-divider" />
            <div className="ntb-stat">
              <span className="ntb-val tabular-nums">150+</span>
              <span className="ntb-label">Global Agency Alliances</span>
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
      <section className="section-padding-sm bg-secondary" id="strategic-map-console">
        <div className="container">

          {/* Mode & Region Filters Bar */}
          <div className="network-filter-toolbar">
            
            {/* View Mode Toggle: Continental Hubs vs Sea Domains */}
            <div className="view-mode-switch-group">
              <button
                type="button"
                className={`vms-btn ${activeViewMode === 'hubs' ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveViewMode('hubs');
                  setActiveSeaDomain(null);
                  if (!activeHub) setActiveHub(primaryHubs[0]);
                }}
              >
                <Building2 size={16} />
                <span>14 Continental Hubs</span>
              </button>
              <button
                type="button"
                className={`vms-btn ${activeViewMode === 'seas' ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveViewMode('seas');
                  if (!activeSeaDomain) setActiveSeaDomain(maritimeSeaDomains[0]);
                }}
              >
                <Waves size={16} />
                <span>19 Strategic Seas</span>
              </button>
            </div>

            {/* Regional Filter Deck */}
            <div className="corridor-filter-deck">
              <span className="cfd-label">REGION:</span>
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

          {/* ─── FULL-WIDTH MAP CONSOLE (LANDSCAPE HERO) ─── */}
          <div className="map-landscape-console" id="map-landscape-console">
            
            {/* Map header bar — floated above map */}
            <div className="mlc-topbar">
              <div className="mlc-topbar-left">
                <span className="mcw-eyebrow">
                  {activeViewMode === 'seas' ? 'MARITIME SHIPPING CORRIDORS' : 'INTERMODAL FREIGHT TOPOLOGY'}
                </span>
                <h3 className="mlc-title">
                  {activeViewMode === 'seas' 
                    ? `${activeSeaDomain?.name} — Deepsea Domain View`
                    : `${activeHub?.city} — Connected Global Corridors`
                  }
                </h3>
              </div>
              <div className="mlc-topbar-right">
                <div className="mcw-live-indicator">
                  <span className="live-radar-dot"></span>
                  <span>LIVE FREIGHT NETWORK</span>
                </div>
              </div>
            </div>

            {/* Real Geographic Map — Full Landscape */}
            <RealGeographicMap 
              activeHub={activeHub} 
              onSelectHub={handleSelectHub}
              activeSeaDomain={activeSeaDomain}
              onSelectSeaDomain={handleSelectSea}
              viewMode={activeViewMode}
              selectedLaneFilter={laneModeFilter}
              hoveredLaneId={hoveredLaneId}
            />

            {/* Hub / Sea Quick-Select Ribbon — overlaid at bottom of map */}
            <div className="map-selector-ribbon">
              <div className="msr-search-wrap">
                <Search size={13} className="msr-search-icon" />
                <input 
                  type="text" 
                  placeholder={activeViewMode === 'seas' ? 'Search sea...' : 'Search hub city...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="msr-search-input"
                />
              </div>

              <div className="msr-chips-track">
                {activeViewMode === 'seas' ? (
                  filteredSeas.map((sea) => {
                    const isSelected = activeSeaDomain?.id === sea.id;
                    return (
                      <button
                        key={sea.id}
                        type="button"
                        className={`msr-chip sea-chip ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => handleSelectSea(sea)}
                      >
                        <span>⚓</span>
                        <span>{sea.name}</span>
                      </button>
                    );
                  })
                ) : (
                  filteredHubs.map((hub) => {
                    const isSelected = activeHub?.id === hub.id;
                    return (
                      <button
                        key={hub.id}
                        type="button"
                        className={`msr-chip hub-chip ${isSelected ? 'is-selected' : ''}`}
                        onClick={() => handleSelectHub(hub)}
                      >
                        <span className="msr-chip-flag">{hub.flag}</span>
                        <span>{hub.city}</span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

          </div>

          {/* ─── BELOW-MAP DOSSIER PANEL (Full Width Landscape) ─── */}
          <div className="below-map-dossier-panel">
            {activeViewMode === 'seas' && activeSeaDomain ? (
              /* ─── MARITIME SEA DOMAIN DOSSIER ─── */
              <div className="sea-dossier-landscape" key={activeSeaDomain.id}>
                {/* Sea header */}
                <div className="sdl-header">
                  <div className="sdl-icon-col">
                    <div className="gdc-flag-wrap sea-flag-wrap">
                      <Waves size={26} className="sea-dossier-icon" />
                    </div>
                  </div>
                  <div className="sdl-title-col">
                    <span className="gdc-tier-tag sea-tier-tag">STRATEGIC MARITIME DOMAIN</span>
                    <h2>{activeSeaDomain.name}</h2>
                    <span className="gdc-role-subtitle">{activeSeaDomain.regionName}</span>
                  </div>
                  <div className="sdl-telemetry-col">
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
                        <span className="gti-val text-cyan" style={{ fontSize: '0.8rem' }}>{activeSeaDomain.scope3Rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="sdl-actions-col">
                    <Link to={`/quote?origin=${encodeURIComponent(activeSeaDomain.name)}`} className="btn btn-primary btn-sm">
                      Calculate Rate <ArrowRight size={14} />
                    </Link>
                    <Link to="/contact" className="btn btn-secondary btn-sm">
                      Maritime Desk
                    </Link>
                  </div>
                </div>

                {/* Sea body */}
                <div className="sdl-body">
                  <div className="sdl-body-col">
                    <div className="gdc-address-box sea-info-box">
                      <div className="gab-row">
                        <Navigation size={15} className="gab-icon" />
                        <div>
                          <strong className="sea-field-label">STRATEGIC CHOKEPOINT:</strong>
                          <p>{activeSeaDomain.strategicChokepoint}</p>
                        </div>
                      </div>
                      <div className="gab-row">
                        <Anchor size={15} className="gab-icon" />
                        <div>
                          <strong className="sea-field-label">PRIMARY CORRIDOR:</strong>
                          <p>{activeSeaDomain.primaryCorridor}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sdl-body-col">
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
                  </div>
                  <div className="sdl-body-col">
                    <div className="sea-cargo-profile-box">
                      <span className="gcb-lbl">SPECIALIZED CARGO PROFILE:</span>
                      <p>{activeSeaDomain.cargoFocus}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* ─── HUB DOSSIER — FULL WIDTH LANDSCAPE TABBED ─── */
              <div className="hub-dossier-landscape" key={activeHub.id}>
                
                {/* Hub Identity Row */}
                <div className="hdl-identity-row">
                  <div className="hdl-flag-col">
                    <span className="hdl-flag">{activeHub.flag}</span>
                  </div>
                  <div className="hdl-title-col">
                    <span className="gdc-tier-tag">{activeHub.tier}</span>
                    <h2>{activeHub.city}, {activeHub.country}</h2>
                    <span className="gdc-role-subtitle">{activeHub.role}</span>
                  </div>
                  <div className="hdl-kpi-col">
                    <div className="hdl-kpi-row">
                      <div className="hdl-kpi-item">
                        <span className="gti-lbl">WEEKLY LINEHAULS</span>
                        <span className="gti-val text-gold tabular-nums">{activeHub.stats.weeklyFlights}</span>
                      </div>
                      <div className="hdl-kpi-item">
                        <span className="gti-lbl">OCEAN THROUGHPUT</span>
                        <span className="gti-val tabular-nums">{activeHub.stats.oceanTEU}</span>
                      </div>
                      <div className="hdl-kpi-item">
                        <span className="gti-lbl">BONDED STAGING</span>
                        <span className="gti-val tabular-nums">{activeHub.stats.warehouseSqFt} sq ft</span>
                      </div>
                    </div>
                  </div>
                  <div className="hdl-cta-col">
                    <Link to={`/quote?origin=${encodeURIComponent(activeHub.city)}`} className="btn btn-primary btn-sm">
                      Book via {activeHub.city} <ArrowRight size={13} />
                    </Link>
                    <Link to="/contact" className="btn btn-secondary btn-sm">
                      Contact Desk
                    </Link>
                  </div>
                </div>

                {/* Tab Nav */}
                <div className="dossier-nav-tabs">
                  <button 
                    type="button" 
                    className={`dnt-btn ${hubDossierTab === 'corridors' ? 'is-active' : ''}`}
                    onClick={() => setHubDossierTab('corridors')}
                  >
                    <Navigation size={14} />
                    <span>Trade Corridors ({activeTradeLanes.length})</span>
                  </button>
                  <button 
                    type="button" 
                    className={`dnt-btn ${hubDossierTab === 'operations' ? 'is-active' : ''}`}
                    onClick={() => setHubDossierTab('operations')}
                  >
                    <Activity size={14} />
                    <span>Hub Operations</span>
                  </button>
                  <button 
                    type="button" 
                    className={`dnt-btn ${hubDossierTab === 'contact' ? 'is-active' : ''}`}
                    onClick={() => setHubDossierTab('contact')}
                  >
                    <Building2 size={14} />
                    <span>Desk Details</span>
                  </button>
                </div>

                {/* TAB 1: TRADE CORRIDORS — Horizontal cards grid */}
                {hubDossierTab === 'corridors' && (
                  <div className="dossier-tab-content">
                    <div className="gtls-filter-bar">
                      {[
                        { id: 'ALL', label: `All (${activeTradeLanes.length})` },
                        { id: 'AIR', label: '✈️ Air' },
                        { id: 'SEA', label: '🚢 Ocean' },
                        { id: 'RAIL', label: '🚆 Rail' },
                        { id: 'ROAD', label: '🚛 Road' }
                      ].map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          className={`gtls-filter-btn ${laneModeFilter === m.id ? 'is-active' : ''}`}
                          onClick={() => setLaneModeFilter(m.id)}
                        >
                          {m.label}
                        </button>
                      ))}
                      <span className="gtls-count-hint">{filteredTradeLanes.length} corridors</span>
                    </div>

                    {/* Horizontal scrolling lane cards */}
                    <div className="lanes-horizontal-scroll">
                      {filteredTradeLanes.length === 0 ? (
                        <div className="no-lanes-fallback">
                          <span>No routes match this filter.</span>
                          <button type="button" onClick={() => setLaneModeFilter('ALL')} className="btn btn-secondary btn-sm">
                            Show All
                          </button>
                        </div>
                      ) : (
                        filteredTradeLanes.map((lane, idx) => {
                          const destHub = primaryHubs.find(h => h.id === lane.destinationId);
                          return (
                            <div 
                              className={`lane-card-h ${hoveredLaneId === lane.destinationId ? 'is-card-hovered' : ''}`}
                              key={idx}
                              onMouseEnter={() => setHoveredLaneId(lane.destinationId)}
                              onMouseLeave={() => setHoveredLaneId(null)}
                            >
                              <div className="lch-top">
                                <span className="lch-flag">{lane.flag}</span>
                                <div className="lch-route">
                                  <span className="lch-cities">{activeHub.city} ⇄ {lane.destinationCity}</span>
                                  <span className="lch-mode">{lane.primaryMode}</span>
                                </div>
                                <span className="lch-transit">⏱️ {lane.transitTime}</span>
                              </div>
                              <div className="lch-cargo">
                                <div className="lch-cargo-half outbound">
                                  <span className="gcc-lbl">📤 OUTBOUND:</span>
                                  <p>{lane.outboundCargo}</p>
                                </div>
                                <div className="lch-cargo-half inbound">
                                  <span className="gcc-lbl">📥 INBOUND:</span>
                                  <p>{lane.inboundCargo}</p>
                                </div>
                              </div>
                              <div className="lch-pills">
                                {lane.services.slice(0, 3).map((srv, si) => (
                                  <span key={si} className="gsr-pill">{srv}</span>
                                ))}
                              </div>
                              <div className="lch-actions">
                                {destHub && (
                                  <button
                                    type="button"
                                    className="btn btn-secondary btn-sm lch-pivot"
                                    onClick={() => handleSelectHub(destHub)}
                                  >
                                    Pivot <ArrowRight size={12} />
                                  </button>
                                )}
                                <Link 
                                  to={`/quote?origin=${encodeURIComponent(activeHub.city)}&destination=${encodeURIComponent(lane.destinationCity)}`}
                                  className="btn btn-primary btn-sm"
                                >
                                  Book
                                </Link>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                )}

                {/* TAB 2: HUB OPERATIONS */}
                {hubDossierTab === 'operations' && (
                  <div className="dossier-tab-content">
                    <div className="ops-landscape-grid">
                      <div className="gdc-capabilities-box ops-col">
                        <span className="gcb-lbl">SPECIALIZED OPERATIONAL CAPABILITIES:</span>
                        <ul className="gcb-list">
                          {activeHub.capabilities.map((cap, i) => (
                            <li key={i}>
                              <Check size={13} className="gcb-check" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="hub-ops-note ops-col">
                        <ShieldCheck size={18} className="hon-icon" />
                        <p>
                          All outbound and inbound cargo through <strong>{activeHub.city}</strong> is managed under verified Bill of Lading documentation with synchronized customs dispatch and EDI tracking across all partner terminals.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: DESK DETAILS */}
                {hubDossierTab === 'contact' && (
                  <div className="dossier-tab-content">
                    <div className="contact-landscape-grid">
                      <div className="gdc-address-box contact-col">
                        <div className="gab-row">
                          <MapPin size={16} className="gab-icon" />
                          <div>
                            <strong className="gab-label">OFFICE LOCATION:</strong>
                            <p>{activeHub.address}</p>
                          </div>
                        </div>
                        <div className="gab-row">
                          <Phone size={16} className="gab-icon" />
                          <div>
                            <strong className="gab-label">DIRECT DESK LINE:</strong>
                            <a href={`tel:${activeHub.phone}`}>{activeHub.phone}</a>
                          </div>
                        </div>
                        <div className="gab-row">
                          <Mail size={16} className="gab-icon" />
                          <div>
                            <strong className="gab-label">COMMERCIAL EMAIL:</strong>
                            <a href={`mailto:${activeHub.email}`}>{activeHub.email}</a>
                          </div>
                        </div>
                      </div>
                      <div className="desk-service-hours contact-col">
                        <div className="dsh-item">
                          <span>Jurisdiction:</span>
                          <strong>{activeHub.country} & Allied Region</strong>
                        </div>
                        <div className="dsh-item">
                          <span>Commercial Support:</span>
                          <strong>24/7 Dedicated Logistics Desk</strong>
                        </div>
                        <div className="dsh-item">
                          <span>Freight Modes:</span>
                          <strong>Air · Ocean · Rail · Road · Multimodal</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

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
