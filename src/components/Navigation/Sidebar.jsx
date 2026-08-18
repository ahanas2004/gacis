import { useState, useEffect } from 'react';
import { navigationGroups } from '../../data/navigation';
import SidebarHeader from './SidebarHeader';
import SidebarStatus from './SidebarStatus';
import SidebarSection from './SidebarSection';
import SidebarNavItem from './SidebarNavItem';
import SidebarActions from './SidebarActions';
import './Sidebar.css';

export const Sidebar = () => {
  // Initialize collapse based on screen width: collapsed on tablets (768 - 1023px)
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768 && window.innerWidth < 1024;
    }
    return false;
  });

  // Keep CSS custom property --sidebar-width synchronized
  useEffect(() => {
    const updateSidebarWidth = () => {
      const width = isCollapsed ? '72px' : '248px';
      document.documentElement.style.setProperty('--sidebar-width', width);
    };

    updateSidebarWidth();
  }, [isCollapsed]);

  // Handle responsive window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setIsCollapsed(true);
      } else if (window.innerWidth >= 1024) {
        // preserve user preference or uncollapse on large screens
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(prev => !prev);
  };

  return (
    <aside 
      className={`gacis-operations-sidebar ${isCollapsed ? 'is-collapsed' : ''}`}
      aria-label="Global Operations Console"
    >
      {/* 01: Brand Header (Fixed) */}
      <SidebarHeader 
        isCollapsed={isCollapsed} 
        onToggleCollapse={toggleCollapse} 
      />

      {/* 02: Network Telemetry Status (Fixed) */}
      <SidebarStatus isCollapsed={isCollapsed} />

      {/* 03: Navigation Groups (Scrollable) */}
      <nav className="sidebar-scrollable-nav" aria-label="Primary navigation">
        {navigationGroups.map((grp) => (
          <SidebarSection key={grp.id} label={grp.group} isCollapsed={isCollapsed}>
            {grp.items.map((item) => (
              <SidebarNavItem
                key={item.id}
                item={item}
                isCollapsed={isCollapsed}
              />
            ))}
          </SidebarSection>
        ))}
      </nav>

      {/* 04: Pinned Utility, Conversion & Trust Actions (Fixed) */}
      <SidebarActions isCollapsed={isCollapsed} />
    </aside>
  );
};

export default Sidebar;
