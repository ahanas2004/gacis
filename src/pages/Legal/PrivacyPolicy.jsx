import { ShieldCheck, Lock, Eye, FileText, CheckCircle2, Globe2 } from 'lucide-react';
import SEO from '../../components/Common/SEO';
import PageHeader from '../../components/Common/PageHeader';
import './Legal.css';

export const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <SEO 
        title="Privacy Policy & Data Governance"
        description="GACIS Cargo Services Pvt. Ltd. Privacy Policy, GDPR compliance, and enterprise trade telemetry data protection standards."
        canonical="/privacy-policy"
      />

      <PageHeader
        eyebrow="LEGAL & COMPLIANCE"
        eyebrowIcon={ShieldCheck}
        title="Privacy Policy & Data Governance"
        description="At GACIS Cargo Services Pvt. Ltd., we treat client commercial records, bill of lading documentation, and shipment tracking data with institutional-grade security."
        statusTag="LAST UPDATED: JUNE 2025"
      />

      <section className="section-padding bg-primary">
        <div className="container">
          <div className="legal-content-card">
            
            <div className="legal-section">
              <h3>1. Commercial Data Protection Commitment</h3>
              <p>
                GACIS Cargo Services Pvt. Ltd. ("GACIS", "we", "us", or "our") operates multimodal freight forwarding, licensed customs brokerage, and logistics supply chain services across India, the Gulf Cooperation Council (GCC), Central Asia (CIS), and international trade corridors. We are committed to protecting the privacy and confidentiality of corporate shippers, consignees, vendors, and website users.
              </p>
            </div>

            <div className="legal-section">
              <h3>2. Information We Collect</h3>
              <p>In delivering international transportation solutions, we collect and process the following categories of information:</p>
              <ul>
                <li><strong>Commercial Shipment Data:</strong> Commercial Invoices, Packing Lists, HS Codes, Cargo Values, Consignor & Consignee details, Bills of Lading, and Air Waybills.</li>
                <li><strong>Shipper Contact Information:</strong> Corporate email addresses, contact telephone numbers, physical facility addresses, and designated logistics coordinators.</li>
                <li><strong>Regulatory & Customs Filings:</strong> Importer/Exporter Codes (IEC), VAT/GST registrations, EUR.1 certificates, TIR Carnet documentation, and authorized broker powers of attorney.</li>
                <li><strong>Telemetry & Digital Usage:</strong> IP addresses, browser specifications, and digital interaction logs on our route simulation and rate quotation wizards.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h3>3. How We Use Commercial Information</h3>
              <p>Collected data is used strictly for legitimate supply chain execution, including:</p>
              <ul>
                <li>Issuing master and house shipping documentation (Air Waybills, Ocean Bills of Lading, Rail Consignment Notes).</li>
                <li>Lodging mandatory electronic manifests with port authorities and customs portals (ICEGATE, Mirsal II, Eurasian Customs Union).</li>
                <li>Transmitting real-time shipment status notifications, milestone timestamps, and verified delivery receipts.</li>
                <li>Calculating certified Scope 3 carbon emissions data for your annual corporate sustainability reporting.</li>
              </ul>
            </div>

            <div className="legal-section">
              <h3>4. Confidentiality & Non-Disclosure</h3>
              <p>
                GACIS never sells, rents, or commercializes client trade data. Commercial data is shared only with verified operational partners (ocean lines, air carriers, railway operators, bonded warehouses, and customs authorities) necessary to complete linehaul transportation.
              </p>
            </div>

            <div className="legal-section">
              <h3>5. International Data Transfers & Security</h3>
              <p>
                Because our trade lanes span India, the UAE, Central Asia, and Europe, data is securely transferred across international jurisdictions under enterprise-grade encryption (TLS 1.3 in transit and AES-256 at rest), conforming with ISO 27001 data security standards and applicable cross-border data protection regulations.
              </p>
            </div>

            <div className="legal-section">
              <h3>6. Data Governance Desk</h3>
              <p>
                For data access requests, records modification, or privacy inquiries, please contact our designated compliance officer at:
              </p>
              <div className="legal-contact-box">
                <strong>GACIS Cargo Services Pvt. Ltd. — Legal & Compliance Desk</strong>
                <p>Akshaya Plaza, Chennai, Tamil Nadu 600002, India</p>
                <p>Email: <a href="mailto:compliance@gaciscargoservices.com">compliance@gaciscargoservices.com</a></p>
                <p>Phone: +91 44 2855 9100</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
