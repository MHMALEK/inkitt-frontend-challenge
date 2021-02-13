import {
  createStore,
  combineReducers,
  Store,
  compose,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer, {
  AppState,
} from 'Store/modules/app/reducer';
import commentsReducer, {
  CommentsState,
} from 'Store/modules/comments/reducer';

import sagas from './saga';

export interface State {
  appState: AppState;
  commentsState: CommentsState;
}
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const reducers = combineReducers({
  appState: appReducer,
  commentsState: commentsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store: Store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    (window as Window).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as Window).__REDUX_DEVTOOLS_EXTENSION__()
      : (noop: null) => noop,
  ),
);

sagaMiddleware.run(sagas);
export default store;
