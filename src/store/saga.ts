import { all } from 'redux-saga/effects';
import AppSaga from 'Store/modules/app/saga';
import CommentsSaga from 'Store/modules/comments/saga';

export default function* sagas() {
  yield all([...AppSaga, ...CommentsSaga]);
}
