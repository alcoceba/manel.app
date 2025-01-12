import './Link.scss';

import { IconProps } from '../Icon/Icon';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  icon?: React.FC<IconProps>;
  url: string;
  title: string;
  target?: '_self' | '_blank';
  ariaLabel?: string;
  hoverEffect?: 'hover' | 'none' | 'scale';
  children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({
  children,
  title,
  url,
  icon: Icon,
  target,
  ariaLabel,
  hoverEffect = 'hover',
}) => {
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
  const defaultAriaLabel = title || 'Link icon';

  return (
    <RouterLink
      className={`Link Link--${hoverEffect}`}
      to={url}
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
    </RouterLink>
  );
};

export default Link;
