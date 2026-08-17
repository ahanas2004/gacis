import { ClipboardList, Package, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ProcessSection.css';

const steps = [
  {
    num: '01',
    icon: <ClipboardList size={28} />,
    title: 'Quote & Plan',
    desc: 'Share your cargo details with us. Our experts design the optimal routing, mode, and timeline — tailored to your cost and delivery targets.',
  },
  {
    num: '02',
    icon: <Package size={28} />,
    title: 'Pickup & Documentation',
    desc: 'We collect your shipment at origin, prepare all customs declarations, bills of lading, and compliance documentation on your behalf.',
  },
  {
    num: '03',
    icon: <MapPin size={28} />,
    title: 'In-Transit Visibility',
    desc: 'Track your cargo at every milestone. Real-time status updates and proactive alerts keep you informed throughout the journey.',
  },
  {
    num: '04',
    icon: <CheckCircle size={28} />,
    title: 'Delivery & Clearance',
    desc: 'We handle destination customs clearance and deliver directly to your door, warehouse, or designated distribution point.',
  },
];

const ProcessSection = () => {
  return (
    <section className="process-section section-padding">
      <div className="container">
        <div className="process-header fade-up">
          <span className="eyebrow">How It Works</span>
          <h2>From pickup to delivery,<br />we handle it all.</h2>
          <p>GACIS manages every stage of your cargo journey so you can focus on your core business. Our end-to-end process ensures transparency, reliability, and precision at every step.</p>
        </div>

        <div className="process-steps">
          {steps.map((step, i) => (
            <div className={`process-step fade-up delay-${(i + 1) * 100}`} key={i}>
              <div className="process-step-num">{step.num}</div>
              <div className="process-step-icon">{step.icon}</div>
              <div className="process-step-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process-cta fade-up delay-500">
          <Link to="/quote" className="btn btn-primary">
            Request a Quote <ArrowRight size={16} className="arrow-icon" />
          </Link>
          <Link to="/track" className="btn btn-secondary">
            Track a Shipment <ArrowRight size={16} className="arrow-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
