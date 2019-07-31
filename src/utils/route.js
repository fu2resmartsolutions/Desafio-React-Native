import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Home, Product } from '../Screens'
import Icon from 'react-native-vector-icons/AntDesign';

const Drawer = createDrawerNavigator({
    Home: Home
});

const AppNavigator = createStackNavigator({
    Home: { 
        screen: Home, 
        navigationOptions: {
            title: 'Produtos',
            headerStyle: {
                backgroundColor: "#E87410",
            },
            headerTitleStyle: {
                color: 'white'
            },
            drawerIcon: () => (
                <Icon name="menu" color="red" />
            )
        } 
    },
    Drawer: {
        screen: Drawer,
    },
    Product: { 
        screen: Product, 
        navigationOptions: {
            title: 'Produtos',
            headerStyle: {
                backgroundColor: "#E87410",
            },
            headerTitleStyle: {
                color: 'white'
            },
            headerTintColor: 'white'
        } 
    },

    initialRouteName: "Home"
}, {
    headerStyle: {
        backgroundColor: "#E87410",
    }
});



export default createAppContainer(AppNavigator);