import React, { Component } from 'react'
import './style.css'

import ScrollDown from '../ScrollDown'

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <h1>Our clothing, your comfort</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <ScrollDown/>
      </div>
    )
  }
}
