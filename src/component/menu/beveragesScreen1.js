import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions,
    Image, ScrollView, Platform, FlatList } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { background, fonts } from '../../colors';
import SideSwipe from 'react-native-sideswipe';

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
            currentIndex: 0,
            ENTRIES1: [
                {
                    title: 'Combo Burger X1',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://i.imgur.com/UYiroysl.jpg'
                },
                {
                    title: 'Lummus Park',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
                },
                {
                    title: 'Combo Burger X1',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                    illustration: 'https://i.imgur.com/MABUbpDl.jpg'
                },
                {
                    title: 'Lummus Park',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
                },
                {
                    title: 'Combo Burger X1',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
                },
                {
                    title: 'Lummus Park',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/lceHsT6l.jpg'
                }
            ],
            ENTRIES2 : [
                {
                    title: 'Coca Cola',
                    price: '$5.99',
                },
                {
                    title: 'Beverage S.2',
                    price: '$5.99',
                },
                {
                    title: 'Beverage S.3',
                    price: '$5.99',
                },
                {
                    title: 'Beverage S.4',
                    price: '$5.99',
                },
            ],
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
            ],
        }
    }

    onBackPress = () => {
        Actions.pop();
    }

    onProductPress = (item) => {
        Actions.menu_detail({ product: item });
    }

    _renderItem ({item, itemIndex}) {
        console.log("index: ", itemIndex);
        return (
            <TouchableOpacity style={styles.featuredItemView} index={itemIndex} onPress={() => this.onProductPress(item)}>
                <View style={styles.imageView}>
                    <Image source={menu} resizeMode='cover'/>
                </View>
                <TouchableOpacity style={styles.priceView}>
                    <Text style={styles.priceText}>$5.99</Text>
                </TouchableOpacity>    
                <View style={styles.featuredDescriptionView}>
                    <Text style={styles.featuredDescriptionTitle}>{item.title}</Text>
                    <Text style={styles.featuredDes}>There's a Coke for him and her
                    and them and {'\n'}he and she. And though we all are different,</Text>
                </View>
            </TouchableOpacity>
        );
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
                        <SideSwipe
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.ENTRIES1}
                            renderItem={this._renderItem.bind(this)}
                            itemWidth={320}
                            style={styles.slider}
                            onIndexChange={index =>
                                this.setState(() => ({ currentIndex: index }))
                            }
                        />

                        <View style={styles.sodasView}>
                            <Text style={styles.sodasText}>Sodas</Text>
                        </View>

                        <FlatList
                            style={styles.gridList}
                            data={this.state.ENTRIES2}
                            numColumns={2}
                            renderItem={({ item, index }) => (
                                <View style={styles.gridView} key={index}>
                                    <View style={styles.imageThumbnail}>
                                        <Image source={menu} resizeMode='cover' />
                                    </View>
                                    <View style={styles.gridDescriptionView}>
                                        <Text style={styles.productTitle}>{item.title}</Text>
                                        <Text style={styles.productPrice}>{item.price}</Text>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item, index) => index}
                        />

                        <View style={styles.otherListView}>
                            <FlatList
                                style={styles.otherGridList}
                                data={this.state.ENTRIES3}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity style={styles.otherProductView} key={index} onPress={() => Actions.beverages_screen2()}>
                                        <Text style={styles.otherProductText}>{item.title}</Text>
                                        <Text style={styles.otherProductDescription}>{item.description}</Text>
                                        <Text style={styles.otherProductPrice}>{item.price}</Text>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                            />
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
        bottom: 94,
    },
    bottomView:{
        position: 'absolute',
        left:0, right: 0,
        bottom: 0, 
        height: Platform.OS == 'ios' ? 94 : 84, 
        backgroundColor: '#ffffff',
        flexDirection: 'row'
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
    mainContainer: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        flexDirection: 'column',
    },
    slider: {
        flex: 1,
        marginLeft: 10,
        marginRight: 11,
        marginTop: 20,
        overflow: 'visible'
    },
    featuredItemView: {
        flex: 1,
        marginLeft: 10,
        marginRight: 5,
        flexDirection: 'column',
        borderRadius: 9,
        backgroundColor: '#ffffff',
    },
    imageView: {
        width: '100%',
        alignSelf: 'center', 
        overflow: 'hidden',
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
    },
    priceView: { 
        position: 'absolute',
        right: 12,
        borderRadius: 30, 
        height: 33, top: 116, 
        justifyContent: 'flex-end', 
        backgroundColor: "#fdfefe",
        shadowColor: "rgba(221, 231, 243, 0.66)",
        shadowOffset: {
            width: 0,
            height: 12
        },
        shadowRadius: 27,
        shadowOpacity: 1
    },
    priceText: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: Platform.OS == 'ios' ? 15 : 10,
        textAlign: 'center',
        fontFamily: "GothamRounded-Book",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    },
    featuredDescriptionView: {
        marginTop: 14,
        marginLeft: 15,
        marginRight: 20,
        marginBottom: 18
    },
    featuredDescriptionTitle: {
        fontFamily: "GothamRounded-Book",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#0d0d0f"
    },
    featuredDes: {
        paddingTop:4,
        fontFamily: "Helvetica",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 14.9,
        letterSpacing: 0,
        color: "#656769"
    },
    sodasView: {
        flex: 1, 
        marginTop: 40,
        marginLeft: 18
    },
    sodasText: {
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.black
    },
    gridList: {
        flex:1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 18
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
    otherListView: {
        marginTop: 12
    },
    otherGridList: {
        flex:1,
        marginTop: 18
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

})