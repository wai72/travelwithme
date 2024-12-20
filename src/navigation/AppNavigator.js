import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import FlightListScreen from '../screens/flights/FlightListScreen';
import FlightSearchScreen from '../screens/flights/FlightSearchScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FlightList" component={FlightListScreen} />
        <Stack.Screen name="FlightSearchScreen" component={FlightSearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
