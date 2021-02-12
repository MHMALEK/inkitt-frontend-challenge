import { takeEvery } from 'redux-saga/effects';
import { CommentsActionType } from './action';
import { ActionType } from './action-type';

function* bootstrapAppSaga(action: CommentsActionType) {
  yield action;
}

export default [takeEvery(ActionType.GET_COMMENTS_ACTION, bootstrapAppSaga)];
