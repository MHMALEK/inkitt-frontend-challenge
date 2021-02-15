export type ErrorBoundaryProviderProps = {
  children: React.ReactNode;
};

export type ErrorBoundaryProviderState = {
  hasError: boolean;
  message: string;
};
