let products = [];

export function productReducer(state = products, action)
{
	switch (action.type)
	{
	case 'LIST_PRODUCTS':
		return action.payload;
	case 'TOGGLE_FAVORITE':
		return state.map(product => product.id == action.payload.id ? action.payload : product);
	default:
		return state;
	}
}
