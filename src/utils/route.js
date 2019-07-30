import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Home } from '../Screens'

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    initialRouteName: "Home"
});


export default createAppContainer(AppNavigator);