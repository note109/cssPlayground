import React, { Component, PropTypes } from 'react'
import { Route, Router } from 'react-router'

import Index from './app/Index'
import Fade from './app/Fade'

export default class Root extends Component {
  render() {
    const { history } = this.props
    return (
      <Router history={history}>
        <Route path="/" component={Index} />
        <Route path="fade" component={Fade} />
      </Router>
    )
  }
}