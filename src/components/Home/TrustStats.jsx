import './TrustStats.css';

const stats = [
  { value: '150+', label: 'Countries Served', sub: 'Global partner network' },
  { value: '40+',  label: 'Office Locations', sub: 'Gulf, CIS & beyond' },
  { value: '1,000+', label: 'Professionals', sub: 'Dedicated specialists' },
  { value: '99.2%', label: 'On-Time Delivery', sub: 'Consistent performance' },
];

const TrustStats = () => {
  return (
    <section className="trust-editorial section-padding-sm">
      <div className="container">
        <div className="stats-confidence-grid fade-up">
          {stats.map((stat, i) => (
            <div className="stat-ed-col" key={i}>
              <span className="stat-ed-value">{stat.value}</span>
              <span className="stat-ed-label">{stat.label}</span>
              <span className="stat-ed-sub">{stat.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
