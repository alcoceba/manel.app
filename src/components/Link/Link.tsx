import './Link.scss';

import React from 'react';

export interface LinkProps {
    url: string;
    title: string;
    target?: "_self" | "_blank";
    ariaLabel?: string;
    hoverEffect?: "hover" | "none" | "scale";
    children?: React.ReactNode;

}

function Link({ children, title, url, target, ariaLabel, hoverEffect }: LinkProps) {
    const rel = target === "_blank" ? "noopener noreferrer" : undefined;
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
            {children}
        </a>
    );
}

export default Link;
