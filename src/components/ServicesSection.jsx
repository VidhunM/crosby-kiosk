import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "On-demand Legal Consultations",
      desc: "Fast advice from experts for your urgent business questions.",
      icon: "⚖️"
    },
    {
      title: "Contract Drafting and Review",
      desc: "Get ironclad agreements and thorough reviews within 24-48 hours.",
      icon: "📄"
    },
    {
      title: "Compliance and Regulatory Guidance",
      desc: "Navigate complex laws and stay ahead of regulatory requirements.",
      icon: "🛡️"
    },
    {
      title: "Startup and Business Advisory",
      desc: "Strategic legal guidance tailored for growth and scalability.",
      icon: "🚀"
    },
    {
      title: "Dispute Resolution Assistance",
      desc: "Expert support to manage and resolve legal conflicts effectively.",
      icon: "🤝"
    },
    {
      title: "Employment and Corporate Law Support",
      desc: "Maintain healthy HR relationships and corporate governance.",
      icon: "🏢"
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
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
