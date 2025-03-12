import React, { useContext } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../styles/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { Header } from "../components/Header";

const ContentScreen = ({ section, subSection, onBack }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <View style={[styles.container, isDark && styles.darkContainer]}>
      <SafeAreaView style={[styles.container, isDark && styles.darkContainer]}>
        <Header
          title={subSection?.title || subSection?.name}
          isDark={isDark}
          onBack={onBack}
        />
        <ScrollView style={styles.content}>
          <View
            style={[
              styles.contentContainer,
              isDark && styles.darkContentContainer,
            ]}
          >
            {subSection?.name === "Examen" ? (
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
                {subSection?.sections &&
                  subSection?.sections.map((section, index) => (
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
                      {section?.content &&
                        section?.content.map((content, i) => (
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
            ) : (
              <>
                <Text style={[styles.contentText, isDark && styles.darkText]}>
                  {subSection?.title || subSection?.name}
                </Text>
                {subSection?.content ? (
                  <View>
                    <Text
                      style={[styles.contentText, isDark && styles.darkText]}
                    >
                      {subSection?.content}
                    </Text>
                  </View>
                ) : subSection?.grado ? (
                  <View>
                    <Text
                      style={[styles.contentText, isDark && styles.darkText]}
                    >
                      {subSection?.grado}
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
                          backgroundColor: subSection?.color?.[0],
                          width: 358,
                          height: 10,
                        }}
                      />
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: subSection?.color?.[1],
                          width: 358,
                          height: 10,
                        }}
                      />
                    </View>
                    <Text
                      style={[styles.contentText, isDark && styles.darkText]}
                    >
                      {subSection?.rango}
                    </Text>
                    <Text
                      style={[styles.contentText, isDark && styles.darkText]}
                    >
                      {subSection?.significado}
                    </Text>
                  </View>
                ) : null}
                {subSection?.sections &&
                  subSection?.sections.map((section, index) => (
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
                      {section?.content?.map((content, i) => (
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
