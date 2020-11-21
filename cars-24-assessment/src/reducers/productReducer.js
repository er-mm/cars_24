import { FETCH_PRODUCTS, SEARCH_PRODUCT, PRICE_RANGE, PRODUCT_CATEGORY } from '../actions/types'

const initialState = {
	productsList: [],
	searchProduct: '',
	range: { min: 0, max: 200 },
	category: {}
};

export default function (state = initialState, action) {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return {
				...state,
				productsList: action.payload
			}
		case SEARCH_PRODUCT:
			return {
				...state,
				searchProduct: action.payload
			}
		case PRICE_RANGE:
			return {
				...state,
				range: action.payload
			}
		case PRODUCT_CATEGORY:
			return {
				...state,
				category: action.payload
			}
		default:
			return state;
	}
}