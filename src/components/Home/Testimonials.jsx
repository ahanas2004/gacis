import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Building2, MapPin, CheckCircle2 } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    quote: "GACIS transformed our Central Asia exports. Switching to their Trans-Caspian intermodal corridor reduced our Chennai-to-Almaty transit time from 38 days down to 11 days with flawless border pre-clearance.",
    author: "Rajesh Nambiar",
    role: "Head of Global Supply Chain",
    company: "Premier Auto Components Ltd.",
    location: "Chennai, India",
    corridor: "Chennai ⇄ Almaty (Automotive CKD)",
    rating: 5,
    metric: "-71% Transit Time"
  },
  {
    id: 2,
    quote: "Their GDP-compliant cold chain and real-time temperature tracking gave our QA leadership absolute compliance confidence. We have zero excursion incidents across our Gulf & CIS pharmaceutical linehauls.",
    author: "Dr. Elena Voss",
    role: "VP Logistics & Cold Chain",
    company: "EuroPharma Logistics AG",
    location: "Frankfurt, Germany",
    corridor: "Frankfurt ⇄ Dubai (GDP Pharma +2°C to +8°C)",
    rating: 5,
    metric: "0.0% Thermal Excursion"
  },
  {
    id: 3,
    quote: "When we had 85-ton heavy-lift turbine components destined for oilfields in Kazakhstan, GACIS engineered the multi-axle modular transport and Caspian barge coordination without a single delay.",
    author: "Mansoor Al-Falasi",
    role: "Regional Procurement Director",
    company: "Gulf Energy Infrastructures",
    location: "Dubai, UAE",
    corridor: "Dubai ⇄ Atyrau (Heavy Project Cargo)",
    rating: 5,
    metric: "100% On-Schedule Plinth Delivery"
  },
  {
    id: 4,
    quote: "The scheduled reliability of their Eurasian rail block trains and transparent customs handling allowed us to cut holding inventory by 28% across our Central Asian retail fulfillment hubs.",
    author: "Kuanysh Bekmambetov",
    role: "Chief Commercial Officer",
    company: "Eurasian Retail Network",
    location: "Almaty, Kazakhstan",
    corridor: "Yiwu ⇄ Tashkent ⇄ Almaty",
    rating: 5,
    metric: "-28% Inventory Holding"
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoplay, activeIndex]);

  const activeTestimonial = testimonialsData[activeIndex];

  return (
    <section 
      className="testimonials-section section-padding bg-secondary"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
      aria-label="Client Testimonials & Case Studies"
    >
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-heading">
          <span className="eyebrow">VERIFIED SHIPPER REVIEWS</span>
          <h2>Trusted by Enterprise Shippers Across Global Corridors</h2>
          <p>
            From automotive assembly parts to GDP pharmaceuticals, see how international logistics leaders rely on GACIS for speed, compliance, and carbon reduction.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="testimonial-card-wrapper">
          <div className="testimonial-featured-card" key={activeTestimonial.id}>
            
            {/* Left Col: Quote & Metric */}
            <div className="tfc-content">
              <div className="tfc-top-bar">
                <div className="tfc-rating">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-brand-gold)" color="var(--color-brand-gold)" />
                  ))}
                  <span className="tfc-rating-text">5.0 / 5.0 Enterprise Review</span>
                </div>
                <span className="tfc-corridor-badge">
                  {activeTestimonial.corridor}
                </span>
              </div>

              <blockquote className="tfc-quote">
                <Quote size={32} className="tfc-quote-icon" />
                <p>"{activeTestimonial.quote}"</p>
              </blockquote>

              <div className="tfc-author-row">
                <div className="tfc-author-meta">
                  <h4 className="tfc-author-name">{activeTestimonial.author}</h4>
                  <p className="tfc-author-title">
                    {activeTestimonial.role} · <strong>{activeTestimonial.company}</strong>
                  </p>
                  <span className="tfc-location">
                    <MapPin size={12} /> {activeTestimonial.location}
                  </span>
                </div>

                <div className="tfc-metric-pill">
                  <CheckCircle2 size={16} />
                  <div>
                    <span className="tmp-val">{activeTestimonial.metric}</span>
                    <span className="tmp-lbl">Verified Impact</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="testimonial-controls">
            <div className="tfc-dots">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`tfc-dot ${activeIndex === idx ? 'is-active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to testimonial slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="tfc-nav-btns">
              <button
                type="button"
                className="tfc-arrow-btn"
                onClick={prevSlide}
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="tfc-counter tabular-nums">
                0{activeIndex + 1} / 0{testimonialsData.length}
              </span>
              <button
                type="button"
                className="tfc-arrow-btn"
                onClick={nextSlide}
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
