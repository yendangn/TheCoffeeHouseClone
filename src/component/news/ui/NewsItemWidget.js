import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {Button, Text, Card} from 'react-native-elements';
export default class NewsItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    render() {
        let newItemDate = this.props.item;
        return (
            <Card containerStyle={styles.cardStyle}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{uri: newItemDate.imageUrl}}/>
                <Text style={styles.titleStyle}>{newItemDate.title}</Text>
                <Text style={styles.subStyle} numberOfLines={3}>{newItemDate.description}</Text>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        padding: 0,
        marginTop: 10,
        marginBottom: 10,
        marginEnd: 10,
        marginStart: 10,
        borderRadius: 7
    },
    rowStyle: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    titleStyle: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        marginStart: 10,
        marginEnd: 10,
        marginTop: 10,
        marginBottom: 5
    },
    subStyle: {
        fontSize: 15,
        fontFamily: 'open-sans-light',
        marginStart: 10,
        marginEnd: 10,
        marginBottom: 10,
        color: 'black'
    },
    image: {
        height: 200,
        flex: 1,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    }
});