import {  StyleSheet } from 'react-native';
import { appColor } from '../../appconstant/app_color';

const flightListStyle = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: 20,
    },
    listContainer: {
      paddingHorizontal: 16,
    },
    card: {
      backgroundColor: '#FFEBEE',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      elevation: 2, // For shadow on Android
      shadowColor: "#000", // For shadow on iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    cardHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 8,
    },
    logo: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 8,
    },
    airline: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#333",
    },
    flightDetails: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8,
      marginBottom: 8,
    },
    time: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
    },
    duration: {
      fontSize: 14,
      color: "#888",
    },
    routeDetails: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 8,
    },
    location: {
      fontSize: 14,
      color: "#555",
    },
    price: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#FF6F61",
      alignSelf: "flex-end",
    },
  });
  export default flightListStyle;