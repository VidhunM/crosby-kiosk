import { useState } from 'react';
import logo from '../assets/logo1.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="section-container">
        <div className="logo-wrapper">
          <a href="#hero">
            <img src={logo} alt="Crosby Kiosk Logo" className="header-logo-img" />
          </a>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#solution" onClick={() => setIsMenuOpen(false)}>Solutions</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>Process</a>
          <a href="#benefits" onClick={() => setIsMenuOpen(false)}>Benefits</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#request-demo" className="btn btn-primary btn-nav" onClick={() => setIsMenuOpen(false)}>Request Demo</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
