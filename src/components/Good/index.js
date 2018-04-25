import React, { Component } from 'react'
import './style.css'

export default class Good extends Component {
  state = {
    sizeSelect: false
  }
  render() {
    return (
      <div className="good">
        <div className="good_image">
          <img src={this.props.url} alt={this.props.title} />
        </div>
        <div className="good_info">
          <div className="good_title">{this.props.title}</div>
          <div className="good_price">{this.props.price}&euro;</div>
        </div>
        { this.props.sizes &&
          <div className="good_size">
            { this.props.sizes.length > 1 ?
              <div className="good_size_select">
                <div className="good_size_select_label">{ this.state.sizeSelect ? this.state.sizeSelect : 'Size' }</div>
                <div className="good_size_select_list">
                  { this.props.sizes.map((size, indexSize) =>
                    <span key={indexSize}
                      onClick={() => this.setState({sizeSelect: size})}
                      className={this.state.sizeSelect === size ? "selected" : ""}
                      >{size}</span>
                  )}
                </div>
              </div>
              :
              this.props.sizes[0]
            }
          </div>
        }
        { this.props.colors &&
          <div className="good_color">
            { this.props.colors.map((color, indexColor) =>
              <span className="good_color_item" key={indexColor} style={{background: color}}></span>
            )}
          </div>
        }
        <div className="good_buy">
          <span className="btn" onClick={() => this.props.onAddToCart()}>Add to cart</span>
        </div>
      </div>
    )
  }
}
