import {  StyleSheet } from 'react-native';
const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  topSection: {
    height: 200,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  backgroundImage: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  overlay: {
    flexDirection: "row",
    alignItems: "center",
   // backgroundColor: "rgba(0, 0, 0, 0.3)", // Dark overlay for text readability
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
  },
  greetingContainer: {
    flex: 1,
  },
  greeting: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#d9e6f2",
    fontSize: 14,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: -20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "#333",
  },
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
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 16,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 16,
    fontSize: 16,
    color: "#666",
  },
  listContainer: {
    paddingBottom: 16,
  },
});
  export default homeStyle;