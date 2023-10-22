import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Navbar from "./navbar";

export default function WebCamera() {
	const [type, setType] = useState(CameraType.back);
	// print("Camera permissions:" + Camera.useCameraPermissions());
	const [permission, requestPermission] = Camera.useCameraPermissions();

	if (!permission) {
		// Camera permissions are still loading
		return <View />;
	}

	if (!permission.granted) {
		// Camera permissions are not granted yet
		return (
			<View style={styles.container}>
				<Text style={{ textAlign: "center" }}>
					We need your permission to show the camera
				</Text>
				<Button onPress={requestPermission} title="grant permission" />
			</View>
		);
	}

	function toggleCameraType() {
		setType((current) =>
			current === CameraType.back ? CameraType.front : CameraType.back
		);
	}

	return (
		<View>
			<View style={styles.container}>
				<Camera style={styles.camera} type={type}>
					<View style={styles.buttonContainer}>
						<TouchableOpacity style={styles.button} onPress={toggleCameraType}>
							<Text style={styles.text}>Flip Camera</Text>
						</TouchableOpacity>
					</View>
				</Camera>
			</View>
			<View
				style={{
					// position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					marginBottom: 20,
					backgroundColor: "#C5E2FF",
				}}
			>
				<Navbar />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		justifyContent: "center",
		height: 800,
	},
	camera: {
		// flex: 1,
		height: 800,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: "transparent",
		margin: 64,
	},
	button: {
		flex: 1,
		alignSelf: "flex-end",
		alignItems: "center",
	},
	text: {
		fontSize: 24,
		fontWeight: "bold",
		color: "white",
	},
});
