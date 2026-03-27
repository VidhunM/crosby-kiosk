import React from 'react';
import dashboardMockup from '../assets/legal_platform_dashboard_mockup.png';

const PlatformFeaturesSection = () => {
  const features = [
    {
      title: "Ready-to-use Legal Templates",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
      )
    },
    {
      title: "Secure Document Storage",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      )
    },
    {
      title: "Compliance Alerts and Reminders",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      )
    },
    {
      title: "Dedicated Helpdesk with Fast Turnaround",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>
      )
    },
    {
      title: "Prepaid Pricing with Zero Hidden Costs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
      )
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
                </div>
              </div>
            ))}
          </div>
          
          <div className="features-visual">
            <div className="platform-mockup-wrapper">
              <img 
                src={dashboardMockup} 
                alt="Crosby Kiosk Dashboard Mockup" 
                className="dashboard-image"
              />
              <div className="mockup-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeaturesSection;
