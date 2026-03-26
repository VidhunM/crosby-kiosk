import React from 'react';

const IdealWorkspacesSection = () => {
  const workspaceTypes = [
    {
      name: "Startup Hubs",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ws-icon">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      name: "Corporate Coworking Spaces",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ws-icon">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="2" />
          <line x1="15" y1="22" x2="15" y2="2" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="10" x2="20" y2="10" />
          <line x1="4" y1="14" x2="20" y2="14" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      )
    },
    {
      name: "Innovation Centers",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ws-icon">
          <path d="M9 18h6" />
          <path d="M10 22h4" />
          <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
        </svg>
      )
    },
    {
      name: "Incubators & Accelerators",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ws-icon">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      name: "Tech Parks",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ws-icon">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      name: "Freelancer Communities",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ws-icon">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    }
  ];

  return (
    <section id="workspaces" className="ideal-workspaces-section">
      <div className="ws-container">
        <h2>Ideal for These Workspaces</h2>
        <div className="ws-grid">
          {workspaceTypes.map((type, index) => (
            <div key={index} className="ws-item">
              <div className="ws-icon-wrapper">
                {type.icon}
              </div>
              <span className="ws-name">{type.name}</span>
            </div>
          ))}
        </div>
        <div className="ws-tagline">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ws-check">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <p>Transform Your Workspace Into a Business Infrastructure Hub</p>
        </div>
      </div>
    </section>
  );
};

export default IdealWorkspacesSection;
