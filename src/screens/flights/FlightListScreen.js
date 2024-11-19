import React from "react";
import { View, Text, FlatList, flightListStyleheet, Image, TouchableOpacity } from "react-native";
import flightListStyle from "./flightlist.css";
const flights = [
  {
    id: "1",
    airline: "VN Airlines",
    logo: "https://via.placeholder.com/40", 
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
    <TouchableOpacity style={flightListStyle.card}>
      <View style={flightListStyle.cardHeader}>
        <Image source={{ uri: item.logo }} style={flightListStyle.logo} />
        <Text style={flightListStyle.airline}>{item.airline}</Text>
      </View>
      <View style={flightListStyle.flightDetails}>
        <Text style={flightListStyle.time}>{item.departureTime}</Text>
        <Text style={flightListStyle.duration}>{item.duration}</Text>
        <Text style={flightListStyle.time}>{item.arrivalTime}</Text>
      </View>
      <View style={flightListStyle.routeDetails}>
        <Text style={flightListStyle.location}>{item.from}</Text>
        <Text style={flightListStyle.location}>{item.to}</Text>
      </View>
      <Text style={flightListStyle.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={flightListStyle.container}>
      <FlatList
        data={flights}
        keyExtractor={(item) => item.id}
        renderItem={renderFlightItem}
        contentContainerStyle={flightListStyle.listContainer}
      />
    </View>
  );
};

export default FlightListScreen;

