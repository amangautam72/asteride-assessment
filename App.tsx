import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";

import HomeDetails from "./app/screens/HomeDetails";
import HomeList from "./app/screens/HomeList";

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name={"HomeList"} component={HomeList} />
				<Stack.Screen name={"HomeDetails"} component={HomeDetails} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
