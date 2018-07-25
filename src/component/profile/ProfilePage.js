import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerTintColor: '#000',
        headerStyle: {
            backgroundColor: '#FFF',
        },
        headerTitleStyle: {
            fontSize: 18,
        },
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>

                    <Text style={{color:'white', fontSize: 30, fontFamily:'open-sans-semi-bold'}}>Hi ! I am Yen Dang</Text>
                </View>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.bottomButton}>

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },

    bottomButton: {
        backgroundColor: 'red',
        height: 50,
    },
    top: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',

    },

    textStyle: {
        fontSize: 20,
        color: '#ffffff',
        textAlign: 'center',
    },

    buttonStyle: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 50,
        borderColor: 'red',
        margin: 20,
        flex: 1
    }
});