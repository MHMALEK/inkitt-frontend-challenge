import React from 'react';
import AppProvider from './app-provider';
import DataProvider from './data-provider';
import ErrorProvider from './error-provider/error-boundary';
import RootProviderProps from './model';

const RootProvider: React.FC<RootProviderProps> = ({ children }) => (
  <DataProvider>
    <AppProvider>
      <ErrorProvider>{children}</ErrorProvider>
    </AppProvider>
  </DataProvider>
);

export default RootProvider;
