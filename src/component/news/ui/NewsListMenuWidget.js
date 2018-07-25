import React from 'react';
import {StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import {Button, Text, Card} from 'react-native-elements';
import MenuItem from './NewsMenuItemWidget';

export default class NewsListMenuWidget extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    renderMenuItem = ({item}) => (
        <View>
            <MenuItem item={item}/>
        </View>
    );

    render() {
        return (
            <FlatList
                data={this.props.data}
                horizontal={true}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderMenuItem}
            />
        )
    }
}

const styles = StyleSheet.create({});