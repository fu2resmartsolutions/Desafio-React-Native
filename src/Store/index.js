import { createStore } from 'redux'; 

const INITIAL_STATE = {
    data: [],
    favorites: []
};

// Reducers
function products(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FAVORITE_PRODUCT':
                console.warn(!state.data[action.index].favorite)
                state.data[action.index].favorite = !state.data[action.index].favorite;
                return{...state, data: [...state.data, state.data[action.index]]};
        case 'ADD_PRODUCTS' :
            return {...state, data: [...state.data, action.products ]};
        default: 
            return state;
    }
}

const store = createStore(products);

export default store; 