import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import './QuickTrack.css';

const QuickTrack = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const navigate = useNavigate();

  const handleTrack = (e) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      navigate(`/track?ref=${encodeURIComponent(trackingNumber)}`);
    }
  };

  return (
    <div className="quick-track-wrapper">
      <div className="container">
        <div className="quick-track-card">
          <div className="quick-track-header">
            <h3>Track Your Shipment</h3>
            <p>Enter your tracking or reference number to get real-time status.</p>
          </div>
          
          <form className="quick-track-form" onSubmit={handleTrack}>
            <div className="input-group">
              <Search className="input-icon" size={20} />
              <input 
                type="text" 
                placeholder="Tracking / Reference Number" 
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-accent track-btn">
              Track Shipment
            </button>
          </form>
          
          <div className="quick-links">
            <span className="quick-links-label">Quick Actions:</span>
            <a href="/quote" className="quick-link">Request a Quote</a>
            <span className="dot">•</span>
            <a href="/contact" className="quick-link">Contact an Expert</a>
            <span className="dot">•</span>
            <a href="/global-network" className="quick-link">Find a Location</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTrack;
