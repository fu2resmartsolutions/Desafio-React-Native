import { createStore } from 'redux'; 


const INITIAL_STATE = {
    data: [],
    favorites: []
};

// Reducers
function products(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'FAVORITE_PRODUCT':
                const newData = state.data.map((product, index) => {
                    if(product.id === action.id) {
                        return { ...product, favorite : !product.favorite }
                    } else {
                        return product
                    }
                });
                return { ...state, data: [ ...newData ]}
        case 'ADD_PRODUCTS' :
            return {...state, data: [...state.data, action.products ]};
        default: 
            return state;
    }
}

const store = createStore(products);

export default store; 