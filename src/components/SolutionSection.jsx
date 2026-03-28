import React from 'react';

const SolutionSection = () => {
  return (
    <section id="solution" className="solution-section">
      <div className="section-container">
        <div className="solution-header">
          <h2 className="section-title">A Smarter Way to Access Legal Support</h2>
          <p className="solution-description">
            Crosby Kiosk is India’s first prepaid legal helpdesk portal designed to make 
            legal services simple, affordable, and instantly accessible.
          </p>
        </div>

        <div className="solution-grid">
          <div className="solution-visual">
            <div className="solution-illustration">
              <div className="kiosk-box">
                <div className="kiosk-header">CROSBY KIOSK</div>
                <div className="kiosk-screen">
                  <div className="screen-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
                    <div className="screen-item-text">
                      <div className="screen-line"></div>
                      <div className="screen-line short"></div>
                    </div>
                  </div>
                  <div className="screen-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
                    <div className="screen-item-text">
                      <div className="screen-line"></div>
                      <div className="screen-line short"></div>
                    </div>
                  </div>
                  <div className="screen-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                    <div className="screen-item-text">
                      <div className="screen-line"></div>
                      <div className="screen-line short"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-elements">
                <div className="el-1">Affordable</div>
                <div className="el-2">Simple</div>
                <div className="el-3">Instant</div>
              </div>
            </div>
          </div>

          <div className="solution-content">
            <p className="solution-highlight">
              Whether you're a startup, MSME, or coworking space, Crosby Kiosk 
              transforms legal from a reactive burden into a proactive business tool.
            </p>
            
            <div className="solution-for">
              <h3>Tailored For:</h3>
              <div className="for-tags">
                <span className="tag">
                  <svg className="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 2.67-2 4.12 0 1.33 1 2.38 2.38 2.38 1.45 0 2.86-.5 4.12-2M18.88 4.89c1.01-1.01 2.53-1 3.54 0s1.01 2.54 0 3.54l-5.32 5.32c-.39.39-.92.61-1.47.61H12.4l-3.32 3.32a.51.51 0 0 1-.72 0l-.7-.7a.51.51 0 0 1 0-.72l3.32-3.32V10.7c0-.55.22-1.09.61-1.48l5.32-5.32c.3-.3.8-.3 1.1 0l.25.25c.3.3.3.8 0 1.1l-5.32 5.32c-.39.39-.92.61-1.47.61h-1.25l-3.32 3.32a.51.51 0 0 1-.72 0l-.7-.7a.51.51 0 0 1 0-.72l3.32-3.32v-1.25c0-.55.22-1.09.61-1.48l5.32-5.32z"/></svg> 
                  Startups
                </span>
                <span className="tag">
                  <svg className="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10l3.1-3.1a2 2 0 0 1 2.9 0L12 11l3.1-3.1a2 2 0 0 1 2.9 0l3 3.1z"/><path d="m17 7-5-5-5 5"/><path d="M12 2v20"/></svg> 
                  MSMEs
                </span>
                <span className="tag">
                  <svg className="tag-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="22" x2="9" y2="22"/><line x1="15" y1="22" x2="15" y2="22"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="16" y2="14"/></svg> 
                  Coworking Spaces
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="solution-footer">
          <div className="brush-stroke-wrapper">
            <p className="closing-line">
              No complexity. No surprises. Just reliable legal support when you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
