import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { LayoutContainer } from 'containers'
import { AboutPage, HomePage, NoMatchPage } from 'pages'

export default (
  <LayoutContainer>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NoMatchPage} />
    </Switch>
  </LayoutContainer>
)
