import {  StyleSheet } from 'react-native';
import { appColor } from '../appconstant/app_color';
const airPortListStyle = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  airportName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  airportDetails: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginVertical: 8,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  airportName: {
    fontSize: 16,
    fontWeight: "bold",
    color: appColor.black_color,
    marginBottom: 4,
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  statsText: {
    fontSize: 12,
    color: "#666",
  },
  detailsLink: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "bold",
  },
  listContainer: {
    paddingBottom: 16,
  },
});
  export default airPortListStyle;