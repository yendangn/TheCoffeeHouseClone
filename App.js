import './ReactotronConfig.js'
import React from 'react';
import TabBar from './src/component/core/BottomTabBar';
import {Font} from 'expo';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/index';

export default class App extends React.Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
            'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
            'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
            'open-sans-semi-bold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
        });

        this.setState({fontLoaded: true});
    }

    render() {
        if (this.state.fontLoaded) {
            return <Provider store={store}>
                <TabBar/>
            </Provider>
        } else {
            return <View/>
        }
    }
};