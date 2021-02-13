import {
  ActionType,
  AddCommentActionPayloadType,
} from './action-type';
import { CommentsActionType } from './action';
export interface CommentsState {
  commentsList: Array<AddCommentActionPayloadType>;
  isPending: boolean;
}

const commentsInitialState: CommentsState = {
  commentsList: [],
  isPending: true,
};

const reducer = (
  state: CommentsState = commentsInitialState,
  action: CommentsActionType,
): CommentsState => {
  switch (action.type) {
    case ActionType.GET_COMMENTS_LIST_ACTION:
      return {
        ...state,
        isPending: true,
      };
    case ActionType.GET_COMMENTS_LIST_FULFILLED_ACTION:
      return {
        ...state,
        isPending: false,
        commentsList: action.payload,
      };
    case ActionType.GET_COMMENTS_LIST_FAILED_ACTION:
      return {
        ...state,
        isPending: false,
      };

    case ActionType.ADD_COMMENT_ACTION:
      return {
        ...state,
        isPending: true,
      };
    case ActionType.ADD_COMMENT_FULFILLED_ACTION:
      return {
        ...state,
        isPending: false,
        commentsList: action.payload,
      };
    case ActionType.ADD_COMMENT_FAILED_ACTION:
      return {
        ...state,
        isPending: false,
      };
    default:
      return state;
  }
};
export default reducer;
