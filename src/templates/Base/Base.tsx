import './Base.scss';

import Link from '../../components/Link/Link';
import React from 'react';

export interface BaseProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({ children }) => (
  <div className="Base">
    <div className="Base__content">
      <div className="Base__section">
        {React.isValidElement(children) && children}
      </div>

      <footer>
        View the source code of this site on{' '}
        <Link
          title="Go to GitHub repository"
          url="https://github.com/alcoceba/manel.app"
          target="_blank"
        >
          GitHub
        </Link>
        <br />
        Last updated on Jan 2025
      </footer>
    </div>
  </div>
);

export default Base;
