import React from 'react';

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo-container">
        <span className="logo-icon">⚖️</span>
        <span className="logo-text">Crosby Kiosk</span>
      </div>
      <nav className="site-nav">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-primary">Join Now</button>
      </nav>
    </header>
  );
};

export default Header;
