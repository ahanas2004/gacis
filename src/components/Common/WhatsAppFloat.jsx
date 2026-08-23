import { useState } from 'react';
import { MessageCircle, X, Send, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import './WhatsAppFloat.css';

export const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inquiryText, setInquiryText] = useState('');

  // GACIS WhatsApp commercial desk contact number
  const whatsappNumber = '919884155555'; // Clean international format (+91 Chennai / Dubai desk)

  const handleSend = (textToSend) => {
    const message = textToSend || inquiryText || 'Hello GACIS Team, I would like to inquire about freight forwarding and trade corridors.';
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const quickQueries = [
    'Rate quote for Air Cargo (Dubai ⇄ Almaty)',
    'Inquire about FCL Container availability',
    'Customs clearance inquiry for Chennai Port',
    'Reefer cold chain transport for Pharma'
  ];

  return (
    <div className="whatsapp-float-root" aria-label="WhatsApp Quick Connect">
      {/* Popover Chat Launcher Card */}
      {isOpen && (
        <div className="wa-card-popover" role="dialog" aria-modal="true" aria-label="GACIS WhatsApp Help Desk">
          <div className="wa-card-header">
            <div className="wa-header-info">
              <div className="wa-avatar-ring">
                <span className="wa-online-dot"></span>
                <MessageCircle size={20} className="wa-avatar-icon" />
              </div>
              <div>
                <h4 className="wa-title">GACIS Trade Desk</h4>
                <span className="wa-sub"><Clock size={11} /> Typically replies in ~15 mins</span>
              </div>
            </div>
            <button 
              type="button" 
              className="wa-close-btn" 
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat"
            >
              <X size={16} />
            </button>
          </div>

          <div className="wa-card-body">
            <div className="wa-bubble-agent">
              <p>
                👋 Welcome to GACIS Cargo Services! How can our multimodal trade specialists assist your supply chain today?
              </p>
              <span className="wa-bubble-time">Verified Desk · 24/7 Support</span>
            </div>

            <div className="wa-quick-options">
              <span className="wa-options-label">Quick Inquiries:</span>
              {quickQueries.map((query, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="wa-pill-btn"
                  onClick={() => handleSend(query)}
                >
                  <span>{query}</span>
                  <ArrowUpRight size={13} />
                </button>
              ))}
            </div>
          </div>

          <form 
            className="wa-card-footer"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inquiryText);
            }}
          >
            <input
              type="text"
              placeholder="Type your shipment inquiry..."
              value={inquiryText}
              onChange={(e) => setInquiryText(e.target.value)}
              className="wa-input"
            />
            <button type="submit" className="wa-send-btn" aria-label="Send WhatsApp message">
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        type="button"
        className={`whatsapp-trigger-btn ${isOpen ? 'is-active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
        aria-label="Open WhatsApp live chat with GACIS trade desk"
        aria-expanded={isOpen}
      >
        <div className="wa-pulse-wave"></div>
        {isOpen ? <X size={24} /> : <MessageCircle size={26} />}
        <span className="wa-floating-badge">Online</span>
      </button>
    </div>
  );
};

export default WhatsAppFloat;
