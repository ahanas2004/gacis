import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigationGroups } from '../../data/navigation';
import SidebarSection from './SidebarSection';
import SidebarNavItem from './SidebarNavItem';
import SidebarActions from './SidebarActions';
import SidebarStatus from './SidebarStatus';

export const MobileNavigation = ({ isOpen, onClose, onToggle }) => {
  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Mobile Top Header Bar (< 768px) */}
      <header className="mobile-command-header">
        <Link to="/" className="mch-logo-anchor" onClick={onClose} aria-label="GACIS Home">
          <div className="mch-brand-logo-wrap">
            <img src="/images/logo.png" alt="GACIS" className="mch-logo-img" />
            <span className="mch-brand-name">GACIS</span>
          </div>
          <span className="mch-brand-tag">GULF · CIS · ASIA</span>
        </Link>

        <button
          type="button"
          className="mch-menu-trigger"
          onClick={onToggle}
          aria-label={isOpen ? 'Close operations drawer' : 'Open operations drawer'}
          aria-expanded={isOpen}
          aria-controls="mobile-drawer-console"
        >
          <span className={`mch-icon-swap ${isOpen ? 'is-open' : ''}`}>
            <Menu size={20} className="icon-menu" />
            <X size={20} className="icon-close" />
          </span>
        </button>
      </header>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="mobile-drawer-backdrop" 
          onClick={onClose} 
          aria-hidden="true" 
        />
      )}

      {/* Off-Canvas Navigation Drawer */}
      <nav
        id="mobile-drawer-console"
        className={`mobile-console-drawer ${isOpen ? 'is-open' : ''}`}
        aria-label="Mobile Navigation"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="mcd-header">
          <Link to="/" className="mcd-brand-link" onClick={onClose} aria-label="GACIS Home">
            <div className="mcd-brand-logo-wrap">
              <img src="/images/logo.png" alt="GACIS" className="mcd-logo" />
              <span className="mcd-brand-name">GACIS</span>
            </div>
            <span className="mcd-sub">GLOBAL LOGISTICS NETWORK</span>
          </Link>
          <button
            type="button"
            className="mcd-close-btn"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <X size={18} />
          </button>
        </div>

        {/* Operational Status */}
        <SidebarStatus isCollapsed={false} />

        {/* Scrollable Groups Area */}
        <div className="mcd-nav-scroll">
          {navigationGroups.map((grp) => (
            <SidebarSection key={grp.id} label={grp.group} isCollapsed={false}>
              {grp.items.map((item) => (
                <SidebarNavItem
                  key={item.id}
                  item={item}
                  isCollapsed={false}
                  onNavigate={onClose}
                />
              ))}
            </SidebarSection>
          ))}
        </div>

        {/* Bottom Pinned Actions */}
        <div className="mcd-actions-pinned">
          <SidebarActions isCollapsed={false} onNavigate={onClose} />
        </div>
      </nav>
    </>
  );
};

export default MobileNavigation;
