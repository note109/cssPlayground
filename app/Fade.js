import React, { Component, PropTypes } from 'react'
import CSS from '../style/fade.scss'

class Fade extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={CSS.fade}>
        <h1>Fade</h1>
      </div>
    )
  }
}

export default Fade