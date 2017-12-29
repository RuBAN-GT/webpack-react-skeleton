// @flow

import type { DispatchType, StateType } from './'

export type ThunkActionType = (
  dispatch: DispatchType,
  getState?: () => StateType
) => any
