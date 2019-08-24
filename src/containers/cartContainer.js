import React from 'react';
import { connect } from 'react-redux';
import Cart from './../components/cart';
import PropTypes from 'prop-types';
import * as actions from './../actions/index';

class CartContainer extends React.Component {
	render() {
		return (
			<Cart>
				{ this.showProducts(this.props.cart) }
				{ this.showTotal(this.props.cart) }
			</Cart>
		)
	}

	showProducts = (cart) => {
		return cart.map((elemCart, index) => {
			let { product, quantity } = elemCart;
			let { id, name, picture, price } = product;
			return (
				<tr key={ index }>
					<td><img className="img-thumbnail border-none max-width-100px" src={ picture } alt={ name }/></td>
					<td>{ name }</td>
					<td>{ price }$</td>
					<td>
						{ quantity }&nbsp; 
						<button className="btn btn-primary btn-circle" onClick={ () => this.props.changeQuantity(id, -1) }>-</button>
						<button className="btn btn-primary btn-circle" onClick={ () => this.props.changeQuantity(id, 1) }>+</button>
					</td>
					<td>{ price * quantity }$</td>
					<td>
						<button className="btn btn-primary" onClick={ () => this.props.deleteFromCart(id) }>Xóa</button>
					</td>
				</tr>
			)
		})
	}
	showTotal = (cart) => {
		let total = cart.reduce((result, elemCart, index) => {
			let { quantity } = elemCart;
			let { price } = elemCart.product;
			return result += quantity * price;
		}, 0)
		return (
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td>Tổng tiền</td>
				<td>{ total }$</td>
				<td>
					<button className="btn btn-primary">Thanh toán</button>
				</td>
			</tr>
		)
	}
}

CartContainer.propTypes = {
	cart: PropTypes.arrayOf(
		PropTypes.shape({
			product: PropTypes.shape({
				id: PropTypes.number.isRequired,
				name: PropTypes.string.isRequired,
				picture: PropTypes.string.isRequired,
				price: PropTypes.number.isRequired,
				description: PropTypes.string.isRequired,
				rating: PropTypes.number.isRequired
			}),
			quantity: PropTypes.number.isRequired
		}).isRequired
	).isRequired
}

const mapStateToProps = state => {
	return {
		cart: state.cart
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeQuantity: (id, amount) => {
			return dispatch(actions.changeQuantity(id, amount));
		},
		deleteFromCart: (id) => {
			return dispatch(actions.deleteFromCart(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);