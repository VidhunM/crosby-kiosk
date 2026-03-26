import React from 'react';

const ProblemSection = () => {
  const problems = [
    {
      title: "Cost Prohibitive",
      desc: "Startups and MSMEs can’t afford full-time legal teams",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
      )
    },
    {
      title: "Expensive Mistakes",
      desc: "Compliance mistakes lead to costly consequences",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      )
    },
    {
      title: "Growth Bottleneck",
      desc: "Delays in legal processes slow down growth",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M20 12h2"/><path d="M2 12h2"/></svg>
      )
    },
    {
      title: "Infrastructural Gap",
      desc: "Coworking spaces lack real business infrastructure",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="10" width="20" height="12" rx="2"/><path d="M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"/><rect x="9" y="14" width="6" height="4" rx="1"/></svg>
      )
    }
  ];

  return (
    <section className="problem-section">
      <div className="section-container">
        <div className="problem-header">
          <h2 className="section-title">Legal Support is Critical, But Still Out of Reach.</h2>
          <p className="problem-intro">
            For most growing businesses, legal support is either too expensive, 
            too slow, or too complicated.
          </p>
        </div>
        
        <div className="problem-grid">
          {problems.map((p, i) => (
            <div key={i} className="problem-card">
              <div className="problem-icon">{p.icon}</div>
              <div className="problem-card-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="problem-footer">
          <div className="problem-closing-line">
            Legal support exists but not in a way that’s accessible, predictable, or built into your workflow.
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
