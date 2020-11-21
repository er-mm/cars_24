import { FETCH_PRODUCTS, SEARCH_PRODUCT, PRICE_RANGE, PRODUCT_CATEGORY } from './types';

const URL = 'https://fakestoreapi.com/products';

export const fetchProducts = () => dispatch => {
	fetch(URL)
		.then(res => res.json())
		.then(data => dispatch({
			type: FETCH_PRODUCTS,
			payload: data
		}));
}

export const searchText = (text) => dispatch => {
	dispatch({
		type: SEARCH_PRODUCT,
		payload: text
	});
}

export const priceRange = (range) => dispatch => {
	dispatch({
		type: PRICE_RANGE,
		payload: range
	});
}

export const productCategory = (categories) => dispatch => {
	dispatch({
		type: PRODUCT_CATEGORY,
		payload: categories
	});
}
