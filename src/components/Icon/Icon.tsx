import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
    children?: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', children, ...props }) => (
    <svg
        width={size}
        height={size}
        fill={color}
        stroke={color}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        {children}
    </svg>
);

export default Icon;
