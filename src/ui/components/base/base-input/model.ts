export type BaseInputPropsType = {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  name: string;
  value: string;
  className?: string;
};
