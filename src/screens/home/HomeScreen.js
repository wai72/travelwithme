import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  homehomeStyleheet,
  Image,
  ImageBackground,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirports } from "../../redux/flight/flightSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import homeStyle from "./home.style";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const { airports, loading } = useSelector((state) => state.flight);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    dispatch(fetchAirports(query == '' ? 'new' : query));
  }, [query]);

  const navigateTo = (item) => {
    navigation.navigate("FlightSearchScreen", {
      airportId: item.presentation.id,
    })
  }
  // Render each airport in a styled card
  const renderAirportItem = ({ item }) => (
    <TouchableOpacity
      style={homeStyle.card}
      onPress={() => navigateTo(item)}
    >
      {/* Airport Image */}
      <Image
        source={{
          uri:
            item.presentation.image ||
            "https://logos.skyscnr.com/images/airlines/favicon/IB.png",
        }}
        style={homeStyle.thumbnail}
      />

      {/* Airport Details */}
      <View style={homeStyle.detailsContainer}>
        <Text style={homeStyle.airportName}>{item.presentation.title}</Text>
        <View style={homeStyle.statsContainer}>
          <Text style={homeStyle.statsText}>
            {item.presentation.viewers || 0} viewers
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigateTo(item)}>
          <Text style={homeStyle.detailsLink}>See details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={homeStyle.container}>
      {/* Top Section with Background */}
      <ImageBackground
        source={{
          uri: "https://content.skyscnr.com/m/3719e8f4a5daf43d/original/Flights-Placeholder.jpg",
        }}
        style={homeStyle.topSection}
        imageStyle={homeStyle.backgroundImage}
      >
        <View style={homeStyle.overlay}>
          <View style={homeStyle.greetingContainer}>
            <Text style={homeStyle.greeting}>Hello, Wai!</Text>
            <Text style={homeStyle.subtitle}>Welcome to Flight Explorer</Text>
          </View>
        </View>
      </ImageBackground>

      {/* Search Input */}
      <View style={homeStyle.searchContainer}>
        <Icon
          name="search-outline"
          size={20}
          color="#666"
          style={homeStyle.searchIcon}
        />
        <TextInput
          style={homeStyle.searchInput}
          placeholder="Search for flights and more"
          value={query}
          onChangeText={(text) => setQuery(text)}
        />
      </View>

      {/* Loading and Error States */}
      {loading && <ActivityIndicator size="large" color="#007AFF" />}
      {error && <Text style={homeStyle.errorText}>{error}</Text>}

      {/* Airport Search Results */}
      {!loading && airports?.length === 0 && query.trim() !== "" && (
        <Text style={homeStyle.emptyText}>No results found.</Text>
      )}
      <FlatList
        data={airports}
        keyExtractor={(item) => item.presentation.skyId}
        renderItem={renderAirportItem}
        contentContainerStyle={homeStyle.listContainer}
      />
    </SafeAreaView>
  );
}
