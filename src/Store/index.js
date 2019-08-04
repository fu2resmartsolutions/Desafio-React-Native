import { createStore } from 'redux'; 


const INITIAL_STATE = {
    data: [],
    favorites: []
};

// Reducers
function products(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FAVORITE_PRODUCT':
                return state.data.map(product =>
                    product.id === action.id ? {...product, favorite: !product.favorite } : product )
        case 'ADD_PRODUCTS' :
            return {...state, data: [...state.data, action.products ]};
        default: 
            return state;
    }
}

const store = createStore(products);

export default store; 