import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { utilityActions } from '../../data/navigation';

export const SidebarActions = ({ isCollapsed, onNavigate }) => {
  return (
    <div className={`sidebar-actions-tray ${isCollapsed ? 'is-collapsed' : ''}`}>

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
