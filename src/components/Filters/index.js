import React, { Component } from 'react'
import './style.css'

export default class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-9 filters_list">
              <label className="filters_list_item">
                <input type="checkbox" defaultChecked={this.props.filters.Men} checked={this.props.filters.Men} onChange={() => this.props.onFilter('Men')}/>
                <span>Men</span>
              </label>
              <label className="filters_list_item">
                <input type="checkbox" defaultChecked={this.props.filters.Women} checked={this.props.filters.Women} onChange={() => this.props.onFilter('Women')}/>
                <span>Women</span>
              </label>
              <label className="filters_list_item">
                <input type="checkbox" defaultChecked={this.props.filters.Children} checked={this.props.filters.Children} onChange={() => this.props.onFilter('Children')}/>
                <span>Children</span>
              </label>
            </div>

            <div className="col-3 filters_tools">
              <span className="btn" onClick={() => this.props.resetFilters()}>See all products</span>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
