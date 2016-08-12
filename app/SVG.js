import React, { Component, PropTypes } from 'react'
import CSS from '../style/SVG.scss'

class SVG extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={CSS.root}>
        <h1>SVG</h1>

        <div>
          <svg width="18px" height="12px" viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="素材" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                  <g id="img_" transform="translate(-1.000000, -4.000000)" stroke-width="3" stroke="#00E6C7">
                      <polyline className={CSS.check} id="Path-275" points="3.375,8.62988281 8.40574818,14.0340114 17.2172445,6"></polyline>
                  </g>
              </g>
          </svg>
        </div>
      </div>
    )
  }
}

export default SVG