import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { background, fonts } from '../../colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const back = require('../../assets/images/back/icnArrowLeftWhite.png');

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export default class OrderDetail extends Component {

    onBackPress = () => {
        Actions.pop();
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.absoluteView}>
                    <View style={styles.header}>
                        <View style={styles.headerTextView}>
                            <TouchableOpacity style={styles.saveView} onPress={() => this.onBackPress()}>
                                <Text style={styles.saveText}>Help</Text>
                            </TouchableOpacity>
                            <Text style={styles.headerText}>Order Details</Text>
                            <TouchableOpacity style={styles.backIconView} onPress={() =>  this.onBackPress()}>
                                <Image source={back} style={styles.backIconStyle}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.progressView}>
                            <Text style={styles.orderProgressText}>Ordered</Text>
                            <Text style={styles.inProgressText}>In Progress</Text>
                            <Text style={styles.onWayText}>On it's Way!</Text>
                        </View>
                        <View style={styles.progressBarView}>
                            <Icon name={'check-circle'} size={22} color={background.white} style={styles.orderIcon}/>
                            <View style={styles.lineView}/>
                            <Icon name={'check-circle'} size={22} color={background.white} style={styles.progressIcon} />
                            <View style={styles.wayLineView}/>
                            <FontAwesomeIcon name={'circle'} size={22} color={'#44a5a7'} style={styles.wayIcon}/>
                        </View>
                    </View>
                    <ScrollView style={styles.mainContainer}>
                        <View style={styles.progressTextView}>
                            <Text style={styles.progressText}>In Progress</Text>
                            <Text style={styles.orderText}>Order 35</Text>
                            <Text style={styles.deliveryText}>Delivered From Lummus Park</Text>
                        </View>
                        <View style={styles.myOrderView}>
                            <Text style={styles.myOrderText}>My Order</Text>
                        </View>
                        <View style={styles.orderListView}>
                            <View style={styles.listView}>
                                <View style={styles.list}>
                                    <Text style={styles.listCount}> 1x </Text>
                                    <Text style={styles.listItemName}> Coca Cola </Text>
                                    <Text style={styles.listPrice}>$5.00</Text>
                                </View>
                            </View>
                            <View style={styles.listView}>
                                <View style={styles.list}>
                                    <Text style={styles.listCount}> 1x </Text>
                                    <Text style={styles.listItemName}> Coca Cola </Text>
                                    <Text style={styles.listPrice}>$5.00</Text>
                                </View>
                            </View>
                            <View style={styles.listView}>
                                <View style={styles.list}>
                                    <Text style={styles.listItemName}> Oasis Pool 34 </Text>
                                    <Text style={styles.listPrice}>$400.00</Text>
                                </View>
                            </View>
                            <View style={styles.listView}>
                                <View style={styles.list}>
                                    <Text style={styles.listCount}> Subtotal </Text>
                                    <Text style={styles.listTotalPrice}>$410.00</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.paymentView}>
                            <Text style={styles.paymentText}>Payment</Text>
                        </View>
                        <View style={styles.paymentViewCard}>
                            <View style={styles.paymentlist}>
                                <Text style={styles.paymentType}>MasterCard</Text>
                                <Text style={styles.paymentCardNumber}>Ending 7921</Text>
                                <FontAwesomeIcon name={'cc-mastercard'} size={30} color={background.orange} style={styles.mastercardIcon} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    absoluteView: {
        position: 'absolute',
        top:0, left: 0, right: 0,
        bottom: 0
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#52c4c6',
        height: SCREEN_HEIGHT * 0.221
    },
    headerTextView: {
        position: 'absolute',
        left: 0, top: 0, right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerText: {
        marginTop: 54,
        fontFamily: fonts.title,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff"
    },
    saveView: {
        right: 20,
        position: 'absolute',
        flexDirection: 'row'
    },
    saveText: {
        marginTop: 56,
        fontFamily: fonts.title,
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#f9f9f9"
    },
    backIconView: {
        position: 'absolute',
        left: 16, top: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    backIconStyle: {
        height: 14,
        width: 9,
        marginTop: 55
    },
    progressView: {
        position: 'absolute',
        left: 0, right: 0,
        top: (SCREEN_HEIGHT * 0.222)/2.45,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderProgressText: {
        left: 18,
        position: 'absolute',
        fontFamily: fonts.title,
        fontSize: 13,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#f9f9f9"
    },
    inProgressText: {
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 13,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#f9f9f9"
    },
    onWayText: {
        right: 20,
        position: 'absolute',
        fontFamily: fonts.title,
        fontSize: 13,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#44a5a7"
    },
    progressBarView: {
        position: 'absolute',
        left: 0, right: 0,
        top: (SCREEN_HEIGHT * 0.222)/1.25,
        flex: 1,
        justifyContent: 'center'
    },
    orderIcon: {
        left: 14,
        position: 'absolute'
    },
    progressIcon: {
        position: 'absolute',
        alignSelf: 'center',
    },
    wayIcon: {
        right: 14,
        position: 'absolute'
    },
    lineView:{
        height: 4,
        backgroundColor: '#ffffff',
        marginLeft: 30,
        width: (SCREEN_WIDTH/2) - 40
    },
    wayLineView: {
        height: 4,
        backgroundColor: '#44a5a7',
        right: 30,
        position: 'absolute',
        width: (SCREEN_WIDTH/2) - 40
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
    },
    progressTextView: {
        marginTop: 28,
        marginLeft: 18
    },
    progressText: {
        fontFamily: fonts.title,
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: '#67bd5e'
    },
    orderText: {
        marginTop: 3,
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    deliveryText: {
        marginTop: 1,
        fontFamily: fonts.title,
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#939598"
    },
    myOrderView: {
        marginTop: 35,
        marginLeft: 20,
    },
    myOrderText: {
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    orderListView: {
        height: 168,
        marginTop: 22,
        marginLeft: 20,
        marginRight: 20, 
        borderRadius: 9,
        backgroundColor: background.white,
        shadowColor: "rgba(221, 231, 243, 0.66)",
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowRadius: 27,
        shadowOpacity: 1
    },
    listView: {
        flexDirection: 'row', 
        backgroundColor: background.white,
        borderColor: 'rgb(239,239,239)',
        borderBottomWidth: 1,
    },
    list: {
        flex: 1,
        marginTop: 16,
        marginLeft: 10,
        marginBottom: 8,
        backgroundColor: background.white,
        flexDirection: 'row',
    },
    listCount: {
        fontFamily: fonts.title,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    },
    listItemName: {
        marginLeft: 5,
        fontFamily: fonts.title,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.black
    },
    listPrice: {
        textAlign: 'right',
        position: 'absolute',
        right: 14,
        fontFamily: fonts.title,
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#66686a"
    },
    listTotalPrice: {
        textAlign: 'right',
        position: 'absolute',
        right: 14,
        fontFamily: fonts.title,
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    },
    paymentView: {
        marginTop: 38,
        marginLeft: 20
    },
    paymentText: {
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    paymentViewCard: {
        width: 335,
        height: 79,
        marginLeft: 20,
        marginTop: 23,
        borderRadius: 9,
        backgroundColor: background.white,
        shadowColor: "rgba(221, 231, 243, 0.66)",
        shadowOffset: {
          width: 0,
          height: 12
        },
        shadowRadius: 27,
        shadowOpacity: 1
    },
    paymentlist: {
        flex: 1,
        marginTop: 23,
        marginLeft: 14,
        marginBottom: 8,
        backgroundColor: background.white,
        flexDirection: 'column',
    },
    paymentType: {
        fontFamily: fonts.title,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.black
    },
    paymentCardNumber: {
        fontFamily: "Helvetica",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#656769"
    },
    mastercardIcon: {
        textAlign: 'right',
        position: 'absolute',
        right: 14,
    }
})