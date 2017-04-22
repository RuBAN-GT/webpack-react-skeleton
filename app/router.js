// Router
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Components
import App from './components/App.jsx';
import Home from './components/Home.jsx';

const ApplicationRouter = () => (
  <Router>
    <App>
      <Route exact path='/' component={Home} />
    </App>
  </Router>
);

export default ApplicationRouter;
