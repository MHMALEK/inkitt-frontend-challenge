import { ActionType } from './action-type';
import { CommentsActionType } from './action';

export interface CommentsState {
  sampleData: boolean;
}

const commentsInitialState: CommentsState = {
  sampleData: false,
};

const reducer = (
  state: CommentsState = commentsInitialState,
  action: CommentsActionType,
): CommentsState => {
  switch (action.type) {
    case ActionType.GET_COMMENTS_ACTION: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default reducer;
