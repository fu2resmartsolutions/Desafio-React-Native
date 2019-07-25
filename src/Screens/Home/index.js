import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from '../../Store';
import { Product } from '../../Components';

class Home extends Component { 
    render() {
        return(
            <Provider store={store}>
               <Product />
            </Provider>
        )
    }
}

export default Home;