import { useState } from "react";
import { View, SafeAreaView, TextInput, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "../components/ThemeContext";
import { mainSections } from "../data/sectionsData";
import SearchResults from "../components/SearchResults";
import SectionList from "../components/SectionList";
import { styles } from "../styles/styles";

const MainScreen = ({ navigation }) => {
  const { isDark, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (!text.trim()) return setSearchResults([]);

    const results = mainSections.flatMap((section) =>
      section.subSections
        .filter((subSection) =>
          subSection.title.toLowerCase().includes(text.toLowerCase())
        )
        .map((subSection) => ({
          section: section.title,
          title: subSection.title,
        }))
    );

    setSearchResults(results);
  };

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <SafeAreaView>
        <View style={[styles.header, isDark && styles.darkHeader]}>
          <Text style={[styles.headerTitle, isDark && styles.darkText]}>Manual de Técnicas</Text>
          <TouchableOpacity onPress={toggleTheme}>
            <MaterialIcons name={isDark ? "wb-sunny" : "nightlight-round"} size={24} color={isDark ? "#fff" : "#000"} />
          </TouchableOpacity>
        </View>

        <TextInput
          style={[styles.searchInput, isDark && styles.darkSearchInput]}
          placeholder="Buscar..."
          placeholderTextColor={isDark ? "#888" : "#666"}
          value={searchQuery}
          onChangeText={handleSearch}
        />

        {searchResults.length > 0 ? (
          <SearchResults results={searchResults} onSelect={() => {}} />
        ) : (
          <SectionList sections={mainSections} onSelect={(section) => navigation.navigate("SubSectionScreen", { section })} />
        )}
      </SafeAreaView>
    </View>
  );
};

export default MainScreen;
