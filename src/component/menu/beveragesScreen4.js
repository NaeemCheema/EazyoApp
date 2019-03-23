import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions, Platform,
    ScrollView, FlatList } from 'react-native';
import { background, fonts } from '../../colors';
import { Actions } from 'react-native-router-flux';

const back = require('../../assets/images/back/icnArrowLeftWhite.png');
const menu = require('../../assets/images/menu/menu.png');
const forward = require('../../assets/images/forward/icn-arrow-go.png');

const menuIcon = require('../../assets/images/menuIcon/Menu.png');
const accountIcon = require('../../assets/images/accountIcon/Account.png');
const orderIcon = require('../../assets/images/orderIcon/Orders.png');

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export default class BeveragesScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            ENTRIES3: [
                {
                    title: 'Beverage S.5',
                    description: 'There\'s a Coke for him and her and',
                    price: '$5.99'
                },
                {
                    title: 'Beverage S.6',
                    description: 'There\'s a Coke for him and her and',
                    price: '$5.99'
                },
                {
                    title: 'Beverage S.7',
                    description: 'There\'s a Coke for him and her and',
                    price: '$5.99'
                },
                {
                    title: 'Beverage S.8',
                    description: 'There\'s a Coke for him and her and',
                    price: '$5.99'
                },
                {
                    title: 'Beverage S.5',
                    description: 'There\'s a Coke for him and her and',
                    price: '$5.99'
                },
                {
                    title: 'Beverage S.6',
                    description: 'There\'s a Coke for him and her and',
                    price: '$5.99'
                },
                {
                    title: 'Beverage S.7',
                    description: 'There\'s a Coke for him and her and',
                    price: '$5.99'
                },
                {
                    title: 'Beverage S.8',
                    description: 'There\'s a Coke for him and her and',
                    price: '$5.99'
                },
            ],
        }
    }

    onBackPress = () => {
        Actions.pop();
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.absoluteView}>
                    <View style={styles.header}>
                        <View style={styles.headerTextView}>
                            <Text style={styles.headerText}>Beverages</Text>
                        </View>
                        <TouchableOpacity style={styles.backIconView} onPress={() =>  this.onBackPress()}>
                            <Image source={back} style={styles.backIconStyle}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.mainContainer}>
                        <FlatList
                            style={styles.otherGridList}
                            data={this.state.ENTRIES3}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity style={styles.otherProductView} key={index} >
                                    <Text style={styles.otherProductText}>{item.title}</Text>
                                    <Text style={styles.otherProductDescription}>{item.description}</Text>
                                    <Text style={styles.otherProductPrice}>{item.price}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
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
        left: 0, top: 0, right: 0, bottom: 94
    },
    bottomView:{
        position: 'absolute',
        left:0, right: 0,
        bottom: 0, 
        height: Platform.OS == 'ios' ? 94 : 84, 
        backgroundColor: '#ffffff',
        flexDirection: 'row'
    },
    bottomTabs: {
        flex: 1,
        width: SCREEN_WIDTH*0.3333,
        flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center'
    },
    selectedTabText: {
        textAlign: 'center',
        fontSize: 10,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0.12,
        color: "#2a2c30"
    },
    tabText: {
        fontSize: 10,
        fontWeight: "600",
        fontStyle: "normal",
        letterSpacing: 0.12,
        color: "#52c4c6"
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
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#f8f8f8',
    },
    sodasView: {
        marginTop: 20,
        marginLeft: 19
    },
    sodasText: {
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f858c"
    },
    gridList: {
        flex:1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 18,
        marginBottom: 20
    },
    gridView: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
        marginBottom: 10,
        borderRadius: 9,
        backgroundColor: '#ffffff'
    },
    imageThumbnail: {
        alignSelf: 'center',
        height: 96,
        width: '100%',
        overflow: 'hidden',
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
    },
    gridDescriptionView: {
        marginTop: 14,
        marginLeft: 12,
        marginRight: 20,
        marginBottom: 11
    },
    productTitle: {
        fontFamily: "GothamRounded-Book",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#0d0d0f"
    },
    productPrice: {
        marginTop: 4,
        fontFamily: "GothamRounded-Book",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    },
    anotherGridView: {
        marginTop: 10,
        marginLeft: 19
    },
    anotherGridText: {
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f858c"
    },
    otherGridList: {
        flex: 1,
        marginTop: 20,
        marginBottom: 20
    },
    otherProductView: {
        flex: 1, 
        flexDirection: 'column', 
        backgroundColor: background.white,
        borderColor: 'rgb(239,239,239)',
        borderTopWidth: 1,
        height: 79,
        justifyContent: 'center'
    },
    otherProductText: {
        marginLeft: 13,
        fontFamily: fonts.title,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.black
    },
    otherProductDescription: {
        marginLeft: 13,
        fontFamily: "Helvetica",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#656769"
    },
    otherProductPrice: {
        position: 'absolute',
        right: 20,
        top: 22,
        fontFamily: "GothamRounded-Book",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    }
});