import React from 'react';

const WhyCrosbyKioskSection = () => {
  return (
    <section className="why-crosby-section">
      <div className="section-container">
        <div className="why-header">
          <h2 className="section-title">More Than a Service—A Legal Infrastructure Layer</h2>
          <p className="why-intro">
            Traditional legal models weren’t built for speed or scalability.
          </p>
        </div>
        
        <div className="why-comparison">
          <div className="comparison-card traditional">
            <h3>What You’re Used To:</h3>
            <ul className="comparison-list">
              <li><span>❌</span> Expensive retainers</li>
              <li><span>❌</span> Unpredictable billing</li>
              <li><span>❌</span> Slow response times</li>
              <li><span>❌</span> Complex onboarding</li>
            </ul>
          </div>
          
          <div className="comparison-card crosby">
            <h3>What You Get With Crosby Kiosk:</h3>
            <ul className="comparison-list">
              <li><span>✅</span> Prepaid, transparent pricing</li>
              <li><span>✅</span> Instant access to legal support</li>
              <li><span>✅</span> Seamless integration into your workflow</li>
              <li><span>✅</span> Scalable for any business size</li>
            </ul>
          </div>
        </div>
        
        <div className="why-footer">
          <p className="closing-line">
            With Crosby Kiosk, legal becomes a growth enabler—not a bottleneck.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyCrosbyKioskSection;
