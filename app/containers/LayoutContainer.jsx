import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const LayoutContainer = ({children}) => (
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

const mapStateToProps = ({ router }) => {
  return { router }
}

export default connect(mapStateToProps)(LayoutContainer)
