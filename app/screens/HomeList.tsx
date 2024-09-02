import { useEffect, useState } from "react";
import {
	ActivityIndicator,
	FlatList,
	Image,
	Text,
	TouchableOpacity,
} from "react-native";
import { fetchHomes, Home } from "../api/homes";

export default function HomeList({ navigation }) {
	const [homes, setHomes] = useState<Home[]>([]);
	const [loading, setLoading] = useState(true);

	const loadHomes = async () => {
		try {
			const data = await fetchHomes();
			setHomes(data);
		} catch (error) {
			console.error("Error fetching homes:", error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		loadHomes();
	}, []);

	const renderItem = ({ item }: { item: Home }) => {
		return (
			<TouchableOpacity
				style={{ padding: 10 }}
				onPress={() =>
					navigation.navigate("HomeDetails", { home: item })
				}
			>
				<Image
					source={{ uri: item.imageUrl }}
					style={{ width: "100%", height: 200 }}
				/>
				<Text style={{ fontWeight: "bold" }}>{item.address}</Text>
				<Text>{item.description}</Text>
			</TouchableOpacity>
		);
	};

	if (loading) {
		return <ActivityIndicator size="large" color="#0000ff" />;
	}

	return (
		<FlatList
			data={homes}
			keyExtractor={(item) => item.id}
			renderItem={renderItem}
		/>
	);
}
