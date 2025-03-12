import { TouchableOpacity, Text } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../styles/styles";

export const SectionButton = ({ section, onPress, isDark }) => {
  return (
    <TouchableOpacity
      style={[styles.sectionButton, isDark && styles.darkSectionButton]}
      onPress={() => onPress(section)}
    >
      {section.iconType === "community" ? (
        <MaterialCommunityIcons name={section.icon} size={24} color={isDark ? "#fff" : "#333"} />
      ) : (
        <MaterialIcons name={section.icon} size={24} color={isDark ? "#fff" : "#333"} />
      )}
      <Text style={[styles.sectionButtonText, isDark && styles.darkText]}>{section.title}</Text>
      <MaterialIcons name="chevron-right" size={24} color={isDark ? "#fff" : "#333"} />
    </TouchableOpacity>
  );
};

