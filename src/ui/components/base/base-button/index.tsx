import React from 'react';

// model
import { BaseButtonPropsType } from './model';

const BaseButton: React.FC<BaseButtonPropsType> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default BaseButton;
