import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from 'containers/App'
import Home from 'components/Home'
import About from 'components/About'
import NoMatch from 'components/NoMatch'

export default (
  <App>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route component={NoMatch}/>
    </Switch>
  </App>
)
