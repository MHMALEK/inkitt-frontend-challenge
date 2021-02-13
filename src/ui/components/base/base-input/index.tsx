import React from 'react';

// model
import { BaseInputPropsType } from './model';

const BaseInput: React.FC<BaseInputPropsType> = ({
  onChange,
  name,
  value,
}) => {
  return (
    <input onChange={onChange} name={name} value={value} />
  );
};

export default BaseInput;
