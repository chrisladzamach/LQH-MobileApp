import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "../screens/MainScreen";
import SubSectionScreen from "../screens/SubSectionScreen";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="SubSectionScreen" component={SubSectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
