import './LinkGroup.scss';

import React from 'react';

interface LinkGroupProps {
  children: React.ReactNode[];
  type?: 'horizontal' | 'vertical';
}

const LinkGroup: React.FC<LinkGroupProps> = ({
  type = 'horizontal',
  children,
}: LinkGroupProps) => (
  <div className={`LinkGroup LinkGroup__${type}`}>
    {children.filter(React.isValidElement)}
  </div>
);

export default LinkGroup;
