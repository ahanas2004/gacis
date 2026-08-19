import { Calculator } from 'lucide-react';
import QuoteWizard from '../../components/QuoteWizard/QuoteWizard';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import ErrorBoundary from '../../components/Common/ErrorBoundary';
import './Quote.css';

export const Quote = () => {
  return (
    <div className="quote-page">
      <SEO 
        title="Request an Enterprise Freight Quote"
        description="Calculate freight rates, lead times, and carbon telemetry for Air, Ocean, Rail, and Multimodal corridors across the Gulf, Central Asia, and Europe."
        canonical="/quote"
      />

      <PageHeader 
        eyebrow="ENTERPRISE QUOTE CALCULATOR"
        eyebrowIcon={Calculator}
        title="Request a Corridor Quote"
        description="Provide your origin, destination, cargo specifications, and timeline requirements. Our central pricing desk will calculate an optimized route schedule within 24 hours."
        statusTag="ALGORITHM-POWERED ROUTING"
      />
      
      <section className="section-padding bg-secondary">
        <div className="container">
          <ErrorBoundary componentName="Quote Calculation Wizard">
            <QuoteWizard />
          </ErrorBoundary>
        </div>
      </section>
    </div>
  );
};

export default Quote;
