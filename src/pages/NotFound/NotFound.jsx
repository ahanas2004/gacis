import { Link } from 'react-router-dom';
import { Radar, Home, Globe2, ArrowRight } from 'lucide-react';
import SEO from '../../components/Common/SEO';
import './NotFound.css';

export const NotFound = () => {
  return (
    <div className="not-found-page bg-dark">
      <SEO 
        title="404 — Route Not Found"
        description="The requested freight corridor or resource is outside the active GACIS global network."
      />

      <div className="container not-found-container">
        <div className="not-found-card">
          
          <div className="nf-radar-icon-wrap">
            <Radar size={48} className="nf-radar-svg" />
          </div>

          <span className="nf-code-tag">ERROR 404 — UNRESOLVED WAYPOINT</span>
          <h1>Route Not Found in Active Corridors</h1>
          <p>
            The destination, corridor, or tracking resource you are attempting to locate is not mapped in the current GACIS logistics network.
          </p>

          <div className="nf-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={16} /> Return to Network Home
            </Link>
            <Link to="/global-network" className="btn btn-outline-white">
              <Globe2 size={16} /> Explore Active Gateways
            </Link>
            <Link to="/track" className="btn btn-dark">
              Track Telemetry
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NotFound;
