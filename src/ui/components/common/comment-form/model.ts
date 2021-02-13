export type CommentTextAreaPropsType = {
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  value: string;
  onSubmit: () => void;
};
