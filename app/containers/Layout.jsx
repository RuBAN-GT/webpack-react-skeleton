import React from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'

const Layout = ({children}) => (
  <div className="wrapper">
    <div className="sidebar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>

    <div className="content">
      {children}
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return state
}

export default withRouter(connect(
  mapStateToProps
)(Layout))
