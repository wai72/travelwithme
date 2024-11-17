import React from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native";

const flights = [
  {
    id: "1",
    airline: "VN Airlines",
    logo: "https://via.placeholder.com/40", // Replace with airline logo URLs
    departureTime: "15:30",
    arrivalTime: "19:00",
    duration: "3h 30m",
    price: "$206",
    from: "SGN",
    to: "TPE",
  },
  {
    id: "2",
    airline: "Scoot",
    logo: "https://via.placeholder.com/40",
    departureTime: "08:20",
    arrivalTime: "12:20",
    duration: "4h 00m",
    price: "$312",
    from: "SGN",
    to: "TPE",
  },
  {
    id: "3",
    airline: "Eva Air",
    logo: "https://via.placeholder.com/40",
    departureTime: "14:15",
    arrivalTime: "18:30",
    duration: "4h 15m",
    price: "$427",
    from: "SGN",
    to: "TPE",
  },
];

const FlightListScreen = () => {
  const renderFlightItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: item.logo }} style={styles.logo} />
        <Text style={styles.airline}>{item.airline}</Text>
      </View>
      <View style={styles.flightDetails}>
        <Text style={styles.time}>{item.departureTime}</Text>
        <Text style={styles.duration}>{item.duration}</Text>
        <Text style={styles.time}>{item.arrivalTime}</Text>
      </View>
      <View style={styles.routeDetails}>
        <Text style={styles.location}>{item.from}</Text>
        <Text style={styles.location}>{item.to}</Text>
      </View>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={flights}
        keyExtractor={(item) => item.id}
        renderItem={renderFlightItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default FlightListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingTop: 20,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#FFF",
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
