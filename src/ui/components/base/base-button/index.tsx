import React from 'react';
import classnames from 'classnames';
// styles
import './style.scss';

// model
import { BaseButtonPropsType } from './model';

const BaseButton: React.FC<BaseButtonPropsType> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button
      className={classnames('btn', 'fromBottom')}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default BaseButton;
