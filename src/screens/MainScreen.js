import React, { useState, useContext } from "react";
import {
  View,
  TextInput,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { styles } from "../styles/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { SearchResults } from "../components/SearchResults";
import { mainSections } from "../data/MainSections";
import { SectionButton } from "../components/SectionButtons";
import { Header } from "../components/Header";

const MainScreen = ({ onSectionSelect, onSearchResultSelect }) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === "") {
      setSearchResults([]);
      return;
    }
    const results = [];
    const searchText = text.toLowerCase();
    mainSections.forEach((section) => {
      if (!section.subSections || section.subSections.length === 0) return;
      section.subSections.forEach((subSection) => {
        if (
          subSection.title?.toLowerCase().includes(searchText) ||
          section.title?.toLowerCase().includes(searchText)
        ) {
          results.push({
            section: section.title,
            title: subSection.title,
            sectionData: section,
            subSection,
          });
        }
      });
    });
    setSearchResults(results);
  };

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <SafeAreaView style={[styles.container, isDark && styles.darkContainer]}>
        <Header title="LQHApp" isDark={isDark} toggleTheme={toggleTheme} />
        <View style={styles.searchContainer}>
          <TextInput
            style={[styles.searchInput, isDark && styles.darkSearchInput]}
            placeholder="Buscar..."
            placeholderTextColor={isDark ? "#888" : "#666"}
            value={searchQuery}
            onChangeText={handleSearch}
          />
        </View>
        {searchResults.length > 0 ? (
          <SearchResults
            results={searchResults}
            onSelect={(result) => {
              onSearchResultSelect(result.sectionData, result.subSection);
              setSearchQuery("");
              setSearchResults([]);
            }}
            isDark={isDark}
          />
        ) : (
          <ScrollView style={styles.content}>
            {mainSections.map((section, index) => (
              <SectionButton
                key={index}
                section={section}
                onPress={onSectionSelect}
                isDark={isDark}
              />
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;
