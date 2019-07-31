import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from '../../Store';
import { Product } from '../../Components';
import { ProductsList } from '../index'; 


function Home(props) {
    return(
        <Provider store={store}>
            <ProductsList props={props} />
        </Provider>
    )
}

export default Home;