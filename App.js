import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useState, useEffect } from "react";

export const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentCharacter, setCurrentCharacter] = useState(null);

  useEffect(() => {
    fetch("https://dragonball-api.com/api/characters")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        return response.json();
      })
      .then((data) => {
        setCharacters(data.items || []);
        setLoading(false);
        if (data.items.length > 0) {
          setCurrentCharacter(
            data.items[Math.floor(Math.random() * data.items.length)],
          );
        }
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const showRandomCharacter = () => {
    if (characters.length > 0) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      setCurrentCharacter(characters[randomIndex]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {loading && <ActivityIndicator size="large" color="#fff" />}
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
      {currentCharacter && (
        <View style={styles.characterCard}>
          <Image
            source={{ uri: currentCharacter.image }}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.text}>{currentCharacter.name}</Text>
          <Text style={styles.kiText}>Ki: {currentCharacter.ki}</Text>
          <Text style={styles.description}>{currentCharacter.description}</Text>
        </View>
      )}
      <Pressable onPress={showRandomCharacter} style={styles.button}>
        <Text style={styles.buttonText}>Mostrar Personaje Aleatorio</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  characterCard: {
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    width: "90%",
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "justify",
  },
  kiText: {
    color: "#FFD700",
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "#ddd",
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: "#FFD700",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;
