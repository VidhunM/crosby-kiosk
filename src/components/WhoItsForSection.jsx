import React from 'react';

const WhoItsForSection = () => {
  const segments = [
    {
      type: "Startups",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4.5 16.5c-1.5 1.26-2 2.67-2 4.12 0 1.33 1 2.38 2.38 2.38 1.45 0 2.86-.5 4.12-2"/><path d="M18.4 4.15a2 2 0 0 0-2.83 0l-8.88 8.88a1 1 0 0 0 0 1.41l2.12 2.12a1 1 0 0 0 1.41 0l8.88-8.88a2 2 0 0 0 0-2.83Z"/><path d="M9.58 8.97 12 11.39"/><path d="M15.54 5.76 17.96 8.18"/></svg>
      ),
      benefits: [
        "Scale faster with clarity and confidence",
        "Avoid costly early-stage mistakes",
        "Get instant legal guidance",
        "No need for expensive retainers"
      ]
    },
    {
      type: "MSMEs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
      ),
      benefits: [
        "Stay compliant without increasing overhead",
        "Manage contracts efficiently",
        "Reduce legal risks",
        "Focus on growth, not paperwork"
      ]
    },
    {
      type: "Coworking Spaces",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
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
              <div className="segment-icon">{segment.icon}</div>
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
