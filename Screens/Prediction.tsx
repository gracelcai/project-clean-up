import * as tf from '@tensorflow/tfjs'
import {bundleResourceIO, decodeJpeg} from '@tensorflow/tfjs-react-native'
import * as FileSystem from 'expo-file-system';

const modelJSON = require('../src/model/model.json')
const modelWeights = require('../src/model/group1-shard1of1.bin')

import { View, Text, TouchableOpacity, ImageBackground, ActivityIndicator, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Prediction = ({navigation, photo, retakePicture}) => {
	const [isLoading, setIsLoading] = useState(true)
    const [prediction, setPrediction] = useState(null);
	// const [image, setImage] = useState(photo);
	
	useEffect(() => {
		// classify(photo)
		getPredictions(photo)
	});

	const savePhoto = async () => {
		try {
			const output = await getPredictions(photo);  
			console.log("in fetchData")
			setPrediction(output);
			setIsLoading(false);
			console.log(prediction);
		} catch (error) {
			console.error('Error fetching predictions:', error);
		}
		console.log(prediction);
	};
	const loadModel = async()=>{
        //.ts: const loadModel = async ():Promise<void|tf.LayersModel>=>{
			const modelJSON = require('../src/model/model.json')
			const modelWeights = require('../src/model/weights.bin')
            const model = await tf.loadLayersModel(	
                bundleResourceIO(modelJSON, modelWeights)
            ).catch((e)=>{
              console.log("[LOADING ERROR] info:",e)
            })
            return model
        }


const transformImageToTensor = async (image)=>{
    //.ts: const transformImageToTensor = async (uri:string):Promise<tf.Tensor>=>{
    //read the image as base64
	// const uri = Image.resolveAssetSource(image).uri
      const img64 = await FileSystem.readAsStringAsync(image.uri, {encoding:FileSystem.EncodingType.Base64})
      const imgBuffer =  tf.util.encodeString(img64, 'base64').buffer
      const raw = new Uint8Array(imgBuffer)
      let imgTensor = decodeJpeg(raw)
      const scalar = tf.scalar(255)
    //resize the image
      imgTensor = tf.image.resizeNearestNeighbor(imgTensor, [300, 300])
    //normalize; if a normalization layer is in the model, this step can be skipped
      const tensorScaled = imgTensor.div(scalar)
    //final shape of the rensor
      const img = tf.reshape(tensorScaled, [1,300,300,3])
      return img
  }

  const makePredictions = async ( batch, model, imagesTensor )=>{
    //.ts: const makePredictions = async (batch:number, model:tf.LayersModel,imagesTensor:tf.Tensor<tf.Rank>):Promise<tf.Tensor<tf.Rank>[]>=>{
    //cast output prediction to tensor
    const predictionsdata= model.predict(imagesTensor)
	console.log(predictionsdata)
    //.ts: const predictionsdata:tf.Tensor = model.predict(imagesTensor) as tf.Tensor
    let pred = predictionsdata.split(batch) //split by batch size
    //return predictions 
    return pred
}

const getPredictions = async (image)=>{
	
    await tf.ready()

	var start = performance.now();
    const model = await loadModel() as tf.LayersModel
	var end = performance.now();
	var timeTaken = end - start;
	console.log('Time taken for model:', timeTaken);
	
	start = performance.now();
    const tensor_image = await transformImageToTensor(image)
	end = performance.now();
	timeTaken = end - start;
	console.log('Time taken to transform image:', timeTaken);

    const predictions = await makePredictions(1, model, tensor_image)
	console.log("made predictions")

	setPrediction(predictions[0].class)
	if (predictions == null) {
		console.log("null preds")
	} else {
		console.log("not null")
	}
	setIsLoading(false);
    // return predictions    
}

const classify = async (image) => {
	try {
		setIsLoading(true);
		// Load mobilenet.
		await tf.ready();
		const modelJSON = require("../src/model/model.json");
		const modelWeights = require("../src/model/weights.bin");
		const model = await tf
			.loadLayersModel(bundleResourceIO(modelJSON, modelWeights))
			.catch((e) => {
				console.log("[LOADING ERROR] info:", e);
			});
		
		console.log("starting inference with picked image: " + image);

		// Convert image to tensor
		const img64 = await FileSystem.readAsStringAsync(image.uri, {encoding:FileSystem.EncodingType.Base64})
		const imgBuffer =  tf.util.encodeString(img64, 'base64').buffer
		const raw = new Uint8Array(imgBuffer)
		let imgTensor = decodeJpeg(raw)
		const scalar = tf.scalar(255)
    	//resize the image
		imgTensor = tf.image.resizeNearestNeighbor(imgTensor, [300, 300])
		//normalize; if a normalization layer is in the model, this step can be skipped
		const tensorScaled = imgTensor.div(scalar)
		//final shape of the rensor
		const img = tf.reshape(tensorScaled, [1,300,300,3])
		// Classify the tensor and show the result
		if (model instanceof tf.LayersModel) {
			const predictionsdata = model.predict(img)
			console.log(predictionsdata)
			// const prediction = await model.predict(img) as tf.Tensor<tf.Rank>;
			// if (Array.isArray(prediction) &&  prediction.length > 0) {
			// 	const className = await prediction.data();
			// 	setPrediction(
			// 		`${className[0]} (${prediction[0].probability.toFixed(3)})`
			// 	);
			// }
		}		
	} catch (err) {
		console.log(err);
	}
};

  if (isLoading == true) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
		  <ActivityIndicator size="large" color="#0000ff" />
		</View>
	  );
  }
  else {
	return (
    <View
			style={{
				backgroundColor: "transparent",
				flex: 1,
				width: "100%",
				height: "100%",
			}}
		>
			<ImageBackground
				source={{ uri: photo && photo.uri }}
				style={{
					flex: 1,
				}}
			>
				<View
					style={{
						flex: 1,
						flexDirection: "column",
						padding: 15,
						justifyContent: "flex-end",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						
						<TouchableOpacity
							onPress={retakePicture}
							style={{
								width: 130,
								height: 40,

								alignItems: "center",
								borderRadius: 4,
							}}
						>
							<Text
								style={{
									color: "#fff",
									fontSize: 20,
								}}
							>
								Re-take
							</Text>
						</TouchableOpacity>
						
						<TouchableOpacity
							onPress={savePhoto}
							style={{
								width: 130,
								height: 40,

								alignItems: "center",
								borderRadius: 4,
							}}
						>
							<Text
								style={{
									color: "#fff",
									fontSize: 20,
								}}
							>
								Use photo
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</View>
  )}
}

export default Prediction