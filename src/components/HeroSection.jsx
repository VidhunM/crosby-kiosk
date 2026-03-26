import React from 'react';

const HeroSection = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero-content">
        <h1>Legal Support<br />Built Into Your<br />Coworking Space</h1>
        <p className="hero-subtitle">
          A centralized legal helpdesk giving startups, freelancers and SMEs instant access to trusted legal services inside their workspace.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Request a Demo</button>
          <button className="btn btn-outline">Become a Coworking Partner</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="kiosk-illustration">
          <div className="kiosk-logo">Crosby Kiosk</div>
          <div className="kiosk-graphics">
            <svg viewBox="0 0 400 300" className="svg-illustration">
              <rect x="50" y="50" width="300" height="200" fill="rgba(232, 245, 233, 0.8)" rx="10" />
              <path d="M100 100 L300 100 L200 50 Z" fill="#2d4a3e" />
              <text x="200" y="160" textAnchor="middle" fill="#2d4a3e" fontSize="40">⚖️</text>
              <text x="200" y="220" textAnchor="middle" fill="#2d4a3e" fontSize="20" fontWeight="bold">Legal Services</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
