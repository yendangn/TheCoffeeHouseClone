import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-elements';

export default class MenuCategory extends React.Component {

    render() {
        let category = this.props.category;
        return (
            <View style={styles.box}>
                <TouchableOpacity activeOpacity={0.7}>
                    <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{uri: category.image}}/>

                    <View style={styles.overlap}>
                    </View>

                    <View style={styles.textLayer}>
                        <Text style={{color: 'white', fontSize: 15, fontFamily: 'open-sans-semi-bold'}}>{category.name.toUpperCase()}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    box: {
        flex: 1,
        borderRadius: 4,
        height: 150,
    },

    image: {
        borderRadius: 4,
        height: 150,
    },

    overlap: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        opacity: 0.6,
        position: 'absolute',
        left: 0,
        borderRadius: 4,
        right: 0,
        top: 0,
        bottom: 0
    },

    textLayer: {
        justifyContent: 'center',
        borderRadius: 4,
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
});