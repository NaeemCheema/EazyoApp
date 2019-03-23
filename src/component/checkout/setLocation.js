import React, { Component, Fragment } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, Platform } from 'react-native';
import { background, font } from '../../colors.js';
import { Actions } from 'react-native-router-flux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width, height } = Dimensions.get('screen');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.005;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const back = require('../../assets/images/back/icnArrowLeftWhite.png');

export default class SetLocation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// will contains user's current location
			initialPosition: {
				latitude: 40.758896,
				longitude: -73.98513,
				latitudeDelta: 0.005,
				longitudeDelta: 0.0023
			}
		};
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				var lat = position.coords.latitude;
				var long = position.coords.longitude;

				var initialRegion = {
					latitude: lat,
					longitude: long,
					latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA
				};
				// setTimeout(() => { this.setState({ initialPosition: initialRegion }), 1000});
			},
			(error) => console.log('EROOOORRR', JSON.stringify(error)),
			{ enableHighAccuracy: false, timeout: 10000 }
		);
	}

	onRegionChange = (region) => {
		console.log("region: ", region);
	}

	onBackPress = () => {
        Actions.pop();
        setTimeout(() => {Actions.refresh({location: true})}, 100);
    }

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.absoluteView}>
					<View style={styles.header}>
						<View style={styles.headerTextView}>
							<Text style={styles.headerText}>Set your Location</Text>
						</View>
						<TouchableOpacity style={styles.backButtonView} onPress={() => this.onBackPress()}>
							<Image source={back} style={styles.backButtonStyle} />
						</TouchableOpacity>
					</View>
					<View style={styles.mainContainer}>
						<MapView
							mapType={Platform.OS == "android" ? "none" : "standard"}
							style={styles.map}
							provider={PROVIDER_GOOGLE}
							//initialRegion={this.state.initialPosition}
							showsUserLocation={true}
							onRegionChange = { (region) => this.onRegionChange(region)}
						/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	absoluteView: {
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0
	},
	header: {
		height: SCREEN_HEIGHT * 0.12,
		backgroundColor: background.orange
	},
	headerTextView: {
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		position: 'absolute',
		justifyContent: 'center',
		flexDirection: 'row'
	},
	headerText: {
		marginTop: 56,
		fontFamily: 'GothamRounded-Book',
		fontSize: 16,
		fontWeight: '500',
		fontStyle: 'normal',
		letterSpacing: 0,
		color: background.white
	},
	backButtonView: {
		left: 16,
		top: 0,
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'flex-start'
	},
	backButtonStyle: {
		height: 14,
		width: 9,
		marginTop: 55
	},
	mainContainer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#f9f9f9'
	},
	map: {
		flex: 1
	}
});
