import React from 'react';

const WhyCrosbyKioskSection = () => {
  return (
    <section className="why-crosby-section">
      <div className="section-container">
        <div className="why-header">
          <h2 className="section-title">More Than a Service, a Legal Infrastructure Layer</h2>
          <p className="why-intro">
            Traditional legal models weren’t built for speed or scalability.
          </p>
        </div>

        <div className="why-comparison">
          <div className="comparison-card traditional">
            <h3>What You’re Used To:</h3>
            <ul className="comparison-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6M9 9l6 6" /></svg>
                Expensive retainers
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6M9 9l6 6" /></svg>
                Unpredictable billing
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6M9 9l6 6" /></svg>
                Slow response times
              </li>

            </ul>
          </div>

          <div className="comparison-card crosby">
            <h3>What You Get With Crosby Kiosk:</h3>
            <ul className="comparison-list">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                Prepaid, transparent pricing
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                Instant access to legal support
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
                Seamless integration into your workflow
              </li>

            </ul>
          </div>
        </div>

        <div className="why-footer">
          <p className="closing-line">
            With Crosby Kiosk, legal becomes a growth enabler, not a bottleneck.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyCrosbyKioskSection;
