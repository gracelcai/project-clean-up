import * as React from "react";
import {
	Text,
	Image,
	View,
	ScrollView,
	StyleSheet,
	Pressable,
	TextInput,
} from "react-native";
import { FlatList } from "react-native-web";
import Navbar from "./navbar";
import Article from "./article.js";

export default function Home({ navigation }) {
	const articles = [
		{
			id: 1,
			picture: require("./pictures/pic1.png"),
			title: "FBI offers help as Clearwater investigates recycling breach",
			link: "https://www.msn.com/en-us/news/other/fbi-offers-help-as-clearwater-investigates-recycling-breach/ar-AA17OJt0",
		},
		{
			id: 2,
			picture: require("./pictures/pic2.png"),
			title: "Worker Finds $74,000 Among Garbage at Recycling Center in Japan",
			link: "https://www.nbcnewyork.com/news/national-international/worker-finds-74000-among-garbage-at-recycling-center-in-japan/4117456/",
		},
		{
			id: 3,
			picture: require("./pictures/pic3.png"),
			title: "New lithium-ion battery recycling plant planned for Pinal County",
			link: "https://www.abc15.com/news/business/new-lithium-ion-battery-recycling-plant-planned-for-pinal-county",
		},
		{
			id: 4,
			picture: require("./pictures/pic4.png"),
			title:
				"New Brunswick Awarded $76,200 to Support Waste Reduction and Recycling",
			link: "https://www.msn.com/en-us/news/us/new-brunswick-awarded-76200-to-support-waste-reduction-and-recycling/ar-AA17Oe3e",
		},
		{
			id: 5,
			picture: require("./pictures/pic5.png"),
			title:
				"University Heights council, against mayor’s wishes, approves backyard",
			link: "https://www.cleveland.com/community/2023/02/university-heights-council-against-mayors-wishes-approves-backyard-recycling-collection-legislation.html",
		},
	];

	return (
		<View style={{ backgroundColor: "white" }}>
			<View style={{ marginBottom: 100 }}>
				<FlatList
					style={{ width: "max-width", height: 800 }}
					data={articles}
					renderItem={({ item }) => (
						<Article
							picture={item.picture}
							title={item.title}
							link={item.link}
						/>
					)}
				/>
			</View>
			<View
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					marginTop: 20,
					backgroundColor: "#C5E2FF",
				}}
			>
				<Navbar />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});