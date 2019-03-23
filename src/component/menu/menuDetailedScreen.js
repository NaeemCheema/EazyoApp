import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity, Dimensions,
    ScrollView, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { background, fonts } from '../../colors';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from 'react-native-check-box';
import Modal from 'react-native-modal';

const back = require('../../assets/images/back/icnArrowLeftWhite.png');
const menu = require('../../assets/images/menu/menu.png');
const forward = require('../../assets/images/forward/icn-arrow-go.png');

const menuIcon = require('../../assets/images/menuIcon/Menu.png');
const accountIcon = require('../../assets/images/accountIcon/Account.png');
const orderIcon = require('../../assets/images/orderIcon/Orders.png');

const cross = require('../../assets/images/cross/close-material.png');

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

export default class MenuDetailed extends Component {

    constructor(props){
        super(props);
        this.state = {
            temperatureCheckBox: false,
            cheeseCheckBox: false,
            friesCheckBoxRare: false,
            frenchCheckBox: false,
            potatoCheckBox: false,
            grapesCheckBox: false,
            cheddarCheckBox: false,
            itemCount: 1,
            visibleModal: false
        }
    }

    onBackPress = () => {
        Actions.pop();
    }

    onTemperatureSelect = (item) => {
        this.setState({temperatureCheckBox: item });
    }

    onCheeseSelect = (item) => {
        this.setState({ cheeseCheckBox: item });
    }

    onSideSelect = (item) => {
        if(item == 'french'){
            this.setState({
                frenchCheckBox: !this.state.frenchCheckBox,
            })
        }else if(item == 'potato'){
            this.setState({
                potatoCheckBox: !this.state.potatoCheckBox,
            })
        }else if(item == 'grapes'){
            this.setState({
                grapesCheckBox: !this.state.grapesCheckBox,
            })
        }else{ 
            this.setState({
                cheddarCheckBox: !this.state.cheddarCheckBox,
            })
        }
    }

    onMinusPress = () => {
        if(this.state.itemCount > 1){
            this.setState({ itemCount: this.state.itemCount - 1});
        }
    }

    onAddPress = () => {
        if(this.state.itemCount >= 1){
            this.setState({ itemCount: this.state.itemCount + 1});
        }
    }

