import './Tooltip.scss';

import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = 'top',
}) => {
  return (
    <div className={`Tooltip Tooltip--${position}`}>
      {children}
      <span className="Tooltip__content">{text}</span>
    </div>
  );
};

export default Tooltip;
