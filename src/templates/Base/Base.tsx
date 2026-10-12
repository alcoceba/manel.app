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
  </div>
);

export default Base;
