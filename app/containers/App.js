import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="sidebar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(
  mapStateToProps
)(App)
