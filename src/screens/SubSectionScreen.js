// import React from "react";
// import { 
// View, 
// Text, 
// ScrollView, 
// SafeAreaView, 
// TouchableOpacity 
// } from "react-native";
// import { MaterialIcons } from "@expo/vector-icons";
// import styles from "../styles/styles";
// import { useTheme } from "../context/ThemeContext";

// const SubSectionScreen = ({ section, onBack, onSubSectionSelect }) => {
// const { isDark } = useTheme();

// return (
//     <View style={[styles.container, isDark && styles.darkContainer]}>
//     <SafeAreaView style={[styles.container, isDark && styles.darkContainer]}>
//         <View style={[styles.header, isDark && styles.darkHeader]}>
//         <TouchableOpacity
//             style={styles.backButton}
//             onPress={onBack}
//             hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
//         >
//             <MaterialIcons
//             name="arrow-back"
//             size={24}
//             color={isDark ? "#fff" : "#000"}
//             />
//         </TouchableOpacity>
//         <Text style={[styles.headerTitle, isDark && styles.darkText]}>
//             {section.title}
//         </Text>
//         </View>
//         <ScrollView style={styles.content}>
//         {section.subSections.map((subSection, index) => (
//             <TouchableOpacity
//             key={index}
//             style={[styles.sectionButton, isDark && styles.darkSectionButton]}
//             onPress={() => onSubSectionSelect(subSection)}
//             >
//             <Text
//                 style={[styles.sectionButtonText, isDark && styles.darkText]}
//             >
//                 {subSection.title || subSection.name}
//             </Text>
//             <MaterialIcons
//                 name="chevron-right"
//                 size={24}
//                 color={isDark ? "#eee" : "#333"}
//             />
//             </TouchableOpacity>
//         ))}
//         </ScrollView>
//     </SafeAreaView>
//     </View>
// );
// };

// export default SubSectionScreen;


import React, { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
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
              <Text style={[styles.sectionButtonText, isDark && styles.darkText]}>
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
