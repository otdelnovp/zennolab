import React, { Component } from 'react'
import './style.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_twitter">
          <div className="container">
            <span className="footer_twitter_icon fa fa-twitter"></span>
            <span className="footer_twitter_text">"E-commerce psd theme available"</span>
          </div>
        </div>
        <div className="footer_box">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-5 footer_text">
                <h2>Trekking</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div className="col-7 footer_menu">
                <ul>
                  <li><a href="/">credits</a></li>
                  <li><a href="/">privacy</a></li>
                  <li><a href="/">about</a></li>
                  <li><a href="/">contact</a></li>
                </ul>
                <div className="footer_copy">Design by gianluca cosetta</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
