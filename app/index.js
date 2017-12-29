// Defaults
require.context('./assets/', true)
require('./stylesheets/application.sass')

// SPA
import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { AppContainer } from 'react-hot-loader'

import configureStore from 'store/configureStore'
import { RootContainer } from 'containers'

const history = createHistory()
const store = configureStore(history)

const renderRoot = Component => {
  render(
    <AppContainer>
      <Component history={history} store={store} />
    </AppContainer>,
    document.getElementById('root')
  )
}

renderRoot(RootContainer)

if (module.hot) {
  module.hot.accept('./containers/RootContainer', () => {
    const NewRootContainer = require('containers/RootContainer').default

    renderRoot(NewRootContainer)
  })
}
