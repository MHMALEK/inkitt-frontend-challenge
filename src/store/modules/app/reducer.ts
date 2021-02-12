import { ActionType } from './action-type';
import { AppActionType } from './action';

export interface AppState {
  sampleData: boolean;
}

const authInitialState: AppState = {
  sampleData: false,
};

const reducer = (state: AppState = authInitialState, action: AppActionType): AppState => {
  switch (action.type) {
    case ActionType.BOOTSRAP_APP_ACTION: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
export default reducer;
