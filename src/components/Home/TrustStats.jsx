import { useState, useEffect, useRef } from 'react';
import { Globe2, ShieldCheck, Clock, Award, Building2, CheckCircle2 } from 'lucide-react';
import './TrustStats.css';

const statsData = [
  {
    target: 150,
    suffix: '+',
    label: 'Direct Corridors',
    sub: 'Active trade lanes across Gulf, CIS & Asia',
    icon: Globe2
  },
  {
    target: 99.2,
    decimals: 1,
    suffix: '%',
    label: 'On-Time Schedule Adherence',
    sub: 'Measured across 12,000+ linehauls',
    icon: Clock
  },
  {
    target: 31.8,
    decimals: 1,
    prefix: '-',
    suffix: '%',
    label: 'Average CO₂ Reduction',
    sub: 'Via intermodal rail & sea-air optimization',
    icon: Award
  },
  {
    target: 6,
    suffix: ' Hubs',
    label: 'Strategic Operational Hubs',
    sub: 'Dubai, Chennai, Klang, Colombo, Almaty, Frankfurt',
    icon: Building2
  }
];

export const TrustStats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCounts(statsData.map(s => s.target));
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);

        const duration = 1800; // ms
        const startTime = performance.now();

        const updateCounters = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);

          setCounts(statsData.map(s => {
            const currentVal = s.target * easeProgress;
            return s.decimals ? Number(currentVal.toFixed(s.decimals)) : Math.round(currentVal);
          }));

          if (progress < 1) {
            requestAnimationFrame(updateCounters);
          }
        };

        requestAnimationFrame(updateCounters);
        observer.unobserve(el);
      }
    }, { threshold: 0.2 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="trust-stats-section section-padding-sm bg-secondary">
      <div className="container">
        <dl className="stats-confidence-grid">
          {statsData.map((stat, i) => {
            const Icon = stat.icon;
            const displayVal = hasAnimated ? counts[i] : (stat.decimals ? '0.0' : '0');

            return (
              <div className={`stat-card fade-up delay-${(i % 4) * 100 + 100}`} key={stat.label}>
                <div className="stat-icon-wrap">
                  <Icon size={20} />
                </div>
                <dd className="stat-card-value tabular-nums">
                  {stat.prefix || ''}{displayVal}{stat.suffix}
                </dd>
                <dt className="stat-card-label">{stat.label}</dt>
                <span className="stat-card-sub">{stat.sub}</span>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
};

export default TrustStats;
