import React from 'react';
import { ErrorScreenProps } from './model';
const ErrorScreen: React.FC<ErrorScreenProps> = ({
  message,
}) => {
  return <div>Error {message}</div>;
};

export default ErrorScreen;
