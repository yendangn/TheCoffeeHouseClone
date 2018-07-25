import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as action from '../action/action';
import {SectionList, TouchableOpacity, View, Text} from 'react-native';
import NewItem from './NewsItemWidget';
import NewsHeader from './HeaderNewScreenWidget';
import MenuList from './NewsListMenuWidget';

class NewsPage extends React.Component {
    static navigationOptions = {
        headerTitle: (
            <NewsHeader/>
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            listmenu: [
                {
                    data: [
                        {
                            name: 'Tích điểm'
                        },
                        {
                            name: 'Đặt hàng'
                        },
                        {
                            name: 'Ví của tôi'
                        }
                    ]
                }
            ],

            list: []
        };
    }

    onItemClick() {
        this.props.navigation.navigate('Details');
    }

    renderNewsItem = ({item}) => (
        <View>
            <TouchableOpacity activeOpacity={0.7} onPress={() => this.onItemClick()}>
                <NewItem item={item}/>
            </TouchableOpacity>
        </View>
    );

    renderMenuItem = ({item}) => (
        <View>
            <MenuList data={item.data}/>
        </View>
    );

    async componentDidMount() {
        this.props.getNews();
    }

    render() {

        return (
            <View>

                <TouchableOpacity onPress={() => this.props.getNews()}>

                    <Text>Click me</Text>
                </TouchableOpacity>

                <SectionList
                    keyExtractor={(item, index) => index.toString()}
                    sections={[ // heterogeneous rendering between sections
                        {data: this.props.data, key: '12', renderItem: this.renderNewsItem}
                    ]}
                />

            </View>
        );
    }


}

function mapStateToProps(state) {
    return {
        loading: state.newsReducer.loading,
        data: state.newsReducer.newsdata,
        error: state.newsReducer.error
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);