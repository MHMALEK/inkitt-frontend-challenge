import { createContext } from 'react';
import initDataStateType from './model';

const initDataState: initDataStateType = {
  data: '',
};
const DataContext = createContext(initDataState);

const DataContextProvider = DataContext.Provider;

export { DataContextProvider, initDataState };
export default DataContext;
