import React from 'react';
import { Provider } from 'react-redux';
import store from 'Store/index.ts';

import DataProviderProps from './model';

const DataProvider: React.FC<DataProviderProps> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;
