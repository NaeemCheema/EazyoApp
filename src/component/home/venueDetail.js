import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Dimensions, Platform, 
    TouchableOpacity, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal';
import { background, fonts } from '../../colors';
import PinCode from './pinCodeInput';

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const back = require('../../assets/images/back/icnArrowLeftWhite.png');
const forward = require('../../assets/images/forward/icn-arrow-go.png');
const building = require('../../assets/images/order/icn-buildings.png');
const down = require('../../assets/images/downward/icnArrowDown.png');
const bg_dialog = require('../../assets/images/bg-dialog/icnModalCheck.png');

export default class venueDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            visibleModal: false,
            visibleBottomModal: false,
            visibleMembershipModal: false,
            showError: false
        }
    }

    onBackPress = () => {
        Actions.pop();
    }

    onModalButtonOkPress = () => {
        this.setState({ visibleModal: false });
    }

    onItemsPress = () => {
        this.setState({ visibleModal: true });
    }

    onRoomServicePress = () => {
        this.setState({ visibleBottomModal: true });
    }

    onDownIconPress = () => {
        this.setState({ visibleBottomModal: false });   
    }

    renderModalContent = () => {
        return(
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalImage}>
                        <Image source={building} style={styles.modalImageStyle}/>
                    </View>
                    <View style={styles.modalMainView}>
                        <Text style={styles.modalMainText}> We cannot deliver to outside {'\n'} of this venue </Text>
                    </View>
                    <View style={styles.modalVenueView}>
                        <Text style={styles.modalVenueText}> You must be on the property grounds to recieve an order. Any orders that are placed outside of Venue.name will be canceled. </Text>
                    </View>
                    <TouchableOpacity style={styles.modalButton} onPress={() => this.onModalButtonOkPress()}>
                        <Text style={styles.modalButtonText}>Ok</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    matchCode = (code) => {
        if(code != 123){
            this.setState({ showError: true });
        }else{
            this.setState({ showError: false });
            setTimeout(() => {this.setState({ visibleBottomModal: false })}, 500);
            setTimeout(() => {this.setState({ visibleMembershipModal: true })}, 1000);
        }
    }

    renderPinCodeModal = () => {
        return(
            <View style={styles.modalBottomContent}>
                <View style={styles.mainBottomModalContent}>
                    <TouchableOpacity onPress={() => this.onDownIconPress()}>
                        <Image source={down} style={styles.imageStyle}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.membershipView}>
                    <Text style={styles.membershipText}> Enter Your Member Number </Text>
                    <Text style={styles.codeText}>Don’t have a code? Ask an attendant.</Text>
                </View>
                <View style={styles.pincodeView}>
                    <PinCode
                        ref={ref => this.pincode = ref}
                        onChangeText={value => console.log('input value', value)}
                        onFulFill={(value) => this.matchCode(value)}
                        length={3}
                        keyboardType='numeric'
                    />
                    {this.state.showError && 
                        <Text style={styles.errorText}>Incorrect code,  Try again</Text>
                    }
                </View>
                <View style={
                    this.state.showError ? 
                        [styles.notMemberView,{ marginTop: Platform.OS == 'ios' ? 58: 40}] 
                        : 
                        [styles.notMemberView,{ marginTop: Platform.OS == 'ios' ? 88: 40}]}>
                    <Text style={styles.notMemberText}>Not a member?</Text>
                </View>
            </View>
        )
    }

    renderMembershipModalContent = () => {
        return(
            <View style={styles.membershipModalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.modalMemberImage}>
                        <Image source={bg_dialog} style={styles.modalImageStyle}/>
                    </View>
                    <View style={styles.modalMembershipView}>
                        <Text style={styles.membershipModalTitle}>You are all set!</Text>
                    </View>
                    <View style={styles.modalDiscountView}>
                        <Text style={styles.membershipModalText}>We’ve applied a 10% membership discount</Text>
                    </View>
                    <TouchableOpacity style={styles.modalButton} onPress={() => this.onViewMenuPress()}>
                        <Text style={styles.modalButtonText}>View Menu</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    onViewMenuPress = () => {
        this.setState({ visibleMembershipModal: false });
        setTimeout(() => { Actions.menu_screen(); }, 500);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex: 1}}>
                    <View style={styles.header}>
                        <View style={styles.headerTextView}>
                            <Text style={styles.headerText}>Where can we find you?</Text>
                        </View>
                        <TouchableOpacity style={styles.backIconView} onPress={() =>  this.onBackPress()}>
                            <Image source={back} style={styles.backIconStyle}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.mainContainer}>
                        <View style={styles.deliveryView}>
                            <Text style={styles.deliveryText}>Delivery</Text>
                        </View>
                        <TouchableOpacity style={styles.deliveryVenueView} onPress={() => this.onItemsPress()}>
                            <Text style={styles.deliveryVenueText}>Beach</Text>
                            <Image source={forward} style={styles.forwardImageView}/>
                        </TouchableOpacity>
                        <View style={styles.pickupView}>
                            <Text style={styles.deliveryText}>Pickup</Text>
                        </View>
                        <TouchableOpacity style={styles.pickupVenueView} onPress={() => this.onItemsPress()}>
                            <Text style={styles.deliveryVenueText}>Beach</Text>
                            <Image source={forward} style={styles.forwardImageView}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.pickupVenueView} onPress={() => this.onItemsPress()}>
                            <Text style={styles.deliveryVenueText}>Oasis Pool</Text>
                            <Image source={forward} style={styles.forwardImageView}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.pickupVenueView, {borderBottomWidth: 1}]} onPress={() => this.onItemsPress()}>
                            <Text style={styles.deliveryVenueText}>Random Pool</Text>
                            <Image source={forward} style={styles.forwardImageView}/>
                        </TouchableOpacity>
                        <View style={styles.pickupView}>
                            <Text style={styles.deliveryText}>Room Service</Text>
                        </View>
                        <TouchableOpacity style={styles.pickupVenueView} onPress={() => this.onRoomServicePress()}>
                            <Text style={styles.deliveryVenueText}>Hotel  Room Service</Text>
                            <Image source={forward} style={styles.forwardImageView}/>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View style={styles.venueDescriptionView}>
                    <View style={styles.venueMainView}>
                        <View style={styles.venueContents}>
                            <Text style={styles.venueNameText}>Lummus Park</Text>
                            <Text style={styles.venueLocationText}>4525 Collins Ave, Miami Beach, FL 33140</Text>
                            <Text style={styles.venueDetailText}>There's a Coke for him and her and them and he a And though we all are different, we're better as a "we."</Text>
                        </View>
                    </View>
                </View>
                
                <Modal
                    isVisible={this.state.visibleModal}
                    style={styles.modalStyle}
                    backdropColor={background.black}
                    loadMinimal={true}
                    loadMinimalSize={1}
                    backdropOpacity={0.65}
                >
                    {this.renderModalContent()}
                </Modal>
                
                <Modal
                    isVisible={this.state.visibleMembershipModal}
                    style={styles.modalStyle}
                    backdropColor={background.black}
                    loadMinimal={true}
                    loadMinimalSize={1}
                    backdropOpacity={0.65}
                >
                    {this.renderMembershipModalContent()}
                </Modal>


                <Modal
                    isVisible={this.state.visibleBottomModal}
                    style={styles.bottomModal}
                    backdropColor={background.black}
                    loadMinimal={true}
                    loadMinimalSize={1}
                    backdropOpacity={0.65}
                    avoidKeyboard={true}
                >
                    {this.renderPinCodeModal()}
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    header: {
        flexDirection: 'row',
        backgroundColor: background.orange,
        height: SCREEN_HEIGHT * 0.22
    },
    headerTextView: {
        position: 'absolute',
        left: 0, top: 0, right: 0, bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerText: {
        marginTop: 51,
        fontFamily: fonts.title,
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 22,
        letterSpacing: -0.43,
        color: "#ffffff"
    },
    backIconView: {
        position: 'absolute',
        left: 20, top: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    backIconStyle: {
        height: 14,
        width: 9,
        marginTop: 55
    },
    venueDescriptionView: {
        position: 'absolute',
        top: SCREEN_HEIGHT*0.118,
        left:15, right: 15
    },
    venueMainView: {
        flex: 1,
        height: 131,
        flexDirection: 'column',
        borderRadius: 9,
        backgroundColor: background.white,
        shadowColor: "rgba(221, 231, 243, 0.66)",
        shadowOffset: {
          width: 0,
          height: 12
        },
        shadowRadius: 27,
        shadowOpacity: 1,
    },
    venueContents: {
        marginLeft: 15,
        marginRight: 15,
        marginTop:16
    },
    venueNameText: {
        fontFamily: fonts.title,
        fontSize: 21,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#0d0d0f"
    },
    venueLocationText: {
        fontFamily: "SFCompactText-Medium",
        fontSize: 11,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.orange
    },
    venueDetailText: {
        marginTop: 8,
        fontFamily: "SFCompactText-LightItalic",
        fontSize: 13,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 18.3,
        letterSpacing: 0,
        color: "#0d0d0f"
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#f8f8f8',
        flexDirection: 'column',
    },
    deliveryView: {
        flex: 1, 
        marginTop: 85,
        marginLeft: 18
    },
    deliveryText: {
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.black
    },
    deliveryVenueView: {
        flex: 1, 
        flexDirection: 'row', 
        marginTop: 20, 
        backgroundColor: background.white,
        borderColor: 'rgb(239,239,239)',
        borderWidth: 1,
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
    modalStyle: {
        justifyContent: 'center',
        margin: 0
    },
    modalContainer: {
        marginLeft: 20,
        marginRight: 20,
        height: 407,
        borderRadius: 9,
        backgroundColor: background.white,
        shadowColor: "rgba(0, 0, 0, 0.66)",
        shadowOffset: {
        width: 0,
        height: 12
        },
        shadowRadius: 27,
        shadowOpacity: 1
    },
    modalContent: {
        flexDirection: 'column',
    },
    bgdialogStyle: {
        position: 'absolute',
        left:44, right: 44,
        top:37,
    },
    icdialogStyle: {
        position: 'absolute',
        left:108, right: 108,
        top:37,
    },
    modalImage: {
        alignSelf: 'center'
    },
    modalImageStyle: {
        marginTop: 26
    },
    modalMainView: {
        justifyContent: 'center',
        marginTop: 31
    },
    modalMainText: {
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
    },
    modalVenueView: {
        justifyContent: 'center',
        marginTop: 3, marginLeft: 21,
        marginRight: 21
    },
    modalVenueText: {
        textAlign: 'center',
        fontFamily: "Helvetica",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 16.9,
        letterSpacing: 0,
        color: "#656769"
    },
    modalButton: {
        margin: 20,
        backgroundColor: background.orange,
        borderRadius: 9
    },
    modalButtonText: {
        textAlign: 'center',
        paddingTop: Platform.OS == 'ios' ? 25 : 18,
        paddingBottom: 18,
        fontFamily: fonts.title,
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.white
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    modalBottomContent: {
        height: 347,
        alignItems: "center",
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
        backgroundColor: background.white,
        shadowColor: "rgba(0, 0, 0, 0.13)",
        shadowOffset: {
            width: -5,
            height: -1
        },
        shadowRadius: 18,
        shadowOpacity: 1,
    },
    mainBottomModalContent: {
        flexDirection: 'column',
    },
    imageStyle: {
        marginTop: 23
    },
    membershipView: {
        justifyContent: 'center',
        marginTop: 64
    },
    membershipText: {
        textAlign: 'center',
        fontFamily: "GothamRounded-Book",
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#000000"
    },
    codeText: {
        marginTop: 2,
        textAlign: 'center',
        fontFamily: "GothamRounded-Book",
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#939598"
    },
    pincodeView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    notMemberView: {
        justifyContent: 'center',
    },
    notMemberText: {
        textAlign: 'center',
        fontFamily: "GothamRounded-Book",
        fontSize: 18,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    },
    errorText: {
        marginTop: Platform.OS == 'ios' ? 18 : 5
    },
    membershipModalContainer: {
        marginLeft: 20,
        marginRight: 20,
        height: 392,
        borderRadius: 9,
        backgroundColor: background.white,
        shadowColor: "rgba(0, 0, 0, 0.66)",
        shadowOffset: {
        width: 0,
        height: 12
        },
        shadowRadius: 27,
        shadowOpacity: 1
    },
    modalMemberImage: {
        marginTop: 37,
        marginLeft: 44,
        marginRight: 44,
    },
    modalMembershipView: {
        marginTop: 3
    },
    modalDiscountView: {
        marginTop: 10
    },
    membershipModalTitle: {
        textAlign: 'center',
        fontFamily: "GothamRounded-Book",
        fontSize: 21,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.black
    },
    membershipModalText: {
        marginTop: 10,
        textAlign: 'center',
        fontFamily: "GothamRounded-Book",
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.black
    }
})