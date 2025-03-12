import { useState, useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { styles } from "../styles/styles";
import MainScreen from "../screens/MainScreen";
import SubSectionScreen from "../screens/SubSectionScreen";
import ContentScreen from "../screens/ContentScreen";

export const AppNavigator = () => {
  const { isDark } = useContext(ThemeContext);
  const [currentScreen, setCurrentScreen] = useState("main");
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSubSection, setSelectedSubSection] = useState(null);

  const handleSectionSelect = (section) => {
    setSelectedSubSection(null);
    setSelectedSection(section);
    setCurrentScreen("subSection");
  };

  const handleSubSectionSelect = (subSection) => {
    setSelectedSubSection(subSection);
    setCurrentScreen("content");
  };

  const handleSearchResultSelect = (section, subSection) => {
    if (!section || !subSection) return;

    setSelectedSection(section);
    setSelectedSubSection(subSection);
    setCurrentScreen("content");
  };

  const handleBack = () => {
    if (currentScreen === "content") {
      setCurrentScreen("subSection");
      setSelectedSubSection(null);
    } else if (currentScreen === "subSection") {
      setCurrentScreen("main");
      setSelectedSection(null);
      setSelectedSubSection(null);
    }
  };

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      {currentScreen === "main" && (
        <MainScreen
          onSectionSelect={handleSectionSelect}
          onSearchResultSelect={handleSearchResultSelect}
          isDark={isDark}
        />
      )}
      {currentScreen === "subSection" && selectedSection && (
        <SubSectionScreen
          section={selectedSection}
          onBack={handleBack}
          onSubSectionSelect={handleSubSectionSelect}
          isDark={isDark}
        />
      )}
      {currentScreen === "content" && selectedSection && selectedSubSection && (
        <ContentScreen
          section={selectedSection}
          subSection={selectedSubSection}
          onBack={handleBack}
          isDark={isDark}
        />
      )}
    </View>
  );
};
