import React from 'react';
import {createBottomTabNavigator,createStackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Button } from 'react-native';
import ProfileScreen from '../profile/ProfilePage';
import OrderScreen from '../order/ui/OrderPage';
import DetailsScreen from '../newsdetail/NewsDetailsPage';
import NewsScreen from '../news/ui/NewsPage'
import StoreScreen from '../store/StorePage';


const NewsStack = createStackNavigator({
    New: NewsScreen,
    Details: DetailsScreen,
});

const OrderStack = createStackNavigator({
    Order: OrderScreen,
    Details: DetailsScreen,
});

const StoreStack = createStackNavigator({
    Store: StoreScreen,
});

const ProfileStack = createStackNavigator({
    Profile: ProfileScreen,
    Details: DetailsScreen,
});

export default createBottomTabNavigator(
    {
        New: NewsStack,
        Order: OrderStack,
        Store: StoreStack,
        Profile: ProfileStack,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Profile') {
                    iconName = `ios-people${focused ? '' : '-outline'}`;
                } else if (routeName === 'Order') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }else if(routeName === 'New'){
                    iconName = `ios-star${focused ? '' : '-outline'}`;
                } else if (routeName === 'Store'){
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <View/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: 'gray',
        },
    }
);
