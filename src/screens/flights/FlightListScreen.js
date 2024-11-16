import React, { useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFlights } from '../../redux/flight/flightSlice';

export default function FlightListScreen({ route }) {
  const { airportId } = route.params;
  const dispatch = useDispatch();
  const { flights, loading } = useSelector((state) => state.flight);

  useEffect(() => {
    dispatch(fetchFlights({ fromId: airportId, toId: 'XYZ', departDate: '2024-11-30' }));
  }, [airportId]);

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={flights}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.airlineName}</Text>
              <Text>{item.price}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}
