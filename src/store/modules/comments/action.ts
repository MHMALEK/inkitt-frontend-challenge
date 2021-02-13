import {
  ActionType,
  AddCommentActionType,
  GetCommentsActionType,
  AddCommentActionPayloadType,
  GetCommentsFulfilledActionType,
  CommentListActionPayloadType,
  GetCommentsFailedActionType,
  AddCommentFulfilledActionType,
  AddCommentFailedActionType,
} from './action-type';

/* get comment actions */

export const getCommentsAction = (): GetCommentsActionType => ({
  type: ActionType.GET_COMMENTS_LIST_ACTION,
});

export const getCommentsFulfilledAction = (
  payload: CommentListActionPayloadType,
): GetCommentsFulfilledActionType => ({
  type: ActionType.GET_COMMENTS_LIST_FULFILLED_ACTION,
  payload,
});

export const getCommentsFailedAction = (): GetCommentsFailedActionType => ({
  type: ActionType.GET_COMMENTS_LIST_FAILED_ACTION,
});

/* add comment actions */

export const addCommentAction = (
  payload: AddCommentActionPayloadType,
): AddCommentActionType => ({
  type: ActionType.ADD_COMMENT_ACTION,
  payload,
});

export const addCommentFulfilledAction = (
  payload: CommentListActionPayloadType,
): AddCommentFulfilledActionType => ({
  type: ActionType.ADD_COMMENT_FULFILLED_ACTION,
  payload,
});

export const addCommentFailedAction = (): AddCommentFailedActionType => ({
  type: ActionType.ADD_COMMENT_FAILED_ACTION,
});

export type CommentsActionType =
  | GetCommentsActionType
  | GetCommentsFulfilledActionType
  | GetCommentsFailedActionType
  | AddCommentActionType
  | AddCommentFulfilledActionType
  | AddCommentFailedActionType;
