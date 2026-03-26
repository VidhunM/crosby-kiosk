import React from 'react';

// Simple SVG Icon Component
const Icon = ({ name, className }) => {
  const icons = {
    scale: <path d="M16 16 23 16M2 16 9 16M7 16 12 5 17 16M12 5V21M7 16H17M4 21H20" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    bolt: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
    user: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />,
    gift: <><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></>,
    trendingUp: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
    award: <><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></>,
    dollar: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
    fileText: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></>
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`svg-icon ${className}`}
    >
      {icons[name]}
    </svg>
  );
};

// Composite Kiosk Icon
const KioskGraphic = () => (
  <svg viewBox="0 0 100 80" className="kiosk-graphic-svg">
    {/* Kiosk Structure */}
    <path d="M10 70 L10 30 L50 10 L90 30 L90 70 Z" fill="#f0f4f2" stroke="#2D5A41" strokeWidth="2" />
    <rect x="20" y="40" width="60" height="30" fill="white" stroke="#2D5A41" strokeWidth="2" />
    {/* Law Scale */}
    <g transform="translate(50, 55) scale(0.8)">
      <path d="M-15 0 L15 0" stroke="#2D5A41" strokeWidth="2" />
      <path d="M0 -15 L0 15" stroke="#2D5A41" strokeWidth="2" />
      <circle cx="-15" cy="5" r="5" stroke="#2D5A41" strokeWidth="2" fill="none" />
      <circle cx="15" cy="5" r="5" stroke="#2D5A41" strokeWidth="2" fill="none" />
    </g>
    {/* Document */}
    <rect x="25" y="45" width="15" height="20" rx="2" stroke="#2D5A41" strokeWidth="1.5" fill="none" />
    <line x1="28" y1="50" x2="37" y2="50" stroke="#2D5A41" strokeWidth="1" />
    <line x1="28" y1="55" x2="37" y2="55" stroke="#2D5A41" strokeWidth="1" />
  </svg>
);

const InfoGridSection = () => {
  return (
    <section className="info-grid-section">
      <div className="info-grid-container">
        {/* Quadrant 1: About */}
        <div className="quadrant quadrant-light about-quad">
          <h2 className="quad-title">WHAT IS CROSBY KIOSK</h2>
          <div className="about-content">
            <div className="about-intro">
              <div className="kiosk-graphic-container">
                <KioskGraphic />
              </div>
              <p><strong>Crosby Kiosk is a</strong> centralized legal support platform available to all coworking members.</p>
            </div>
            <ul className="check-list-large">
              <li><span className="check-mark">✓</span> Contract drafting & review</li>
              <li><span className="check-mark">✓</span> Business compliance guidance</li>
              <li><span className="check-mark">✓</span> Startup legal consultation</li>
              <li><span className="check-mark">✓</span> Employment & HR documentation</li>
              <li><span className="check-mark">✓</span> Dispute and advisory support</li>
            </ul>
          </div>
        </div>

        {/* Quadrant 2: How It Works */}
        <div className="quadrant quadrant-dark how-quad">
          <h2 className="quad-title">HOW IT WORKS</h2>
          <div className="steps-container">
            <div className="step-item-mini">
              <span className="step-number">1</span>
              <div>
                <strong>Coworking Partnership</strong>
                <p>Workspace integrates Crosby Kiosk.</p>
              </div>
            </div>
            <div className="step-item-mini">
              <span className="step-number">2</span>
              <div>
                <strong>Member Access</strong>
                <p>Members submit queries through the portal or helpdesk.</p>
              </div>
            </div>
            <div className="step-item-mini">
              <span className="step-number">3</span>
              <div>
                <strong>Legal Support</strong>
                <p>Qualified lawyers provide guidance and documentation.</p>
              </div>
            </div>
            <div className="step-item-mini">
              <span className="step-number">4</span>
              <div>
                <strong>Simple Billing</strong>
                <p>Subscription or usage-based service model.</p>
              </div>
            </div>
          </div>
          <button className="btn btn-secondary partner-btn">Partner With Crosby Kiosk</button>
        </div>

        {/* Quadrant 3: Members */}
        <div className="quadrant quadrant-light members-quad">
          <h2 className="quad-title">FOR COWORKING MEMBERS</h2>
          <div className="benefits-list-mini">
            <div className="benefit-item-mini">
              <Icon name="scale" className="benefit-icon" />
              <strong>Lower Legal Costs</strong>
            </div>
            <div className="benefit-item-mini">
              <Icon name="shield" className="benefit-icon" />
              <strong>Reduced Compliance Risk</strong>
            </div>
            <div className="benefit-item-mini">
              <Icon name="bolt" className="benefit-icon" />
              <strong>Faster Execution</strong>
            </div>
            <div className="benefit-item-mini">
              <Icon name="user" className="benefit-icon" />
              <strong>Lawyer Access Without Intimidation</strong>
            </div>
            <div className="benefit-item-mini">
              <Icon name="gift" className="benefit-icon" />
              <strong>A Real Member Benefit - Not a Vanity Amenity</strong>
            </div>
          </div>
          <div className="quote-badge">
            <p>Transform your workspace into a business infrastructure hub.</p>
          </div>
        </div>

        {/* Quadrant 4: Operators */}
        <div className="quadrant quadrant-dark operators-quad">
          <h2 className="quad-title">FOR COWORKING SPACE OPERATORS</h2>
          <div className="benefits-list-mini">
            <div className="benefit-item-mini">
              <Icon name="trendingUp" className="benefit-icon" />
              <strong>Higher Member Retention</strong>
            </div>
            <div className="benefit-item-mini">
              <Icon name="award" className="benefit-icon" />
              <strong>Workspace Differentiation</strong>
            </div>
            <div className="benefit-item-mini">
              <Icon name="dollar" className="benefit-icon" />
              <strong>Additional Recurring Revenue</strong>
            </div>
            <div className="benefit-item-mini">
              <Icon name="settings" className="benefit-icon" />
              <strong>Zero Legal Hiring Cost</strong>
            </div>
            <div className="benefit-item-mini">
              <Icon name="fileText" className="benefit-icon" />
              <strong>Single Bill Convenience</strong>
            </div>
            <div className="benefit-item-mini">
              <Icon name="shield" className="benefit-icon" />
              <strong>Insurance-backed legal support.</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoGridSection;
