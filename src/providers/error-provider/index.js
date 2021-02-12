class ErrorHandler {
  networkErrorHandler(error) {
    // do something with errors that come from network
    if (error.response) {
      switch (error.response.status) {
        case 400:
          break;
        default:
      }
    }
    return { error };
  }

  componentErrorHandler(error) {
    return error;
  }
}

export default new ErrorHandler();
