import React, { Component } from 'react'
import './base.css'

import Header from '../Header'
import Home from '../Home'
import Catalog from '../Catalog'
import About from '../About'
import Footer from '../Footer'

export default class App extends Component {
  state = {
    cartCount: 0
  }

  render() {
    return (
      <div className="main">

        <Header
          cartCount={this.state.cartCount}
        />

        <Home/>

        <Catalog
          onAddToCart={() => this.setState({cartCount: this.state.cartCount + 1 })}
        />

        <About/>

        <Footer/>

      </div>
    )
  }
}
