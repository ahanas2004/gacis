export const SidebarSection = ({ label, isCollapsed, children }) => {
  return (
    <div className="sidebar-nav-section">
      {!isCollapsed && label && (
        <span className="sidebar-section-label" aria-hidden="true">
          {label}
        </span>
      )}
      <div className="sidebar-section-items">
        {children}
      </div>
    </div>
  );
};

export default SidebarSection;
