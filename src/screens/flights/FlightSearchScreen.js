import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import flightStyles from "./flights.style";
import { fetchFlights } from "../../redux/flight/flightSlice";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import appData from "../../appconstant/app_data";


export default function FlightListScreen({ route }) {
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
  const [departureDate, setDepartureDate] = useState("2024-11-30");
  const [fromID, setFromID] = useState(appData.fromID);
  const [toID, setToID] = useState(appData.toID);
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
    const onDateChange = (event, selectedDate) => {
      if (Platform.OS === "android") setShowDatePicker(false);
      if (selectedDate) {
        const formattedDate = selectedDate.toISOString().split("T")[0]; 
        setDepartureDate(formattedDate);
        setShowDatePicker(false);
      }
    };

  const searchFlights = () => {
    if(!fromAirport && !toAirport && !departureDate){
      Alert.show('Please fill all the required fields');
    }else{
      dispatch(
        fetchFlights({
          fromId: fromID,
          toId: toID,
          departDate: departureDate,
        })
      );
      console.log(' I got flight data ', flights); // I got Flight's data but it is really complex to bind in UI
      navigation.navigate("FlightList");
    }
   
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
      <TouchableOpacity onPress={() => setShowDatePicker(true)}>
        <TextInput
          style={flightStyles.input}
          placeholder="Departure Date (YYYY-MM-DD)"
          value={departureDate}
          editable={false} 
          pointerEvents="none" 
        />
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={showDatePicker}
        mode="date"
        onConfirm={onDateChange}
        onCancel={hideDatePicker}
      />
       {/* Attractive Button */}
       <TouchableOpacity
          style={flightStyles.searchButton}
          onPress={searchFlights}
        >
          <Text style={flightStyles.searchButtonText}>Search Flights</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
