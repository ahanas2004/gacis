import { useState } from 'react';
import { CheckCircle, ChevronRight, ArrowLeft } from 'lucide-react';
import './QuoteWizard.css';

const QuoteWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    origin: '',
    destination: '',
    cargoType: '',
    weight: '',
    dimensions: '',
    date: '',
    company: '',
    name: '',
    email: '',
    phone: '',
  });

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setStep(5);
  };

  return (
    <div className="quote-wizard-container">
      <div className="wizard-progress">
        {[1, 2, 3, 4].map(num => (
          <div key={num} className={`progress-step ${step >= num ? 'active' : ''} ${step > num ? 'completed' : ''}`}>
            <div className="step-number">{step > num ? <CheckCircle size={16} /> : num}</div>
            <div className="step-label">
              {num === 1 && 'Service'}
              {num === 2 && 'Details'}
              {num === 3 && 'Timing'}
              {num === 4 && 'Contact'}
            </div>
            {num < 4 && <div className="step-line"></div>}
          </div>
        ))}
      </div>

      <div className="wizard-content">
        {step === 1 && (
          <div className="step-pane animation-fade-in">
            <h3>What do you need?</h3>
            <div className="service-options">
              {['Air Freight', 'Sea Freight', 'Land Freight', 'Rail Freight', 'Multimodal', 'Customs'].map(srv => (
                <button 
                  key={srv}
                  className={`service-option-btn ${formData.service === srv ? 'selected' : ''}`}
                  onClick={() => updateForm('service', srv)}
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="step-pane animation-fade-in">
            <h3>Shipment Details</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Origin</label>
                <input type="text" placeholder="City or Port" value={formData.origin} onChange={e => updateForm('origin', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Destination</label>
                <input type="text" placeholder="City or Port" value={formData.destination} onChange={e => updateForm('destination', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Cargo Type</label>
                <input type="text" placeholder="General, Perishable, Dangerous..." value={formData.cargoType} onChange={e => updateForm('cargoType', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Estimated Weight (kg)</label>
                <input type="number" placeholder="e.g. 500" value={formData.weight} onChange={e => updateForm('weight', e.target.value)} />
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step-pane animation-fade-in">
            <h3>Timing Requirements</h3>
            <div className="form-group full-width">
              <label>Target Delivery Date</label>
              <input type="date" value={formData.date} onChange={e => updateForm('date', e.target.value)} />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="step-pane animation-fade-in">
            <h3>Your Details</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" value={formData.company} onChange={e => updateForm('company', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" value={formData.name} onChange={e => updateForm('name', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" value={formData.email} onChange={e => updateForm('email', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" value={formData.phone} onChange={e => updateForm('phone', e.target.value)} />
              </div>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="step-pane success-pane animation-fade-in text-center">
            <CheckCircle size={64} className="success-icon" />
            <h3>Request Submitted Successfully</h3>
            <p>Our logistics experts will review your request and contact you shortly with a comprehensive quote.</p>
            <button className="btn btn-primary mt-4" onClick={() => window.location.href='/'}>Return to Home</button>
          </div>
        )}
      </div>

      {step < 5 && (
        <div className="wizard-footer">
          <button 
            className="btn btn-secondary" 
            onClick={prevStep}
            disabled={step === 1}
            style={{ opacity: step === 1 ? 0.5 : 1 }}
          >
            <ArrowLeft size={16} className="mr-2" /> Back
          </button>
          
          {step < 4 ? (
            <button className="btn btn-primary" onClick={nextStep} disabled={step === 1 && !formData.service}>
              Next Step <ChevronRight size={16} className="ml-2" />
            </button>
          ) : (
            <button className="btn btn-accent" onClick={handleSubmit}>
              Submit Request
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default QuoteWizard;
