export type BaseTextAreaPropsType = {
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  name: string;
  value: string;
  className?: string;
};
