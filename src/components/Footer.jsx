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

          <div className="footer-contact-col">
            <div className="contact-item">
              <div className="contact-header">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <h4>Address</h4>
              </div>
              <p>6th Floor, Centre Point, 2/4, Mount Poonamallee High Road, Manapakkam, Porur, Chennai, Tamil Nadu 600089.</p>
            </div>
            
            <div className="contact-item">
              <div className="contact-header">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <h4>Phone No</h4>
              </div>
              <p>+91-9677883855 | +91-9677873855</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Crosby Kiosk. product of Crosby Law Associates.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
