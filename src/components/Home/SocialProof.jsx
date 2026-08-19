import { ShieldCheck, Award, CheckCircle2, Lock, Globe2, FileCheck } from 'lucide-react';
import './SocialProof.css';

const certifications = [
  { name: 'ISO 9001:2015', label: 'Quality Management Certified', icon: Award },
  { name: 'GDP Compliant', label: 'Good Distribution Practice Pharma', icon: ShieldCheck },
  { name: 'IATA Registered', label: 'Air Cargo Agent Network', icon: Globe2 },
  { name: 'FIATA Member', label: 'International Freight Association', icon: FileCheck }
];

const alliances = [
  { code: '2M / OCEAN ALLIANCE', desc: 'Direct ocean contract allocations' },
  { code: 'GLOBAL AIR BSAs', desc: 'Tier-1 scheduled widebody agreements' },
  { code: 'TRANS-CASPIAN BELT', desc: 'Contracted weekly rail block trains' },
  { code: 'TIR CARNET APPROVED', desc: 'Non-stop sealed cross-border trucking' }
];

export const SocialProof = () => {
  return (
    <section className="social-proof-section section-padding-sm bg-primary">
      <div className="container">
        
        <div className="sp-header text-center fade-up">
          <span className="eyebrow">ENTERPRISE CREDENTIALS & STANDARDS</span>
          <h3>Engineered to Global Compliance Benchmarks</h3>
        </div>

        {/* Certifications Grid */}
        <div className="sp-cert-grid">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div className={`sp-cert-card fade-up delay-${(idx % 4) * 100 + 100}`} key={cert.name}>
                <div className="sp-cert-icon">
                  <Icon size={22} />
                </div>
                <div className="sp-cert-info">
                  <span className="sp-cert-name">{cert.name}</span>
                  <span className="sp-cert-label">{cert.label}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carrier Alliances & Global Infrastructure Bar */}
        <div className="sp-alliances-bar fade-up">
          <span className="sp-alliances-title">CONTRACTED INFRASTRUCTURE CAPACITY:</span>
          <div className="sp-alliances-items">
            {alliances.map((al) => (
              <div className="sp-al-item" key={al.code}>
                <span className="sp-al-code">{al.code}</span>
                <span className="sp-al-desc">{al.desc}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
