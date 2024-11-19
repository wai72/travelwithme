import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import airPortListStyle from "./airport_item.css";

const AirportListItem = ({ item, onPress }) => (
    <TouchableOpacity
      style={airPortListStyle.card}
      onPress={onPress}
    >
      <Image
        source={{
          uri:
            item.presentation.image ||
            "https://logos.skyscnr.com/images/airlines/favicon/IB.png",
        }}
        style={airPortListStyle.thumbnail}
      />

      <View style={airPortListStyle.detailsContainer}>
        <Text style={airPortListStyle.airportName}>{item.presentation.title}</Text>
        <View style={airPortListStyle.statsContainer}>
          <Text style={airPortListStyle.statsText}>
            {item.presentation.subtitle || 0} 
          </Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Text style={airPortListStyle.detailsLink}>See details</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
  export default AirportListItem;