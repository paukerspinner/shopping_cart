import * as types from './../constants/actionTypes'

export const changeQuantity = (id, amount) => {
	return {
		type: types.CHANGE_QUANTITY,
		id,
		amount
	}
}

export const deleteFromCart = (id) => {
	return {
		type: types.DELETE_FROM_CART,
		id
	}
}

export const addToCart = (product) => {
	return {
		type: types.ADD_TO_CART,
		product
	}
}