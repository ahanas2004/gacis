import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Layers, Box, Globe2, 
  Leaf, BookOpen, Building2, PhoneCall, ArrowRight,
  Radar
} from 'lucide-react';

const iconMap = {
  LayoutDashboard,
  Layers,
  Box,
  Globe2,
  Leaf,
  BookOpen,
  Building2,
  PhoneCall,
  Radar
};

export const SidebarNavItem = ({ item, isCollapsed, onNavigate }) => {
  const location = useLocation();
  const IconComponent = iconMap[item.icon] || Box;

  // Active state calculation (supports nested paths like /services/air-freight)
  const isActive = item.exact 
    ? location.pathname === item.path
    : location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));

  return (
    <div className={`sidebar-nav-item-wrapper ${isActive ? 'is-active' : ''} ${item.isNetworkAnchor ? 'is-network-anchor' : ''}`}>
      <Link
        to={item.path}
        className={`sidebar-nav-link ${isActive ? 'is-active' : ''}`}
        onClick={onNavigate}
        title={isCollapsed ? item.label : undefined}
        aria-current={isActive ? 'page' : undefined}
      >
        {/* 3px Red Vertical Line Indicator */}
        <div className="active-rail-indicator" aria-hidden="true" />

        {/* Icon */}
        <div className="nav-item-icon-box">
          <IconComponent size={18} strokeWidth={isActive ? 2 : 1.6} />
          {item.isNetworkAnchor && <span className="anchor-glow-dot" />}
        </div>

        {/* Main Text Content */}
        {!isCollapsed && (
          <div className="nav-item-text-group">
            {item.subLabel && isActive && (
              <span className="nav-item-micro-eyebrow">{item.subLabel}</span>
            )}
            <span className="nav-item-primary-label">{item.label}</span>
          </div>
        )}

        {/* Optional Micro Badge (e.g. ESG) */}
        {!isCollapsed && item.badge && (
          <span className="nav-item-esg-badge">{item.badge}</span>
        )}

        {/* Floating Tooltip in Collapsed Mode */}
        {isCollapsed && (
          <div className="collapsed-nav-tooltip" role="tooltip">
            {item.label}
          </div>
        )}
      </Link>

      {/* Submenu for Services when parent route is active */}
      {!isCollapsed && item.hasSubmenu && isActive && (
        <div className="sidebar-nested-submenu" role="menu">
          {item.sublinks.map((sub) => {
            const isSubActive = location.pathname === sub.path;
            return (
              <Link
                key={sub.path}
                to={sub.path}
                className={`sidebar-sublink-item ${isSubActive ? 'is-sub-active' : ''}`}
                onClick={onNavigate}
                role="menuitem"
              >
                <span className="sublink-label">{sub.label}</span>
                <span className="sublink-mode-tag">{sub.mode}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SidebarNavItem;
