import * as React from "react";
import {
	BsFillHouseFill,
	BsFillCameraFill,
	BsFillPersonLinesFill,
} from "react-icons/bs";
import {
	Text,
	View,
	SafeAreaView,
	StyleSheet,
	Pressable,
	TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
	const nav = useNavigation();

	const toHome = () => {
		nav.navigate("Home");
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
				<BsFillHouseFill style={styles.icon} />
			</Pressable>
			<Pressable onPress={toTrash}>
				<BsFillCameraFill style={styles.icon} />
			</Pressable>
			<Pressable onPress={toProfile}>
				<BsFillPersonLinesFill style={styles.icon} />
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	icon: {
		fontSize: 46,
	},
});
