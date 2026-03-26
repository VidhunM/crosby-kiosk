import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-grid">
        <div className="about-visual">
           <div className="visual-card">
             <span className="visual-icon">🏛️</span>
             <h3>Crosby Kiosk is a</h3>
             <p>centralized legal support platform available to all coworking members.</p>
           </div>
        </div>
        <div className="about-content">
          <h2>WHAT IS CROSBY KIOSK</h2>
          <ul className="check-list">
            <li><span className="check">✓</span> Contract drafting & review</li>
            <li><span className="check">✓</span> Business compliance guidance</li>
            <li><span className="check">✓</span> Startup legal consultation</li>
            <li><span className="check">✓</span> Employment & HR documentation</li>
            <li><span className="check">✓</span> Dispute and advisory support</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
