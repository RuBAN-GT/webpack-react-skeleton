import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const LayoutContainer = ({ children }) => (
  <div className="wrapper">
    <div className="sidebar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </div>

    <div className="content">{children}</div>
  </div>
)

LayoutContainer.propTypes = {
  children: PropTypes.object.isRequired
}

const mapStateToProps = ({ router }) => {
  return { router }
}

export default connect(mapStateToProps)(LayoutContainer)
