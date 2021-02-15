import CommentItemPropsType, {
  CommentItemType,
} from '../model';

export type CommentDataPropsType = {
  data: {
    up_votes: number;
    replies: Array<CommentItemType>;
    down_votes: number;
  };
};
