import  * as api from "../api";

export const getProducts = () => (dispatch) => {
	api.getProducts(products => dispatch({
		type: 'LIST_PRODUCTS',
		payload: products
	}))
}

export const toggleFavorite = (productId) => (dispatch) => {
	api.toggleFavorite(productId, updatedProduct => dispatch({
		type: 'TOGGLE_FAVORITE',
		payload: updatedProduct
	}));
}
