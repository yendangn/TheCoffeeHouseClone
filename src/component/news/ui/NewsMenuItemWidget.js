import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import {Button, Text, Card} from 'react-native-elements';

export default class NewsMenuItemWidget extends React.Component {

    getItemSize() {
        let width = Dimensions.get('window').width - 60;
        return width / 3;
    }

    getItemStyle() {
        return {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 0,
            margin: 10,
            width: this.getItemSize(),
            height: this.getItemSize(),
            backgroundColor: 'white',
            borderRadius: 4
        }
    }
    onItemClick(){

    }

    render() {
        let menu = this.props.item;
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={() => this.onItemClick()}>
                <View style={this.getItemStyle()}>
                    <Image
                        style={styles.menuImage}
                        source={require('../../../../assets/image/wallet.png')}
                    />
                    <Text style={styles.menuText}>{menu.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    boxStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 10,
        width: 50,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 4
    },

    menuImage: {
        width: 40,
        height: 40,
    },
    menuText: {
        color: 'black',
        marginTop: 10
    }


});