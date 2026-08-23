import { FileText, ShieldAlert, Scale, CheckCircle2, Globe2 } from 'lucide-react';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import './Legal.css';

export const TermsOfService = () => {
  return (
    <div className="legal-page">
      <SEO 
        title="Terms of Service & Trading Conditions"
        description="Standard Trading Conditions, carriage contracts, and operational guidelines for GACIS Cargo Services Pvt. Ltd."
        canonical="/terms-of-service"
      />

      <PageHeader
        eyebrow="LEGAL & CONTRACTUAL STANDARDS"
        eyebrowIcon={Scale}
        title="Terms of Service & Trading Conditions"
        description="Standard Trading Conditions governing multimodal freight forwarding, air chartering, ocean carriage, customs brokerage, and bonded storage operations."
        statusTag="STANDARD TRADING CONDITIONS 2025"
      />

      <section className="section-padding bg-primary">
        <div className="container">
          <div className="legal-content-card">
            
            <div className="legal-section">
              <h3>1. General Operational Scope</h3>
              <p>
                All services, quotations, bookings, bills of lading, and operational linehauls provided by GACIS Cargo Services Pvt. Ltd. ("GACIS") are subject to these Standard Trading Conditions, alongside applicable international conventions (Warsaw/Montreal Convention for Air Freight, Hague-Visby Rules for Ocean Carriage, and CIM/SMGS for International Rail Transport).
              </p>
            </div>

            <div className="legal-section">
              <h3>2. Quotations, Rate Validity & Spot Surcharges</h3>
              <p>
                Written rate quotations issued by our commercial desk are based on carrier tariffs, fuel indices (BAF/FSC), currency exchange rates, and port terminal handling charges effective at the time of quotation. Unless explicitly stated otherwise:
              </p>
              <ul>
                <li>Spot quotations are valid for thirty (30) calendar days from the date of issue.</li>
                <li>Rates are subject to statutory surcharges (war risk, emergency bunker, port congestion) levied by mainline carriers at the time of vessel sailing or flight departure.</li>
                <li>Rates assume non-hazardous, stackable, and standard commercial cargo unless dangerous goods (IATA DGR) or out-of-gauge (OOG) handling is specifically contracted.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h3>3. Shipper Warranties & Documentation</h3>
              <p>The customer warrants that:</p>
              <ul>
                <li>All cargo descriptions, values, weights (VGM), and HS codes provided on Commercial Invoices and Packing Lists are complete, accurate, and truthful.</li>
                <li>Cargo is packaged, labeled, and marked in conformity with international transport standards to withstand standard intermodal transit and climate variations.</li>
                <li>The consignment contains no prohibited commodities, unauthorized dual-use technology, undeclared hazardous items, or contraband violating trade embargoes or sanctions.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h3>4. Customs Clearance & Regulatory Authority</h3>
              <p>
                GACIS acts as an authorized customs broker on behalf of the customer. The customer remains solely responsible for all statutory customs duties, taxes, fines, demurrage, and storage charges arising from regulatory audits, misdeclarations, or origin documentation delays.
              </p>
            </div>

            <div className="legal-section">
              <h3>5. Limitation of Liability & Cargo Insurance</h3>
              <p>
                GACIS maintains comprehensive Freight Forwarders Liability (FFL) insurance. However, statutory carrier liability is strictly limited under international transport conventions. Shippers are strongly advised to secure comprehensive Marine All-Risk Cargo Insurance for full invoice value plus freight.
              </p>
            </div>

            <div className="legal-section">
              <h3>6. Governing Law & Jurisdiction</h3>
              <p>
                These terms and any disputes arising from freight forwarding contracts executed by our Indian operating offices shall be governed by the laws of India, subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu. Contracts executed through our Dubai headquarters are governed by UAE maritime and commercial laws.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
