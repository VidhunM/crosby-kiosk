import React from 'react';

const BenefitsSection = () => {
  const businessBenefits = [
    { 
      title: "Affordable legal access", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
      )
    },
    { 
      title: "Reduced compliance risk", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
      )
    },
    { 
      title: "Faster decisions and execution", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
      )
    },
    { 
      title: "Direct access to experts", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
      )
    },
    { 
      title: "Organized legal management", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/></svg>
      )
    }
  ];

  const coworkingBenefits = [
    { 
      title: "Higher member retention", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
      )
    },
    { 
      title: "Strong market differentiation", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
      )
    },
    { 
      title: "Recurring revenue opportunities", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
      )
    },
    { 
      title: "No need for in-house legal teams", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="22" y1="19" x2="16" y2="19"/></svg>
      )
    },
    { 
      title: "Simplified service delivery", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>
      )
    },
    { 
      title: "Reduced liability", 
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      )
    }
  ];

  return (
    <section id="benefits" className="benefits-section">
      <div className="section-container">
        <h2 className="section-title centered">Real Value for Every Partner</h2>
        
        <div className="benefits-split">
          <div className="benefits-column startups-msmes">
            <h3>For Startups & MSMEs</h3>
            <div className="benefits-grid">
              {businessBenefits.map((b, i) => (
                <div key={i} className="benefit-card">
                  <span className="benefit-icon">{b.icon}</span>
                  <span className="benefit-title">{b.title}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="benefits-column coworking">
            <h3>For Coworking Partners</h3>
            <div className="benefits-grid">
              {coworkingBenefits.map((b, i) => (
                <div key={i} className="benefit-card">
                  <span className="benefit-icon">{b.icon}</span>
                  <span className="benefit-title">{b.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
