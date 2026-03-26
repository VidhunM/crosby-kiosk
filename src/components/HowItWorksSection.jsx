import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Coworking Partnership",
      description: "Workspace integrates Crosby Kiosk as a member service.",
      icon: (
        <svg viewBox="0 0 100 100" className="step-illustration">
          <circle cx="50" cy="50" r="40" fill="#f0f4f2" opacity="0.5" />
          <path d="M30 60 L45 75 L75 45" fill="none" stroke="#2d4a3e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M25 55 Q20 50 25 45 L35 35 Q40 30 45 35 L55 45" fill="none" stroke="#2d4a3e" strokeWidth="3" />
          <path d="M75 55 Q80 50 75 45 L65 35 Q60 30 55 35 L45 45" fill="none" stroke="#2d4a3e" strokeWidth="3" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Member Access",
      description: "Members submit legal queries through the portal or kiosk desk.",
      icon: (
        <svg viewBox="0 0 100 100" className="step-illustration">
          <circle cx="50" cy="50" r="40" fill="#f0f4f2" opacity="0.5" />
          <rect x="25" y="35" width="40" height="30" rx="2" fill="none" stroke="#2d4a3e" strokeWidth="3" />
          <rect x="30" y="40" width="30" height="20" fill="#2d4a3e" opacity="0.2" />
          <path d="M45 65 L45 75 M35 75 L55 75" stroke="#2d4a3e" strokeWidth="3" />
          <circle cx="75" cy="65" r="10" fill="none" stroke="#2d4a3e" strokeWidth="3" />
          <path d="M75 60 V70 M70 65 H80" stroke="#2d4a3e" strokeWidth="2" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Legal Support",
      description: "Qualified lawyers provide consultation and documentation support.",
      icon: (
        <svg viewBox="0 0 100 100" className="step-illustration">
          <circle cx="50" cy="50" r="40" fill="#f0f4f2" opacity="0.5" />
          <path d="M30 70 H70 M35 70 V65 H65 V70" fill="none" stroke="#2d4a3e" strokeWidth="4" />
          <rect x="40" y="30" width="20" height="10" transform="rotate(-30 50 35)" fill="#2d4a3e" />
          <rect x="47" y="40" width="6" height="25" transform="rotate(-30 50 45)" fill="#2d4a3e" />
        </svg>
      )
    },
    {
      number: 4,
      title: "Simple Billing",
      description: "Subscription or usage-based pricing.",
      icon: (
        <svg viewBox="0 0 100 100" className="step-illustration">
          <circle cx="50" cy="50" r="40" fill="#f0f4f2" opacity="0.5" />
          <rect x="35" y="25" width="30" height="40" rx="2" fill="none" stroke="#2d4a3e" strokeWidth="3" />
          <path d="M42 35 H58 M42 45 H58 M42 55 H50" stroke="#2d4a3e" strokeWidth="2" />
          <circle cx="65" cy="70" r="12" fill="#2d4a3e" />
          <text x="65" y="75" textAnchor="middle" fill="white" style={{ fontSize: '12px', fontWeight: 'bold' }}>$</text>
        </svg>
      )
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="hiw-container">
        <h2>How It Works</h2>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="hiw-step">
              <div className="hiw-visual">
                <div className="hiw-number">{step.number}</div>
                {step.icon}
              </div>
              <div className="hiw-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
