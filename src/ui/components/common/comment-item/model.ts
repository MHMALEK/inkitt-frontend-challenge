export interface CommentItemType {
  id: string;
  user_name: string;
  created_date: string;
  up_votes: number;
  down_votes: number;
  replies: any;
  content: string;
  avatar_url: string;
}

type CommentItemPropsType = {
  data: CommentItemType;
  level: number;
};

export default CommentItemPropsType;
