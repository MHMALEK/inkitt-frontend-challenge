import { State } from 'Store/index';
const selectCommentsList = (state: State) =>
  state.commentsState.commentsList;

export default selectCommentsList;
