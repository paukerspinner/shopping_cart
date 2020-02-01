import React from 'react';
import ProductsContainer from './../containers/productsContainer';
import CartContainer from './../containers/cartContainer';

class Content extends React.Component {
	render() {
		return (
			<div className="container">
				<ProductsContainer />
				<h3>
					<span className="text-success">Mua hàng thành công!</span>
				</h3>
				<CartContainer />
			</div>
		)
	}
}

export default Content;