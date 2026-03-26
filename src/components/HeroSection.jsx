import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
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
            <a href="#partner" className="btn btn-outline btn-large">
              Partner With Crosby Kiosk
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card-stack">
            <div className="hero-card card-1">
              <div className="card-icon">⚖️</div>
              <div className="card-info">
                <h3>Expert Support</h3>
                <p>On-demand legal help</p>
              </div>
            </div>
            <div className="hero-card card-2">
              <div className="card-icon">📄</div>
              <div className="card-info">
                <h3>Drafting</h3>
                <p>Contract review in 24h</p>
              </div>
            </div>
            <div className="hero-card card-3">
              <div className="card-icon">🛡️</div>
              <div className="card-info">
                <h3>Compliance</h3>
                <p>Stay tax & law ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll for more</span>
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default HeroSection;
