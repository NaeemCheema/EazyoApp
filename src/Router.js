import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, Dimensions } from 'react-native';
import {  Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import AuthScreen from '../src/component/auth/authScreen';
import CreateAccountScreen from '../src/component/auth/createAccountScreen';
import SignInScreen from '../src/component/auth/signInScreen';
import WebViewScreen from '../src/component/auth/webViewScreen';


import ConfirmLocation from '../src/component/home/confirmLocation';
import SelectLocation from './component/home/selectLocation';
import VenueDetail from './component/home/venueDetail';
import MenuScreen from './component/menu/menuScreen';
import BeveragesScreen1 from './component/menu/beveragesScreen1';
import BeveragesScreen2 from './component/menu/beveragesScreen2';
import BeveragesScreen3 from './component/menu/beveragesScreen3';
import BeveragesScreen4 from './component/menu/beveragesScreen4';
import MenuDetail from './component/menu/menuDetailedScreen';


import CheckoutDetail from './component/checkout/checkout';
import SetLocation from './component/checkout/setLocation';
import FindUs from './component/checkout/findUs';
import PaymentInfo from './component/checkout/paymentInfo';


import EmptyOrder from './component/order/emptyOrder';
import MyOrder1 from './component/order/myOrder1';
import MyOrder2 from './component/order/myOrder2';
import OrderDetail from './component/order/orderDetail';

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const menuIcon = require('./assets/images/tabbar/Menu.png');
const accountIcon = require('./assets/images/tabbar/Account.png');
const orderIcon = require('./assets/images/tabbar/Orders.png');

const MenuIcon= ({ title, focused, selected }) => {
    console.log("focused: ", focused);
    return(
        <View style={styles.bottomTabs}>
            <Image source={menuIcon} style={{flex:1,height: 32, width: 50, alignSelf: 'center', marginTop: 15, marginLeft: 17}} resizeMode='contain' />
            <Text style={[styles.selectedTabText, {paddingLeft: 17, paddingTop: 5}]}>Menu</Text>
        </View>
    )
}

const OrderIcon = ({ title, focused }) => {
    return (
        <View style={styles.bottomTabs}>
            <Image source={orderIcon} style={{flex:1,height: 30, width: 35, alignSelf: 'center', marginTop: 15}} resizeMode='contain' />
            <Text style={[styles.selectedTabText, {paddingTop: 5}]}>Orders</Text>
        </View>
    )
}

const AccountIcon = ({ title, focused }) => {
    return (
        <View style={styles.bottomTabs}>
            <Image source={accountIcon} style={{flex:1,height: 30, width: 50, alignSelf: 'center', marginTop: 15, marginRight: 30}} resizeMode='contain' />
            <Text style={[styles.selectedTabText,{paddingRight: 30, paddingTop: 5}]}>Account</Text>
        </View>
    )
}

export default class RouterComponent extends Component{
    render(){
        return(
            <Router>
                <Scene key='root' hideNavBar>

                    <Scene key='auth' hideNavBar>
                        <Scene key='authScreen' component={AuthScreen} hideNavBar/>
                        <Scene key='createAccountScreen' component={CreateAccountScreen} hideNavBar/>
                        <Scene key='signInScreen' component={SignInScreen} hideNavBar/>
                        <Scene key='webViewScreen' component={WebViewScreen} hideNavBar/>
                    </Scene>
                    <Scene key='home' hideNavBar>
                        <Scene key='confirm_location' component={ConfirmLocation} hideNavBar/>
                        <Scene key='select_location' component={SelectLocation} hideNavBar/>
                        <Scene key='venue_detail' component={VenueDetail} hideNavBar/>

                        <Scene key='menu_screen' 
                            tabs={true} 
                            tabBarStyle={styles.bottomView}
                            activeTintColor={'#000000'}
                            inactiveTintColor={'#52c4c6'}
                            default="Menu"
                            showLabel={false}
                            swipeEnabled={true}
                            hideNavBar
                        >
                            <Scene
                                key="Menu"
                                title="menu"
                                icon={MenuIcon}
                                initial={true}
                                hideNavBar
                            >
                                <Scene key='menu_screen' component={MenuScreen} hideNavBar/>
                                <Scene key='beverages_screen1' component={BeveragesScreen1} hideNavBar/>
                                <Scene key='beverages_screen2' component={BeveragesScreen2} hideNavBar/>
                                <Scene key='beverages_screen3' component={BeveragesScreen3} hideNavBar/>
                                <Scene key='beverages_screen4' component={BeveragesScreen4} hideNavBar/>
                                <Scene key='menu_detail' component={MenuDetail} hideNavBar/>
                                <Scene key='checkout_detail' component={CheckoutDetail} hideNavBar />
                                <Scene key='set_location' component={SetLocation} hideNavBar/>
                                <Scene key='find_us' component={FindUs} hideNavBar/>
                                <Scene key='payment_info' component={PaymentInfo} hideNavBar/>
                            
                            </Scene>
                            
                            <Scene
                                key="Order"
                                title="order"
                                icon={OrderIcon}
                                hideNavBar={true}
                            >

                                <Scene key='empty_order' component={EmptyOrder} hideNavBar/>
                                <Scene key='my_order1' component={MyOrder1} hideNavBar/>
                                <Scene key='my_order2' component={MyOrder2} hideNavBar/>
                                <Scene key='order_detail' component={OrderDetail} hideNavBar/>
                            </Scene>

                            <Scene  
                                key="Account"
                                title="account"
                                icon={AccountIcon}
                                hideNavBar={true}
                                component={OrderDetail} 
                            />
                        </Scene>
                        
                    </Scene>
                </Scene>
            </Router>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    bottomView:{
        position: 'absolute',
        left:0, right: 0,
        bottom: 0, 
        height: Platform.OS == 'ios' ? 60 : 84, 
        backgroundColor: '#ffffff',
        flexDirection: 'row'
    },
    bottomTabs: {
        flex: 1,
        width: SCREEN_WIDTH*0.3333,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedTabText: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0.12,
    },
    tabText: {
        fontSize: 10,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0.12,
    }
  });