import './Breadcrumbs.scss';

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="Breadcrumbs" aria-label="Breadcrumb">
      <ol className="Breadcrumbs__list">
        {items.map((item, index) => (
          <li key={index} className="Breadcrumbs__item">
            {item.url ? (
              <>
                <RouterLink to={item.url} className="Breadcrumbs__link">
                  {item.label}
                </RouterLink>
                {index < items.length - 1 && (
                  <span className="Breadcrumbs__separator">/</span>
                )}
              </>
            ) : (
              <>
                <span className="Breadcrumbs__text">{item.label}</span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
