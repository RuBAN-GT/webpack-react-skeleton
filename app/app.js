// Defaults
require.context('./assets/', true);
require('./stylesheets/application.sass');

// React-Router
import React from 'react';
import ReactDOM from 'react-dom';
import ApplicationRouter from './router.js'

ReactDOM.render(
  <ApplicationRouter />,
  document.getElementById('root')
);
