import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "On-demand Legal Consultations",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      )
    },
    {
      title: "Contract Drafting and Review",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
      )
    },
    {
      title: "Compliance and Regulatory Guidance",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
      )
    },
    {
      title: "Startup and Business Advisory",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
      )
    },
    {
      title: "Dispute Resolution Assistance",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m14 13-5 5a1 1 0 0 1-1.4 0L4 14.4a1 1 0 0 1 0-1.4l5-5"/><path d="m16 16 3-3a1 1 0 0 0 0-1.4l-4.6-4.6a1 1 0 0 0-1.4 0L10 10"/><path d="m7 7 3-3a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4L13 13"/><path d="m2 21 8-8"/></svg>
      )
    },
    {
      title: "Employment and Corporate Law Support",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      )
    }
  ];

  return (
    <section className="services-section">
      <div className="section-container">
        <div className="services-header">
          <h2 className="section-title">Everything You Need All in One Place</h2>
          <p className="services-intro">
            Access end-to-end legal support tailored for modern businesses.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3>{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
