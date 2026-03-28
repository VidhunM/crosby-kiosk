import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Access Crosby Kiosk",
      desc: "Start via your coworking space or directly as a business",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01"/></svg>
      )
    },
    {
      number: 2,
      title: "Submit Your Request",
      desc: "Raise your legal queries or service needs in minutes",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      )
    },
    {
      number: 3,
      title: "Get Expert Support",
      desc: "Our legal professionals handle your request efficiently",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m14 13-5 5a1 1 0 0 1-1.4 0L4 14.4a1 1 0 0 1 0-1.4l5-5"/><path d="m16 16 3-3a1 1 0 0 0 0-1.4l-4.6-4.6a1 1 0 0 0-1.4 0L10 10"/><path d="m7 7 3-3a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4L13 13"/><path d="m2 21 8-8"/></svg>
      )
    },
    {
      number: 4,
      title: "Pay Transparently",
      desc: "Choose prepaid plans or pay per use, no surprises",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
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
                <p className="step-desc">{step.desc}</p>
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
