import './LinkGroup.scss';

import React from 'react';

interface LinkGroupProps {
  children: React.ReactNode[];
  type?: 'horizontal' | 'vertical';
}

function LinkGroup({ type = 'horizontal', children }: LinkGroupProps) {
  return (
    <div className={`LinkGroup LinkGroup__${type}`}>
      {children.filter(React.isValidElement)}
    </div>
  );
}

export default LinkGroup;
