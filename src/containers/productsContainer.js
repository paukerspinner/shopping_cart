import React from 'react';
import ProductList from './../components/productList';
import Product from './../components/product'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';

class ProductsContainer extends React.Component {
	render() {
		return (
			<ProductList>
				{ this.showProducts(this.props.products) }
			</ProductList>
		)
	}

	showProducts = (products) => {
		return products.map((product, index) => {
			return (<Product 
						key={ index } 
						product={ product }
						addToCart= {this.props.addToCart}
			/>)
		})
	}
}

ProductsContainer.propTypes = {
	products: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			picture: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			description: PropTypes.string.isRequired,
			rating: PropTypes.number.isRequired
		})
	).isRequired
}

const mapStateToProps = state => {
	return {
		products: state.products
	}
}

const mapDispatchToProp = (dispatch) => {
	return {
		addToCart: (product) => {
			return dispatch(actions.addToCart(product));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProp)(ProductsContainer);