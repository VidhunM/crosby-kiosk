import React from 'react';

const ProblemSection = () => {
  const sectionStyle = {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#fff',
    backgroundImage: `url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop')`,
    backgroundSize: '40% auto',
    backgroundPosition: 'right bottom',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="problem-section-horizontal" style={sectionStyle}>
      <h2 className="problem-header-text">MODERN BUSINESSES NEED LEGAL SUPPORT — BUT RARELY HAVE IT</h2>

      <div className="problem-items-container">
        <div className="problem-card-mini">
          <span className="warning-icon">⚠️</span>
          <div className="problem-card-text">
            <strong>Startups cannot afford</strong>
            <p>full-time legal teams.</p>
          </div>
        </div>

        <div className="problem-card-mini">
          <span className="warning-icon">⚠️</span>
          <div className="problem-card-text">
            <strong>Compliance mistakes</strong>
            <p>become expensive</p>
          </div>
        </div>

        <div className="problem-card-mini">
          <span className="warning-icon">⚠️</span>
          <div className="problem-card-text">
            <strong>Legal documentation</strong>
            <p>slows execution</p>
          </div>
        </div>
      </div>

      <div className="problem-footer-line">
        <span className="dot-marker"></span>
        <p>Crosby Kiosk embeds legal support directly into the workspace.</p>
      </div>

      {/* Subtle overlay to fade the background image */}
      <div className="bg-fade-overlay"></div>
    </section>
  );
};

export default ProblemSection;
