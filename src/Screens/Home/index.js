import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../Store';
import { ProductsList } from '../index'; 

function Home(props) {
    return(
        <ProductsList props={props} />
    )
}

export default Home;