// Defaults
require.context('./assets/', true)
require('./stylesheets/application.sass')

// React-Router
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root.js'

// Redux
import configureStore from './store/configureStore'
import { browserHistory } from 'react-router-dom'
import { syncHistoryWithStore } from 'react-router-redux'

const store   = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
