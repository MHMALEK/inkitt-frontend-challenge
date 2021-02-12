import React from 'react';
import DataProvider from './data-provider';
import RootProviderProps from './model';

const RootProvider: React.FC<RootProviderProps> = ({ children }) => <DataProvider>{children}</DataProvider>;

export default RootProvider;
