import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as action from '../action/action';
import {StyleSheet, View} from 'react-native';
import GridView from 'react-native-super-grid';
import MenuCategory from './MenuCategory';

class OrderPage extends React.Component {
    static navigationOptions = {
        title: 'Order',
    };

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
        this.props.getCategories();
    }

    renderMenuItem(item) {

        return (
            <View>
                <MenuCategory category={item}/>
            </View>
        );
    }

    render() {
        return (
            <View style={{flex: 1}}>

                <GridView
                    style={styles.gridView}
                    itemDimension={150}
                    items={this.props.data}
                    renderItem={item => this.renderMenuItem(item)}
                />

            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        loading: state.categoryReducer.loading,
        data: state.categoryReducer.dataCategory,
        error: state.categoryReducer.error,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);

const styles = StyleSheet.create({
    gridView: {},

});