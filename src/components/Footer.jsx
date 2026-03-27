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
