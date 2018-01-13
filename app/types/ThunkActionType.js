// @flow

import type { DispatchType, StateType } from 'types'

export type ThunkActionType = (
  dispatch: DispatchType,
  getState?: () => StateType
) => any
