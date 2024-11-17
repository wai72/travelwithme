import {  StyleSheet } from 'react-native';
import { appColor } from '../../appconstant/app_color';

const flightStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      paddingHorizontal: 16,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 12,
      paddingLeft: 8,
    },
    pickerContainer: {
      marginBottom: 12,
    },
    flightCard: {
      backgroundColor: '#f0f0f0',
      padding: 16,
      marginBottom: 12,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    },
    label: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: "bold",
    },
    picker: {
      height: 50,
      width: "100%",
      marginBottom: 10,
    },
    searchButton: {
      backgroundColor: appColor.primary_color,
      paddingVertical: 14,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 16,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 4, // For Android shadow
    },
    searchButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
  });
export default flightStyles;