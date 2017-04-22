import React from 'react';
import { NavLink } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <NavLink to="/">Home</NavLink>
        </div>

        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
