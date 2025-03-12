// import React from "react";
// import { ScrollView, TouchableOpacity, Text } from "react-native";
// import styles from "../styles/styles";

// const SearchResults = ({ results, onSelect, isDark }) => {
// if (results.length === 0) return null;

// return (
//     <ScrollView
//     style={[styles.searchResults, isDark && styles.darkSearchResults]}
//     >
//     {results.map((result, index) => (
//         <TouchableOpacity
//         key={index}
//         style={[
//             styles.searchResultItem,
//             isDark && styles.darkSearchResultItem,
//         ]}
//         onPress={() => onSelect(result)}
//         >
//         <Text style={[styles.searchResultSection, isDark && styles.darkText]}>
//             {result.section}
//         </Text>
//         <Text style={[styles.searchResultTitle, isDark && styles.darkText]}>
//             {result.title}
//         </Text>
//         </TouchableOpacity>
//     ))}
//     </ScrollView>
// );
// };

// export default SearchResults;


import { ScrollView, TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";

export const SearchResults = ({ results, onSelect, isDark }) => {
  if (results.length === 0) return null;

  return (
    <ScrollView style={[styles.searchResults, isDark && styles.darkSearchResults]}>
      {results.map((result, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.searchResultItem, isDark && styles.darkSearchResultItem]}
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

