import { useState } from 'react';
import { Mail, MapPin, Building2, ArrowRight, Send } from 'lucide-react';
import './Contact.css';

const offices = [
  {
    id: 'uae',
    country: 'UAE',
    flag: '🇦🇪',
    role: 'Global Headquarters',
    address: '#04-028, Fahidi Heights, Office Tower (Al Musalla Tower), 4th Floor, Bur Dubai, UAE — P.O. Box: 624699',
    email: 'info@gaciscargoservices.com',
  },
  {
    id: 'india',
    country: 'India — Chennai',
    flag: '🇮🇳',
    role: 'South Asia Hub',
    address: 'Akshaya Plaza, 1st Floor, F11, No.55/56, Adithanar Salai, Egmore, Chennai-600002, Tamil Nadu, India',
    email: 'pricing.in@gaciscargoservices.com',
  },
  {
    id: 'srilanka',
    country: 'Sri Lanka — Colombo',
    flag: '🇱🇰',
    role: 'Indian Ocean Gateway',
    address: '1st Floor, No. 35/1/1/1, Dawson Street, Colombo-02, Sri Lanka',
    email: 'info@gaciscargoservices.com',
  },
  {
    id: 'malaysia',
    country: 'Malaysia — Klang',
    flag: '🇲🇾',
    role: 'Southeast Asia Hub',
    address: 'Suite 08-06C, Level 8, Centro No.8, Jalan Batu Tiga Lama, 41300 Klang, Selangor, Malaysia',
    email: 'info@gaciscargoservices.com',
  },
];

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact-page">
      <div className="page-header bg-maroon">
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>Get in Touch</span>
          <h1>Contact Us</h1>
          <p>Our logistics specialists are ready to assist you — whether you need a quote, have a shipment query, or want to explore a partnership.</p>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">

            {/* Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <div className="cfc-header">
                  <span className="eyebrow">Send a Message</span>
                  <h2>We'll respond within 24 hours</h2>
                </div>

                {sent ? (
                  <div className="contact-success">
                    <div className="success-icon">✓</div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. A GACIS specialist will contact you within one business day.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="cf-row">
                      <div className="cf-group">
                        <label>Full Name *</label>
                        <input type="text" placeholder="John Smith" required
                          value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                      </div>
                      <div className="cf-group">
                        <label>Email Address *</label>
                        <input type="email" placeholder="john@company.com" required
                          value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                      </div>
                    </div>
                    <div className="cf-row">
                      <div className="cf-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+971 XX XXX XXXX"
                          value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                      </div>
                      <div className="cf-group">
                        <label>Subject *</label>
                        <input type="text" placeholder="e.g. Air freight to UK" required
                          value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
                      </div>
                    </div>
                    <div className="cf-group">
                      <label>Message *</label>
                      <textarea rows="5" placeholder="Tell us about your shipment requirements or enquiry..." required
                        value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                    </div>
                    <button type="submit" className="btn btn-primary contact-submit-btn">
                      Send Message <Send size={15} className="arrow-icon" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Offices */}
            <div className="contact-offices-col">
              <span className="eyebrow">Our Offices</span>
              <h2>Global presence, local expertise</h2>
              <p style={{ marginBottom: '1.5rem' }}>Visit or contact any of our offices worldwide. Each office is staffed with local logistics specialists who understand regional trade lanes.</p>

              <div className="offices-list">
                {offices.map(off => (
                  <div className="office-item" key={off.id}>
                    <div className="office-item-top">
                      <span className="office-flag">{off.flag}</span>
                      <div>
                        <span className="office-role">{off.role}</span>
                        <h4>{off.country}</h4>
                      </div>
                    </div>
                    <div className="office-contact-rows">
                      <div className="ocr">
                        <MapPin size={14} />
                        <span>{off.address}</span>
                      </div>
                      <div className="ocr">
                        <Mail size={14} />
                        <a href={`mailto:${off.email}`}>{off.email}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
