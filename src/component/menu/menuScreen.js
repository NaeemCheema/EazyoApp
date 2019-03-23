import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, StatusBar, Platform } from 'react-native';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import { Actions } from 'react-native-router-flux';
import { background, fonts } from '../../colors';

import * as Animatable from 'react-native-animatable';
import SideSwipe from 'react-native-sideswipe';

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const back = require('../../assets/images/back/icnArrowLeftWhite.png');
const venue = require('../../assets/images/venue/venue.png');
const forward = require('../../assets/images/forward/icn-arrow-go.png');
const menu = require('../../assets/images/menu/menu.png');

const menuIcon = require('../../assets/images/menuIcon/Menu.png');
const accountIcon = require('../../assets/images/accountIcon/Account.png');
const orderIcon = require('../../assets/images/orderIcon/Orders.png');

const MIN_HEIGHT = 120;
const MAX_HEIGHT = 247;


export default class MenuScreen extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            currentIndex: 0,
            ENTRIES1: [
                {
                    title: 'Beautiful and dramatic Antelope Canyon',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://i.imgur.com/UYiroysl.jpg'
                },
                {
                    title: 'Earlier this morning, NYC',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
                },
                {
                    title: 'White Pocket Sunset',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
                    illustration: 'https://i.imgur.com/MABUbpDl.jpg'
                },
                {
                    title: 'Acrocorinth, Greece',
                    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                    illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
                },
                {
                    title: 'The lone tree, majestic landscape of New Zealand',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
                },
                {
                    title: 'Middle Earth, Germany',
                    subtitle: 'Lorem ipsum dolor sit amet',
                    illustration: 'https://i.imgur.com/lceHsT6l.jpg'
                }
            ]
        }
    }

    onBackPress = () => {
        Actions.pop();
    }

    _renderItem ({item, itemIndex}) {
        return (
            <View style={styles.featuredItemView} index={itemIndex}>
                <View style={styles.imageView}>
                    <Image source={menu} resizeMode='cover'/>
                </View>
                <TouchableOpacity style={styles.priceView}>
                    <Text style={styles.priceText}>$10</Text>
                </TouchableOpacity>    
                <View style={styles.featuredDescriptionView}>
                    <Text style={styles.featuredDescriptionTitle}>Lummus Park</Text>
                    <Text style={styles.featuredDes}>There's a Coke for him and her
                    and them and {'\n'} he and she. And though we all are different</Text>
                </View>
            </View>
        );
    }
    
    render(){
        return(
            <View style={styles.conatiner}>
                <View style={styles.absoluteView}>
                    <StatusBar barStyle="light-content" />
                    <HeaderImageScrollView
                        maxHeight={MAX_HEIGHT}
                        minHeight={MIN_HEIGHT}
                        maxOverlayOpacity={0.6}
                        minOverlayOpacity={0.3}
                        fadeOutForeground
                        renderHeader={() => <Image source={venue} style={styles.image} />}
                        renderFixedForeground={() => (
                            <Animatable.View
                                style = {styles.navTitleView}
                                ref = {navTitleView => {this.navTitleView = navTitleView}}
                            >
                                <View style={styles.headerTextView}>
                                    <Text style={styles.headerText}>Lummus Park</Text>
                                </View>
                                <TouchableOpacity style={styles.backIconView} onPress={() =>  this.onBackPress()}>
                                    <Image source={back} style={styles.backIconStyle}/>
                                </TouchableOpacity>
                            </Animatable.View>
                        )}
                        renderForeground={() => (
                            <View style={styles.headerView}>
                                <View style={styles.headerTextView}>
                                    <Text style={styles.headerText}>Beach</Text>
                                </View>
                                <TouchableOpacity style={styles.backIconView} onPress={() =>  this.onBackPress()}>
                                    <Image source={back} style={styles.backIconStyle}/>
                                </TouchableOpacity>
                            </View>
                        )}
                    >

                        <TriggeringView
                            style={styles.venueDescriptionView}
                            onHide={() => this.navTitleView.fadeInUp(200)}
                            onDisplay={() => this.navTitleView.fadeOut(100)}
                        >
                            <View style={styles.venueMainView}>
                                <Text style={styles.venueNameText}>Lummus Park</Text>
                                <Text style={styles.venueLocationText}>Food Wait: 45 Mins   Drinks : ASAP</Text>
                                <Text style={styles.venueDetailText}>The park is on the eastern side of Ocean Drive, from 5th to 15th Streets.</Text>
                            </View>
                        </TriggeringView>

                        <View style={styles.mainContainer}>
                            <View style={styles.featuredTextView}>
                                <Text style={styles.featuredText}>Featured</Text>
                            </View>
                            <SideSwipe
                                ref={(c) => { this._carousel = c; }}
                                data={this.state.ENTRIES1}
                                renderItem={this._renderItem}
                                itemWidth={320}
                                style={styles.slider}
                                onIndexChange={index =>
                                    this.setState(() => ({ currentIndex: index }))
                                }
                            />
                        </View>
                            <View style={styles.mainContainer}>
                                <View style={styles.pickupView}>
                                    <Text style={styles.featuredText}>Full Menu</Text>
                                </View>
                                <TouchableOpacity style={styles.pickupVenueView} onPress={() => Actions.beverages_screen1()}>
                                    <Text style={styles.deliveryVenueText}>Beverages</Text>
                                    <Image source={forward} style={styles.forwardImageView}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.pickupVenueView} >
                                    <Text style={styles.deliveryVenueText}>Small Plates</Text>
                                    <Image source={forward} style={styles.forwardImageView}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={[styles.pickupVenueView, {borderBottomWidth: 1}]} >
                                    <Text style={styles.deliveryVenueText}>Large Plates</Text>
                                    <Image source={forward} style={styles.forwardImageView}/>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.pickupVenueView} >
                                    <Text style={styles.deliveryVenueText}>Sweets</Text>
                                    <Image source={forward} style={styles.forwardImageView}/>
                                </TouchableOpacity>
                            </View>
                        </HeaderImageScrollView>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    absoluteView: {
        position: 'absolute',
        top:0, left: 0, right: 0,
        bottom: 94
    },
    image: {
        height: MAX_HEIGHT,
        width: Dimensions.get('window').width,
        alignSelf: 'stretch',
        resizeMode: 'cover',
    },
    headerView: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTextView: {
        position: 'absolute',
        left: 0, top: 0, right: 0, bottom: 0,
    },
    headerText: {
        marginTop: 53,
        textAlign: 'center',
        color: '#ffffff',
        fontFamily: "GothamRounded-Book",
        fontSize: 21,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0 
    },
    backIconView: {
        position: 'absolute',
        left: 18, top: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    backIconStyle: {
        height: 14,
        width: 9,
        marginTop: 55
    },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        opacity: 0,
    },
    venueDescriptionView: {
        top: -21,
    },
    venueMainView: {
        flex: 1,
        height: 115,
        flexDirection: 'column',
        backgroundColor: background.white,
        shadowColor: "rgba(221, 231, 243, 0.66)",
        shadowOffset: {
          width: 0,
          height: 12
        },
        shadowRadius: 27,
        shadowOpacity: 1,
        paddingTop:18,
        paddingLeft:17,
        paddingRight:17,
        paddingBottom:18
        // marginRight: 17,
        // marginLeft: 17,
        // marginBottom: 17,
    },
    venueNameText: {
        marginTop: Platform.OS == 'android' ? 15 : 0,
        fontFamily: fonts.title,
        fontSize: 21,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#0d0d0f"
    },
    venueLocationText: {
        marginTop:4,
        fontFamily: "SFCompactText-Medium",
        fontSize: 11,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#66686a"
    },
    venueDetailText: {
        marginTop: 5,
        fontFamily: "Helvetica",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 15.2,
        letterSpacing: 0,
        color: "#656769"
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        flexDirection: 'column'
    },
    featuredTextView: {
        flex: 1, 
        marginTop: 27,
        marginLeft: 18
    },
    featuredText: {
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.black
    },
    slider: {
        flex: 1,
        marginLeft: 14,
        marginRight: 11,
        marginTop: 23,
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
        right: 14,
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
        paddingLeft: 19,
        paddingRight: 19,
        paddingBottom: Platform.OS == 'ios' ? 15 : 10,
        textAlign: 'center',
        fontFamily: "GothamRounded-Book",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    },
    featuredDescriptionView: {
        marginTop: 14,
        marginLeft: 16,
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
    deliveryVenueText: {
        paddingTop: 3,
        marginLeft: 20,
        marginTop: 18,
        marginBottom: 18,
        fontFamily: fonts.title,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.black
    },
    forwardImageView: {
        position: 'absolute',
        right: 20,
        top: 20
    },
    pickupView: {
        flex: 1, 
        marginTop: 38,
        marginLeft: 18,
        marginBottom: 20,
    },
    pickupVenueView: {
        flex: 1, 
        flexDirection: 'row', 
        backgroundColor: background.white,
        borderColor: 'rgb(239,239,239)',
        borderTopWidth: 1,
    },
    keywords: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    keywordContainer: {
        backgroundColor: '#999999',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    keyword: {
        fontSize: 16,
        color: 'white',
    },
    titleContainer: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageTitle: {
        color: 'white',
        backgroundColor: 'transparent',
        fontSize: 24,
    },
    navTitleView: {
        height: MIN_HEIGHT,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 16,
        opacity: 0,
    },
    navTitle: {
        color: 'white',
        fontSize: 18,
        backgroundColor: 'transparent',
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
    }
});
