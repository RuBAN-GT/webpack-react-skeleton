import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from 'containers/Layout'

import About from 'components/About'
import Home from 'components/Home'
import NoMatch from 'components/NoMatch'

export default (
  <Layout>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route component={NoMatch}/>
    </Switch>
  </Layout>
)
