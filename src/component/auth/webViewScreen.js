import React, { Component } from 'react';
import {View, WebView, StyleSheet, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { background } from '../../colors';

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

class WebViewScreen extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: true };
    }

    onBackIconPress = () => {
        this.setState({ visible: false });
        setTimeout(() => { Actions.pop() },100);
    }

    hideSpinner() {
        this.setState({ visible: false });
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={{flex: 1}}>
                        {!this.state.visible && 
                            <View style={{height: 50, backgroundColor: '#09181e'}}/>
                        }
                            <WebView
                                source={this.props.url}
                                onLoad={() => this.hideSpinner()}
                            />

                        {this.state.visible && 
                            <ActivityIndicator
                                style={styles.indicatorView}
                                size="large"
                                color={background.orange}
                            />
                        }
                    </View>
                    {!this.state.visible && 
                        <TouchableOpacity style={styles.subContent} onPress={this.onBackIconPress.bind(this)}>
                            <Icon name="angle-left" size={25} color={background.orange}/>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
    },
    content: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    subContent: {
        position: 'absolute',
        top: 75,
        left: 20,
        width: SCREEN_WIDTH
    },
    text: {
        color: 'blue',
        fontSize: 40
    },
    indicatorView: { 
        position: "absolute", 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
});

export default WebViewScreen;
