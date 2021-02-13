import { takeEvery } from 'redux-saga/effects';
import { ActionType } from './action-type';
import { AppActionType } from './action';

function* bootstrapAppSaga(action: AppActionType) {
  // add some actions for start of the app
  yield action;
}

export default [
  takeEvery(
    ActionType.BOOTSRAP_APP_ACTION,
    bootstrapAppSaga,
  ),
];
