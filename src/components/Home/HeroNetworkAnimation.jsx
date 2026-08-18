import { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Zap, ArrowRight, CornerDownRight, CheckCircle2 } from 'lucide-react';
import './HeroNetworkAnimation.css';

export const HeroNetworkAnimation = () => {
  const [activeStage, setActiveStage] = useState(0);

  // Rotate telemetry stage gently every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stages = [
    { from: 'Dubai Hub (DXB)', to: 'Bandar Abbas', mode: 'FEEDER SEA', status: 'In Transit', progress: '100%' },
    { from: 'Bandar Abbas', to: 'Tashkent Railhead', mode: 'BLOCK RAIL', status: 'Active Corridor', progress: '75%' },
    { from: 'Tashkent Railhead', to: 'Almaty Terminal', mode: 'ROAD EXPRESS', status: 'Pre-Cleared', progress: '35%' },
    { from: 'Almaty Logistics Park', to: 'Final Consignee', mode: 'DDP RELEASE', status: 'Scheduled', progress: '0%' }
  ];

  return (
    <div className="hero-network-console">
      {/* Console Header Bar */}
      <div className="hnc-top-bar">
        <div className="hnc-title-row">
          <span className="live-radar-dot"></span>
          <span className="hnc-system-title">GACIS NETWORK INTELLIGENCE</span>
        </div>
        <div className="hnc-status-badge">
          <Activity size={12} className="pulse-icon" />
          <span>ACTIVE TELEMETRY</span>
        </div>
      </div>

      {/* Interactive Vector Network Visualizer */}
      <div className="hnc-visualizer-canvas">
        <svg viewBox="0 0 420 180" className="hnc-svg" aria-label="Dubai to Almaty Multimodal Corridor Diagram">
          <defs>
            <linearGradient id="corridorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#68151d" />
              <stop offset="50%" stopColor="#c8202f" />
              <stop offset="100%" stopColor="#d4a843" />
            </linearGradient>

            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background Grid Lines */}
          <line x1="20" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.05)" strokeDasharray="3 3" />
          <line x1="20" y1="45" x2="400" y2="45" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
          <line x1="20" y1="135" x2="400" y2="135" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />

          {/* Main Transit Corridor Path */}
          <path
            d="M 50,130 C 110,130 130,80 180,80 C 230,80 270,120 310,60 C 330,30 360,40 370,40"
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />

          {/* Active Flow Line with drawing stroke */}
          <path
            d="M 50,130 C 110,130 130,80 180,80 C 230,80 270,120 310,60 C 330,30 360,40 370,40"
            fill="none"
            stroke="url(#corridorGrad)"
            strokeWidth="3.5"
            className="corridor-flow-path"
          />

          {/* Node 1: Dubai */}
          <g transform="translate(50, 130)" className="map-node node-dubai">
            <circle r="12" fill="none" stroke="#c8202f" className="node-ping" />
            <circle r="6" fill="#c8202f" />
            <circle r="2.5" fill="#ffffff" />
            <text x="0" y="24" textAnchor="middle" className="node-label">DUBAI (DXB)</text>
          </g>

          {/* Node 2: Bandar Abbas */}
          <g transform="translate(180, 80)" className="map-node node-bandar">
            <circle r="5" fill="#68151d" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
            <circle r="2" fill="#ffffff" />
            <text x="0" y="-14" textAnchor="middle" className="node-label">BANDAR ABBAS</text>
          </g>

          {/* Node 3: Tashkent */}
          <g transform="translate(310, 60)" className="map-node node-tashkent">
            <circle r="5.5" fill="#c8202f" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
            <circle r="2" fill="#ffffff" />
            <text x="0" y="22" textAnchor="middle" className="node-label">TASHKENT (TAS)</text>
          </g>

          {/* Node 4: Almaty */}
          <g transform="translate(370, 40)" className="map-node node-almaty">
            <circle r="12" fill="none" stroke="#d4a843" className="node-ping" />
            <circle r="6" fill="#d4a843" />
            <circle r="2.5" fill="#ffffff" />
            <text x="0" y="-14" textAnchor="middle" className="node-label">ALMATY (ALA)</text>
          </g>

          {/* Traveling Cargo Particle */}
          <circle r="4" fill="#ffffff" filter="url(#glow)" className="cargo-transit-particle" />
        </svg>
      </div>

      {/* Corridor Telemetry Cards */}
      <div className="hnc-data-grid">
        <div className="hnc-data-cell">
          <span className="hdc-label">ACTIVE CORRIDOR</span>
          <span className="hdc-val primary-corridor">Dubai ⇄ Almaty</span>
          <span className="hdc-sub">Trans-Caspian Belt</span>
        </div>

        <div className="hnc-data-cell">
          <span className="hdc-label">INTERMODAL TRANSIT</span>
          <span className="hdc-val stat-value">8.4 DAYS</span>
          <span className="hdc-sub text-success">-50% vs Ocean</span>
        </div>

        <div className="hnc-data-cell">
          <span className="hdc-label">CARBON OPTIMIZATION</span>
          <span className="hdc-val stat-value text-gold">-31.8% CO₂e</span>
          <span className="hdc-sub">Scope 3 Certified</span>
        </div>

        <div className="hnc-data-cell">
          <span className="hdc-label">CUSTOMS & SECURITY</span>
          <span className="hdc-val">PRE-CLEARED</span>
          <span className="hdc-sub text-success">Green Channel</span>
        </div>
      </div>

      {/* Live Stage Tracker */}
      <div className="hnc-stage-strip">
        <div className="hss-header">
          <span className="hss-step">STAGE {activeStage + 1} OF 4: {stages[activeStage].mode}</span>
          <span className="hss-status">{stages[activeStage].status}</span>
        </div>
        <div className="hss-leg">
          <span>{stages[activeStage].from}</span>
          <ArrowRight size={12} className="leg-arrow" />
          <span>{stages[activeStage].to}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroNetworkAnimation;
