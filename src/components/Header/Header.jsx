import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Navigation/Sidebar';
import MobileNavigation from '../Navigation/MobileNavigation';

export const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Desktop & Tablet Persistent Global Operations Console Sidebar */}
      <Sidebar />

      {/* Mobile (< 768px) Command Header Bar & Off-Canvas Drawer */}
      <MobileNavigation 
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        onToggle={() => setIsMobileOpen(prev => !prev)}
      />
    </>
  );
};

export default Header;
