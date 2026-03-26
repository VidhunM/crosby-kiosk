import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo-container">
        <span className="logo-icon">⚖️</span>
        <span className="logo-text">Crosby Kiosk</span>
      </div>
      <nav className="site-nav">
        <ul className="nav-links">
          <li><a href="#helpdesk">Company</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#workspaces">Workspaces</a></li>
        </ul>
        <div className="nav-actions">
          <button className="btn btn-primary">Join Now</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
