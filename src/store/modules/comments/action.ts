import { ActionType, GetCommentsActionType } from './action-type';

export const getCommentsAction = (): GetCommentsActionType => ({
  type: ActionType.GET_COMMENTS_ACTION,
});

export type CommentsActionType = GetCommentsActionType;
