import './Base.scss';

import React from 'react';

interface BaseProps {
  children: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({ children }) => (
  <div className="Base">
    <div className="Base__glow" aria-hidden="true">
      <div className="Base__glowOrb Base__glowOrb--primary" />
      <div className="Base__glowOrb Base__glowOrb--secondary" />
    </div>

    <div className="Base__terminal">
      <div className="Base__terminalBody">
        <div className="Base__content">
          <div className="Base__section">
            {React.isValidElement(children) && children}
          </div>
        </div>
      </div>
    </div>

    <footer className="Base__statusBar">
      <div>
        View the source code on{' '}
        <a
          href="https://github.com/alcoceba/manel.app"
          target="_blank"
          rel="noopener noreferrer"
          title="Go to GitHub repository"
        >
          GitHub
        </a>
        {' • '} Last updated Oct 2026
      </div>
    </footer>
  </div>
);

export default Base;
