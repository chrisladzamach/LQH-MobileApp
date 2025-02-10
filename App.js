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

export default function App() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCat = () => {
    setLoading(true);
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => {
        setCat(data[0].url);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cat image:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text
        style={{
          color: "#aaa",
          fontSize: 20,
          marginBottom: 10,
          fontWeight: "bold",
        }}
      >
        Here appears a cat image
      </Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        cat && <Image style={styles.image} source={{ uri: cat }} />
      )}

      <Pressable
        onPress={fetchCat}
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? "#aaa" : "#ccc" },
        ]}
      >
        <Text style={styles.buttonText}>Show New Cat</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#ccc",
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
});
