import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../Store';
import { ProductsList } from '../index'; 

function Home(props) {
    return(
        <Provider store={store}>
            <ProductsList props={props} />
        </Provider>
    )
}

export default Home;