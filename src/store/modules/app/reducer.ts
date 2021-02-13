import { ActionType } from './action-type';
import { AppActionType } from './action';

export interface AppState {
  someConfigFetch: boolean;
}

const authInitialState: AppState = {
  someConfigFetch: false,
};

const reducer = (
  state: AppState = authInitialState,
  action: AppActionType,
): AppState => {
  switch (action.type) {
    case ActionType.BOOTSRAP_APP_ACTION: {
      return {
        ...state,
        someConfigFetch: true,
      };
    }
    default:
      return state;
  }
};
export default reducer;
