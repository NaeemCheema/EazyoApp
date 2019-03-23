import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { background, fonts } from '../../colors';

const back = require('../../assets/images/back/icnArrowLeftWhite.png');
const venue = require('../../assets/images/venue/venue.png');
const forward = require('../../assets/images/forward/icn-arrow-go.png');
const sketch = require('../../assets/images/order/bg-sketch.png');

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export default class MyOrder extends Component {

    onBackPress = () => {
        Actions.pop();
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.absoluteView}>
                    <View style={styles.header}>
                        <View style={styles.headerTextView}>
                            <Text style={styles.headerText}>My Orders</Text>
                        </View>
                        {/*<TouchableOpacity style={styles.backIconView} onPress={() =>  this.onBackPress()}>
                            <Image source={back} style={styles.backIconStyle}/>
                        </TouchableOpacity>*/}
                    </View>
                    <ScrollView style={styles.mainContainer}>
                        <View style={styles.inprogressView}>
                            <Text style={styles.completedText}>In Progress</Text>
                        </View>
                        <TouchableOpacity style={styles.inprogressImageView} onPress={() => Actions.order_detail()}>
                            <Image source={sketch} resizeMode='cover' style={styles.imageStyle}/>
                            <View style={styles.orderInProgressView}>
                                <Text style={styles.pickUpStyle}>Wainting to pick-up</Text>
                                <Text style={styles.pickUpOrderStyle}>Order 34</Text>
                                <Text style={styles.pickUpOrderDetailStyle}>$211 | 8 June 2018 | Oasis 45</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.completedView}>
                            <Text style={styles.completedText}>Completed</Text>
                        </View>
                        <View style={styles.OrderListView}>
                            <View style={styles.orderList}>
                                <View style={styles.listImageView}>
                                    <Image source={venue} resizeMode='cover'/>
                                </View>
                                <View style={styles.orderDetailedView}>
                                    <Text style={styles.deliveryTest}>Delivery</Text>
                                    <Text style={styles.orderText}>Order 34</Text>
                                    <Text style={styles.orderDetailText}>$211 | 8 June 2018 | Oasis 45</Text>
                                </View>
                                <Image source={forward} style={styles.forwardImageView}/>
                            </View>
                            <View style={styles.orderList}>
                                <View style={styles.listImageView}>
                                    <Image source={venue} resizeMode='cover'/>
                                </View>
                                <View style={styles.orderDetailedView}>
                                    <Text style={styles.deliveryTest}>Delivery</Text>
                                    <Text style={styles.orderText}>Order 33</Text>
                                    <Text style={styles.orderDetailText}>$211 | 8 June 2018 | Oasis 45</Text>
                                </View>
                                <Image source={forward} style={styles.forwardImageView}/>
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
        flex: 1
    },
    absoluteView: {
        position: 'absolute',
        top:0, left: 0, right: 0,
        bottom: 94
    },
    header: {
        flexDirection: 'row',
        backgroundColor: background.orange,
        height: SCREEN_HEIGHT * 0.112
    },
    headerTextView: {
        position: 'absolute',
        left: 0, top: 0, right: 0, bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerText: {
        marginTop: 56,
        fontFamily: fonts.title,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff"
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
    mainContainer: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        flexDirection: 'column',
    },
    inprogressView: {
        marginTop: 32,
        marginLeft: 20
    },
    inprogressImageView: {
        height: 164,
        marginTop: 22,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 9,
        backgroundColor: '#ffffff'
    },
    imageStyle: {
        alignSelf: 'center',
        width: 337,
        height: 164
    },
    completedView: {
        marginTop: 32,
        marginLeft: 20
    },
    completedText: {
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f848c"
    },
    OrderListView: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    orderList:{
        flex: 1,
        marginTop: 12,
        backgroundColor: '#ffffff',
        height: 80,
        flexDirection: 'row',
        borderRadius: 9
    },
    listImageView: {
        height: 80,
        width: 81,
        overflow: 'hidden',
        borderTopLeftRadius: 9,
        borderBottomLeftRadius: 9
    },
    orderDetailedView: {
        flex:1 ,
        flexDirection: 'column',
        marginLeft: 14
    },
    deliveryTest: {
        marginTop: 13, 
        fontFamily: fonts.title,
        fontSize: 10,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#939598"
    },
    orderText: {
        marginTop: 7, 
        fontFamily: fonts.title,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    },
    orderDetailText: {
        marginTop: 5,
        fontFamily: fonts.title,
        fontSize: 10,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#939598"
    },
    forwardImageView: {
        position: 'absolute',
        right: 9,
        top: 28
    },
    orderInProgressView: {
        position: 'absolute',
        top: 82,
        left: 18,
        bottom: 0
    },
    pickUpStyle: {
        fontFamily: fonts.title,
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    },
    pickUpOrderStyle: {
        marginTop: 2,
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    pickUpOrderDetailStyle: {
        marginTop: 1,
        fontFamily: fonts.title,
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#939598"
    }
})