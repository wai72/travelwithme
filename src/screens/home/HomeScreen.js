import React, { useEffect, useState } from 'react';
import {  Text,
    View,
    TextInput,
    FlatList,
    TouchableOpacity,
    ActivityIndicator,
    } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAirports } from '../../redux/flight/flightSlice';
import homeStyle from './home.style'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("new");
  const { airports, loading } = useSelector((state) => state.flight);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    dispatch(fetchAirports(query));
  }, [query]);


  const renderAirportItem = ({ item }) => (
    <TouchableOpacity style={homeStyle.card} onPress={() => navigation.navigate('FlightList', { airportId: item.id })}>
      <Text style={homeStyle.airportName}>{item.presentation.title}</Text>
      <Text style={homeStyle.airportDetails}>
        {item.presentation.subtitle}
      </Text>
    </TouchableOpacity>
  );
   
      return (
        <SafeAreaView style={homeStyle.container}>
        <View >
          <Text style={homeStyle.header}>Search Airports</Text>
          <TextInput
            style={homeStyle.searchInput}
            placeholder="Enter airport name..."
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
    
          {loading && <ActivityIndicator size="large" color="#007AFF" />}
    
          {error && <Text style={homeStyle.errorText}>{error}</Text>}
    
          {!loading && airports?.length === 0 && query.trim() !== "" && (
            <Text style={homeStyle.emptyText}>No results found.</Text>
          )}
    
          <FlatList
            data={airports}
            keyExtractor={(item) => item.presentation.skyId}
            renderItem={renderAirportItem}
            contentContainerStyle={homeStyle.listContainer}
          />
        </View>
        </SafeAreaView>
      );
  
}
