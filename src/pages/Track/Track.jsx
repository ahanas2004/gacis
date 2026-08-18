import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  Search, Package, MapPin, CheckCircle, Clock, 
  AlertCircle, ArrowRight, ShieldCheck, Plane, Ship, Train, Truck, Info, RefreshCw
} from 'lucide-react';
import SEO from '../../components/Common/SEO';
import './Track.css';

const demoShipments = {
  'GAC-DXB-LHR': {
    ref: 'GAC-DXB-LHR',
    status: 'In Transit — Air Linehaul',
    mode: 'AIR',
    estimatedDelivery: 'Oct 24, 2026',
    origin: 'Dubai Logistics City (DWC), UAE',
    destination: 'London Heathrow (LHR), United Kingdom',
    pieces: '4 Skids / 340.5 kg',
    customs: 'Pre-Cleared (Green Channel)',
    carrier: 'Emirates SkyCargo Flight EK-007',
    currentLocation: 'Frankfurt Transshipment Hub (FRA)',
    milestones: [
      { status: 'pending', title: 'Final Mile Delivery to Consignee', time: 'Estimated Oct 24, 2026 • London Distribution Park' },
      { status: 'pending', title: 'Destination Customs Release', time: 'In Progress • London Heathrow Tarmac Hub' },
      { status: 'active', title: 'Transshipment Hub Departure', time: 'Oct 21, 2026 • 14:30 | Frankfurt Hub (FRA)' },
      { status: 'completed', title: 'Departed Origin Airport', time: 'Oct 20, 2026 • 08:15 | Dubai Airport (DXB)' },
      { status: 'completed', title: 'Export Customs Clearance Completed', time: 'Oct 19, 2026 • 18:20 | Dubai Logistics City' },
      { status: 'completed', title: 'Consignment Picked Up from Shipper', time: 'Oct 19, 2026 • 10:00 | Jebel Ali Free Zone' }
    ]
  },
  'GAC-KLG-TAS': {
    ref: 'GAC-KLG-TAS',
    status: 'In Transit — Rail Block Train',
    mode: 'RAIL',
    estimatedDelivery: 'Nov 02, 2026',
    origin: 'Port Klang (Northport), Malaysia',
    destination: 'Tashkent Rail Dry Port, Uzbekistan',
    pieces: '2x 40ft High Cube Containers / 42,000 kg',
    customs: 'TIR Sealed Trans-Caspian Transit',
    carrier: 'Trans-Eurasian Block Shuttle #412',
    currentLocation: 'Bandar Abbas Rail Marshalling Yard',
    milestones: [
      { status: 'pending', title: 'Final Inland Yard Clearance', time: 'Estimated Nov 02, 2026 • Tashkent Dry Port' },
      { status: 'pending', title: 'Sarakhs Bogie Gauge Exchange', time: 'Estimated Oct 28, 2026 • Turkmenistan Border' },
      { status: 'active', title: 'Rail Block Assembly & Customs Sealing', time: 'Oct 22, 2026 • 11:00 | Bandar Abbas Terminal' },
      { status: 'completed', title: 'Feeder Ocean Vessel Berthing', time: 'Oct 21, 2026 • 22:40 | Bandar Abbas Berth 4' },
      { status: 'completed', title: 'Port Klang Container Loading (VGM Verified)', time: 'Oct 14, 2026 • 16:00 | Port Klang' }
    ]
  },
  'GAC-CMB-ALM': {
    ref: 'GAC-CMB-ALM',
    status: 'Customs Processing',
    mode: 'MULTIMODAL',
    estimatedDelivery: 'Nov 06, 2026',
    origin: 'Colombo Port, Sri Lanka',
    destination: 'Almaty Logistics Park, Kazakhstan',
    pieces: '18 Pallets / 8,450 kg (GDP Pharma)',
    customs: 'Priority Green Channel Audit',
    carrier: 'Intermodal Feeder & Air Charter',
    currentLocation: 'Dubai DWC Pharma Hub',
    milestones: [
      { status: 'pending', title: 'Delivery to Almaty Central Warehouse', time: 'Estimated Nov 06, 2026' },
      { status: 'active', title: 'GDP Temperature Audit & Re-icing', time: 'Oct 22, 2026 • 09:15 | Dubai DWC Hub (+4°C Logged)' },
      { status: 'completed', title: 'Tarmac Thermal Transfer', time: 'Oct 21, 2026 • 19:30 | DWC Airport' },
      { status: 'completed', title: 'Air Cargo Departure from Colombo', time: 'Oct 21, 2026 • 13:00 | Bandaranaike Int. (CMB)' }
    ]
  }
};

