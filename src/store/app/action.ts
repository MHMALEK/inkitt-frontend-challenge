import { ActionType, BootstrapActionType } from './action-type';

export const bootstrapAction = (): BootstrapActionType => ({
  type: ActionType.BOOTSRAP_APP_ACTION,
});

export type AppActionType = BootstrapActionType;
