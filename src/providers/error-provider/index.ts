class ErrorHandler {
  networkErrorHandler(error: ErrorEvent) {
    return { error };
  }

  componentErrorHandler(error: Error) {
    return error;
  }
}

export default new ErrorHandler();
