// Defaults
require.context('./assets/', true)
require('./stylesheets/application.sass')

// SPA
import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import configureStore from 'store/configureStore'
import { RootContainer } from 'containers'

const history = createHistory()
const store = configureStore(history)

render(
  <RootContainer history={history} store={store} />,
  document.getElementById('root')
)
