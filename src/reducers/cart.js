import * as types from './../constants/actionTypes';

const data = JSON.parse(localStorage.getItem('cart'));
const initialState = data ? data : [];

const cartReducer = (state = initialState, action) => {
	var index = -1;
	var newCart = {};
	var newElemCart = {};
	var newQuantity = 0;
	switch(action.type) {
		case types.CHANGE_QUANTITY :
			index = findIndexOf(action.id, state);
			newQuantity = state[index].quantity + action.amount;
			if (newQuantity > 0) {
				newElemCart = {
					product: state[index].product,
					quantity: newQuantity
				}
				newCart = [...state.slice(0, index), newElemCart, ...state.slice(index+1)];
			}
			else newCart = state;
			localStorage.setItem('cart', JSON.stringify(newCart));
			return newCart;

		case types.DELETE_FROM_CART :
			index = findIndexOf(action.id, state);
			newCart = [...state.slice(0, index), ...state.slice(index+1)];
			localStorage.setItem('cart', JSON.stringify(newCart));
			return newCart;
		case types.ADD_TO_CART :
			index = findIndexOf(action.product.id, state);
			if (index === -1) {
				newElemCart = {
					product: action.product,
					quantity: 1
				}
				newCart = [...state, newElemCart];
			}
			else {
				newElemCart = {
					product: state[index].product,
					quantity: state[index].quantity + 1
				}
				newCart = newCart = [...state.slice(0, index), newElemCart, ...state.slice(index+1)];
			}
			localStorage.setItem('cart', JSON.stringify(newCart));
			return newCart;
		default:
			return state;
	}
}

let findIndexOf = (id, cart) => {
	let index = -1;
	for(let i = 0; i < cart.length; i++) {
		if (id === cart[i].product.id) {
			index = i;
			break;
		}
	}
	return index;
}

export default cartReducer;