export enum ActionType {
  GET_COMMENTS_LIST_ACTION = 'GET_COMMENTS_LIST_ACTION',
  GET_COMMENTS_LIST_FULFILLED_ACTION = 'GET_COMMENTS_LIST_FULFILLED_ACTION',
  GET_COMMENTS_LIST_FAILED_ACTION = 'GET_COMMENTS_LIST_FAILED_ACTION',

  ADD_COMMENT_ACTION = 'ADD_COMMENT_ACTION',
  ADD_COMMENT_FULFILLED_ACTION = 'ADD_COMMENT_FULFILLED_ACTION',
  ADD_COMMENT_FAILED_ACTION = 'ADD_COMMENT_FAILED_ACTION',
}

/* get comment actions */

export type CommentListActionPayloadType = Array<{
  id: string;
  user_name: string;
  created_date: string;
  up_votes: number;
  down_votes: number;
  replies: [];
  content: string;
  avatar_url: string;
}>;

export type GetCommentsActionType = {
  type: ActionType.GET_COMMENTS_LIST_ACTION;
};

export type GetCommentsFulfilledActionType = {
  type: ActionType.GET_COMMENTS_LIST_FULFILLED_ACTION;
  payload: CommentListActionPayloadType;
};

export type GetCommentsFailedActionType = {
  type: ActionType.GET_COMMENTS_LIST_FAILED_ACTION;
};

/* add comment actions */
export interface AddCommentActionPayloadType {
  id: string;
  user_name: string;
  created_date: string;
  up_votes: number;
  down_votes: number;
  replies: [];
  content: string;
  avatar_url: string;
}

export interface AddCommentActionType {
  type: ActionType.ADD_COMMENT_ACTION;
  payload: AddCommentActionPayloadType;
}

export interface AddCommentFulfilledActionType {
  type: ActionType.ADD_COMMENT_FULFILLED_ACTION;
  payload: CommentListActionPayloadType;
}

export interface AddCommentFailedActionType {
  type: ActionType.ADD_COMMENT_FAILED_ACTION;
}
