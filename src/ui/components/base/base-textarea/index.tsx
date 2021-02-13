import React from 'react';
// model
import { BaseTextAreaPropsType } from './model';

const BaseTextarea: React.FC<BaseTextAreaPropsType> = ({
  onChange,
  name,
  value,
}) => {
  return (
    <textarea
      onChange={onChange}
      name={name}
      value={value}
    />
  );
};

export default BaseTextarea;
