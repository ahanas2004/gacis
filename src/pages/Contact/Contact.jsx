import { useState } from 'react';
import { Mail, MapPin, Phone, Building2, Send, CheckCircle, Clock, ShieldCheck, Headphones, ExternalLink, Navigation, Globe2 } from 'lucide-react';
import { primaryHubs } from '../../data/locations';
import useFormSubmit from '../../hooks/useFormSubmit';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import './Contact.css';

const officeLocations = [
  {
    id: 'chennai',
    name: 'GACIS Corporate Headquarters',
    city: 'Chennai, Tamil Nadu',
    country: 'India',
    address: 'Akshaya Plaza, Chennai, Tamil Nadu 600002, India',
    phone: '+91 44 2855 9100 / WhatsApp Desk Available',
    email: 'pricing.in@gaciscargoservices.com',
    hours: 'Mon – Sat: 09:00 – 18:30 IST',
    mapUrl: 'https://maps.google.com/maps?q=Akshaya+Plaza,+Adithanar+Salai,+Chennai,+Tamil+Nadu+600002&z=16&output=embed',
    directionsUrl: 'https://share.google/754b8XIlZwA8JegC5'
  },
  {
    id: 'dubai',
    name: 'Dubai Regional Trade Operations',
    city: 'Dubai (Gulf Gateway)',
    country: 'United Arab Emirates',
    address: 'GACIS Regional Trade Operations, Dubai, United Arab Emirates',
    phone: '+971 4 397 7888 / Commercial Desk',
    email: 'dubai.hq@gaciscargoservices.com',
    hours: '24/7 Global Central Control Tower',
    mapUrl: 'https://maps.google.com/maps?q=Dubai,United+Arab+Emirates&z=12&output=embed',
    directionsUrl: 'https://maps.google.com/?q=Dubai,United+Arab+Emirates'
  }
];

