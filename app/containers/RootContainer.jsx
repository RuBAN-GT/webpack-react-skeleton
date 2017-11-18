import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import routes from '~/routes'

const RootContainer = ({history, store}) => (
  <Provider store={store}>
    <ConnectedRouter history={history} children={routes} />
  </Provider>
)

RootContainer.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

export default RootContainer
