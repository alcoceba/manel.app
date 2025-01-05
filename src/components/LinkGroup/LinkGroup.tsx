import './LinkGroup.scss';

import React from 'react';

export enum Type {
    HORIZONTAL = 'horizontal',
    VERTICAL = 'vertical',
}

interface LinkGroupProps {
    children: React.ReactNode[];
    type?: Type,
}

function LinkGroup({ type = Type.HORIZONTAL, children }: LinkGroupProps) {
    return (
        <div className={`LinkGroup LinkGroup__${type}`}>
            {children.filter(React.isValidElement).map(
                (child) => <div className="LinkGroup__element">{child}</div>
            )}
        </div>
    );
}

export default LinkGroup;