export const Contact = () => {
  const [activeOfficeId, setActiveOfficeId] = useState('chennai');
  const activeOffice = officeLocations.find(o => o.id === activeOfficeId) || officeLocations[0];

  const {
    formData,
    updateField,
    errors,
    isSubmitting,
    isSuccess,
    submissionReference,
    serverError,
    submit,
    reset
  } = useFormSubmit({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      corridor: 'Gulf ⇄ Central Asia (CIS)',
      message: ''
    }
  });

  const handleContactSubmit = async (e) => {
    await submit(e, {
      name: { required: true },
      email: { required: true, email: true },
      subject: { required: true },
      message: { required: true, minLength: 10 }
    });
  };

  return (
    <div className="contact-page">
      <SEO 
        title="Contact GACIS Global Logistics Desk"
        description="Connect with GACIS trade lane specialists in Chennai (Tamil Nadu, India) and Dubai (UAE) for international corridor rates and logistics operations."
        canonical="/contact"
      />

      {/* Hero Header */}
      <PageHeader
        eyebrow="DIRECT COMMERCIAL DESK"
        eyebrowIcon={Headphones}
        title="Connect with Our Trade Lane Specialists"
        description="Have a complex corridor requirement, time-critical air charter, or bulk container movement? Our central pricing and trade desks respond with verified rate schedules within 24 hours."
        statusTag="AVERAGE RESPONSE TIME: < 24 HOURS"
      />

      <section className="section-padding bg-secondary">
        <div className="container">
          <div className="contact-main-grid">
            
            {/* Left: Contact Form Card */}
            <div className="contact-form-column">
              <div className="contact-card">
                <div className="cfc-header">
                  <span className="eyebrow">COMMERCIAL INQUIRY FORM</span>
                  <h2>Submit Your Shipment Inquiry</h2>
                  <p>Provide your cargo parameters below. Your inquiry is directly routed to the relevant corridor specialist.</p>
                </div>

                {isSuccess ? (
                  <div className="contact-success-state" role="status" aria-live="polite">
                    <div className="success-icon-wrap">
                      <CheckCircle size={36} />
                    </div>
                    <h3>Inquiry Received</h3>
                    <p className="success-ref">REFERENCE NUMBER: <strong>{submissionReference}</strong></p>
                    <p className="success-text">
                      Thank you, {formData.name}. Your inquiry regarding <em>{formData.subject}</em> has been assigned to the commercial desk. A specialist will follow up with verified routing and rate details.
                    </p>
                    <button className="btn btn-secondary mt-4" onClick={reset}>
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleContactSubmit} noValidate>
                    {serverError && (
                      <div className="form-alert-error" role="alert">
                        {serverError}
                      </div>
                    )}

                    <div className="cf-row-2">
                      <div className="cf-field">
                        <label htmlFor="contact-name">Full Name *</label>
                        <input 
                          id="contact-name"
                          type="text" 
                          placeholder="Elena Rostova"
                          value={formData.name}
                          onChange={e => updateField('name', e.target.value)}
                          aria-invalid={!!errors.name}
                          required
                        />
                        {errors.name && <span className="field-error-msg">{errors.name}</span>}
                      </div>

                      <div className="cf-field">
                        <label htmlFor="contact-email">Corporate Email *</label>
                        <input 
                          id="contact-email"
                          type="email" 
                          placeholder="elena@company.com"
                          value={formData.email}
                          onChange={e => updateField('email', e.target.value)}
                          aria-invalid={!!errors.email}
                          required
                        />
                        {errors.email && <span className="field-error-msg">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="cf-row-2">
                      <div className="cf-field">
                        <label htmlFor="contact-phone">Contact Phone / WhatsApp</label>
                        <input 
                          id="contact-phone"
                          type="tel" 
                          placeholder="+91 98841 55555"
                          value={formData.phone}
                          onChange={e => updateField('phone', e.target.value)}
                        />
                      </div>

                      <div className="cf-field">
                        <label htmlFor="contact-corridor">Trade Corridor of Interest</label>
                        <select 
                          id="contact-corridor"
                          value={formData.corridor}
                          onChange={e => updateField('corridor', e.target.value)}
                        >
                          <option value="Gulf ⇄ Central Asia (CIS)">Gulf ⇄ Central Asia (CIS)</option>
                          <option value="South Asia (India) ⇄ Central Asia">South Asia (India) ⇄ Central Asia</option>
                          <option value="Southeast Asia ⇄ Europe">Southeast Asia ⇄ Europe</option>
                          <option value="South Asia ⇄ Gulf">South Asia ⇄ Gulf</option>
                          <option value="Trans-Caspian Rail Belt">Trans-Caspian Rail Belt</option>
                          <option value="Global Air Charter Desk">Global Air Charter Desk</option>
                        </select>
                      </div>
                    </div>

                    <div className="cf-field">
                      <label htmlFor="contact-subject">Inquiry Subject *</label>
                      <input 
                        id="contact-subject"
                        type="text" 
                        placeholder="e.g. Weekly Container Allocation to Tashkent / Almaty"
                        value={formData.subject}
                        onChange={e => updateField('subject', e.target.value)}
                        aria-invalid={!!errors.subject}
                        required
                      />
                      {errors.subject && <span className="field-error-msg">{errors.subject}</span>}
                    </div>

                    <div className="cf-field">
                      <label htmlFor="contact-message">Cargo Details & Specific Requirements *</label>
                      <textarea 
                        id="contact-message"
                        rows={4}
                        placeholder="Please mention origin, destination, cargo classification, estimated volume/weight, and timeline requirements..."
                        value={formData.message}
                        onChange={e => updateField('message', e.target.value)}
                        aria-invalid={!!errors.message}
                        required
                      />
                      {errors.message && <span className="field-error-msg">{errors.message}</span>}
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary btn-large btn-block"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Transmitting Dispatch...' : 'Send Operational Message'} <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Global Operational Hubs & Partner Network List */}
            <div className="contact-hubs-column">
              <div className="chc-header">
                <span className="eyebrow">GLOBAL OPERATING NETWORK</span>
                <h2>Operating Desks & Partner Gateways</h2>
                <p>Directly managed regional operating desks and international partner port pairs.</p>
              </div>

              <div className="hubs-scroll-list">
                {primaryHubs.map((hub) => (
                  <div className="hub-contact-card" key={hub.id}>
                    <div className="hcc-top">
                      <span className="hcc-flag">{hub.flag}</span>
                      <div>
                        <span className="hcc-role">{hub.role}</span>
                        <h4>{hub.country} — {hub.city}</h4>
                      </div>
                    </div>

                    <div className="hcc-info-rows">
                      <div className="hcc-row">
                        <MapPin size={15} className="hcc-icon" />
                        <span>{hub.address}</span>
                      </div>
                      <div className="hcc-row">
                        <Phone size={15} className="hcc-icon" />
                        {hub.phone.startsWith('+') ? (
                          <a href={`tel:${hub.phone.replace(/\s+/g, '')}`}>{hub.phone}</a>
                        ) : (
                          <span>{hub.phone}</span>
                        )}
                      </div>
                      <div className="hcc-row">
                        <Mail size={15} className="hcc-icon" />
                        <a href={`mailto:${hub.email}`}>{hub.email}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ─── Embedded Interactive Location Map ─── */}
          <div className="contact-map-section">
            <div className="cms-header">
              <div>
                <span className="eyebrow">OFFICE LOCATION & DIRECTIONS</span>
                <h3>Find Our Regional Operating Desks</h3>
              </div>

              <div className="cms-office-tabs">
                {officeLocations.map((office) => (
                  <button
                    key={office.id}
                    type="button"
                    className={`cms-tab-btn ${activeOfficeId === office.id ? 'is-active' : ''}`}
                    onClick={() => setActiveOfficeId(office.id)}
                  >
                    <Building2 size={14} />
                    <span>{office.city}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="cms-map-card">
              <div className="cms-map-frame-wrapper">
                <iframe
                  title={`${activeOffice.name} Google Map`}
                  src={activeOffice.mapUrl}
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="cms-map-iframe"
                />
              </div>

              <div className="cms-office-meta-bar">
                <div className="comb-info">
                  <h4>{activeOffice.name}</h4>
                  <p><MapPin size={13} /> {activeOffice.address}</p>
                </div>

                <div className="comb-actions">
                  <div className="comb-contact-fast">
                    <span><Phone size={13} /> {activeOffice.phone}</span>
                    <span><Clock size={13} /> {activeOffice.hours}</span>
                  </div>
                  <a
                    href={activeOffice.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <Navigation size={14} /> Get Directions <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
