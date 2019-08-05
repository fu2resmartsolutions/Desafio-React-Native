import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AppNavigator from './src/utils/route';
import { YellowBox } from 'react-native';
import store from './src/Store';
import React from 'react';
import { Provider } from 'react-redux';

YellowBox.ignoreWarnings(['Remote debugger', 'Warning: componentWillReceiveProps']);

const AppComponent = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
)

AppRegistry.registerComponent(appName, () =>  AppComponent);
