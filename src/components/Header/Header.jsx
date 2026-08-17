import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Globe, Search, ArrowRight, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Header.css';

const navLinks = [
  { path: '/about',          label: 'GACIS Brand',   subLabel: 'Our Story' },
  { path: '/services',       label: 'Services',       subLabel: 'Core Capabilities' },
  { path: '/solutions',      label: 'Solutions',      subLabel: 'Industry Expertise' },
  { path: '/resources',      label: 'Knowledge',      subLabel: 'Insights' },
  { path: '/global-network', label: 'Global Network', subLabel: 'Locations' },
  { path: '/sustainability',  label: 'Sustainability', subLabel: 'Our Future' },
  { path: '/contact',        label: 'Contact Us',     subLabel: 'Get in Touch' },
];

const Header = () => {
  const [isMobileOpen,   setIsMobileOpen]   = useState(false);
  const [isCollapsed,    setIsCollapsed]    = useState(false);
  const location  = useLocation();
  const navigate  = useNavigate();

  // Close mobile menu on route change
  useEffect(() => { setIsMobileOpen(false); }, [location.pathname]);

  // Propagate collapsed state to CSS custom property on <html>
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--sidebar-width',
      isCollapsed ? '72px' : '280px'
    );
  }, [isCollapsed]);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="mobile-top-bar">
        <Link to="/" className="mobile-logo-link">
          <img src="/images/logo.png" alt="GACIS Logo" className="mobile-logo-img" />
          <span className="mobile-logo-text">GACIS</span>
        </Link>
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileOpen(prev => !prev)}
          aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <nav className={`premium-sidebar ${isMobileOpen ? 'mobile-open' : ''} ${isCollapsed ? 'collapsed' : ''}`}>

        {/* Desktop collapse toggle */}
        <button
          className="sidebar-collapse-btn"
          onClick={() => setIsCollapsed(prev => !prev)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        <div className="sidebar-top">
          <Link to="/" className="sidebar-logo" onClick={closeMobile}>
            <img src="/images/logo.png" alt="GACIS Logo" className="logo-img" />
            <div className="logo-text">
              <span className="logo-name">GACIS</span>
              <span className="logo-subtext">CARGO SERVICES</span>
            </div>
          </Link>

          <div className="sidebar-utils">
            <button className="util-link"><Globe size={15} /><span>Global / EN</span></button>
            <button className="util-link"><Search size={15} /><span>Search</span></button>
          </div>
        </div>

        <div className="sidebar-nav">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || location.pathname.startsWith(link.path + '/');
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMobile}
                aria-current={isActive ? 'page' : undefined}
                title={isCollapsed ? link.label : undefined}
              >
                <div className="nav-indicator" />
                <div className="nav-item-content">
                  <span className="nav-eyebrow">{link.subLabel}</span>
                  <span className="nav-label">{link.label}</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="sidebar-bottom">
          <button
            className="btn btn-primary track-btn"
            onClick={() => { navigate('/quote'); closeMobile(); }}
          >
            <span className="track-btn-text">Get a Quote</span>
            <ArrowRight size={16} className="arrow-icon" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div className="mobile-overlay" onClick={closeMobile} aria-hidden="true" />
      )}
    </>
  );
};

export default Header;
