import { takeEvery } from 'redux-saga/effects';
import { ActionType } from './action-type';
import { AppActionType } from './action';

function* bootstrapAppSaga(action: AppActionType) {
  yield action;
}

export default [takeEvery(ActionType.BOOTSRAP_APP_ACTION, bootstrapAppSaga)];
