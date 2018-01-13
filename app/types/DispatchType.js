// @flow

import type { ActionType, ThunkActionType } from 'types'

export type DispatchType = (
  action: ActionType | Promise<ActionType> | ThunkActionType
) => any
