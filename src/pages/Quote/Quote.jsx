import QuoteWizard from '../../components/QuoteWizard/QuoteWizard';

const Quote = () => {
  return (
    <div className="quote-page">
      <div className="page-header bg-maroon">
        <div className="container">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>Instant Estimate</span>
          <h1>Request a Quote</h1>
          <p>
            Provide your shipment origin, destination, cargo specifications, and schedule. Our logistics pricing desk will prepare a competitive, customized quotation within 24 hours.
          </p>
        </div>
      </div>
      
      <section className="section-padding bg-secondary">
        <div className="container">
          <QuoteWizard />
        </div>
      </section>
    </div>
  );
};

export default Quote;
