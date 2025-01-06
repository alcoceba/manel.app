import './Link.scss';

import { IconProps } from '../Icon/Icon';
import React from 'react';

export interface LinkProps {
  icon?: React.FC<IconProps>;
  url: string;
  title: string;
  target?: '_self' | '_blank';
  ariaLabel?: string;
  hoverEffect?: 'hover' | 'none' | 'scale';
  children?: React.ReactNode;
}

function Link({
  children,
  title,
  url,
  icon: Icon,
  target,
  ariaLabel,
  hoverEffect = 'hover',
}: LinkProps) {
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
  const defaultAriaLabel = title || 'Link icon';

  return (
    <a
      className={`Link Link--${hoverEffect}`}
      href={url}
      title={title}
      target={target}
      rel={rel}
      aria-label={ariaLabel || defaultAriaLabel}
    >
      {Icon && (
        <div className="Link__icon">
          <Icon />
        </div>
      )}
      {children}
    </a>
  );
}

export default Link;
