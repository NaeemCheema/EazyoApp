import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity,
    FlatList, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { background, fonts } from '../../colors';

const {width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const back = require('../../assets/images/back/icnArrowLeftOrange.png');
const forward = require('../../assets/images/forward/icnArrowCircle.png');

export default class SelectLocation extends Component{

    onVendorSelectionPress = () => {
        Actions.venue_detail();
    }

    onBackPress = () => {
        Actions.pop();
    }

    _keyExtractor = (item, index) => item.key;

    renderVendorItems = ({index, item}) => {
        return(
            <TouchableOpacity style={styles.imageView} key={index} onPress={() => this.onVendorSelectionPress()}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imageStyle}
                        source={item.url}
                        resizeMode="stretch"
                    />
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.imageTitle}>{item.title}</Text>
                    <TouchableOpacity style={styles.iconStyle} onPress={() => this.onVendorSelectionPress()}>
                        <Image source={forward} style={styles.forwardIconStyle}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.imageLocationText}>{item.address}</Text>
                <Text style={styles.imageDescription}>{item.description}</Text>
            </TouchableOpacity>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.absoluteView}>
                    <View style={styles.header}>
                        <View style={styles.headerTextView}>
                            <Text style={styles.headerText}>Select your location?</Text>
                        </View>
                        <TouchableOpacity onPress={() =>  this.onBackPress()}>
                            <Image source={back} style={styles.backImageStyle}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.scrollView}>
                        <FlatList
                            style={styles.flatListView}
                            data={[
                                {
                                    key: 'item1',
                                    url: require('../../assets/images/vendor/InitialVendor.png'),
                                    title: 'Lummus Park',
                                    address: '4525 Collins Ave, Miami Beach, FL 33140',
                                    description: 'There\'s a Coke for him and her and them and he a\nAnd though we all are different, we\'re better as a "we."'
                                },
                                {
                                    key: 'item2',
                                    url: require('../../assets/images/venue/venue.png'),
                                    title: 'Fort Lauderdale Beach',
                                    address: '4525 Collins Ave, Miami Beach, FL 33140',
                                    description: 'There\'s a Coke for him and her and them and he a\nAnd though we all are different, we\'re better as a "we."'
                                },
                                {
                                    key: 'item3',
                                    url: require('../../assets/images/vendor/InitialVendor.png'),
                                    title: 'Lummus Park',
                                    address: '4525 Collins Ave, Miami Beach, FL 33140',
                                    description: 'There\'s a Coke for him and her and them and he a\nAnd though we all are different, we\'re better as a "we."'
                                },
                                {
                                    key: 'item4',
                                    url: require('../../assets/images/venue/venue.png'),
                                    title: 'Fort Lauderdale Beach',
                                    address: '4525 Collins Ave, Miami Beach, FL 33140',
                                    description: 'There\'s a Coke for him and her and them and he a\nAnd though we all are different, we\'re better as a "we."'
                                },
                                {
                                    key: 'item5',
                                    url: require('../../assets/images/vendor/InitialVendor.png'),
                                    title: 'Lummus Park',
                                    address: '4525 Collins Ave, Miami Beach, FL 33140',
                                    description: 'There\'s a Coke for him and her and them and he a\nAnd though we all are different, we\'re better as a "we."'
                                },
                            ]}
                            renderItem={this.renderVendorItems}
                            keyExtractor={this._keyExtractor}
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
        backgroundColor: background.white
    },
    absoluteView: {
        position: 'absolute',
        top: 50,
        left: 0, right: 0, bottom: 0
    },
    header: {
        flexDirection: 'row',
        marginTop: 4,
        paddingBottom: 20,
        borderBottomColor: '#b3b3b3',
        borderBottomWidth: 1
    },
    headerTextView: {
        position: 'absolute',
        left: 0, top: 0, right: 0, bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center', alignItems: 'center',
    },
    headerText: {
        paddingBottom: 8,
        fontFamily: fonts.title,
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.43,
        color: background.black
    },
    backImageStyle: {
        height: 14,
        marginLeft: 20
    },
    scrollView: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 10,
        marginBottom: 20
    },
    flatListView: {
        flex:1,
        marginLeft: 20,
        marginRight: 20,
    },
    imageView:{
        flex: 1,
        flexDirection: 'column',
        marginTop: 16
    },
    imageContainer: {
        marginTop: 10,
        marginBottom: 10
    },
    imageStyle:{
        height: 264,
        alignSelf: 'center',
        width: '100%',
        borderRadius: 8,
    },
    imageTitle: {
        marginTop: 10,
        fontFamily: fonts.title,
        fontSize: 21,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#0d0d0f"
    },
    iconStyle: {
        flex: 1,
        alignSelf: 'flex-end',
        right: 5,
        position: 'absolute'
    },
    forwardIconStyle: {
        height: 23, width: 23,
        marginBottom: 7,
        marginRight: -5
    },
    imageLocationText: {
        marginTop: -2.5,
        fontFamily: "SFCompactText-Medium",
        fontSize: 11,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.orange
    },
    imageDescription: {
        marginTop: 9,
        marginBottom: 3,
        fontFamily: "SFCompactText-LightItalic",
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 18.3,
        letterSpacing: 0,
        color: "#0d0d0f"
    },
})
