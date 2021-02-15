import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
class ErrorHandler {
  constructor() {
    Sentry.init({
      dsn:
        'https://137b1d71211741a1b4063387bbd0becf@o522176.ingest.sentry.io/5633266',
      integrations: [new Integrations.BrowserTracing()],

      tracesSampleRate: 1.0,
    });
  }
  networkErrorHandler(error: ErrorEvent) {
    return { error };
  }

  componentErrorHandler(error: Error) {
    return error;
  }
}

export default new ErrorHandler();
