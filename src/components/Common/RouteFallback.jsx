import './RouteFallback.css';

const RouteFallback = () => (
  <div className="route-fallback" role="status" aria-live="polite" aria-label="Loading page">
    <div className="route-fallback-bar" />
  </div>
);

export default RouteFallback;
