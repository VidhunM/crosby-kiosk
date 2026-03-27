import helpdeskLogo from '../assets/helpdesk_logo.png';

const AboutSection = () => {
  const expertise = [
    "Corporate law",
    "Employment law",
    "Dispute resolution",
    "Regulatory compliance"
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="legal-seal">
              <div className="seal-inner">
                <img src={helpdeskLogo} alt="Crosby Law Associates" className="seal-logo" />
                <span className="seal-text">Crosby Law Associates</span>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <h2 className="section-title">Backed by Real Legal Expertise – “Crosby Law Associates”</h2>
            <p className="about-description">
              Crosby Kiosk is powered by experienced legal professionals who understand business realities. 
              We bring years of practical experience to every request.
            </p>
            
            <div className="expertise-list">
              <h3>Our expertise includes:</h3>
              <div className="expertise-grid">
                { expertise.map((item, i) => (
                  <div key={i} className="expertise-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="expertise-check">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <p className="about-closing">
              Practical, reliable, and business-focused—every step of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
