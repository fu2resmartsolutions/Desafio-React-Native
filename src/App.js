import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import HomePage from './components/home-page';
import ProductPage from './components/product-page';
import { productReducer } from './reducers/product-reducer';
import { getProducts } from './actions/product-actions';
import thunk from 'redux-thunk';
import { createStackNavigator, createAppContainer } from 'react-navigation';

let store = createStore(productReducer, applyMiddleware(thunk));

store.dispatch(getProducts());

let Navigator = createStackNavigator({
	Home: HomePage,
	Product: ProductPage
}, { headerMode: 'none'});

let AppNavigator = createAppContainer(Navigator);

function App() {

	return (
		<Provider store={store}>
			<AppNavigator />
		</Provider>
	);
}

export default App;
