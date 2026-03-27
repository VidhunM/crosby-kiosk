import React, { useState } from 'react';

const FinalCTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessType: 'Your Business Type',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your interest! We will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="request-demo" className="final-cta-section">
      <div className="section-container">
        <div className="cta-grid">
          <div className="cta-text">
            <h2 className="section-title">Simplify Legal. Strengthen Your Business.</h2>
            <p className="cta-description">
              Whether you're a startup, MSME, or coworking operator, Crosby Kiosk
              gives you the legal confidence to move faster and grow smarter.
            </p>
            <div className="cta-highlight">
              <h3>India’s First Prepaid Legal Helpdesk Portal, Built for You</h3>
            </div>
          </div>

          <div className="cta-form-container">
            <form className="demo-form" onSubmit={handleSubmit}>
              <h3>Book My Demo</h3>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="businessType">Business Type</label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                >
                  <option value="Your Business Type" disabled>Your Business Type</option>
                  <option value="Startup">Startup</option>
                  <option value="MSME">MSME</option>
                  <option value="Coworking">Coworking Space</option>
                </select>

              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone Number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your needs..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-full btn-with-icon">
                <span>Book My Demo</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="btn-icon">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
