import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

const SubSectionScreen = ({ route, navigation }) => {
  const { section } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>{section.title}</Text>

      {section.subSections.map((sub, index) => (
        <TouchableOpacity key={index} style={styles.sectionButton}>
          <Text style={styles.sectionButtonText}>{sub.title}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.sectionButton}>
        <Text style={styles.sectionButtonText}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubSectionScreen;
