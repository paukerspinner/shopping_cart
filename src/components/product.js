import React from 'react';
import './../styles/myStyle.css'

class Product extends React.Component {
	render() {
		var { product } = this.props;
		var { id, picture, price, rating, description, name } = product;
		return (
			<div className="col-xs-6 col-sm-4 col-lg-3">
			    <a href="#." className="thumbnail">
			      <img src={ picture } alt="Img" />
			    </a>
			    <div className="caption text-center">
			    	<h3>{ name }</h3>
			    	<div className="orange-text">
			    		{ this.showRating(rating) }
			    	</div>
			    	<p>{ description }</p>
			    	<hr />
			    	<div className="d-flex justify-content-around">
			    		<strong className="font-30px">{price}$</strong>
			    		<button className="btn btn-outline-orange btn-circle" onClick={ () => this.props.addToCart(product) }>
			    			<span className="fas fa-shopping-cart orange-text font-30px" />
			    		</button>
			    	</div>
			    	<hr />
			    </div>
			 </div>
  		)
	}

	showRating = (rating) => {
		var result = [];
		for(let i = 0; i < rating; i++) {
			result.push((<span key={ i } className="fas fa-star"/>));
		}
		for (let i = rating; i < 5; i++) {
			result.push((<span key={ i } className="far fa-star"/>));
		}
		return result;
  	}
}

export default Product;