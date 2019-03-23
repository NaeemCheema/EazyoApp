import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { background, fonts } from '../../colors.js';

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const back = require('../../assets/images/back/icnArrowLeftWhite.png');

export default class FindUs extends Component {

    constructor(props){
        super(props);
        this.state = {
            describe: '',
            phoneNumber: ''
        }
    }

    onDescribeAdd = (text) => {
        this.setState({ describe: text });
    }

    onPhoneNumber = (number) => {
        this.setState({ phoneNumber: number });   
    }

    onSavePress = () => {
        Actions.pop();
        setTimeout(() => {Actions.refresh({desc: this.state.describe, phNo: this.state.phoneNumber})}, 100);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.absoluteView}>
                    <View style={styles.header}>
                        <View style={styles.headerTextView}>
                            <TouchableOpacity style={styles.saveView} onPress={() => this.onSavePress()}>
                                <Text style={styles.saveText}>Save</Text>
                            </TouchableOpacity>
                            <Text style={styles.headerText}>Help us find you</Text>
                            <TouchableOpacity style={styles.backButtonView} onPress={() => this.onSavePress()}>
                                <Image source={back} style={styles.backButtonStyle}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainContainer}>
                        <View style={styles.describeView}>
                            <TextInput 
                                style={styles.describeInputStyle}
                                multiline={true}
                                placeholder={"Describe yourself"}
                                placeholderTextColor={"#c8c8c8"}
                                returnKeyLabel='Done'
                                returnKeyType='done'
                                blurOnSubmit={true}
                                onChangeText={(text) => this.onDescribeAdd(text)}
                            />
                        </View>
                        <View style={styles.phoneView}>
                            <TextInput 
                                style={styles.phoneInputStyle}
                                placeholder={"Phone Number"}
                                placeholderTextColor={"#c8c8c8"}
                                returnKeyLabel='Done'
                                returnKeyType='done'
                                blurOnSubmit={true}
                                keyboardType={'phone-pad'}
                                onChangeText={(number) => this.onPhoneNumber(number)}
                            />
                        </View>
                    </View>
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
        flex: 1,
        left: 0, top:0,
        right: 0, bottom: 0,
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
        left: 16,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    backButtonStyle: {
        height: 14,
        width: 9,
        marginTop: 55
    },
    saveView: {
        right: 20,
        position: 'absolute',
        flexDirection: 'row'
    },
    saveText: {
        marginTop: 56,
        fontFamily: "GothamRounded-Book",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.white
    },
    mainContainer: {
        flex:1,
        flexDirection: 'column',
        backgroundColor: '#f9f9f9'
    },
    describeView: {
        marginTop: 27,
        marginLeft: 20,
        marginBottom: 14,
        marginRight: 20,
        borderRadius: 9,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#c8c8c8",
        backgroundColor: '#ffffff'
    },
    describeInputStyle: {
        paddingLeft: 17,
        paddingTop: 18,
        paddingRight: 20,
        height: 113,
        fontFamily: "GothamRounded-Book",
        fontSize: 20,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    phoneView: {
        marginLeft: 20,
        marginBottom: 20,
        marginRight: 20,
        borderRadius: 9,
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#c8c8c8",
        backgroundColor: '#ffffff'
    },
    phoneInputStyle: {
        paddingLeft: 17,
        paddingRight: 20,
        height: 59,
        fontFamily: "GothamRounded-Book",
        fontSize: 20,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    }
})