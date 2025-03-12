import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../styles/styles";

export const Header = ({ title, isDark, toggleTheme, onBack }) => {
  return (
    <View style={[styles.header, isDark && styles.darkHeader]}>
      {onBack ? (
        <TouchableOpacity
          onPress={onBack}
          style={styles.backButton}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <MaterialIcons
            name="arrow-back"
            size={24}
            color={isDark ? "#fff" : "#000"}
          />
        </TouchableOpacity>
      ) : (
        <>
          <Image
            source={require("../../assets/images/logoJDK.png")}
            style={styles.logo}
          />
          <Text style={[styles.headerTitle, isDark && styles.darkText]}>
            {title}
          </Text>
          {toggleTheme && (
            <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
              <MaterialIcons
                name={isDark ? "wb-sunny" : "nightlight-round"}
                size={24}
                color={isDark ? "#fff" : "#000"}
              />
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};
