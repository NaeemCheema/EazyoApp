import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Platform,
    TextInput, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { connect } from 'react-redux';
import { userProfileImageChanged, fullnameChanged, emailChanged, phoneNumberChanged,
    birthDateChanged, passwordChanged, confirmPasswordChanged} from '../../actions/createAccountAction';
import _ from 'lodash';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import { background, fonts } from '../../colors';

const uploadImage = require('../../assets/images/upload/btn-image-upload.png');
const back = require('../../assets/images/back/icnArrowLeftWhite.png');

const {width, height} = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

class CreateAccountScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {
            isFocused: '',
            showFullNameError: false,
            showEmailError: false,
            showPhoneError: false,
            showBDError: false,
            showPasswordError: false,
            showConfirmPasswordError: false,
            changeButtonColor: false
        }
    }

    onFocusInput = (type) => {
        this.setState({ isFocused: type });
    }

    //////////////////////////
    // Full Name Functions //
    ////////////////////////

    onFullNameChange = (name) => {
        this.props.fullnameChanged(name);
    }

    onValidateName = () => {
        if(_.isEmpty(this.props.fullname)){
            this.setState({ showFullNameError: true });
        }else{ 
            this.setState({ showFullNameError: false });
        }
    }

    //////////////////////
    // Email Functions //
    ////////////////////

    onEmailChange = (email) => {
        this.props.emailChanged(email);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(email)){
            this.setState({ showEmailError: false });
        }else{ 
            this.setState({ showEmailError: true });
        }
    }

    onValidateEmail = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(this.props.email) && !_.isEmpty(this.props.email)){
            this.setState({ showEmailError: false });
        }else{ 
            this.setState({ showEmailError: true });
        }
    }

    /////////////////////////////
    // Phone Number Functions //
    ///////////////////////////

    onPhoneChange = (phone) => {
        this.props.phoneNumberChanged(phone);
    }

    onValidatePhoneNumber = () => {
        if(_.isEmpty(this.props.phone_number)){
            this.setState({ showPhoneError: true });
        }else{ 
            this.setState({ showPhoneError: false });
        }
    }

    ///////////////////////////
    // Birth Date Functions //
    /////////////////////////

    onDOBChange = (dob) => {
        this.props.birthDateChanged(dob);
    }

    onValidateBD = () => {
        if(_.isEmpty(this.props.birth_date)){
            this.setState({ showBDError: true });
        }else{ 
            this.setState({ showBDError: false });
        }
    }

    /////////////////////////
    // Password Functions //
    ///////////////////////

    onPasswordChange = (password) => {
        this.props.passwordChanged(password);
        var isValidPassword = password.match(/^(?=.*[a-zA-Z])(?=.*\d).+/);
        if(isValidPassword != null && password.length > 5){
            this.setState({ showPasswordError: false });
        }else{ 
            this.setState({ showPasswordError: true });
        }
    }

    onValidatePassword = () => {
        var isValidPassword = this.props.password.match(/^(?=.*[a-zA-Z])(?=.*\d).+/);
        if(isValidPassword != null && this.props.password.length > 5){
            this.setState({ showPasswordError: false });
        }else{ 
            this.setState({ showPasswordError: true });
        }
    }

    /////////////////////////////////
    // Confirm Password Functions //
    ///////////////////////////////

    onConfirmPasswordChange = (cp) => {
        this.props.confirmPasswordChanged(cp);
        if(cp == this.props.password){
            this.setState({ showConfirmPasswordError: false });
        }else{
            this.setState({ showConfirmPasswordError: true });
        }
    }

    onValidateConfirmPassword = () => {
        if(this.props.confirm_password == this.props.password && this.props.confirm_password.length != 0){
            this.setState({ showConfirmPasswordError: false });
        }else{
            this.setState({ showConfirmPasswordError: true });
        }
    }

    componentWillReceiveProps(nextProps){
        if( !_.isEmpty(nextProps.user_image) && nextProps.fullname && nextProps.email && nextProps.phone_number &&
            nextProps.birth_date && nextProps.password && nextProps.confirm_password){
            
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if(reg.test(nextProps.email) && (nextProps.password == nextProps.confirm_password)){
                this.setState({ changeButtonColor: true });
            }else{
                this.setState({ changeButtonColor: false });
            }
        }else{ 
            this.setState({ changeButtonColor: false });
        }
    }

    onPressBack = () => {
        Actions.pop();
    }
    
    //////////////////////////////
    // Profile Image Functions //
    ////////////////////////////


    selectPhotoTapped() {
        console.log("don't tapped");
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true,
          },
        };
    
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
    
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = { uri: response.uri };
        
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.props.userProfileImageChanged(source);
            }
        });
    }


    render(){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerText}>Create an account</Text>
                            <TouchableOpacity style={styles.headerIcon} onPress={() => this.onPressBack()}>
                                <Image source={back} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <KeyboardAwareScrollView style={styles.mainContainer}>
                        <View style={styles.mainContent}>

                            <View style={(this.state.isFocused == 'Name') ? styles.FocusedInputView : styles.InputView}>
                                <View style={styles.InputColumn}>    
                                    <TextInput
                                        style={styles.InputStyle}
                                        placeholder='Full Name'
                                        placeholderTextColor={'#c8c8c8'}
                                        onFocus={() => this.onFocusInput('Name')}
                                        onChangeText={(name) => this.onFullNameChange(name)}
                                        onEndEditing={() => this.onValidateName()}
                                        value={this.props.fullname}
                                    />
                                    { this.state.showFullNameError && this.props.fullname.length == 0 &&
                                        <Text style={styles.InputError}>Please Enter Full Name</Text>
                                    }
                                </View>
                                { this.props.fullname.length > 0 && 
                                    <Icon name="check" size={25} color={'#67BD5D'} style={styles.InputIcon}/>
                                }
                                { this.props.fullname.length == 0 && 
                                    <View height={65}/>
                                }
                                { this.state.showFullNameError && this.props.fullname.length == 0 &&
                                    <Icon name="times-circle" size={25} color={'#DE4759'} style={styles.InputIcon}/>
                                }
                            </View>
                            
                            <View style={(this.state.isFocused == 'Email') ? styles.FocusedInputView : styles.InputView}>
                                <View style={styles.InputColumn}>
                                    <TextInput
                                        style={styles.InputStyle}
                                        keyboardType='email-address'
                                        placeholder='Email'
                                        placeholderTextColor={'#c8c8c8'}
                                        onFocus={() => this.onFocusInput('Email')}
                                        onChangeText={(email) => this.onEmailChange(email)}
                                        onEndEditing={() =>  this.onValidateEmail()}
                                        value={this.props.email}
                                    />
                                    { this.state.showEmailError &&
                                        <Text style={styles.InputError}>Not an email address</Text>
                                    }
                                </View>
                                { !this.state.showEmailError && this.props.email.length != 0 &&
                                    <Icon name="check" size={25} color={'#67BD5D'} style={styles.InputIcon}/>
                                }
                                { this.props.email.length == 0 &&
                                    <View height={65}/>
                                }
                                { this.state.showEmailError && 
                                    <Icon name="times-circle" size={25} color={'#DE4759'} style={styles.InputIcon}/>
                                }
                                
                            </View>
                            
                            <View style={(this.state.isFocused == 'Phone Number') ? styles.FocusedInputView : styles.InputView}>
                                <View style={styles.InputColumn}>
                                    <TextInput
                                        style={styles.InputStyle}
                                        keyboardType="phone-pad"
                                        placeholder='Phone Number'
                                        placeholderTextColor={'#c8c8c8'}
                                        onFocus={() => this.onFocusInput('Phone Number')}
                                        onChangeText={(phone) => this.onPhoneChange(phone)}
                                        onEndEditing={() => this.onValidatePhoneNumber()}
                                        value={this.props.phone_number}
                                    />
                                    { this.state.showPhoneError && this.props.phone_number.length == 0 &&
                                        <Text style={styles.InputError}>Please Enter Phone Number</Text>
                                    }
                                </View>
                                { this.props.phone_number.length > 0 && 
                                    <Icon name="check" size={25} color={'#67BD5D'} style={styles.InputIcon}/>
                                }
                                { this.props.phone_number.length == 0 && 
                                    <View height={65}/>
                                }
                                { this.state.showPhoneError && this.props.phone_number.length == 0 &&
                                    <Icon name="times-circle" size={25} color={'#DE4759'} style={styles.InputIcon}/>
                                }
                            </View>
                            
                            
                            <View style={(this.state.isFocused == 'DOB') ? styles.FocusedInputView : styles.InputView}>
                                <View style={styles.InputColumn}>
                                    <DatePicker
                                        date={this.props.birth_date}
                                        placeholder='Birth Date'
                                        placeholderTextColor={'#c8c8c8'}
                                        onOpenModal={() => this.onFocusInput('DOB')}
                                        onDateChange={(dob) => this.onDOBChange(dob)}
                                        mode="date" //The enum of date, datetime and time
                                        format="MM/DD/YYYY"
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        showIcon={false}
                                        customStyles={{
                                            dateInput: {
                                                borderColor: 'transparent',
                                                marginTop: 22,
                                                height:65
                                            },
                                            dateText: {
                                                paddingTop: 10,
                                                paddingLeft: 15,
                                                fontFamily: fonts.title,
                                                fontSize: 20,
                                                fontWeight: "500",
                                                fontStyle: "normal",
                                                letterSpacing: 0,
                                            },
                                            placeholderText: {
                                                paddingTop: 10,
                                                fontFamily: fonts.title,
                                                fontSize: 20,
                                                fontWeight: "500",
                                                fontStyle: "normal",
                                                letterSpacing: 0,
                                            }
                                        }}
                                        onPressCancel={() => this.onValidateBD()}
                                        onCloseModal={() =>  this.onValidateBD()}
                                    />
                                    { this.state.showBDError && this.props.birth_date.length == 0 &&
                                        <Text style={styles.InputError}>Please Enter Birth Date</Text>
                                    }
                                </View>
                                { this.props.birth_date.length > 0 && 
                                    <Icon name="check" size={25} color={'#67BD5D'} style={styles.InputIcon}/>
                                }
                                { this.props.birth_date.length == 0 && 
                                    <View height={65}/>
                                }
                                { this.state.showBDError && this.props.birth_date.length == 0 &&
                                    <Icon name="times-circle" size={25} color={'#DE4759'} style={styles.InputIcon}/>
                                }
                            </View>
                            
                            
                            <View style={(this.state.isFocused == 'Password') ? styles.FocusedInputView : styles.InputView}>
                                <View style={styles.InputColumn}>
                                    <TextInput
                                        style={styles.InputStyle}
                                        placeholder='Password'
                                        placeholderTextColor={'#c8c8c8'}
                                        secureTextEntry={true}
                                        onFocus={() => this.onFocusInput('Password')}
                                        onChangeText={(password) => this.onPasswordChange(password)}
                                        onEndEditing={() => this.onValidatePassword()}
                                        value={this.props.password}
                                    />
                                    { this.state.showPasswordError &&
                                        <Text style={styles.InputError}>Password must be greater than 6 characters and numbers</Text>
                                    }
                                </View>
                                { !this.state.showPasswordError && this.props.password.length > 5 &&
                                    <Icon name="check" size={25} color={'#67BD5D'} style={styles.InputIcon}/>
                                }
                                { this.props.password.length == 0 && 
                                    <View height={65}/>
                                }
                                { this.state.showPasswordError &&
                                    <Icon name="times-circle" size={25} color={'#DE4759'} style={styles.InputIcon}/>
                                }
                                
                            </View>
                            
                            <View style={(this.state.isFocused == 'Confirm Password') ? styles.FocusedInputView : styles.InputView}>
                                <View style={styles.InputColumn}>
                                    <TextInput
                                        style={styles.InputStyle}
                                        placeholder='Confirm Password'
                                        placeholderTextColor={'#c8c8c8'}
                                        secureTextEntry={true}
                                        onFocus={() => this.onFocusInput('Confirm Password')}
                                        onChangeText={(cp) => this.onConfirmPasswordChange(cp)}
                                        onEndEditing={() => this.onValidateConfirmPassword()}
                                        value={this.props.confirm_password}
                                    />
                                    { this.state.showConfirmPasswordError &&
                                        <Text style={styles.InputError}>Confirm password does not match</Text>
                                    }
                                </View>
                                { !this.state.showConfirmPasswordError && this.props.confirm_password.length > 5 &&
                                    <Icon name="check" size={25} color={'#67BD5D'} style={styles.InputIcon}/>
                                }
                                { this.props.confirm_password.length <= 5 && 
                                    <View height={65}/>
                                }
                                { this.state.showConfirmPasswordError &&
                                    <Icon name="times-circle" size={25} color={'#DE4759'} style={styles.InputIcon}/>
                                }
                            </View>

                            <TouchableOpacity style={(this.state.changeButtonColor) ? styles.ValidButtonStyle : styles.ButtonStyle}>
                                <Text style={(this.state.changeButtonColor) ? styles.ValidButtonText : styles.ButtonText}>Let's Go!</Text>
                            </TouchableOpacity>

                        </View>
                    </KeyboardAwareScrollView>
                    
                    <View style={styles.absoluteImageView}>
                        <TouchableWithoutFeedback onPress={() => this.selectPhotoTapped()}>
                            <Image source={this.props.user_image == '' ? uploadImage : this.props.user_image} 
                                style={this.props.user_image != '' ? styles.imageStyle : {} }
                                resizeMode="stretch"
                            />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    content: {
        position: 'absolute',
        left: 0,
        top:0, right:0, bottom:0
    },
    header: {
        height: SCREEN_HEIGHT*0.2,
        backgroundColor: background.orange,
    },
    headerContainer: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom: 20
    },
    headerIcon: {
        left: 23,
        position: 'absolute'
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 21,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff",
    },
    mainContainer: {
        height: SCREEN_HEIGHT*0.8,
        backgroundColor: '#ffff',
    },
    mainContent: {
        flex: 1,
        marginTop: 60,
        flexDirection: 'column',
    },
    FocusedInputView: {
        flex: 1,
        flexDirection: 'row',
        borderColor: background.orange,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        borderWidth: 1,
    },
    InputView: {
        flex: 1,
        flexDirection: 'row',
        borderColor: '#c8c8c8',
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 20,
        marginRight: 20,
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
        color: '#DE4759'
    },
    InputIcon: {
        flex: 0.1,
        justifyContent: 'flex-end',
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 20,
    },
    ButtonStyle: {
        backgroundColor: '#c8c8c8',
        borderColor: '#c8c8c8',
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        borderWidth: 1
    },
    ValidButtonStyle: {
        backgroundColor: background.color,
        borderColor: background.color,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        borderWidth: 1
    },
    ButtonText: {
        paddingTop: Platform.OS == 'ios' ? 6 : 0,
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#a1a1a1"
    },
    ValidButtonText: {
        paddingTop: Platform.OS == 'ios' ? 6 : 0,
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ffffff"
    },
    absoluteImageView: {
        top: SCREEN_HEIGHT*0.1,
        left: SCREEN_WIDTH/2,
        right: SCREEN_WIDTH/2,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        marginTop: 10,
        alignSelf: 'center',
        width: 121,
        height: 121,
        borderRadius: 60.5,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(167, 167, 167, 0.4)",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 25,
        shadowOpacity: 1
    }
})

const mapStateToProps = ({ CreateAccountReducer }) => {
    const { user_image, fullname, email, phone_number, birth_date, password, confirm_password } = CreateAccountReducer;
    return { user_image, fullname, email, phone_number, birth_date, password, confirm_password };
}

export default connect(mapStateToProps, { userProfileImageChanged, fullnameChanged, emailChanged, phoneNumberChanged,
    birthDateChanged, passwordChanged, confirmPasswordChanged })(CreateAccountScreen);