import React, { useMemo, useReducer } from 'react';
import { Provider } from 'react-redux';
import store from 'Store/index.ts';
import { DataContextProvider, initDataState } from './data-context/context';
import dataReducer from './data-context/reducer';
import DataProviderProps from './model';

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [appState, dispatch] = useReducer(dataReducer, initDataState);
  const dataContext = useMemo(() => [appState, dispatch], [appState]);
  return <Provider store={store}>{children}</Provider>;
};

export default DataProvider;
