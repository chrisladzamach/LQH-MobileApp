import React from "react";
import { View } from "react-native";
import { ThemeProvider } from "./src/contexts/ThemeContext";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { styles } from "./src/styles/styles";

export default function App() {
  return (
    <ThemeProvider>
      <View style={styles.appContainer}>
        <AppNavigator />
      </View>
    </ThemeProvider>
  );
}
