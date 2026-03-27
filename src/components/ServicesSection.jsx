import React from 'react';
import civilRightsIcon from '../assets/civil-rights.png';
import contractIcon from '../assets/icons8-contract-50.png';
import compliantIcon from '../assets/compliant.png';
import startupIcon from '../assets/start-up.png';
import hammerIcon from '../assets/hammer.png';
import corporateIcon from '../assets/corporate.png';

const ServicesSection = () => {
  const services = [
    {
      title: "On-demand Legal Consultations",
      icon: civilRightsIcon
    },
    {
      title: "Contract Drafting and Review",
      icon: contractIcon
    },
    {
      title: "Compliance and Regulatory Guidance",
      icon: compliantIcon
    },
    {
      title: "Startup and Business Advisory",
      icon: startupIcon
    },
    {
      title: "Dispute Resolution Assistance",
      icon: hammerIcon
    },
    {
      title: "Employment and Corporate Law Support",
      icon: corporateIcon
    }
  ];

  return (
    <section id="services" className="services-section">
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
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
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
