import React, { Component } from 'react';
import { View, Image,  Text, StyleSheet, Dimensions, TouchableOpacity, Platform, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { background, fonts } from '../../colors';

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const back = require('../../assets/images/back/icnArrowLeftOrange.png');
const vendor = require('../../assets/images/vendor/InitialVendor.png');

export default class InitialVendor extends Component {

    onBackIconPress = () => {
        Actions.pop();
    }

    cancelLocation = () => {
        Actions.select_location();
    }
    
    render(){
        return(
            <View style={styles.conatiner}>
                <View style={styles.absoluteView}>
                    <TouchableOpacity style={styles.backIcon} onPress={() =>  this.onBackIconPress()}>
                        <Image source={back}/>
                    </TouchableOpacity>
                    <ScrollView style={styles.mainConatiner}>
                        <View style={styles.welcomeTextView}>
                            <Text style={styles.welcomeTextStyle}>Hello!
                                <Text style={styles.hotelTextStyle}> It looks like you{'\n'}are at Lummus Park</Text>
                            </Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.imageStyle}
                                source={vendor}
                                resizeMode="stretch"
                            />
                        </View>
                        <View style={styles.mainTextView}>
                            <Text style={styles.imageTitle}>Lummus Park</Text>
                            <Text style={styles.imageLocationText}>4525 Collins Ave, Miami Beach, FL 33140</Text>
                            <Text style={styles.imageDescription}>There's a Coke for him and her and them and he a And though we all are different, we're better as a "we."</Text>
                        </View>
                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.locationButtonStyle}>
                                <Text style={styles.locationButtonText}>This is My location</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cancelButtonStyle} onPress={() =>  this.cancelLocation()}>
                                <Text style={styles.cancelButtonText}>I am not here</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: background.white
    },
    absoluteView: {
        position: 'absolute',
        top: 50,
        left: 0, right: 0, bottom: 0
    },
    backIcon: {
        width: 14,
        height: 14,
        left: 15,
    },
    mainConatiner: {
        flex: 1,
        flexDirection: 'column',
    },
    welcomeTextView: {
        flex: 1,
        marginTop: 60,
        marginLeft: 20, marginRight: 20
    },
    welcomeTextStyle:{
        color: background.orange,
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
    },
    hotelTextStyle: {
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#0d0d0f"
    },
    imageContainer: {
        flex: 1,
        marginTop: 13,
        marginLeft: 20, marginRight: 20
    },
    imageStyle:{
        alignSelf: 'center',
        width: '100%',
        borderRadius: 8,
    },
    mainTextView:{
        marginLeft: 20, marginRight: 20,
        flex: 1,
        flexDirection: 'column',
        marginTop: 16
    },
    imageTitle: {
        marginTop: 5,
        fontFamily: fonts.title,
        fontSize: 21,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#0d0d0f"
    },
    imageLocationText: {
        fontFamily: "SFCompactText-Medium",
        fontSize: 11,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.orange
    },
    imageDescription: {
        marginTop: 12,
        fontFamily: "SFCompactText-LightItalic",
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 18.3,
        letterSpacing: 0,
        color: "#0d0d0f"
    },
    buttonView: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 85 : 50,
        marginLeft: 20, marginRight: 20,
    },
    locationButtonStyle: {
        backgroundColor: background.orange,
        borderColor: background.orange,
        marginTop: 8,
        marginBottom: 8,
        paddingTop: 17.5,
        paddingBottom: 17.5,
        borderRadius: 10,
        borderWidth: 1
    },
    locationButtonText: {
        paddingTop: Platform.OS =='ios' ? 8 : 0,
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.white
    },
    cancelButtonStyle: {
        marginTop: 5,
    },
    cancelButtonText: {
        paddingTop: Platform.OS =='ios' ? 6 : 0,
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 17,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.orange
    }
});