import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Package, MapPin, CheckCircle, Clock } from 'lucide-react';
import './Track.css';

const Track = () => {
  const location = useLocation();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ref = params.get('ref');
    if (ref) {
      setTrackingNumber(ref);
      setIsTracking(true);
    }
  }, [location]);

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <div className="track-page">
      <div className="track-hero">
        <div className="container">
          <div className="track-header">
            <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Real-Time Tracking</span>
            <h1>Track Your Shipment</h1>
            <p>Enter your Air Waybill (AWB), Bill of Lading (BL), or GACIS reference number to get instant status updates.</p>
            <form className="track-search-form" onSubmit={handleTrack}>
              <div className="search-input-wrapper">
                <div className="search-wrap-inner">
                  <Search className="search-icon" size={20} />
                  <input
                    type="text"
                    placeholder="Enter Tracking or Reference Number (e.g. GAC-789210)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">Track</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {isTracking && (
        <div className="container section-padding">
          <div className="tracking-results fade-up">
            <div className="tracking-card">
              <div className="tracking-status-row">
                <Package size={28} style={{ color: 'var(--gacis-red)', flexShrink: 0 }} />
                <div>
                  <h4>Status: In Transit</h4>
                  <p>Estimated Delivery: Oct 24, 2026</p>
                </div>
                <span className="ts-badge" style={{ marginLeft: 'auto' }}>Air Cargo</span>
              </div>

              <div className="tracking-details-grid">
                <div className="detail-field">
                  <span className="df-label">Tracking Number</span>
                  <span className="df-value">{trackingNumber}</span>
                </div>
                <div className="detail-field">
                  <span className="df-label">Service Type</span>
                  <span className="df-value">Express Air Freight</span>
                </div>
                <div className="detail-field">
                  <span className="df-label">Origin Facility</span>
                  <span className="df-value">Dubai (DXB), UAE</span>
                </div>
                <div className="detail-field">
                  <span className="df-label">Destination</span>
                  <span className="df-value">London (LHR), UK</span>
                </div>
                <div className="detail-field">
                  <span className="df-label">Pieces / Weight</span>
                  <span className="df-value">4 Packages • 340.5 kg</span>
                </div>
                <div className="detail-field">
                  <span className="df-label">Customs Status</span>
                  <span className="df-value">Pre-Cleared (Green Channel)</span>
                </div>
              </div>
            </div>

            <div className="timeline-card">
              <h3>Shipment Milestone History</h3>
              <div className="timeline">
                <div className="timeline-item pending">
                  <div className="timeline-icon"><CheckCircle size={14} /></div>
                  <div className="timeline-content">
                    <h5>Final Delivery to Consignee</h5>
                    <p className="timeline-time">Pending Delivery Appointment</p>
                  </div>
                </div>
                <div className="timeline-item pending">
                  <div className="timeline-icon"><CheckCircle size={14} /></div>
                  <div className="timeline-content">
                    <h5>Destination Customs Clearance</h5>
                    <p className="timeline-time">London Heathrow Hub (LHR)</p>
                  </div>
                </div>
                <div className="timeline-item active">
                  <div className="timeline-icon"><Clock size={14} /></div>
                  <div className="timeline-content">
                    <h5>In Transit — Transshipment Hub</h5>
                    <p className="timeline-time">Oct 21, 2026 • 14:30 | Frankfurt Hub (FRA)</p>
                  </div>
                </div>
                <div className="timeline-item completed">
                  <div className="timeline-icon"><CheckCircle size={14} /></div>
                  <div className="timeline-content">
                    <h5>Departed Origin International Airport</h5>
                    <p className="timeline-time">Oct 20, 2026 • 08:15 | Dubai Airport (DXB)</p>
                  </div>
                </div>
                <div className="timeline-item completed">
                  <div className="timeline-icon"><CheckCircle size={14} /></div>
                  <div className="timeline-content">
                    <h5>Export Customs Clearance Completed</h5>
                    <p className="timeline-time">Oct 19, 2026 • 18:20 | Dubai Logistics City</p>
                  </div>
                </div>
                <div className="timeline-item completed">
                  <div className="timeline-icon"><CheckCircle size={14} /></div>
                  <div className="timeline-content">
                    <h5>Consignment Picked Up from Shipper</h5>
                    <p className="timeline-time">Oct 19, 2026 • 10:00 | Jebel Ali Free Zone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Track;
