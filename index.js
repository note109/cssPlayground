import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import Root from './root'
import './style/global.scss'

render(
  <Root history={browserHistory}/>,
  document.getElementById('root')
)