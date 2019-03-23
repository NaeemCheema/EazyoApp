import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableWithoutFeedback, Keyboard,
    TextInput, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { signInEmailChanged, signInPasswordChanged } from '../../actions/signInAction';
import { background, fonts } from '../../colors';

const {width, height} = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const logo = require('../../assets/images/signIn/logo.png');

class SignIn extends Component{

    constructor(props){
        super(props);
        this.state={
            isFocused: '',
            showEmailError: false,
            showPassordError: false
        }
    }

    hideKeyboard = () => {
        Keyboard.dismiss();
    }

    onFocusInput = (type) => {
        this.setState({ isFocused: type });
    }

    onSignInEmail = (email) => {
        this.props.signInEmailChanged(email);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(email)){
            this.setState({ showEmailError: false });
        }else{ 
            this.setState({ showEmailError: true });
        }
    }

    onSignInPassword = (password) => {
        this.props.signInPasswordChanged(password);
        var isValidPassword = password.match(/^(?=.*[a-zA-Z])(?=.*\d).+/);
        if(isValidPassword != null && password.length > 5){
            this.setState({ showPassordError: false})
        }else{ 
            this.setState({ showPassordError: true})
        }
    }

    onSignInButtonPress = () => {
        Actions.home();
    }

    onForgotPasswordPress = () => {
        Actions.webViewScreen({url: {uri: 'https://app.eazyoapp.com/forgot'}});
    }

    onTermsAndConditionPress = () => {
        Actions.webViewScreen({url: {uri: 'https://eazyoapp.com/terms'}});
    }

    onCancelPress = () => {
        Actions.pop();
    }
    

    render(){
        return(
            <TouchableWithoutFeedback onPress={() => this.hideKeyboard()}>
            <View style={styles.container} keyboardShouldPersistTaps="handled" >
                <View style={styles.absoluteView}>
                    <View style={styles.columnView}>
                        <View style={{flex: 1}}>
                            <View style={styles.logoView}>
                                <Image source={logo} />
                            </View>
                            <View style={styles.welcomeTextView}>
                                <Text style={styles.welcomeTextStyle}>Welcome</Text>
                                <Text style={styles.signInTextStyle}>Sign in to continue</Text>
                            </View>
                            <View style={styles.mainView}>
                                <View style={(this.state.isFocused == 'Username') ? styles.FocusedInputView : styles.InputView}>
                                    <View style={styles.InputColumn}>    
                                        <TextInput
                                            style={styles.InputStyle}
                                            placeholder='Username'
                                            placeholderTextColor={'#c8c8c8'}
                                            keyboardType="email-address"
                                            returnKeyType={'next'}
                                            onFocus={() => this.onFocusInput('Username')}
                                            onChangeText={(email) => this.onSignInEmail(email)}
                                            value={this.props.signInEmail}
                                        />
                                        { this.state.showEmailError && this.props.signInEmail.length != 0 &&
                                            <Text style={styles.InputError}>Not an email address</Text>
                                        }
                                    </View>
                                    { !this.state.showEmailError && this.props.signInEmail.length != 0 &&
                                        <Icon name="check" size={25} color={background.boringGreen} style={styles.InputIcon}/>
                                    }
                                    { this.props.signInEmail.length == 0 &&
                                        <View height={65}/>
                                    }
                                    { this.state.showEmailError && this.props.signInEmail.length != 0 &&
                                        <Icon name="times-circle" size={25} color={background.fadedRed} style={styles.InputIcon}/>
                                    }
                                </View>

                                <View style={(this.state.isFocused == 'Passowrd') ? styles.FocusedInputView : styles.InputView}>
                                    <View style={styles.InputColumn}>    
                                        <TextInput
                                            style={styles.InputStyle}
                                            placeholder='Password'
                                            placeholderTextColor={'#c8c8c8'}
                                            secureTextEntry={true}
                                            returnKeyType = {"go"}
                                            onSubmitEditing={() => this.onSignInButtonPress()}
                                            onFocus={() => this.onFocusInput('Passowrd')}
                                            onChangeText={(password) => this.onSignInPassword(password)}
                                            value={this.props.signInPassword}
                                        />
                                        { this.state.showPassordError && this.props.signInPassword.length != 0 &&
                                            <Text style={styles.InputError}>Password to short</Text>
                                        }
                                    </View>
                                    { !this.state.showPassordError && this.props.signInPassword.length != 0 &&
                                        <Icon name="check" size={25} color={background.boringGreen} style={styles.InputIcon}/>
                                    }
                                    { this.props.signInPassword.length == 0 &&
                                        <View height={65}/>
                                    }
                                    { this.state.showPassordError && this.props.signInPassword.length != 0 &&
                                        <Icon name="times-circle" size={25} color={background.fadedRed} style={styles.InputIcon}/>
                                    }
                                </View>

                                <TouchableOpacity style={{marginTop: 15, width: 150}} onPress={() => this.onForgotPasswordPress()}>
                                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                        <View style={styles.mainView}>
                            <View style={{flex: 1, marginTop: 100}}>
                                <TouchableOpacity style={styles.letButtonStyle} onPress={() => this.onSignInButtonPress()}>
                                    <Text style={styles.letButtonText}>Let's Go</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.cancelButtonStyle} onPress={() => this.onCancelPress()}>
                                    <Text style={styles.cancelButtonText}>Cancel</Text>
                                </TouchableOpacity>
                                
                                <Text style={styles.agreeText}>By creating an account, I Aggee to the</Text>
                                <TouchableOpacity onPress={() => this.onTermsAndConditionPress()}>
                                    <Text style={styles.termsText}>Terms & Conditions</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: background.white
    },
    absoluteView: {
        position: 'absolute',
        top: SCREEN_HEIGHT*0.1,
        left: 20, right: 20, bottom: 20
    },
    columnView:{
        flex: 1,
        flexDirection: 'column'
    },
    mainView: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20
    },
    logoView:{
        height: 50, 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start'
    },
    welcomeTextView: {
        flexDirection: 'column',
        marginTop: 20
    },
    welcomeTextStyle:{
        color: background.orange,
        fontFamily: fonts.title,
        fontSize: 28,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
    },
    signInTextStyle: {
        color: background.black,
        fontFamily: fonts.title,
        fontSize: 28,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0, 
    },
    FocusedInputView: {
        flexDirection: 'row',
        borderColor: background.orange,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 10,
        borderWidth: 1,
    },
    InputView: {
        flexDirection: 'row',
        borderColor: '#c8c8c8',
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 10,
        borderWidth: 1,
    },
    InputColumn: {
        flex: 0.9,
        flexDirection: 'column',
    },
    InputStyle: {
        paddingTop: 20,
        paddingLeft: 20,
        fontFamily: fonts.title,
        fontSize: 20,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
    },
    InputError: {
        paddingLeft: 20,
        fontFamily: fonts.title,
        fontSize: 9,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 12,
        letterSpacing: 0,
        color: background.fadedRed
    },
    InputIcon: {
        flex: 0.1,
        justifyContent: 'flex-end',
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
    },
    forgotPasswordText: {
        color: '#ed6439',
        fontFamily: fonts.title,
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
    },
    letButtonStyle: {
        backgroundColor: background.orange,
        borderColor: background.orange,
        marginTop: 8,
        marginBottom: 8,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        borderWidth: 1
    },
    letButtonText: {
        paddingTop: Platform.OS == 'ios' ? 6 : 0,
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.white
    },
    cancelButtonStyle: {
        backgroundColor: background.white,
        borderColor: '#a1a1a1',
        marginTop: 8,
        marginBottom: 8,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        borderWidth: 2
    },
    cancelButtonText: {
        paddingTop: Platform.OS == 'ios' ? 6 : 0,
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#a1a1a1"
    },
    agreeText: {
        marginTop: 15,
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 19.7,
        letterSpacing: 0,
        color: "#c8c8c8"
    },
    termsText: {
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        lineHeight: 19.7,
        letterSpacing: 0,
        color: background.orange
    }
})

const mapStateToProps = ({ SignInReducer }) => {
    const { signInEmail, signInPassword } = SignInReducer;
    return { signInEmail, signInPassword };
}

export default connect(mapStateToProps,{ signInEmailChanged, signInPasswordChanged })(SignIn);