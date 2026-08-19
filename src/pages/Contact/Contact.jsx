import { Mail, MapPin, Phone, Building2, Send, CheckCircle, Clock, ShieldCheck, Headphones } from 'lucide-react';
import { primaryHubs } from '../../data/locations';
import useFormSubmit from '../../hooks/useFormSubmit';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import './Contact.css';

export const Contact = () => {
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
        title="Commercial Inquiries & Global Office Directory"
        description="Connect directly with GACIS trade lane specialists across Dubai, Chennai, Port Klang, Colombo, Almaty, and Frankfurt."
        canonical="/contact"
      />

      {/* Hero Header */}
      <PageHeader
        eyebrow="GLOBAL COMMERCIAL ACCESS"
        eyebrowIcon={Headphones}
        title="Contact Our Logistics Desk"
        description="Our multimodal corridor specialists and licensed customs brokers are on standby across global time zones to assist with freight inquiries, rate requests, and emergency charter dispatches."
        statusTag="DUBAI DESK LIVE · 24/7"
      />


      <section className="section-padding bg-primary">
        <div className="container">
          <div className="contact-main-grid">

            {/* Left: Contact Form Card */}
            <div className="contact-form-column">
              <div className="contact-card">
                <div className="cfc-header">
                  <span className="eyebrow">DIRECT MESSAGE</span>
                  <h2>Commercial Inquiry Desk</h2>
                  <p>Inquiries are assigned to dedicated regional trade lane managers within 2 hours.</p>
                </div>

                {isSuccess ? (
                  <div className="contact-success-state" role="status" aria-live="polite">
                    <div className="success-icon-wrap">
                      <CheckCircle size={36} />
                    </div>
                    <h3>Inquiry Transmitted</h3>
                    <p className="success-ref">DISPATCH REFERENCE: <strong>{submissionReference}</strong></p>
                    <p className="success-text">
                      Thank you, {formData.name}. Your inquiry regarding <em>{formData.subject}</em> has been assigned to the commercial desk. A specialist will follow up with verified rate telemetry.
                    </p>
                    <button className="btn btn-secondary mt-4" onClick={reset}>
                      Send Another Dispatch
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
                        <label htmlFor="contact-name">Full Name & Title *</label>
                        <input 
                          id="contact-name"
                          type="text" 
                          placeholder="e.g. Elena Rostova"
                          value={formData.name}
                          onChange={e => updateField('name', e.target.value)}
                          aria-invalid={!!errors.name}
                          required
                        />
                        {errors.name && <span className="field-error-msg">{errors.name}</span>}
                      </div>

                      <div className="cf-field">
                        <label htmlFor="contact-email">Corporate Business Email *</label>
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
                          placeholder="+971 50 XXX XXXX"
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
                        placeholder="e.g. Weekly Reefer Container Allocation to Tashkent"
                        value={formData.subject}
                        onChange={e => updateField('subject', e.target.value)}
                        aria-invalid={!!errors.subject}
                        required
                      />
                      {errors.subject && <span className="field-error-msg">{errors.subject}</span>}
                    </div>

                    <div className="cf-field">
                      <label htmlFor="contact-message">Cargo Details & Shipment Requirements *</label>
                      <textarea 
                        id="contact-message"
                        rows="4" 
                        placeholder="Specify origin, destination, cargo classification, estimated volume, and schedule requirements..."
                        value={formData.message}
                        onChange={e => updateField('message', e.target.value)}
                        aria-invalid={!!errors.message}
                        required
                      />
                      {errors.message && <span className="field-error-msg">{errors.message}</span>}
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary contact-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Transmitting Dispatch...' : 'Send Operational Message'} <Send size={15} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Global Operational Hubs List */}
            <div className="contact-hubs-column">
              <div className="chc-header">
                <span className="eyebrow">GLOBAL OFFICE NETWORK</span>
                <h2>Direct Regional Desks</h2>
                <p>Visit or contact our directly operated regional headquarters and logistics hubs.</p>
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
                        <a href={`tel:${hub.phone}`}>{hub.phone}</a>
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
        </div>
      </section>
    </div>
  );
};

export default Contact;
