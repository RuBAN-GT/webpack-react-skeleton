import React from 'react'
import { Route } from 'react-router-dom'
import App from './containers/App'
import Home from './components/Home'
import About from './components/About'

export default (
  <App>
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
  </App>
)
