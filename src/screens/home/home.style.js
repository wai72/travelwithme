import {  StyleSheet } from 'react-native';
const homeStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f9f9f9",
      padding: 16,
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16,
      color: "#007AFF",
    },
    searchInput: {
      height: 50,
      borderRadius: 8,
      paddingHorizontal: 16,
      backgroundColor: "#fff",
      elevation: 2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      marginBottom: 16,
      fontSize: 16,
    },
    card: {
      backgroundColor: "#fff",
      padding: 16,
      borderRadius: 8,
      marginVertical: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      elevation: 2,
    },
    airportName: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
    },
    airportDetails: {
      fontSize: 14,
      color: "#666",
      marginTop: 4,
    },
    errorText: {
      color: "red",
      fontSize: 16,
      textAlign: "center",
      marginTop: 16,
    },
    emptyText: {
      color: "#333",
      fontSize: 16,
      textAlign: "center",
      marginTop: 16,
    },
    listContainer: {
      paddingBottom: 16,
    },
  });
  export default homeStyle;