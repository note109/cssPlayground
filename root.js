import React, { Component, PropTypes } from 'react'
import { Route, Router } from 'react-router'

import App from './app/App'
import Fade from './app/Fade'

export default class Root extends Component {
  render() {
    const { history } = this.props
    return (
      <Router history={history}>
        <Route path="/" component={App} />
        <Route path="fade" component={Fade} />
      </Router>
    )
  }
}