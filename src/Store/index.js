import { createStore } from 'redux'; 

const INITIAL_STATE = {
    data: [
        'Máquina de lavar 1',
        'Máquina de lavar 2',
        'Máquina de lavar 3',
        'Máquina de lavar 4',
        'Máquina de lavar 5',
    ]
};

// Reducers
function products(state, action) {
    switch(action.type) {
        case 'FAVORITE_PRODUCT':
            return { ...state, data: [ ...state.data, action.title ]};
        default: 
            return state;
    }
}

const store = createStore(products);

export default store; 