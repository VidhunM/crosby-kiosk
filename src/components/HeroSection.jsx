import React, { useState } from 'react';
import heroImage from '../assets/hero_legal_professional.png';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "crosbylawassociates@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="section-container hero-container">
        <div className="hero-text-content">
          <div className="badge">India’s First Prepaid Legal Helpdesk Portal</div>
          <h1 className="hero-headline">
            Professional Legal Support <br />
            <span className="gradient-text">Built for Growth.</span>
          </h1>
          <h2 className="hero-subheadline">
            For Startups, MSMEs & Coworking Spaces
          </h2>
          <p className="hero-body-copy">
            Get instant access to professional legal support without expensive retainers, 
            complex processes, or long delays. <br />
            <strong>Simple. Transparent. On-demand.</strong>
          </p>
          <div className="hero-cta-group">
            <a href="#request-demo" className="btn btn-primary btn-large">
              Request a Demo
            </a>
            <button 
              onClick={() => setShowModal(true)}
              className="btn btn-outline btn-large"
            >
              Partner With Crosby Kiosk
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src={heroImage} alt="Professional Legal Helpdesk" className="hero-main-image" />
            <div className="hero-image-decoration"></div>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
            <h3>Partner With Us</h3>
            <p className="modal-info">Reach out to our team directly via email:</p>
            <div className="email-display-card">
              <code>{email}</code>
              <button 
                className={`copy-btn ${copied ? 'copied' : ''}`} 
                onClick={handleCopy}
              >
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>
            <p className="modal-note">We typically respond within 12-24 hours.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
