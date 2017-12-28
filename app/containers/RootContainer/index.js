// @flow

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import routes from '~/routes'

type Props = {
  history: Object,
  store: Object
}

class RootContainer extends Component<Props> {
  render() {
    const { history, store } = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>{routes}</ConnectedRouter>
      </Provider>
    )
  }
}

export default RootContainer
