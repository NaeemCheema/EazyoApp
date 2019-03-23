import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const emptyOrder = require('../../assets/images/order/icn-order.png');

export default class EmptyOrder extends Component {
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.absoluteView} onPress={() => Actions.my_order1()}>
                    <Image source={emptyOrder} resizeMode='contain' />
                    <Text style={styles.noOrder}>No orders Yet</Text>
                    <Text style={styles.startOrderText}>Start to order right now :)</Text>
                </TouchableOpacity>
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
        left: 0, top:0, right: 0, bottom: 50,
        backgroundColor: '#f8f8f8',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    noOrder: {
        marginTop: 25,
        fontFamily: "GothamRounded-Book",
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    startOrderText: {
        marginTop: 2,
        fontFamily: "GothamRounded-Book",
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#939598"
    }

})