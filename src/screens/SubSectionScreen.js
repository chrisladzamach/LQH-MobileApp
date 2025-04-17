import React, { useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../styles/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { Header } from "../components/Header";

const SubSectionScreen = ({ section, onBack, onSubSectionSelect }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <SafeAreaView style={[styles.container, isDark && styles.darkContainer]}>
        <Header title={section.title} isDark={isDark} onBack={onBack} />
        <ScrollView style={styles.content}>
          {section.subSections.map((subSection, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.sectionButton, isDark && styles.darkSectionButton]}
              onPress={() => onSubSectionSelect(subSection)}
            >
              <Text
                style={[styles.sectionButtonText, isDark && styles.darkText]}
              >
                {subSection.title || subSection.name}
              </Text>
              <MaterialIcons
                name="chevron-right"
                size={24}
                color={isDark ? "#eee" : "#333"}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default SubSectionScreen;
