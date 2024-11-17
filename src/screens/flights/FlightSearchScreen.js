import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import flightStyles from "./flights.style";
import { fetchFlights } from "../../redux/flight/flightSlice";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function FlightListScreen({ route }) {
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [classType, setClassType] = useState("economy");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const { airportId } = route.params;
  const dispatch = useDispatch();
  const { flights, loading } = useSelector((state) => state.flight);
  const navigation = useNavigation();

  const hideDatePicker = () => {
    setShowDatePicker(false);
  };
    // Handle date selection
    const onDateChange = (event, selectedDate) => {
      if (Platform.OS === "android") setShowDatePicker(false); // Close picker on Android
      if (selectedDate) {
        const formattedDate = selectedDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD
        setDepartureDate(formattedDate);
        setShowDatePicker(false);
      }
    };

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
       {/* Input for Date Selection */}
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          style={flightStyles.input}
          placeholder="Departure Date (YYYY-MM-DD)"
          value={departureDate}
          editable={false} // Prevent manual text input
          pointerEvents="none" // For iOS to disable keyboard
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={onDateChange}
        onCancel={hideDatePicker}
      />
        <Button title="Search Flights" onPress={searchFlights} />
      </View>
    </SafeAreaView>
  );
}
