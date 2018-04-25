import React, { Component } from 'react'
import './style.css'

import User from '../User'

export default class Header extends Component {

  state = {
    headerFixed: false
  }

  scrolling = () => {
    window.pageYOffset > 200
      ? this.setState({headerFixed: true})
      : this.setState({headerFixed: false})
	}

  componentDidMount() {
    window.addEventListener('scroll', this.scrolling, false);
  }

  render() {
    return (
      <header className={"header"
        + (this.state.headerFixed ? " header_fixed" : "")
      }>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-1">
              <a href="/" className="logo">Logo</a>
            </div>

            <div className="col-5">
              <ul className="nav">
                <li><a href="#home">Home</a></li>
                <li><a href="#product">Product</a></li>
              </ul>
            </div>

            <div className="col-5">
              <User/>
            </div>

            <div className="col-1">
              <div className="cart">
                <span className="cart_icon fa fa-shopping-cart"></span>
                { this.props.cartCount > 0 && <span className="cart_count">{ this.props.cartCount }</span> }
              </div>
            </div>

          </div>
        </div>
      </header>
    )
  }
}
