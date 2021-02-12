import { createStore, combineReducers, Store, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer, { AppState } from 'Store/app/reducer';
import sagas from './saga';

export interface State {
  app: AppState;
}

const reducers = combineReducers({
  app: appReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store: Store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (noop: null) => noop,
  ),
);

sagaMiddleware.run(sagas);
export default store;
