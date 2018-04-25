import React, { Component } from 'react'
import './style.css'

import axios from 'axios'

import Loading from '../Loading'
import Filters from '../Filters'
import Good from '../Good'

export default class Catalog extends Component {

	state = {
		data: {},
		loading: true,
		filters: {
			Men: false,
			Women: false,
			Children: false
		}
	}

	componentDidMount(){
		axios.get('/test_api.php?action=get_items')
			.then(response =>
				this.setState({data: response.data, loading: false})
			).catch(err => console.log(err))
	}

  render() {
    return (
      <div className="catalog">

				<Filters
					filters={this.state.filters}
					onFilter={(value) =>this.setState(prevState => ({
						filters: {
							...prevState.filters,
							[value]: !prevState.filters[value]
						}
					}))}
					resetFilters={() => this.setState({filters: {
						Men: false,
						Women: false,
						Children: false
					}})}
				/>

				<div className="catalog_list">
					<div className="container">
						<div className="row">

		          { this.state.loading ?
									<Loading/>
								: this.state.data.items.map((item, index) =>
									( this.state.filters[item.category]
										|| (!this.state.filters.Men && !this.state.filters.Women && !this.state.filters.Children)
									) ?
				            <div className="col-4" key={index}>
											<Good
					              id={item.id}
					              title={item.title}
					              url={item.url}
					              category={item.category}
					              sizes={item.sizes}
					              colors={item.colors}
					              price={item.price}
												onAddToCart={() => this.props.onAddToCart()}
					            />
										</div>
									: ''
		          )}

						</div>
					</div>
        </div>
      </div>
    )
  }
}
