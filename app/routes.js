import React from 'react'
import { Route, Switch } from 'react-router-dom'

import LayoutContainer from 'containers/LayoutContainer'

import About from 'pages/About'
import Home from 'pages/Home'
import NoMatch from 'pages/NoMatch'

export default (
  <LayoutContainer>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </LayoutContainer>
)
