import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Avatar, Text} from 'react-native-elements';


export default class HeaderNewScreenWidget extends React.Component {

    render() {
        return (
            <View style={styles.headerContainer}>
                <Avatar
                    size="small"
                    rounded
                    source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
                />

                <View style={styles.userContainer}>
                    <Text style={styles.userNameTextStyle}>Đăng Nhựt Yên</Text>
                    <View style={styles.userRewardContainer}>
                        <Text style={styles.rewardLevelTextStyle}>Thành viên Kim Cương</Text>
                        <Image
                            style={styles.blackDotIcon}
                            source={require('../../../../assets/image/ic_black_dot.png')}
                        />
                        <Text style={styles.rewardLevelTextStyle}>1000</Text>
                        <Image
                            style={styles.rewardIcon}
                            source={require('../../../../assets/image/ic_reward.png')}
                        />
                    </View>
                </View>

                <View style={styles.notificationContainer}>
                    <Image
                        style={styles.notificationIcon}
                        source={require('../../../../assets/image/ic_notification.png')}
                    />

                    <View style={styles.badgeContainer}>
                        <Text style={styles.badgeValue}>4</Text>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingStart: 15,
        paddingEnd: 25,
        paddingTop: 5,
        paddingBottom: 5
    },
    userContainer: {
        flexDirection: 'column',
        flex: 1,
        marginStart: 20
    },

    userNameTextStyle: {
        color: '#000',
        fontSize: 15
    },

    userRewardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2
    },

    rewardLevelTextStyle: {
        color: '#000',
        fontSize: 13
    },
    blackDotIcon:{
        width: 5,
        height: 5,
        marginStart: 4,
        marginEnd: 4
    },
    rewardIcon:{
        width: 10,
        height: 10,
        marginStart: 3
    },
    notificationContainer: {
        flexDirection: 'column',
    },
    notificationIcon: {
        width: 25,
        height: 25,

    },
    badgeContainer: {
        justifyContent:'center',
        marginTop: 0,
        alignItems: 'center',
        position: 'absolute',
        marginStart: 15,
        width: 18,
        height: 18,
        borderRadius: 9,
        padding: 5,
        backgroundColor: 'red',
    },
    badgeValue: {
        color: '#FFFFFF',
        fontSize: 10,
    }
});