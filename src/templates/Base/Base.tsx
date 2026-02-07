import './Base.scss';

import Link from '../../components/Link/Link';
import React from 'react';

interface BaseProps extends React.SVGProps<SVGSVGElement> {
  children: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({ children }) => (
  <div className="Base">
    <div className="Base__content">
      <div className="Base__section">
        {React.isValidElement(children) && children}
      </div>

      <footer>
        <div>
          View the source code on{' '}
          <Link
            title="Go to GitHub repository"
            url="https://github.com/alcoceba/manel.app"
            target="_blank"
          >
            GitHub
          </Link>
          {' • '} Last updated Feb 2026
        </div>
      </footer>
    </div>
  </div>
);

export default Base;