export const Track = () => {
  const location = useLocation();
  const [trackingInput, setTrackingInput] = useState('');
  const [activeShipment, setActiveShipment] = useState(null);
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ref = params.get('ref') || 'GAC-DXB-LHR';
    if (ref) {
      setTrackingInput(ref);
      lookupShipment(ref);
    }
  }, [location]);

  const lookupShipment = (id) => {
    setIsSearched(true);
    const cleanId = id.trim().toUpperCase();
    if (demoShipments[cleanId]) {
      setActiveShipment(demoShipments[cleanId]);
    } else {
      setActiveShipment(null);
    }
  };

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    lookupShipment(trackingInput);
  };

  const setQuickDemo = (demoId) => {
    setTrackingInput(demoId);
    lookupShipment(demoId);
  };

  return (
    <div className="track-page">
      <SEO 
        title="Shipment Milestone & Telemetry Tracking"
        description="Track your global air waybills, ocean bills of lading, and intermodal freight reference numbers with GACIS real-time corridor intelligence."
        canonical="/track"
      />

      {/* Hero Search Section */}
      <div className="page-header bg-maroon">
        <div className="container">
          <span className="eyebrow eyebrow-light">TELEMETRY TRACKING SYSTEM</span>
          <h1>Track Your Shipment</h1>
          <p>
            Enter your GACIS Booking Reference, Air Waybill (AWB), or Ocean Container ID for real-time status telemetry and milestone timestamps.
          </p>

          <form className="track-search-bar" onSubmit={handleTrackSubmit}>
            <div className="tsb-input-wrap">
              <Search size={20} className="tsb-icon" />
              <input
                type="text"
                placeholder="Enter Reference Number (e.g. GAC-DXB-LHR)"
                value={trackingInput}
                onChange={e => setTrackingInput(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Track Telemetry
            </button>
          </form>

          {/* Quick Demo Reference Buttons */}
          <div className="track-demo-pills">
            <span className="tdp-label">Try Demo References:</span>
            <button type="button" className="tdp-btn" onClick={() => setQuickDemo('GAC-DXB-LHR')}>
              Air: GAC-DXB-LHR
            </button>
            <button type="button" className="tdp-btn" onClick={() => setQuickDemo('GAC-KLG-TAS')}>
              Rail: GAC-KLG-TAS
            </button>
            <button type="button" className="tdp-btn" onClick={() => setQuickDemo('GAC-CMB-ALM')}>
              Pharma: GAC-CMB-ALM
            </button>
          </div>
        </div>
      </div>

      {/* Demo Notification Notice */}
      <div className="demo-notice-bar">
        <div className="container dnb-inner">
          <Info size={16} className="dnb-icon" />
          <span>
            <strong>DEMO TRACKING ENVIRONMENT:</strong> This interactive console showcases the GACIS operational telemetry interface. Live enterprise integration with your carrier systems occurs upon account activation.
          </span>
        </div>
      </div>

      {/* Tracking Results Area */}
      <div className="container section-padding-sm">
        {isSearched && !activeShipment && (
          <div className="track-not-found-card">
            <AlertCircle size={36} className="tnf-icon" />
            <h3>Demo Record Not Found</h3>
            <p>
              No active shipment matches reference <code>{trackingInput}</code> in the demonstration environment.
            </p>
            <div className="tnf-suggestions">
              <span>Please select one of the pre-loaded operational corridors:</span>
              <div className="tnf-buttons">
                <button className="btn btn-secondary btn-sm" onClick={() => setQuickDemo('GAC-DXB-LHR')}>
                  Dubai ⇄ London (GAC-DXB-LHR)
                </button>
                <button className="btn btn-secondary btn-sm" onClick={() => setQuickDemo('GAC-KLG-TAS')}>
                  Klang ⇄ Tashkent (GAC-KLG-TAS)
                </button>
              </div>
            </div>
          </div>
        )}

        {activeShipment && (
          <div className="track-results-layout">
            
            {/* Left Column: Shipment Overview Card */}
            <div className="track-overview-col">
              <div className="track-status-card">
                <div className="tsc-header">
                  <div>
                    <span className="tsc-eyebrow">SHIPMENT REFERENCE</span>
                    <h3 className="tsc-ref tabular-nums">{activeShipment.ref}</h3>
                  </div>
                  <span className="tsc-status-badge">{activeShipment.status}</span>
                </div>

                <div className="tsc-route-box">
                  <div className="trb-loc">
                    <span className="trb-lbl">ORIGIN</span>
                    <span className="trb-val">{activeShipment.origin}</span>
                  </div>
                  <div className="trb-divider">
                    <ArrowRight size={16} />
                  </div>
                  <div className="trb-loc">
                    <span className="trb-lbl">DESTINATION</span>
                    <span className="trb-val">{activeShipment.destination}</span>
                  </div>
                </div>

                <div className="tsc-details-grid">
                  <div className="tsc-detail-item">
                    <span className="tdi-lbl">ESTIMATED DELIVERY</span>
                    <span className="tdi-val tabular-nums">{activeShipment.estimatedDelivery}</span>
                  </div>
                  <div className="tsc-detail-item">
                    <span className="tdi-lbl">CARGO SPECS</span>
                    <span className="tdi-val">{activeShipment.pieces}</span>
                  </div>
                  <div className="tsc-detail-item">
                    <span className="tdi-lbl">CURRENT LOCATION</span>
                    <span className="tdi-val text-gold">{activeShipment.currentLocation}</span>
                  </div>
                  <div className="tsc-detail-item">
                    <span className="tdi-lbl">CARRIER LINEHAUL</span>
                    <span className="tdi-val">{activeShipment.carrier}</span>
                  </div>
                  <div className="tsc-detail-item full-width">
                    <span className="tdi-lbl">CUSTOMS AUDIT STATUS</span>
                    <span className="tdi-val text-success"><ShieldCheck size={14} /> {activeShipment.customs}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Milestone Chronology Timeline */}
            <div className="track-timeline-col">
              <div className="track-timeline-card">
                <h4 className="ttc-title">Shipment Milestone History</h4>
                <div className="shipment-timeline">
                  {activeShipment.milestones.map((m, idx) => (
                    <div className={`milestone-item ${m.status}`} key={idx}>
                      <div className="milestone-node">
                        {m.status === 'completed' && <CheckCircle size={14} />}
                        {m.status === 'active' && <Clock size={14} className="active-clock" />}
                        {m.status === 'pending' && <span className="pending-dot"></span>}
                      </div>
                      <div className="milestone-content">
                        <span className="milestone-title">{m.title}</span>
                        <span className="milestone-time tabular-nums">{m.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Track;