    renderModalContent = () => {
        return(
            <View style={styles.modalAbsoluteContainer}>
                <View style={styles.modalHeader}>
                    <View style={styles.headerTextView}>
                        <Text style={styles.modalHeaderText}>Special instruction</Text>
                        <TouchableOpacity style={styles.crossIconView} onPress={() =>  this.setState({visibleModal: false})}>
                            <Image source={cross} style={styles.crossIconStyle}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.saveView} onPress={() =>  this.setState({visibleModal: false})}>
                        <Text style={styles.saveText}>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.modalContainer}>
                    <TextInput 
                        style={styles.instructionInputStyle}
                        multiline={true}
                        placeholder={"Any special instructions?"}
                        placeholderTextColor={"#aeaeae"}
                    />
                </View>
            </View>
        )
    }

    onAddOrderPress = () => {
        Actions.checkout_detail();
    }

    render(){
        const { title } = this.props.product;
        return(
            <View style={styles.container}>
                <View style={styles.absoluteView}>
                    <View style={styles.header}>
                        <View style={styles.headerTextView}>
                            <Text style={styles.headerText}>{title}</Text>
                        </View>
                        <TouchableOpacity style={styles.backIconView} onPress={() =>  this.onBackPress()}>
                            <Image source={back} style={styles.backIconStyle}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.mainContainer}>
                        <View style={styles.imageView}>
                            <Image source={menu} resizeMode={'cover'} style={styles.imageStyle}/>
                        </View>
                        <View style={styles.productDetailedView}>
                            <View style={styles.row}>
                                <Text style={styles.productTitleText}>{title}</Text>
                                <Text style={styles.productPriceText}>$5.99</Text>
                            </View>
                            <View style={styles.productDescriptionView}>
                                <Text style={styles.productDescriptionText}>100% Grass-Fed, sustainably raised premium beef patty topped with aged Cheddar cheese, lettuce, tomato, onion and a garlic aioli.100% Grass-Fed, sustainably raised premium beef patty</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.specialInstructionView} onPress={() => this.setState({ visibleModal: true })}>
                            <Text style={styles.specialInstructionText}>Special instruction</Text>
                            <Text style={styles.specialInstructionMessage}>Anything we need to know?</Text>
                            <Image source={forward} style={styles.forwardImageView}/>
                        </TouchableOpacity>
                        <View style={styles.temperatureView}>
                            <Text style={styles.temperatureText}>Select You Temperature</Text>
                        </View>
                        <View style={styles.temperatureListView}>
                            <TouchableOpacity style={styles.temperatureItemView} >
                                <Text style={styles.temperatureItemText}>Rare</Text>
                                <CircleCheckBox
                                    styleCheckboxContainer={styles.checkBoxStyle}
                                    outerColor={'#b2bec4'}
                                    innerColor={'#ed6439'}
                                    checked={this.state.temperatureCheckBox == 'rare' ? true : false}
                                    onToggle={() => this.onTemperatureSelect('rare')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.temperatureItemView} >
                                <Text style={styles.temperatureItemText}>Medium</Text>
                                <CircleCheckBox
                                    styleCheckboxContainer={styles.checkBoxStyle}
                                    outerColor={'#b2bec4'}
                                    innerColor={'#ed6439'}
                                    checked={this.state.temperatureCheckBox == 'medium' ? true : false}
                                    onToggle={() => this.onTemperatureSelect('medium')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.temperatureItemView} >
                                <Text style={styles.temperatureItemText}>Medium Rare</Text>
                                <CircleCheckBox
                                    styleCheckboxContainer={styles.checkBoxStyle}
                                    outerColor={'#b2bec4'}
                                    innerColor={'#ed6439'}
                                    checked={this.state.temperatureCheckBox == 'medium rare' ? true : false}
                                    onToggle={() => this.onTemperatureSelect('medium rare')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.temperatureItemLastView} >
                                <Text style={styles.temperatureItemText}>Well Done</Text>
                                <CircleCheckBox
                                    styleCheckboxContainer={styles.checkBoxStyle}
                                    outerColor={'#b2bec4'}
                                    innerColor={'#ed6439'}
                                    checked={this.state.temperatureCheckBox == 'well done' ? true : false}
                                    onToggle={() => this.onTemperatureSelect('well done')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pickCheeseView}>
                            <Text style={styles.pickCheeseText}>Pick a Cheese</Text>
                        </View>
                        <View style={styles.temperatureListView}>
                            <TouchableOpacity style={styles.temperatureItemView} >
                                <Text style={styles.temperatureItemText}>Swiss</Text>
                                <CircleCheckBox
                                    styleCheckboxContainer={styles.checkBoxStyle}
                                    outerColor={'#b2bec4'}
                                    innerColor={'#ed6439'}
                                    checked={this.state.cheeseCheckBox == 'swiss' ? true : false}
                                    onToggle={() => this.onCheeseSelect('swiss')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.temperatureItemLastView} >
                                <Text style={styles.temperatureItemText}>American</Text>
                                <CircleCheckBox
                                    styleCheckboxContainer={styles.checkBoxStyle}
                                    outerColor={'#b2bec4'}
                                    innerColor={'#ed6439'}
                                    checked={this.state.cheeseCheckBox == 'american' ? true : false}
                                    onToggle={() => this.onCheeseSelect('american')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.pickCheeseView}>
                            <Text style={styles.pickCheeseText}>Choose 2 sides</Text>
                        </View>
                        <View style={styles.temperatureListView}>
                            <TouchableOpacity style={styles.temperatureItemView}>
                                <Text style={styles.temperatureItemText}>French Fries</Text>
                                <CheckBox
                                    style={styles.boxStyle}
                                    checkBoxColor={background.orange}
                                    isChecked={this.state.frenchCheckBox}
                                    onClick={() => this.onSideSelect('french')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.temperatureItemView} >
                                <Text style={styles.temperatureItemText}>Sweet Potato Fries</Text>
                                <CheckBox
                                    style={styles.boxStyle}
                                    checkBoxColor={background.orange}
                                    isChecked={this.state.potatoCheckBox}
                                    onClick={() => this.onSideSelect('potato')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.temperatureItemView} >
                                <Text style={styles.temperatureItemText}>Grapes</Text>
                                <CheckBox
                                    style={styles.boxStyle}
                                    checkBoxColor={background.orange}
                                    isChecked={this.state.grapesCheckBox}
                                    onClick={() => this.onSideSelect('grapes')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.temperatureItemLastView}>
                                <Text style={styles.temperatureItemText}>Fried Cheddar</Text>
                                <CheckBox
                                    style={styles.boxStyle}
                                    checkBoxColor={background.orange}
                                    isChecked={this.state.cheddarCheckBox}
                                    onClick={() => this.onSideSelect('cheddar')}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemCountView}>
                            <TouchableOpacity style={styles.removeIcon} onPress={() => this.onMinusPress()}>
                                <Icon name='remove-circle-outline' size={40} color={'#939598'}/>
                            </TouchableOpacity>
                                <Text style={styles.itemCountText}>{this.state.itemCount}</Text>
                            <TouchableOpacity style={styles.addIcon} onPress={() => this.onAddPress()}>
                                <Icon name='add-circle-outline' size={40} color={background.orange}/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.buttonView}>
                            <TouchableOpacity style={styles.cartButtonStyle} onPress={() => this.onAddOrderPress()}>
                                <Text style={styles.cartButtonText}>Add to Order - $5.99</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <Modal 
                    style={styles.modalStyle}
                    isVisible={this.state.visibleModal}
                >
                    {this.renderModalContent()}
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modalStyle: {
        margin: 0,
        backgroundColor: '#ffffff',
    },
    modalAbsoluteContainer: {
        flex: 1,
        left: 0, top: 0, right: 0, bottom: 0, position: 'absolute'
    },
    modalHeader: {
        flexDirection: 'row',
        borderBottomColor: '#d6d9df',
        borderBottomWidth: 1,
        height: SCREEN_HEIGHT * 0.115
    },
    modalHeaderText: {
        marginTop: 54,
        fontFamily: "GothamRounded-Book",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: '#000000'
    },
    crossIconView: {
        position: 'absolute',
        left: 25,
        flexDirection: 'row',
    },
    crossIconStyle: {
        height: 14,
        width: 14,
        marginTop: 56
    },
    saveView: {
        position: 'absolute',
        right: 20,
        flexDirection: 'row',
    },
    saveText: {
        marginTop: 56,
        fontFamily: "GothamRounded-Book",
        fontSize: 14,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.orange
    },
    modalContainer: {
        flex:1,
        flexDirection: 'column',
    },
    instructionInputStyle: {
        paddingLeft: 20,
        paddingTop: 17,
        paddingRight: 20,
        fontSize: 16,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 22.1,
        letterSpacing: -0.16
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
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        flexDirection: 'column',
    },
    imageView: {
        margin: 20,
    },
    imageStyle: {
        width: '100%',
        height: 295,
        alignSelf: 'center', 
        overflow: 'hidden',
        borderRadius: 9
    },
    productDetailedView: {
        marginLeft: 18,
        marginTop: 6,
        marginRight: 17,
    },
    row: {
        flexDirection: 'row'
    },
    productTitleText: {
        fontFamily: "GothamRounded-Book",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: '#000000'
    },
    productPriceText: {
        flex: 1,
        textAlign: 'right',
        fontFamily: "GothamRounded-Book",
        fontSize: 14,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#ed6439"
    },
    productDescriptionView: {
        flex: 1,
        marginTop: 2,
        marginRight: 57
    },
    productDescriptionText: {
        fontFamily: "GothamRounded-Book",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 17.7,
        letterSpacing: 0,
        color: "#656769"
    },
    specialInstructionView: {
        marginTop: 13,
        marginLeft: 18,
        marginRight: 17,
        borderTopColor: '#ececec',
        borderTopWidth: 1,
        borderBottomColor: '#ececec',
        borderBottomWidth: 1,
    },
    specialInstructionText: {
        paddingTop: 12,
        fontFamily: "GothamRounded-Book",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: '#000000'
    },
    specialInstructionMessage: {
        padding: 1,
        paddingBottom: 10,
        fontFamily: "GothamRounded-Book",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#656769"
    },
    forwardImageView: {
        position: 'absolute',
        right: -5,
        top: 18
    },
    temperatureView: {
        marginTop: 38,
        marginLeft: 18
    },
    temperatureText: {
        fontFamily: "GothamRounded-Book",
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f858c"
    },
    temperatureListView:{
        marginTop: 20
    },
    temperatureItemView: {
        flex: 1, 
        flexDirection: 'row', 
        backgroundColor: background.white,
        borderColor: 'rgb(239,239,239)',
        borderTopWidth: 1,
    },
    temperatureItemLastView: {
        flex: 1, 
        flexDirection: 'row', 
        backgroundColor: background.white,
        borderColor: 'rgb(239,239,239)',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    temperatureItemText: {
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
    boxStyle:{
        top: 18,
        right: 11,
        width: 25,
        height: 25,
    },
    checkBoxStyle: {
        top: 18,
        right: 11
    },
    pickCheeseView: {
        marginTop: 38,
        marginLeft: 18
    },
    pickCheeseText: {
        fontFamily: "GothamRounded-Book",
        fontSize: 24,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#7f858c"
    },
    itemCountView: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemCountText: {
        flex: 1,
        textAlign: 'center',
        fontFamily: "GothamRounded-Book",
        fontSize: 22,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
    },
    removeIcon: {
        left: 5,
    },
    addIcon: {
        right: 5, 
    },
    buttonView: {
        marginTop: Platform.OS == 'ios' ? 15 : 0,
        marginLeft: 20, marginRight: 20,
        marginBottom: 30
    },
    cartButtonStyle: {
        backgroundColor: background.orange,
        borderColor: background.orange,
        marginTop: 8,
        marginBottom: 8,
        paddingTop: 17.5,
        paddingBottom: 17.5,
        borderRadius: 10,
        borderWidth: 1
    },
    cartButtonText: {
        paddingTop: Platform.OS =='ios' ? 7 : 0,
        textAlign: 'center',
        fontFamily: fonts.title,
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        letterSpacing: 0,
        color: background.white
    },
})