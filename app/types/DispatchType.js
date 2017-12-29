// @flow

import type { ActionType, ThunkActionType } from './'

export type DispatchType = (
  action: ActionType | Promise<ActionType> | ThunkActionType
) => any
