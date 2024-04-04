import * as React from "react";
// import {
// 	BsFillHouseFill,
// 	BsFillCameraFill,
// 	BsFillPersonLinesFill,
// } from "react-native-icons/bs";
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import {
	View,
	StyleSheet,
	Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
	const nav = useNavigation();

	const toHome = () => {
		nav.navigate("Home Page");
	};

	const toProfile = () => {
		nav.navigate("Profile");
	};

	const toTrash = () => {
		nav.navigate("Camera");
	};

	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-evenly",
				marginTop: 10,
				marginBottom: 20,
			}}
		>
			<Pressable onPress={toHome}>

			<FontAwesome name="home" size={46} color="black" />				
			</Pressable>
			<Pressable onPress={toTrash}>
			<Ionicons name="trash-sharp" size={46} color="black" />
			</Pressable>
			<Pressable onPress={toProfile}>
				<Ionicons name="person" size={46} color="black" />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	icon: {
		fontSize: 46,
	},
});
