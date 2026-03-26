import logo from '../assets/logo1.png';

const Footer = () => {
  return (
    <footer className="footer-advanced">
      <div className="section-container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <img src={logo} alt="Crosby Kiosk Logo" className="footer-logo-img" />
            <p className="footer-description">
              India’s first prepaid legal helpdesk portal. Professional legal infrastructure for startups, MSMEs, and coworking spaces.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">LN</a>
              <a href="#" className="social-link" aria-label="Twitter">TW</a>
              <a href="#" className="social-link" aria-label="Instagram">IG</a>
            </div>
          </div>

          <div className="footer-nav-col">
            <h4>Solutions</h4>
            <ul>
              <li><a href="#solution">Startups/MSMEs</a></li>
              <li><a href="#solution">Coworking Spaces</a></li>
              <li><a href="#services">Legal Helpdesk</a></li>
              <li><a href="#services">Compliance</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4>Platform</h4>
            <ul>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#request-demo">Request Demo</a></li>
            </ul>
          </div>

          <div className="footer-nav-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Crosby Law</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Crosby Kiosk. Powered by Crosby Law Associates.
          </div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
