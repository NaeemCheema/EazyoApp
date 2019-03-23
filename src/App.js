import React, { Component } from 'react';
import { StyleSheet, Image, View, Text, Animated, Easing } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import store from '../src/store';
import Router from '../src/Router';
import CodePush from 'react-native-code-push';
import AppCenter from 'appcenter';
import Push from 'appcenter-push';

const logo = require('../src/assets/images/loading/logo.png');

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
    },
    this.animatedValue = new Animated.Value(0)
  }

  async componentWillMount() {
    await AppCenter.setLogLevel(AppCenter.LogLevel.VERBOSE);
    const installId = await AppCenter.getInstallId();
    console.log("ID: ", installId);
    const pushEnabled = await Push.isEnabled();
    console.log("push: ", pushEnabled);
  }

  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

  componentDidMount(){
    SplashScreen.hide();
    this.animate();
    setTimeout(() => {
      this.setState({isLoading: false })
    },1000);

    CodePush.sync({
      installMode: CodePush.InstallMode.IMMEDIATE,
      updateDialog: true
    })

    Push.setListener({
      onPushNotificationReceived: function (pushNotification) {
        let message = pushNotification.message;
        let title = pushNotification.title;
    
        if (message === null) {
          // Android messages received in the background don't include a message. On Android, that fact can be used to
          // check if the message was received in the background or foreground. For iOS the message is always present.
          title = 'Android background';
          message = '<empty>';
        }
    
        // Custom name/value pairs set in the App Center web portal are in customProperties
        if (pushNotification.customProperties && Object.keys(pushNotification.customProperties).length > 0) {
          message += '\nCustom properties:\n' + JSON.stringify(pushNotification.customProperties);
        }
    
        if (AppState.currentState === 'active') {
          Alert.alert(title, message);
        }
        else {
          // Sometimes the push callback is received shortly before the app is fully active in the foreground.
          // In this case you'll want to save off the notification info and wait until the app is fully shown
          // in the foreground before displaying any UI. You could use AppState.addEventListener to be notified
          // when the app is fully in the foreground.
        }
      }
    });
  }

  render() {
    if(this.state.isLoading){
      const movingMargin = this.animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [-100, 100, -100]
      })

      return(
        <View style={styles.container}>
          <View style={styles.column}>
            <Image source={logo} style={{width: 73, height: 73}}/>
            <Text style={styles.loadingText}>Loading Venues...</Text>
            
            <Animated.View
              style={{
                marginLeft: movingMargin,
                marginTop: 10,
                height: 1,
                width: 38,
                backgroundColor: '#de6c46'}} />
          </View>
        </View>
      )
    }

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  loadingText: {
    width: 105,
    height: 15,
    marginTop: 14,
    opacity: 0.5,
    fontFamily: "GothamRounded-Book",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#000000"
  },
  loadingBar: {
    width: 38,
    height: 1,
    backgroundColor: "#de6c46"
  }
});

export default App;