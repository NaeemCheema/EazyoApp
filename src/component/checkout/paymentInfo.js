import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { background, fonts } from '../../colors.js';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;
const close = require('../../assets/images/close/icnClose.png');

export default class PaymentInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            paymentMethod: '',
        }
    }

    onPaymentSelect = (item) => {
        this.setState({ paymentMethod: item });
    }

    onSavePress = () => {
        Actions.pop();
        setTimeout(() => {Actions.refresh({paymentMethod: this.state.paymentMethod})}, 100);
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
                            <Text style={styles.headerText}>Payment Options</Text>
                            <TouchableOpacity style={styles.backButtonView} onPress={() => this.onSavePress()}>
                                <Image source={close} style={styles.backButtonStyle}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.mainContainer}>
                        <View style={styles.paymentView}>
                            <View style={styles.paymentListView}>
                                <Text style={styles.paymentListText}>Apple Pay</Text>
                                <CircleCheckBox
                                    styleCheckboxContainer={styles.checkBoxStyle}
                                    outerColor={'#b2bec4'}
                                    innerColor={'#ed6439'}
                                    checked={this.state.paymentMethod == 'Apple' ? true : false}
                                    onToggle={(checked) => this.onPaymentSelect('Apple')}
                                />
                            </View>
                            <View style={styles.paymentListView}>
                                <Text style={styles.paymentListText}>Master Card</Text>
                                <Text style={styles.paymentCard}>1582</Text>
                                <CircleCheckBox
                                    styleCheckboxContainer={styles.checkBoxStyle}
                                    outerColor={'#b2bec4'}
                                    innerColor={'#ed6439'}
                                    checked={this.state.paymentMethod == 'Master Card' ? true : false}
                                    onToggle={(checked) => this.onPaymentSelect('Master Card')}
                                />
                            </View>
                            <View style={styles.paymentListView}>
                                <Text style={styles.paymentListText}>Visa</Text>
                                <Text style={styles.paymentCard}>1566</Text>
                                <CircleCheckBox
                                    styleCheckboxContainer={styles.checkBoxStyle}
                                    outerColor={'#b2bec4'}
                                    innerColor={'#ed6439'}
                                    checked={this.state.paymentMethod == 'Visa' ? true : false}
                                    onToggle={(checked) => this.onPaymentSelect('Visa')}
                                />
                            </View>
                            <View style={styles.paymentListView}>
                                <Text style={styles.paymentListText}>Discover</Text>
                                <Text style={styles.paymentCard}>2453</Text>
                                <CircleCheckBox
                                    styleCheckboxContainer={styles.checkBoxStyle}
                                    outerColor={'#b2bec4'}
                                    innerColor={'#ed6439'}
                                    checked={this.state.paymentMethod == 'Discover' ? true : false}
                                    onToggle={(checked) => this.onPaymentSelect('Discover')}
                                />
                            </View>
                        </View>
                    </View>
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
        left: 17,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    backButtonStyle: {
        height: 14,
        width: 14,
        marginTop: 58
    },
    saveView: {
        right: 18,
        position: 'absolute',
        flexDirection: 'row'
    },
    saveText: {
        marginTop: 55,
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
    paymentView: {
        marginTop: 30
    },
    paymentListView: {
        height: 59,
        backgroundColor: background.white,
        borderStyle: "solid",
        borderTopWidth: 1,
        borderTopColor: background.whiteTwo,
        flexDirection: 'row'
    },
    paymentListText: {
        flex:1 ,
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
    paymentCard: {
        top: 21,
        right: 28,
        opacity: 0.7,
        fontFamily: fonts.title,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.black
    },
    checkBoxStyle: {
        top: 18,
        right: 11
    },
})