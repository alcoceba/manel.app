import './Badge.scss';

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IconType } from 'react-icons';
import Tooltip from '../Tooltip/Tooltip';

interface BadgeProps {
  icon: IconType;
  text: string;
  url?: string;
  target?: '_self' | '_blank';
  title?: string;
  ariaLabel?: string;
  color?: string;
  iconColor?: string;
  size?: 'sm' | 'lg';
  hideText?: boolean;
  showTooltip?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  icon: Icon,
  text,
  url,
  target = '_self',
  title,
  ariaLabel,
  color,
  iconColor,
  size = 'sm',
  hideText = false,
  showTooltip = false,
}) => {
  const rel = target === '_blank' ? 'noopener noreferrer' : undefined;
  const finalIconColor = iconColor || 'var(--badge-icon-color)';

  const badgeContent = (
    <>
      <div className="Badge__icon" style={{ backgroundColor: color }}>
        <Icon size={24} color={finalIconColor} />
      </div>
      {!hideText && (
        <span className="Badge__text" style={{ borderLeftColor: color }}>
          {text}
        </span>
      )}
    </>
  );

  if (url) {
    const badge = (
      <RouterLink
        className={`Badge Badge--anchor Badge--${size}`}
        to={url}
        title={title || text}
        target={target}
        rel={rel}
        aria-label={ariaLabel || text}
      >
        {badgeContent}
      </RouterLink>
    );

    return showTooltip ? <Tooltip text={text}>{badge}</Tooltip> : badge;
  }

  return (
    <div className={`Badge Badge--static Badge--${size}`} title={title}>
      {badgeContent}
    </div>
  );
};

export default Badge;
