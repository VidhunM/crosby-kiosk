import React from 'react';

const PlatformFeaturesSection = () => {
  const features = [
    {
      title: "Ready-to-use Legal Templates",
      desc: "Instant access to professionally drafted documents.",
      icon: "📋"
    },
    {
      title: "Secure Document Storage",
      desc: "Cloud-based hosting for all your legal paperwork.",
      icon: "🔒"
    },
    {
      title: "Compliance Alerts and Reminders",
      desc: "Never miss a deadline or regulatory change.",
      icon: "🔔"
    },
    {
      title: "Dedicated Helpdesk with Fast Turnaround",
      desc: "Get support within minutes, not days.",
      icon: "🎧"
    },
    {
      title: "Prepaid Pricing with Zero Hidden Costs",
      desc: "Transparent model that works for your budget.",
      icon: "💳"
    }
  ];

  return (
    <section className="features-section">
      <div className="section-container">
        <div className="features-header">
          <h2 className="section-title">Built for Speed, Simplicity & Control</h2>
          <p className="features-intro">
            Our platform is designed to make managing legal effortless.
          </p>
        </div>
        
        <div className="features-content">
          <div className="features-list">
            {features.map((feature, i) => (
              <div key={i} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="features-visual">
            <div className="platform-mockup">
              <div className="mockup-header">
                <div className="search-bar"></div>
                <div className="user-icon"></div>
              </div>
              <div className="mockup-sidebar">
                <div className="sidebar-item active"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
              </div>
              <div className="mockup-body">
                <div className="body-card"></div>
                <div className="body-card"></div>
                <div className="body-grid">
                  <div className="grid-item"></div>
                  <div className="grid-item"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeaturesSection;
