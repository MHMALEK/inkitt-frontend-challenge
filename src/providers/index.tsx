import React from 'react';
import MainScreen from 'Src/ui/screens/main-screen';
import AppProvider from './app-provider';
import DataProvider from './data-provider';
import ErrorProvider from './error-provider/error-boundary';
import RootProviderProps from './model';

const RootProvider: React.FC<RootProviderProps> = ({ children }) => (
  <DataProvider>
    <AppProvider>
      <ErrorProvider>
        <MainScreen />
      </ErrorProvider>
    </AppProvider>
  </DataProvider>
);

export default RootProvider;
