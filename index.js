/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { Home } from './src/Screens'
import {name as appName} from './app.json';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

AppRegistry.registerComponent(appName, () => Home);
