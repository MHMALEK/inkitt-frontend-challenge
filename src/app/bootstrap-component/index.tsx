import { hot } from 'react-hot-loader/root';
import React from 'react';
import RootProvider from 'Providers/index';

const BootstrapApp = () => {
  return (
    <RootProvider>
      <p>salam</p>
    </RootProvider>
  );
};
export default hot(BootstrapApp);
