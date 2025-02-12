import { ScrollView, TouchableOpacity, Text } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../styles/styles";
import { useTheme } from "./ThemeContext";

const SectionList = ({ sections, onSelect }) => {
  const { isDark } = useTheme();

  return (
    <ScrollView style={styles.content}>
      {sections.map((section, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.sectionButton, isDark && styles.darkSectionButton]}
          onPress={() => onSelect(section)}
        >
          {section.iconType === "community" ? (
            <MaterialCommunityIcons name={section.icon} size={24} color={isDark ? "#fff" : "#333"} />
          ) : (
            <MaterialIcons name={section.icon} size={24} color={isDark ? "#fff" : "#333"} />
          )}
          <Text style={[styles.sectionButtonText, isDark && styles.darkText]}>
            {section.title}
          </Text>
          <MaterialIcons name="chevron-right" size={24} color={isDark ? "#fff" : "#333"} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default SectionList;
