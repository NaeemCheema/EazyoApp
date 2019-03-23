import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform} from 'react-native';
import { background, fonts } from '../../colors';

import Swiper from '../auth/carousal';
import Modal from 'react-native-modal';
import Analytics from 'appcenter-analytics';
import { Actions } from 'react-native-router-flux';
import { facebook } from 'react-native-simple-auth';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;

export default class AuthScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            visibleModal: false
        }
    }

    indexNumber = (status) => {
        if(status){
            this.setState({visibleModal: true});
        }
    }

    trackEvent(event, category='Auth Screen',fileName='authScreen.js'){
        Analytics.trackEvent(event, { Category: category, FileName: fileName });
    }

    onFacebookButtonClick = () => {
        this.trackEvent('Facebook button clicked');
        this.setState({visibleModal: false});
        facebook({
            appId: '310930482893291',
            callback: 'fb310930482893291://authorize',
        }).then((info) => {
            console.log("facebook info: ", info);
            if(info.user){
                Actions.home({type: 'reset'});
            }
        }).catch((error) => {
            console.log("facebook error: ", error);
        });
    }

    onGuestButtonClick = () => {
        this.trackEvent('Guest button clicked');
        this.setState({visibleModal: false});
        setTimeout(() => {Actions.home()}, 300);
    }

    onSignInPress = () => {
        this.trackEvent('SignIn button clicked');
        this.setState({visibleModal: false});
        setTimeout(() => {Actions.signInScreen()}, 300);
    }

    onCreateAccountPress = () => {
        this.trackEvent('Create Account button clicked');
        this.setState({visibleModal: false});
        setTimeout(() => {Actions.createAccountScreen()}, 300);
    }

    renderModalContent = () => (
        <View style={styles.modalContent}>
            <View style={styles.mainContent}>

                <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: '#3b5998'}]} onPress={() => this.onFacebookButtonClick()}>
                    <Text style={styles.buttonText}>Sign in with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.buttonStyle, {backgroundColor: background.orange}]} onPress={() => this.onGuestButtonClick()}>
                    <Text style={styles.buttonText}>Proceed as Guest</Text>
                </TouchableOpacity>

                <View style={styles.createAccountView}>
                    <TouchableOpacity onPress={() => this.onSignInPress()}>
                        <Text style={[styles.signInText, {color: background.orange}]}> Sign in </Text>
                    </TouchableOpacity>
                    <Text style={styles.signInText}> or </Text>
                    <TouchableOpacity onPress={() => this.onCreateAccountPress()}>
                        <Text style={[styles.signInText, {color: background.orange}]}>Create an Account </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    render(){
        return(
            <View style={{flex: 1, backgroundColor: background.white}}>
                <Swiper
                    containerStyle={{flex: 1}}
                    showsButtons={true} 
                    loop={false}
                    autoplay={false}
                    activeDotColor={'#de6c46'}
                    dotColor={'#b9b8b6'}
                    buttonWrapperStyle = {{
                        flexDirection: 'row',
                        flex: 1, 
                        paddingHorizontal: 20, paddingVertical: 10, 
                        justifyContent: 'space-between',
                        paddingBottom: 45, 
                        alignItems: 'flex-end'
                    }}
                    onOpenModal = {(boolean) => this.indexNumber(boolean)}
                >
                    <View style={[styles.slideContainer, {backgroundColor: background.orange}]}>
                        <View style={styles.contentView}>
                            <Text style={styles.illustrationTitle}>Onboarding 1</Text>
                            <Text style={styles.illustrationText}>Text for slide will go here</Text>
                        </View>
                    </View>
                    <View style={[styles.slideContainer, {backgroundColor: background.brightLightBlue}]}>
                        <View style={styles.contentView}>
                            <Text style={styles.illustrationTitle}>Onboarding 2</Text>
                            <Text style={styles.illustrationText}>Text for slide will go here</Text>
                        </View>
                    </View>
                    <View style={[styles.slideContainer, {backgroundColor: background.orange}]}>
                        <View style={styles.contentView}>
                            <Text style={styles.illustrationTitle}>Onboarding 3</Text>
                            <Text style={styles.illustrationText}>Text for slide will go here</Text>
                        </View>
                    </View>
                </Swiper>

                <Modal
                    isVisible={this.state.visibleModal}
                    style={styles.bottomModal}
                    backdropColor={background.whiteTwo}
                    loadMinimal={true}
                    loadMinimalSize={1}
                    backdropOpacity={0.96}
                >
                    {this.renderModalContent()}
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slideContainer: {
        flex: 1,
        marginTop: 77.5,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 100,
        borderRadius: 14,
        justifyContent: 'flex-end',
    },
    contentView: {
        marginBottom: 82.5, 
        justifyContent: 'flex-end', 
        flexDirection: 'column'
    },
    illustrationTitle: {
        fontFamily: fonts.title,
        fontSize: 24,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.white,
        textAlign: 'center'
    },
    illustrationText:{
        marginTop: 5,
        fontFamily: fonts.title,
        fontSize: 17,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.white,
        textAlign: 'center'
    },
    modalContent: {
        padding: 22,
        height: 280,
        alignItems: "center",
        borderRadius: 9,
        backgroundColor: background.white,
        shadowColor: "rgba(0, 0, 0, 0.13)",
        shadowOffset: {
            width: -5,
            height: -1
        },
        shadowRadius: 18,
        shadowOpacity: 1,
    },
    mainContent: {
        flexDirection: 'column',
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0,
    },
    buttonStyle:{
        width: SCREEN_WIDTH - 40,
        height: 66,
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: Platform.OS === 'android' ? 0 : 6,
        marginBottom: 10,
        borderRadius: 9,
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: fonts.title, // creating issue because it has default bottom space 
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.white,
    },
    signInText: {
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 18,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        marginTop: 18
    },
    createAccountView: {
        flexDirection: 'row', 
        justifyContent: 'center'
    }

});