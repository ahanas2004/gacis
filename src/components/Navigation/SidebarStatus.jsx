export const SidebarStatus = ({ isCollapsed }) => {
  return (
    <div className={`sidebar-status-container ${isCollapsed ? 'is-collapsed' : ''}`}>
      <div className="sidebar-status-badge">
        <span className="status-ping-dot" aria-hidden="true"></span>
        {!isCollapsed && (
          <div className="status-text-wrap">
            <span className="status-title">NETWORK ONLINE</span>
            <span className="status-sub">24/7 OPERATIONS</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarStatus;
