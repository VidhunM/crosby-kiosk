import logo from '../assets/logo1.png';

const Header = () => {
  return (
    <header className="header">
      <div className="section-container">
        <div className="logo-wrapper">
          <a href="#hero">
            <img src={logo} alt="Crosby Kiosk Logo" className="header-logo-img" />
          </a>
        </div>
        <nav className="nav">
          <a href="#solution">Solutions</a>
          <a href="#services">Services</a>
          <a href="#how-it-works">Process</a>
          <a href="#benefits">Benefits</a>
          <a href="#about">About</a>
          <a href="#request-demo" className="btn btn-primary">Request Demo</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
