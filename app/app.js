// Defaults
require.context('./assets/', true)
require('./stylesheets/application.sass')

// SPA
import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import configureStore from './store/configureStore'
import Root from './containers/Root'

const history = createHistory()
const store   = configureStore(history)

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
)
