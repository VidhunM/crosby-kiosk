import heroImage from '../assets/hero_legal_professional.png';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="section-container hero-container">
        <div className="hero-text-content">
          <div className="badge">India’s First Prepaid Legal Helpdesk Portal</div>
          <h1 className="hero-headline">
            Professional Legal Support <br />
            <span className="gradient-text">Built for Growth.</span>
          </h1>
          <h2 className="hero-subheadline">
            For Startups, MSMEs & Coworking Spaces
          </h2>
          <p className="hero-body-copy">
            Get instant access to professional legal support without expensive retainers, 
            complex processes, or long delays. <br />
            <strong>Simple. Transparent. On-demand.</strong>
          </p>
          <div className="hero-cta-group">
            <a href="#request-demo" className="btn btn-primary btn-large">
              Request a Demo
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=crosbylawassociates@gmail.com" 
              className="btn btn-outline btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              Partner With Crosby Kiosk
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <img src={heroImage} alt="Professional Legal Helpdesk" className="hero-main-image" />
            <div className="hero-image-decoration"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
