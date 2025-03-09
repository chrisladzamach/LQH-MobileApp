import React, { useState } from "react";
import { 
View, 
Text, 
TextInput, 
StatusBar, 
ScrollView, 
SafeAreaView, 
TouchableOpacity 
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../styles/styles";
import { useTheme } from "../context/ThemeContext";
import SearchResults from "./SearchResults";
import { mainSections } from "../data/MainSections";

const MainScreen = ({ onSectionSelect, onSearchResultSelect }) => {
const { isDark, toggleTheme } = useTheme();
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
    <StatusBar style={isDark ? "light" : "dark"} />
    <SafeAreaView style={[styles.container, isDark && styles.darkContainer]}>
        <View style={[styles.header, isDark && styles.darkHeader]}>
        <Text style={[styles.headerTitle, isDark && styles.darkText]}>
            LQHApp
        </Text>
        <TouchableOpacity onPress={toggleTheme} style={styles.themeToggle}>
            <MaterialIcons
            name={isDark ? "wb-sunny" : "nightlight-round"}
            size={24}
            color={isDark ? "#fff" : "#000"}
            />
        </TouchableOpacity>
        </View>

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
            <TouchableOpacity
                key={index}
                style={[
                styles.sectionButton,
                isDark && styles.darkSectionButton,
                ]}
                onPress={() => onSectionSelect(section)}
            >
                {section.iconType === "community" ? (
                <MaterialCommunityIcons
                    name={section.icon}
                    size={24}
                    color={isDark ? "#fff" : "#333"}
                />
                ) : (
                <MaterialIcons
                    name={section.icon}
                    size={24}
                    color={isDark ? "#fff" : "#333"}
                />
                )}
                <Text
                style={[styles.sectionButtonText, isDark && styles.darkText]}
                >
                {section.title}
                </Text>
                <MaterialIcons
                name="chevron-right"
                size={24}
                color={isDark ? "#fff" : "#333"}
                />
            </TouchableOpacity>
            ))}
        </ScrollView>
        )}
    </SafeAreaView>
    </View>
);
};

export default MainScreen;

