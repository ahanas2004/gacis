import { Link } from 'react-router-dom';
import { 
  Car, HeartPulse, Zap, Cpu, ShoppingBag, Factory, 
  ArrowRight, ShieldCheck, CheckCircle2, Award 
} from 'lucide-react';
import { industries } from '../../data/industries';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import './Solutions.css';

const iconMap = { Car, HeartPulse, Zap, Cpu, ShoppingBag, Factory };

export const Solutions = () => {
  return (
    <div className="solutions-page">
      <SEO 
        title="Industry Supply Chain Solutions"
        description="Engineered logistics frameworks for Automotive, Pharmaceuticals, Energy, High-Tech Electronics, Retail, and Industrial Manufacturing."
        canonical="/solutions"
      />

      {/* Hero Header */}
      <PageHeader 
        eyebrow="VERTICAL INDUSTRY INTELLIGENCE"
        title="Industry Solutions"
        description="Customized logistics architecture engineered to solve the sector-specific compliance, temperature, security, and velocity constraints of global enterprises."
        statusTag="6 DEDICATED SECTOR DESKS"
      />


      {/* 6 Industry Vertical Cards */}
      <section className="section-padding bg-primary">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">SECTOR SPECIALIZATIONS</span>
            <h2>Engineered for High-Value Industry Demands</h2>
            <p>
              From Just-in-Time automotive parts to GDP-certified pharmaceutical cold chains, our dedicated sector desks deliver unbroken operational continuity.
            </p>
          </div>

          <div className="industries-matrix-grid">
            {industries.map((ind) => {
              const Icon = iconMap[ind.icon] || Factory;
              return (
                <div className="industry-solution-card" key={ind.id}>
                  <div className="isc-header">
                    <div className="isc-icon-wrap">
                      <Icon size={22} />
                    </div>
                    <span className="isc-id-tag">{ind.id.toUpperCase()}</span>
                  </div>

                  <h3 className="isc-title">{ind.title}</h3>
                  <p className="isc-tagline">{ind.tagline}</p>

                  <div className="isc-challenge-box">
                    <span className="isc-box-lbl">OPERATIONAL CHALLENGE:</span>
                    <p>{ind.challenge}</p>
                  </div>

                  <div className="isc-solution-box">
                    <span className="isc-box-lbl">GACIS SOLUTION:</span>
                    <p>{ind.solution}</p>
                  </div>

                  <div className="isc-highlights-strip">
                    {ind.highlights.map((h, i) => (
                      <span className="isc-highlight-chip" key={i}>
                        <CheckCircle2 size={12} /> {h}
                      </span>
                    ))}
                  </div>

                  <div className="isc-footer">
                    <Link to="/quote" className="btn btn-secondary btn-sm isc-cta">
                      Request {ind.title} Solution <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Direct Advisory Banner */}
      <section className="section-padding-sm bg-dark">
        <div className="container">
          <div className="industry-cta-inner">
            <div>
              <h3 style={{ color: '#fff' }}>Require bespoke trade lane engineering?</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)' }}>
                Our industry vertical leaders work directly with your procurement and supply chain directors to design custom Service Level Agreements (SLAs).
              </p>
            </div>
            <Link to="/contact" className="btn btn-primary btn-large">
              Speak with Sector Lead <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
