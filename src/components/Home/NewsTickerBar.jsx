import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Ship, Truck, Train, FileCheck, Boxes } from 'lucide-react';
import './NewsTickerBar.css';

const newsItems = [
  'GACIS now connects over 150 countries through its global partner network',
  'New direct air freight routes added between Dubai and Central Asia',
  'GACIS recognized for excellence in cross-border logistics in the Gulf region',
  'Sea freight capacity expanded across Caspian and Black Sea trade lanes',
  'Dedicated project cargo team launched for heavy industrial shipments',
];

const NewsTickerBar = () => {
  return (
    <div className="news-ticker-bar">
      <div className="ticker-label">LATEST NEWS</div>
      <div className="ticker-track-wrapper">
        <div className="ticker-track">
          {[...newsItems, ...newsItems].map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-dot">◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
      <Link to="/resources" className="ticker-more">
        All Updates <ArrowRight size={13} />
      </Link>
    </div>
  );
};

export default NewsTickerBar;
