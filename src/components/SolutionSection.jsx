import React from 'react';

const SolutionSection = () => {
  return (
    <section className="solution-section">
      <div className="section-container">
        <div className="solution-grid">
          <div className="solution-content">
            <h2 className="section-title">A Smarter Way to Access Legal Support</h2>
            <p className="solution-description">
              Crosby Kiosk is India’s first prepaid legal helpdesk portal designed to make 
              legal services simple, affordable, and instantly accessible.
            </p>
            <p className="solution-highlight">
              Whether you're a startup, MSME, or coworking space, Crosby Kiosk 
              transforms legal from a reactive burden into a proactive business tool.
            </p>
            
            <div className="solution-for">
              <h3>Tailored For:</h3>
              <div className="for-tags">
                <span className="tag">🚀 Startups</span>
                <span className="tag">🏭 MSMEs</span>
                <span className="tag">🏢 Coworking Spaces</span>
              </div>
            </div>

            <div className="solution-footer">
              <p className="closing-line">
                No complexity. No surprises. Just reliable legal support when you need it.
              </p>
            </div>
          </div>
          
          <div className="solution-visual">
            <div className="solution-illustration">
              <div className="kiosk-box">
                <div className="kiosk-header">CROSBY KIOSK</div>
                <div className="kiosk-screen">
                  <div className="screen-line"></div>
                  <div className="screen-line"></div>
                  <div className="screen-line short"></div>
                </div>
                <div className="kiosk-icons">
                  <span>⚖️</span>
                  <span>📄</span>
                  <span>🛡️</span>
                </div>
              </div>
              <div className="floating-elements">
                <div className="el-1">Affordable</div>
                <div className="el-2">Simple</div>
                <div className="el-3">Instant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
