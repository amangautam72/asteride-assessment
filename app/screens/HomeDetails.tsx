import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	Image,
	Button,
	StyleSheet,
	Alert,
	ActivityIndicator,
} from "react-native";

import { useLocation } from "../hooks/useLocation";
import { unlockHome } from "../api/unlock";
import { useNotification } from "../hooks/useNotifications";

export default function HomeDetails({ route }) {
	const { home } = route.params;
	const { location, errorMsg } = useLocation(); // fetching location and asking permission
	const [loading, setLoading] = useState(false);
	const { showNotification } = useNotification();

	useEffect(() => {
		// We could check location here if the home is 30m away from current location
		// and disable the unlock button accordingly,
		// We have already fetched location with useLocation
	}, []);

	const handleUnlock = async () => {
		if (!home) return;

		setLoading(true);
		try {
			const response = await unlockHome(home.id);
			if (response.success) {
				Alert.alert("Success", response.message);
				showNotification("Hurray!", response.message);
			} else {
				Alert.alert("Error", response.message);
			}
		} catch (error) {
			Alert.alert("Error", "Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<View style={styles.container}>
			<Image source={{ uri: home.imageUrl }} style={styles.image} />
			<Text style={styles.address}>{home.address}</Text>
			<Text style={styles.description}>{home.description}</Text>
			<Text style={styles.price}>Price: {home.price}</Text>
			{!home?.isDisabled && !loading && (
				<Button
					title="Unlock Home"
					onPress={handleUnlock}
					disabled={home?.isDisabled}
				/>
			)}
			{loading && <ActivityIndicator size="large" color="#0000ff" />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	image: {
		width: "100%",
		height: 300,
		marginBottom: 20,
	},
	address: {
		fontWeight: "bold",
		fontSize: 20,
		marginBottom: 10,
	},
	description: {
		fontSize: 16,
		marginBottom: 20,
	},
	price: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 20,
	},
});
