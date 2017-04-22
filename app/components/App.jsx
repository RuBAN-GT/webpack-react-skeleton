import React from 'react';
import { NavLink } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="main wrapper">
        <div className="main sidebar">
          <NavLink to="/">Root</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

        <div className="main content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
