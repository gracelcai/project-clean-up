// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState } from "react";
import { View, Text, Image, Button } from "react-native";
import * as tf from "@tensorflow/tfjs";
import { decodeJpeg } from "@tensorflow/tfjs-react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as jpeg from "jpeg-js";
const App = () => {
	// State containers for the app
	const [isTfReady, setIsTfReady] = useState(false);
	const [result, setResult] = useState("");
	const [pickedImage, setPickedImage] = useState("");
	// This function helps you call the image picker and enable the user to choose an image for classification
	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.cancelled) {
			setPickedImage(result.uri);
		}
	};
	return (
		<View
			style={{
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			// Show the picked image
			<Image
				source={{ uri: pickedImage }}
				style={{ width: 200, height: 200, margin: 40 }}
			/>
			// Show a button to open the image picker
			{isTfReady && <Button title="Pick an image" onPress={pickImage} />}
			<View style={{ width: "100%", height: 20 }} />
			// Display the state and result of processing
			{!isTfReady && <Text>Loading TFJS model...</Text>}
			{isTfReady && result === "" && <Text>Pick an image to classify!</Text>}
			{result !== "" && <Text>{result}</Text>}
		</View>
	);
};
export default App;
