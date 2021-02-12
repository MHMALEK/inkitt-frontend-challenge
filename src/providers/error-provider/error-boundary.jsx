import React from 'react';
import ErrorHandler from '.';
import ErrorScreen from './error-screen';
import NOTIFICATION_MESSAGES from './notification-messages';

class ErrorBoundaryProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      message: NOTIFICATION_MESSAGES.ERRORS.DEFAULT_ERROR_BOUNDAY,
    };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
    ErrorHandler.componentErrorHandler(error);
  }

  render() {
    const { hasError, message } = this.state;
    const { children } = this.props;
    return hasError ? <ErrorScreen message={message} /> : children;
  }
}

export default ErrorBoundaryProvider;
