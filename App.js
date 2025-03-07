import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState, createContext, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { mainSections } from "./src/data/MainSections";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

const useTheme = () => useContext(ThemeContext);

const SearchResults = ({ results, onSelect, isDark }) => {
  if (results.length === 0) return null;

  return (
    <ScrollView
      style={[styles.searchResults, isDark && styles.darkSearchResults]}
    >
      {results.map((result, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.searchResultItem,
            isDark && styles.darkSearchResultItem,
          ]}
          onPress={() => onSelect(result)}
        >
          <Text style={[styles.searchResultSection, isDark && styles.darkText]}>
            {result.section}
          </Text>
          <Text style={[styles.searchResultTitle, isDark && styles.darkText]}>
            {result.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

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

const SubSectionScreen = ({ section, onBack, onSubSectionSelect }) => {
  const { isDark } = useTheme();

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <SafeAreaView style={[styles.container, isDark && styles.darkContainer]}>
        <View style={[styles.header, isDark && styles.darkHeader]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBack}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={isDark ? "#fff" : "#000"}
            />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, isDark && styles.darkText]}>
            {section.title}
          </Text>
        </View>
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

const ContentScreen = ({ subSection, onBack }) => {
  const { isDark } = useTheme();

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <SafeAreaView style={[styles.container, isDark && styles.darkContainer]}>
        <View style={[styles.header, isDark && styles.darkHeader]}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={onBack}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <MaterialIcons
              name="arrow-back"
              size={24}
              color={isDark ? "#fff" : "#000"}
            />
          </TouchableOpacity>
          <Text style={[styles.headerTitle, isDark && styles.darkText]}>
            {subSection.title || subSection.name}
          </Text>
        </View>

        <ScrollView style={styles.content}>
          <View
            style={[
              styles.contentContainer,
              isDark && styles.darkContentContainer,
            ]}
          >
            {subSection.name === "Examen" ? (
              <>
                <Text style={[{ color: "red" }, isDark && styles.darkText]}>
                  {`name: ${subSection.name}`}
                </Text>
                <Text style={[styles.contentText, isDark && styles.darkText]}>
                  {`: ${subSection.grado}`}
                </Text>
                <Text style={[styles.contentText, isDark && styles.darkText]}>
                  {`Rango: ${subSection.rango}`}
                </Text>
                <Text style={[styles.contentText, isDark && styles.darkText]}>
                  {`Significado:\n${subSection.significado}`}
                </Text>

                {subSection.sections.map((section, index) => (
                  <View key={index} style={{ marginVertical: 10 }}>
                    <Text
                      style={[
                        styles.sectionTitle,
                        isDark && styles.darkText,
                        { fontWeight: "bold" },
                      ]}
                    >
                      {section.title}
                    </Text>
                    {subSection.content.map((content, i) => (
                      <Text
                        key={i}
                        style={[styles.contentText, isDark && styles.darkText]}
                      >
                        {content}
                      </Text>
                    ))}
                  </View>
                ))}
              </>
            ) : (
              <>
                <Text style={[styles.contentText, isDark && styles.darkText]}>
                  {subSection.title || subSection.name}
                </Text>
                {subSection.content ? (
                  <View>
                    <Text
                      style={[styles.contentText, isDark && styles.darkText]}
                    >
                      {subSection.content}
                    </Text>
                  </View>
                ) : subSection.grado ? (
                  <View>
                    <Text
                      style={[styles.contentText, isDark && styles.darkText]}
                    >
                      {subSection.grado}
                    </Text>
                    <View
                      style={{
                        width: 360,
                        height: 20,
                        borderColor: "#000",
                        borderStyle: "solid",
                        borderWidth: 1,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: subSection.color[0],
                          width: 358,
                          height: 10,
                        }}
                      />
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: subSection.color[1],
                          width: 358,
                          height: 10,
                        }}
                      />
                    </View>
                    <Text
                      style={[styles.contentText, isDark && styles.darkText]}
                    >
                      {subSection.rango}
                    </Text>
                    <Text
                      style={[styles.contentText, isDark && styles.darkText]}
                    >
                      {subSection.significado}
                    </Text>
                  </View>
                ) : null}

                {subSection.sections &&
                  subSection.sections.map((section, index) => (
                    <View key={index} style={{ marginVertical: 10 }}>
                      <Text
                        style={[
                          styles.sectionTitle,
                          isDark && styles.darkText,
                          { fontWeight: "bold" },
                        ]}
                      >
                        {section.title}
                      </Text>
                      {section.content.map((content, i) => (
                        <Text
                          key={i}
                          style={[
                            styles.contentText,
                            isDark && styles.darkText,
                          ]}
                        >
                          {content}
                        </Text>
                      ))}
                    </View>
                  ))}
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default function MartialArtsApp() {
  const [currentScreen, setCurrentScreen] = useState("main");
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSubSection, setSelectedSubSection] = useState(null);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    setCurrentScreen("subSection");
  };

  const handleSubSectionSelect = (subSection) => {
    setSelectedSubSection(subSection);
    setCurrentScreen("content");
  };

  const handleSearchResultSelect = (section, subSection) => {
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
    }
  };

  const themeContext = {
    isDark,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      <View style={[styles.appContainer, isDark && styles.darkContainer]}>
        {currentScreen === "main" && (
          <MainScreen
            onSectionSelect={handleSectionSelect}
            onSearchResultSelect={handleSearchResultSelect}
          />
        )}
        {currentScreen === "subSection" && selectedSection && (
          <SubSectionScreen
            section={selectedSection}
            onBack={handleBack}
            onSubSectionSelect={handleSubSectionSelect}
          />
        )}

        {currentScreen === "content" && selectedSubSection && (
          <ContentScreen subSection={selectedSubSection} onBack={handleBack} />
        )}
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  ...styles,
  tableContainer: {
    margin: 10,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#eee",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#2c3e50",
    padding: 10,
  },
  headerCell: {
    color: "#eee",
    fontWeight: "bold",
    fontSize: 16,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    minHeight: 50,
  },
  cell: {
    padding: 10,
    justifyContent: "center",
  },
  colorCell: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    position: "relative",
    minHeight: 40,
  },
  danLine: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 2,
  },
  appContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#2c3e50",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  darkHeader: {
    backgroundColor: "#1a1a1a",
  },
  backButton: {
    marginRight: 16,
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ccc",
    flex: 1,
    left: 10,
  },
  darkText: {
    color: "#ddd",
  },
  content: {
    flex: 1,
  },
  sectionButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#ddd",
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  darkSectionButton: {
    backgroundColor: "#2a2a2a",
  },
  sectionButtonText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 12,
    color: "#333",
  },
  contentContainer: {
    padding: 16,
    backgroundColor: "#ddd",
    margin: 8,
    borderRadius: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  darkContentContainer: {
    backgroundColor: "#2a2a2a",
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
  themeToggle: {
    padding: 8,
  },
  searchContainer: {
    padding: 8,
    backgroundColor: "transparent",
  },
  searchInput: {
    height: 40,
    backgroundColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  darkSearchInput: {
    backgroundColor: "#2a2a2a",
    borderColor: "#444",
    color: "#eee",
  },
  searchResults: {
    position: "absolute",
    top: 130,
    left: 8,
    right: 8,
    maxHeight: "80%",
    backgroundColor: "#eee",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1000,
  },
  darkSearchResults: {
    backgroundColor: "#2a2a2a",
  },
  searchResultItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  darkSearchResultItem: {
    borderBottomColor: "#444",
  },
  searchResultSection: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  searchResultTitle: {
    fontSize: 16,
    color: "#333",
  },
});
