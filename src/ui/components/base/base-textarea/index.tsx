import React from 'react';
// dependencies
import classnames from 'classnames';
// model
import { BaseTextAreaPropsType } from './model';

const BaseTextarea: React.FC<BaseTextAreaPropsType> = ({
  onChange,
  name,
  value,
  className,
  placeholder,
}) => {
  return (
    <textarea
      onChange={onChange}
      name={name}
      value={value}
      placeholder={placeholder}
      className={classnames(className)}
    />
  );
};

export default BaseTextarea;
