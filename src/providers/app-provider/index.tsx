import React, { useEffect } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { bootstrapAction } from 'Store/modules/app/action';
// types
import AppProviderTypes from './model';

const AppProvider: React.FC<AppProviderTypes> = ({
  children,
}) => {
  // handle app realted things and ...
  const dispatch = useDispatch();
  useEffect(() => {
    // bootstrap app on saga and handle login/config or etc. it's just for sample
    dispatch(bootstrapAction());
  }, []);
  return <div>{children}</div>;
};

export default AppProvider;
