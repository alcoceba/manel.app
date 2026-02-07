import './Card.scss';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'highlight';
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  return <div className={`Card Card--${variant} ${className}`}>{children}</div>;
};

export default Card;
