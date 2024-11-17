import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  ActivityIndicator,
  flightStylesheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import flightStyles from "./flights.style";
import { fetchFlights } from "../../redux/flight/flightSlice";
import DatePicker from "react-native-date-picker";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";

export default function FlightListScreen({ route }) {
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [classType, setClassType] = useState("economy");
  const { airportId } = route.params;
  const dispatch = useDispatch();
  const { flights, loading } = useSelector((state) => state.flight);
  const navigation = useNavigation();

  const searchFlights = () => {
    dispatch(
      fetchFlights({
        fromId: "eyJzIjoiTEFYQSIsImUiOiIyNzUzNjIxMSIsImgiOiIyNzUzNjIxMSJ9%3",
        toId: "eyJzIjoiTllDQSIsImUiOiIyNzUzNzU0MiIsImgiOiIyNzUzNzU0MiJ9",
        departDate: "2024-11-30",
      })
    );
    navigation.navigate("FlightList")
  };

  return (
    <SafeAreaView style={{flex: 1}}> 
      <View style={flightStyles.container}>
        <Text style={flightStyles.title}>Flight Search</Text>
        <TextInput
          style={flightStyles.input}
          placeholder="From Airport"
          value={fromAirport}
          onChangeText={setFromAirport}
        />
        <TextInput
          style={flightStyles.input}
          placeholder="To Airport"
          value={toAirport}
          onChangeText={setToAirport}
        />
        <TextInput
          style={flightStyles.input}
          placeholder="Departure Date (YYYY-MM-DD)"
          value={departureDate}
          onChangeText={setDepartureDate}
        />
        
        <Button title="Search Flights" onPress={searchFlights} />

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={flights}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={flightStyles.flightCard}>
                <Text>Flight: {item.flightName}</Text>
                <Text>Price: {item.price}</Text>
                <Text>Duration: {item.duration}</Text>
                <Text>
                  Transit: {item.transit ? item.transit.name : "Direct"}
                </Text>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
