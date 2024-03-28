import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Alert,
	ImageBackground,
	Image,
} from "react-native";
import { Camera } from "expo-camera";

import * as tf from '@tensorflow/tfjs'
import {bundleResourceIO, decodeJpeg} from '@tensorflow/tfjs-react-native'
import * as FileSystem from 'expo-file-system';
import RNFS from 'react-native-fs'

import Prediction from "./Prediction";

let camera: Camera;
const CameraScreen = ({navigation}) => {
	const [startCamera, setStartCamera] = React.useState(false);
	const [previewVisible, setPreviewVisible] = React.useState(false);
	const [capturedImage, setCapturedImage] = React.useState(null);
	const [cameraType, setCameraType] = React.useState(
		Camera.Constants.Type.back
	);
	const [flashMode, setFlashMode] = React.useState("off");

	const __startCamera = async () => {
		const { status } = await Camera.requestCameraPermissionsAsync();
		console.log(status);
		if (status === "granted") {
			setStartCamera(true);
		} else {
			Alert.alert("Access denied");
		}
	};
	const __takePicture = async () => {
		const photo = await camera.takePictureAsync();
		setPreviewVisible(true);
		//setStartCamera(false)
		setCapturedImage(photo);
	};
	const __savePhoto = async () => {
		
	};
	const __retakePicture = () => {
		setCapturedImage(null);
		setPreviewVisible(false);
		__startCamera();
	};
	const __handleFlashMode = () => {
		if (flashMode === "on") {
			setFlashMode("off");
		} else if (flashMode === "off") {
			setFlashMode("on");
		} else {
			setFlashMode("auto");
		}
	};
	const __switchCamera = () => {
		if (cameraType === "back") {
			setCameraType("front");
		} else {
			setCameraType("back");
		}
	};
	
	return (
		<View style={styles.container}>
			{startCamera ? (
				<View
					style={{
						flex: 1,
						width: "100%",
					}}
				>
					{previewVisible && capturedImage ? (
						<Prediction
							photo={capturedImage}
							retakePicture={__retakePicture}
							navigation={navigation}						/>
					) : (
						<Camera
							type={cameraType}
							style={{ flex: 1 }}
							ref={(r) => {
								camera = r;
							}}
						>
							<View
								style={{
									flex: 1,
									width: "100%",
									backgroundColor: "transparent",
									flexDirection: "row",
								}}
							>
								<View
									style={{
										position: "absolute",
										left: "5%",
										top: "10%",
										flexDirection: "column",
										justifyContent: "space-between",
									}}
								>
									
								</View>
								<View
									style={{
										position: "absolute",
										bottom: 0,
										flexDirection: "row",
										flex: 1,
										width: "100%",
										padding: 20,
										justifyContent: "space-between",
									}}
								>
									<View
										style={{
											alignSelf: "center",
											flex: 1,
											alignItems: "center",
										}}
									>
										<TouchableOpacity
											onPress={__takePicture}
											style={{
												width: 70,
												height: 70,
												bottom: 0,
												borderRadius: 50,
												backgroundColor: "#fff",
											}}
										/>
									</View>
								</View>
							</View>
						</Camera>
					)}
				</View>
			) : (
				<View
					style={{
						flex: 1,
						backgroundColor: "#fff",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<TouchableOpacity
						onPress={__startCamera}
						style={{
							width: 130,
							borderRadius: 4,
							backgroundColor: "#14274e",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							height: 40,
						}}
					>
						<Text
							style={{
								color: "#fff",
								fontWeight: "bold",
								textAlign: "center",
							}}
						>
							Take picture
						</Text>
					</TouchableOpacity>
				</View>
			)}

			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});


export default CameraScreen