import './Icon.scss';

import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  children?: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({
  size = 20,
  color = '#343a40',
  children,
  ...props
}) => (
  <div className="Icon" style={{ width: size, height: size }}>
    <svg
      width={size}
      height={size}
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  </div>
);

export default Icon;
