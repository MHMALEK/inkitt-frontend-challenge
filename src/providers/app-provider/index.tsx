import React from 'react';
import AppProviderTypes from './mode';

const AppProvider: React.FC<AppProviderTypes> = ({ children }) => {
  // handle app realted things and ...
  return <div>{children}</div>;
};

export default AppProvider;
