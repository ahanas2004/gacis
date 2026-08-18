import { Link } from 'react-router-dom';
import { Radar, ArrowRight } from 'lucide-react';
import { utilityActions } from '../../data/navigation';

export const SidebarActions = ({ isCollapsed, onNavigate }) => {
  return (
    <div className={`sidebar-actions-tray ${isCollapsed ? 'is-collapsed' : ''}`}>
      
      {/* Utility Action: Track Shipment */}
      <Link
        to={utilityActions.track.path}
        className="sidebar-track-button"
        onClick={onNavigate}
        title={isCollapsed ? 'Track Shipment' : undefined}
      >
        <div className="stb-icon-wrap">
          <Radar size={16} strokeWidth={1.75} className="track-radar-icon" />
        </div>
        {!isCollapsed ? (
          <>
            <span className="stb-text">{utilityActions.track.label}</span>
            <ArrowRight size={13} className="stb-hover-arrow" />
          </>
        ) : (
          <div className="collapsed-nav-tooltip" role="tooltip">
            Track Shipment
          </div>
        )}
      </Link>

      {/* Primary Conversion CTA: Request Quote */}
      <Link
        to={utilityActions.quote.path}
        className="sidebar-quote-button"
        onClick={onNavigate}
        title={isCollapsed ? 'Request a Quote' : undefined}
      >
        {!isCollapsed ? (
          <>
            <span className="sqb-text">{utilityActions.quote.label}</span>
            <ArrowRight size={15} className="sqb-arrow" />
          </>
        ) : (
          <>
            <ArrowRight size={18} />
            <div className="collapsed-nav-tooltip" role="tooltip">
              Request a Quote
            </div>
          </>
        )}
      </Link>

      {/* Trust Indicator: Dubai HQ 24/7 Desk */}
      <div className="sidebar-desk-indicator">
        <span className="desk-pulse-node" aria-hidden="true"></span>
        {!isCollapsed ? (
          <div className="desk-text-block">
            <span className="desk-location">{utilityActions.operationsStatus.location}</span>
            <span className="desk-sub">{utilityActions.operationsStatus.statusText}</span>
          </div>
        ) : (
          <div className="collapsed-nav-tooltip" role="tooltip">
            Dubai Operations (24/7)
          </div>
        )}
      </div>

    </div>
  );
};

export default SidebarActions;
