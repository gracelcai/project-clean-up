import { Link } from "@react-navigation/native";
import * as React from "react";
import {
	Text,
	Image,
	View,
	Linking,
	StyleSheet,
	Pressable,
	TextInput,
} from "react-native";

export default function Article(props) {
	return (
		<View
			style={{
				marginTop: 40,
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<Image style={styles.imgStyle} source={props.picture} />
			<Pressable
				style={styles.container}
				onPress={() => {
					Linking.openURL(props.link);
				}}
			>
				<Text style={styles.titleStyle}>{props.title}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 16,
		marginLeft: 20,
		marginBottom: 10,
	},
	imgStyle: {
		width: "80%",
		height: 200,
		// borderTopLeftRadius: 50,
		// borderTopRightRadius: 50
	},
	container: {
		width: "80%",
		height: 80,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#BFCEB8",
		borderBottomLeftRadius: 50,
		borderBottomRightRadius: 50,
	},
});
