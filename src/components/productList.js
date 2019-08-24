import React from 'react';

class ProductList extends React.Component {
	render() {
		return (
			<div>
				<h2>Danh sach san pham</h2>
				<div className="row">
					{ this.props.children }
				</div>
			</div>
		)
	}
}

export default ProductList;