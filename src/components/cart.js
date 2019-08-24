import React from 'react';

class Cart extends React.Component {
	render() {
		return (
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th></th>
							<th>Sản phẩm</th>
							<th>Giá</th>
							<th>Số lượng</th>
							<th>Tổng cộng</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{ this.props.children }
					</tbody>
				</table>
			</div>
		)
	}
}

export default Cart;