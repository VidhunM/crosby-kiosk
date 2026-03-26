import React from 'react';

const ProblemSection = () => {
  const problems = [
    {
      title: "Cost Prohibitive",
      desc: "Startups and MSMEs can’t afford full-time legal teams",
      icon: "💰"
    },
    {
      title: "Expensive Mistakes",
      desc: "Compliance mistakes lead to costly consequences",
      icon: "⚠️"
    },
    {
      title: "Growth Bottleneck",
      desc: "Delays in legal processes slow down growth",
      icon: "🐢"
    },
    {
      title: "Infrastructural Gap",
      desc: "Coworking spaces lack real business infrastructure",
      icon: "🏢"
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
