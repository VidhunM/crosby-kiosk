import React from 'react';

const BenefitsSection = () => {
  const businessBenefits = [
    { title: "Affordable legal access", icon: "⚖️" },
    { title: "Reduced compliance risk", icon: "🛡️" },
    { title: "Faster decisions and execution", icon: "⚡" },
    { title: "Direct access to experts", icon: "👩‍⚖️" },
    { title: "Organized legal management", icon: "📂" }
  ];

  const coworkingBenefits = [
    { title: "Higher member retention", icon: "📈" },
    { title: "Strong market differentiation", icon: "🏆" },
    { title: "Recurring revenue opportunities", icon: "💰" },
    { title: "No need for in-house legal teams", icon: "⚙️" },
    { title: "Simplified service delivery", icon: "📑" },
    { title: "Reduced liability", icon: "🛡️" }
  ];

  return (
    <section className="benefits-section">
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
