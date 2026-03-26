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
      number: "1",
      title: "Access Crosby Kiosk",
      desc: "Start via your coworking space or directly as a business",
      icon: "🏢"
    },
    {
      number: "2",
      title: "Submit Your Request",
      desc: "Raise your legal queries or service needs in minutes",
      icon: "📝"
    },
    {
      number: "3",
      title: "Get Expert Support",
      desc: "Our legal professionals handle your request efficiently",
      icon: "⚖️"
    },
    {
      number: "4",
      title: "Pay Transparently",
      desc: "Choose prepaid plans or pay per use—no surprises",
      icon: "💳"
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="section-container">
        <div className="how-header">
          <h2 className="section-title">Legal Help, Simplified</h2>
          <p className="how-intro">Our workflow is designed for speed and clarity.</p>
        </div>
        
        <div className="how-timeline">
          {steps.map((step, i) => (
            <div key={i} className="how-step">
              <div className="step-badge">
                <span className="step-num">{step.number}</span>
              </div>
              <div className="step-visual">{step.icon}</div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {i < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
