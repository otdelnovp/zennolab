import React, { Component } from 'react'
import './style.css'

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2">
              <div className="about_box">
                <h2>About us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
