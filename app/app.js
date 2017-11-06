// Defaults
require.context('./assets/', true)
require('./stylesheets/application.sass')

// SPA
import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { AppContainer } from 'react-hot-loader'
import configureStore from 'store/configureStore'
import Root from 'containers/Root'

const history = createHistory()
const store   = configureStore(history)

const renderRoot = Component => {
  render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  )
}

renderRoot(Root)

if (process.env.NODE_ENV == 'development' && module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('containers/Root').default

    renderRoot(NewRoot)
  })
}
