import { MaterialIcons } from "@expo/vector-icons";
import { useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
// import { useTheme } from "../context/ThemeContext";
import { styles } from "../styles/styles";

const ContentScreen = ({ subSection, onBack }) => {
  const { isDark } = useContext(ThemeContext);

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

export default ContentScreen;
