import { createStore } from 'redux'; 

const INITIAL_STATE = {
    data: [],
    favorites: []
};

// Reducers
function products(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FAVORITE_PRODUCT':
            console.warn('FAVORITANDO ID: ', action.id)
            return { ...state, favorites: [ ...state.favorites, action.id ]};
        case 'ADD_PRODUCTS' :
            return {...state, data: [...state.data, action.products ]};
        default: 
            return state;
    }
}

const store = createStore(products);

export default store; 