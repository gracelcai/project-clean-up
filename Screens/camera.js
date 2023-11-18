// import { cameraWithTensors } from "@tensorflow/tfjs-react-native";
// import { Camera } from "expo-camera";
// import { React } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
// import { StatusBar } from "expo-status-bar";

// const TensorCamera = cameraWithTensors(Camera);

// export default function Camera() {
// 	let textureDims =
// 		Platform.OS == "ios"
// 			? { height: 1960, width: 1080 }
// 			: { height: 1200, width: 1600 };
// 	function handleCameraStream() {
// 		const loop = async () => {};
// 	}
// 	return (
// 		<View style={styles.container}>
// 			<TensorCamera
// 				style={styles.camera}
// 				type={Camera.Constants.type.black}
// 				cameraTextureHeight={textureDims.height}
// 				cameraTextureWidth={textureDims.width}
// 				resizeHeight={200}
// 				resizeWidth={152}
// 				resizeDepth={3}
// 				onReady={handleCameraStream}
// 				autoRender={true}
// 				useCustomShadersToResize={false}
// 			/>
// 		</View>
// 	);
// }

// const styles = Stylesheet.create({
// 	container: {
// 		// flex: 1,
// 		justifyContent: "center",
// 		height: 800,
// 	},
// 	camera: {},
// });
// import { Camera, CameraType } from "expo-camera";
// import { useState } from "react";
// import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import Navbar from "./navbar";

// export default function WebCamera() {
// 	const [type, setType] = useState(CameraType.back);
// 	// print("Camera permissions:" + Camera.useCameraPermissions());
// 	const [permission, requestPermission] = Camera.useCameraPermissions();

// 	if (!permission) {
// 		// Camera permissions are still loading
// 		return <View />;
// 	}

// 	if (!permission.granted) {
// 		// Camera permissions are not granted yet
// 		return (
// 			<View style={styles.container}>
// 				<Text style={{ textAlign: "center" }}>
// 					We need your permission to show the camera
// 				</Text>
// 				<Button onPress={requestPermission} title="grant permission" />
// 			</View>
// 		);
// 	}

// 	function toggleCameraType() {
// 		setType((current) =>
// 			current === CameraType.back ? CameraType.front : CameraType.back
// 		);
// 	}

// 	return (
// 		<View>
// 			<View style={styles.container}>
// 				<Camera style={styles.camera} type={type}>
// 					<View style={styles.buttonContainer}>
// 						<TouchableOpacity style={styles.button} onPress={toggleCameraType}>
// 							<Text style={styles.text}>Flip Camera</Text>
// 						</TouchableOpacity>
// 					</View>
// 				</Camera>
// 			</View>
// 			<View
// 				style={{
// 					// position: "absolute",
// 					bottom: 0,
// 					left: 0,
// 					right: 0,
// 					marginBottom: 20,
// 					backgroundColor: "#C5E2FF",
// 				}}
// 			>
// 				<Navbar />
// 			</View>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		// flex: 1,
// 		justifyContent: "center",
// 		height: 800,
// 	},
// 	camera: {
// 		// flex: 1,
// 		height: 800,
// 	},
// 	buttonContainer: {
// 		flex: 1,
// 		flexDirection: "row",
// 		backgroundColor: "transparent",
// 		margin: 64,
// 	},
// 	button: {
// 		flex: 1,
// 		alignSelf: "flex-end",
// 		alignItems: "center",
// 	},
// 	text: {
// 		fontSize: 24,
// 		fontWeight: "bold",
// 		color: "white",
// 	},
// });

// import { ScrollView, Text, View } from "react-native";
// import RenderHtml from "react-native-render-html";
// import WebView from "react-native-webview";

// const source = {
// 	html: `
//   <div>Teachable Machine Image Model</div>
//   <button type="button" onclick="init()">Start</button>
//   <div id="webcam-container"></div>
//   <div id="label-container"></div>
//   <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest/dist/tf.min.js"></script>
//   <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@latest/dist/teachablemachine-image.min.js"></script>
//   <script type="text/javascript">

// 	  const URL = "../src/model/";

// 	  let model, webcam, labelContainer, maxPredictions;

// 	  async function init() {
// 		  const modelURL = URL + "model.json";
// 		  const metadataURL = URL + "metadata.json";

// 		  model = await tmImage.load(modelURL, metadataURL);
// 		  maxPredictions = model.getTotalClasses();

// 		  const flip = true; // whether to flip the webcam
// 		  webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
// 		  await webcam.setup(); // request access to the webcam
// 		  await webcam.play();
// 		  window.requestAnimationFrame(loop);

// 		  // append elements to the DOM
// 		  document.getElementById("webcam-container").appendChild(webcam.canvas);
// 		  labelContainer = document.getElementById("label-container");
// 		  for (let i = 0; i < maxPredictions; i++) {
// 			  // and class labels
// 			  labelContainer.appendChild(document.createElement("div"));
// 		  }
// 	  }

// 	  async function loop() {
// 		  webcam.update(); // update the webcam frame
// 		  await predict();
// 		  window.requestAnimationFrame(loop);
// 	  }

// 	  // run the webcam image through the image model
// 	  async function predict() {
// 		  // predict can take in an image, video or canvas html element
// 		  const prediction = await model.predict(webcam.canvas);
// 		  for (let i = 0; i < maxPredictions; i++) {
// 			  const classPrediction =
// 				  prediction[i].className + ": " + prediction[i].probability.toFixed(2);
// 			  labelContainer.childNodes[i].innerHTML = classPrediction;
// 		  }
// 	  }
//   </script>

//   `,
// };

// 	return <WebView source={"./classifier.html"} />;
// }
