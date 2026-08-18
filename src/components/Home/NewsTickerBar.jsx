import { useState } from 'react';
import { Play, Pause, Activity, Globe2, ShieldCheck, Leaf } from 'lucide-react';
import './NewsTickerBar.css';

const tickerItems = [
  { label: 'NETWORK DISPATCH', text: 'New weekly block train active on Tashkent ⇄ Baku ⇄ Istanbul Middle Corridor' },
  { label: 'COLD CHAIN', text: 'GDP re-certification completed across Dubai DWC and Frankfurt pharma gateways' },
  { label: 'SEA-AIR ROUTING', text: 'Port Klang ⇄ Dubai ⇄ London multimodal transit averaged 21.4 days in Q3' },
  { label: 'CARBON AUDIT', text: 'Intermodal rail substitution delivered 1,420 metric tons CO₂ avoidance this quarter' },
  { label: 'CAPACITY ALLOCATION', text: 'Contracted space secured for upcoming GCC–Europe Q4 air charter surge' }
];

export const NewsTickerBar = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="ticker-editorial-bar" role="region" aria-label="Live Operational Dispatches">
      <div className="container ticker-container">
        
        {/* Ticker Lead Label */}
        <div className="ticker-lead">
          <span className="ticker-pulse-beacon"></span>
          <span className="ticker-lead-text">OPERATIONAL DISPATCHES</span>
        </div>

        {/* Scrolling Strip */}
        <div className={`ticker-scroll-window ${isPaused ? 'is-paused' : ''}`}>
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, idx) => (
              <div className="ticker-item" key={idx}>
                <span className="ticker-tag">{item.label}</span>
                <span className="ticker-text">{item.text}</span>
                <span className="ticker-bullet">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Accessibility Pause / Play Control (WCAG 2.2.2) */}
        <button 
          className="ticker-pause-btn"
          onClick={() => setIsPaused(prev => !prev)}
          aria-label={isPaused ? 'Resume scrolling news updates' : 'Pause scrolling news updates'}
          title={isPaused ? 'Resume ticker' : 'Pause ticker'}
        >
          {isPaused ? <Play size={12} /> : <Pause size={12} />}
        </button>

      </div>
    </div>
  );
};

export default NewsTickerBar;
