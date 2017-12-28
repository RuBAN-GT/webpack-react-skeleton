// @flow

import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import styles from './styles.sass'

type Props = {
  children: Object,
  router: Object
}

class LayoutContainer extends React.Component<Props> {
  render() {
    const { children } = this.props

    return (
      <div className={styles.wrapper}>
        <div className={styles.menu}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>

        <div className={styles.content}>{children}</div>
      </div>
    )
  }
}

const mapStateToProps = ({ router }) => {
  return { router }
}

export default connect(mapStateToProps)(LayoutContainer)
