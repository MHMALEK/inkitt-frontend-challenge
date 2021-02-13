import {
  takeEvery,
  takeLatest,
  put,
  select,
} from 'redux-saga/effects';
import getCommentsFromApiService from 'Src/services/api-call/modules/comments';
import {
  addCommentAction,
  addCommentFailedAction,
  addCommentFulfilledAction,
  CommentsActionType,
  getCommentsFailedAction,
  getCommentsFulfilledAction,
} from './action';
import {
  ActionType,
  AddCommentActionType,
} from './action-type';
import selectCommentsList from './selector';
// immutable helper
import update from 'immutability-helper';
function* getCommentsFromApiSaga() {
  try {
    const res = yield getCommentsFromApiService();
    yield put(getCommentsFulfilledAction(res));
  } catch (e) {
    yield put(getCommentsFailedAction());
  }
}

function* addNewCommentSaga(action: AddCommentActionType) {
  try {
    const currentComments = yield select(
      selectCommentsList,
    );
    const newCollection = update(currentComments, {
      $push: [action.payload],
    });
    yield put(addCommentFulfilledAction(newCollection));
  } catch (e) {
    yield put(addCommentFailedAction());
  }
}

export default [
  takeEvery(
    ActionType.GET_COMMENTS_LIST_ACTION,
    getCommentsFromApiSaga,
  ),
  takeLatest(
    ActionType.ADD_COMMENT_ACTION,
    addNewCommentSaga,
  ),
];
