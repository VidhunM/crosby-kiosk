import React from 'react';
import startupIcon from '../assets/start-up.png';
import growthIcon from '../assets/growth.png';
import corporateIcon from '../assets/corporate.png';

const WhoItsForSection = () => {
  const segments = [
    {
      type: "Startups",
      icon: startupIcon,
      benefits: [
        "Scale faster with clarity and confidence",
        "Avoid costly early-stage mistakes",
        "Get instant legal guidance",
        "No need for expensive retainers"
      ]
    },
    {
      type: "MSMEs",
      icon: growthIcon,
      benefits: [
        "Stay compliant without increasing overhead",
        "Manage contracts efficiently",
        "Reduce legal risks",
        "Focus on growth, not paperwork"
      ]
    },
    {
      type: "Coworking Spaces",
      icon: corporateIcon,
      benefits: [
        "Add real value to your ecosystem",
        "Offer built-in legal infrastructure",
        "Increase member retention",
        "Unlock new revenue streams"
      ]
    }
  ];

  return (
    <section className="who-its-for-section">
      <div className="section-container">
        <div className="who-header">
          <h2 className="section-title">Designed for Every Stage of Business</h2>
        </div>
        
        <div className="segments-grid">
          {segments.map((segment, i) => (
            <div key={i} className="segment-card">
              <div className="segment-icon">
                <img src={segment.icon} alt={segment.type} className="segment-png-icon" />
              </div>
              <h3>{segment.type}</h3>
              <ul className="segment-benefits">
                {segment.benefits.map((benefit, j) => (
                  <li key={j}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
