import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  darkContainer: { backgroundColor: "#121212" },
  header: { flexDirection: "row", justifyContent: "space-between", padding: 16 },
  headerTitle: { fontSize: 20, fontWeight: "bold" },
  darkText: { color: "#fff" },
  searchInput: { borderWidth: 1, padding: 10, margin: 16 },
  darkSearchInput: { backgroundColor: "#333", color: "#fff" },
  sectionButton: { padding: 16, flexDirection: "row", alignItems: "center" },
  darkSectionButton: { backgroundColor: "#222" },
  sectionButtonText: { marginLeft: 8, fontSize: 16 },
});
