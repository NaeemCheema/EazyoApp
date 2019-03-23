import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, 
    Image, ScrollView, Platform } from 'react-native';
import { background, fonts } from '../../colors.js';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const back = require('../../assets/images/back/icnArrowLeftWhite.png');

export default class Checkout extends Component {

    constructor(props){
        super(props);
        this.state = {
            location: false,
            describe: false,
            paymentMethod: false,
            paymentType: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("props: ", nextProps);
        if(nextProps){
            if(nextProps.location){
                this.setState({location: true});
            }
            if(nextProps.desc){
                this.setState({describe: true});
            }
            if(nextProps.paymentMethod){
                this.setState({
                    paymentMethod: true,
                    paymentType: nextProps.paymentMethod
                });
            }
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.absoluteView}>
                    <View style={styles.header}>
                        <View style={styles.headerTextView}>
                            <Text style={styles.headerText}>Checkout</Text>
                        </View>
                        <TouchableOpacity style={styles.backButtonView} onPress={() => Actions.pop()}>
                            <Image source={back} style={styles.backButtonStyle}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.mainContainer}>
                        <View style={styles.deliveryView}>
                            <Text style={styles.deliveryText}>Delivery</Text>
                            <Text style={styles.hotelText}>Lummus Park Bar</Text>
                            <Text style={styles.addressText}>1020 Ocean Dr - first floor</Text>
                        </View>
                        <View style={styles.orderView}>
                            <Text style={styles.orderText}>Review Order</Text>
                        </View>
                        <View style={styles.listView}>
                            <View style={styles.list}>
                                <Text style={styles.listCount}> 1x </Text>
                                <Text style={styles.listItemName}> Coca Cola </Text>
                                <Text style={styles.listPrice}>$5.99</Text>
                            </View>
                        </View>
                        <View style={styles.listView}>
                            <View style={styles.list}>
                                <Text style={styles.listCount}> 2x </Text>
                                <Text style={styles.listItemName}> CheeseBurgers </Text>
                                <Text style={styles.listPrice}>$5.99</Text>
                            </View>
                        </View>
                        <View style={styles.nextView}>
                            <Text style={styles.nextText}>Next Steps</Text>
                        </View>
                        <TouchableOpacity style={styles.listView} onPress={() => Actions.set_location()}>
                            { !this.state.location &&
                                <View style={styles.nextlist}>
                                    <Text style={[styles.nextTtile, { color: background.orange }]}> Set your location </Text>
                                    <Text style={styles.nextPlus}>+</Text>
                                </View>
                            }
                            { this.state.location && 
                                <View style={styles.nextlist}>
                                    <Icon name="check" size={14} color={background.boringGreen} style={styles.tickIcon}/>
                                    <Text style={[styles.nextTtile, { color: '#000000' }]}> Set your location </Text>
                                    <Text style={styles.editText}>Edit</Text>
                                </View>
                            }
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listView} onPress={() => Actions.find_us()}>
                        { !this.state.describe &&
                            <View style={styles.nextlist}>
                                <Text style={[styles.nextTtile, { color: this.state.describe == true ? background.orange : '#7f858c'}]}> Help us find you </Text>
                                <Text style={styles.nextPlus}>+</Text>
                            </View>
                        }
                        { this.state.describe &&
                            <View style={styles.nextlist}>
                                <Icon name="check" size={14} color={background.boringGreen} style={styles.tickIcon}/>
                                <Text style={[styles.nextTtile, { color: '#000000'}]}> Help us find you </Text>
                                <Text style={styles.editText}>Edit</Text>
                            </View>
                        }
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.listView} onPress={() => Actions.payment_info()}>
                            { !this.state.paymentMethod && 
                                <View style={styles.nextlist}>
                                    <Text style={[styles.nextTtile, { color: this.state.describe == true ? background.orange : '#7f858c'}]} > Payment Info </Text>
                                    <Text style={styles.nextPlus}>+</Text>
                                </View>
                            }
                            { this.state.paymentMethod && 
                                <View style={styles.nextlist}>
                                    <Icon name="check" size={14} color={background.boringGreen} style={styles.tickIcon}/>
                                    <Text style={[styles.nextTtile, { color: '#000000'}]}> Payment Info </Text>
                                    <Text style={styles.editText}>{this.state.paymentType}</Text>
                                </View>
                            }
                        </TouchableOpacity>
                        <View style={styles.breakdownView}>
                            <Text style={styles.breakdownText}>Order Breakdown</Text>
                        </View>
                        <View style={styles.listView}>
                            <View style={styles.breakdownlist}>
                                <Text style={[styles.nextTtile, { color: '#7f858c'}]}> Subtotal </Text>
                                <Text style={styles.breeakdownPrice}>$11.98</Text>
                            </View>
                        </View>
                        <View style={styles.listView}>
                            <View style={styles.breakdownlist}>
                                <Text style={[styles.nextTtile, { color: '#7f858c'}]}> Tax(6%) </Text>
                                <Text style={styles.breeakdownPrice}>$12.81</Text>
                            </View>
                        </View>
                        <View style={styles.listView}>
                            <View style={styles.breakdownlist}>
                                <Text style={[styles.nextTtile, { color: '#7f858c'}]}> Label Fee(18%) </Text>
                                <Text style={styles.breeakdownPrice}>$1.66</Text>
                            </View>
                        </View>
                        <View style={styles.listView}>
                            <View style={styles.breakdownlist}>
                                <Text style={[styles.nextTtile, { color: '#7f858c'}]}> Tip (18%) </Text>
                                <Text style={styles.tipText}>ADJUST TIP</Text>
                                <Text style={styles.breeakdownPrice}>$12.81</Text>
                            </View>
                        </View>
                        <View style={styles.listView}>
                            <View style={styles.breakdownlist}>
                                <Text style={[styles.nextTtile, { color: '#7f858c'}]}> Total </Text>
                                <Text style={styles.breeakdownPrice}>$11.98</Text>
                            </View>
                        </View>

                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.orderButtonStyle} onPress={() => Actions.Order()}>
                                <Text style={styles.orderButtonText}>Place Order</Text>
                            </TouchableOpacity>
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
        left: 0, top:0,
        right: 0, bottom: 94,
        position: 'absolute'
    },
    header: {
        flexDirection: 'row',
        backgroundColor: background.orange,
        height: SCREEN_HEIGHT * 0.112
    },
    headerTextView: {
        left: 0, top: 0, right: 0, bottom: 0,
        position: 'absolute',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    headerText: {
        marginTop: 56,
        fontFamily: "GothamRounded-Book",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.white
    },
    backButtonView: {
        left: 16, top: 0,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    backButtonStyle: {
        height: 14,
        width: 9,
        marginTop: 55
    },
    mainContainer: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#f9f9f9'
    },
    deliveryView:{
        marginTop: 32,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: background.white,
        shadowColor: "rgba(221, 231, 243, 0.66)",
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowRadius: 27,
        shadowOpacity: 5
    },
    deliveryText: {
        marginTop: 14,
        marginLeft: 16,
        fontFamily: fonts.title,
        fontSize: 10,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#0d0d0f"
    },
    hotelText: {
        marginTop:2,
        marginLeft: 16,
        fontFamily: fonts.title,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    },
    addressText: {
        marginTop: 3,
        marginLeft: 16,
        marginBottom: 11,
        fontFamily: fonts.title,
        fontSize: 10,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#939598"
    },
    orderView: {
        marginTop: 38,
        marginLeft: 16,
        marginBottom: 20
    },
    orderText: {
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f858c"
    },
    listView: {
        flexDirection: 'row', 
        backgroundColor: background.white,
        borderColor: 'rgb(239,239,239)',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    list: {
        flex: 1,
        marginTop: 22,
        marginLeft: 16,
        marginBottom: 14,
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
        right: 20,
        fontFamily: fonts.title,
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    },
    nextView: {
        marginTop: 34,
        marginLeft: 16,
        marginBottom: 20
    },
    nextText: {
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f858c"
    },
    nextlist: {
        flex: 1,
        marginTop: 22,
        marginLeft: 16,
        marginBottom: 17,
        backgroundColor: background.white,
        flexDirection: 'row',
    },
    nextTtile: {
        marginLeft: 3,
        fontFamily: fonts.title,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
    },
    nextPlus: {
        textAlign: 'right',
        bottom: -8,
        position: 'absolute',
        right: 18,
        fontFamily: fonts.title,
        fontSize: 30,
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    },
    editText: {
        textAlign: 'right',
        position: 'absolute',
        right: 18,
        fontFamily: fonts.title,
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    },
    tickIcon: {
        justifyContent: 'flex-start',
        height: 18,
        width: 30
    },
    breakdownView: {
        marginTop: 38,
        marginLeft: 16,
        marginBottom: 20
    },
    breakdownText: {
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f858c"
    },
    breakdownlist: {
        flex: 1,
        marginTop: 21,
        marginLeft: 16,
        marginBottom: 8,
        backgroundColor: background.white,
        flexDirection: 'row',
    },
    breeakdownPrice: {
        textAlign: 'right',
        position: 'absolute',
        right: 20,
        fontFamily: fonts.title,
        fontSize: 14,
        fontWeight: "500",
        letterSpacing: 0,
        color: background.black
    },
    tipText: {
        width:82,
        height: 18,
        paddingTop: 3.5,
        backgroundColor: background.orange, 
        color: background.white,
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 11,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
    },
    buttonView: {
        marginTop: Platform.OS == 'ios' ? 15 : 0,
        marginLeft: 20, marginRight: 20,
        marginBottom: 30
    },
    orderButtonStyle: {
        backgroundColor: background.orange,
        borderColor: background.orange,
        marginTop: 8,
        marginBottom: 8,
        paddingTop: 17.5,
        paddingBottom: 17.5,
        borderRadius: 10,
        borderWidth: 1
    },
    orderButtonText: {
        paddingTop: Platform.OS =='ios' ? 7 : 0,
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.white
    },
})