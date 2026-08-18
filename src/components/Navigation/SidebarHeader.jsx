import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SidebarHeader = ({ isCollapsed, onToggleCollapse, onNavigate }) => {
  return (
    <div className={`sidebar-header ${isCollapsed ? 'is-collapsed' : ''}`}>
      {/* Collapse / Expand Tab */}
      <button
        type="button"
        className="sidebar-collapse-btn"
        onClick={onToggleCollapse}
        aria-label={isCollapsed ? 'Expand sidebar (248px)' : 'Collapse sidebar (72px)'}
        title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <ChevronRight size={13} strokeWidth={2.5} /> : <ChevronLeft size={13} strokeWidth={2.5} />}
      </button>

      <div className="sidebar-brand-block">
        <Link to="/" className="sidebar-brand-anchor" onClick={onNavigate} aria-label="GACIS Global Operations Console">
          <img 
            src="/images/logo.png" 
            alt="GACIS Global Logistics" 
            className="sidebar-brand-logo" 
          />
        </Link>
        {!isCollapsed && (
          <span className="sidebar-brand-sub">GLOBAL LOGISTICS NETWORK</span>
        )}
      </div>
    </div>
  );
};

export default SidebarHeader;
