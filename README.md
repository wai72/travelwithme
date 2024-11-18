# Flight Info App 🚀

# Features 🌟
<kbd> Search for Airports:</kbd> Autocomplete functionality for selecting "From" and "To" airports.
Flight Search: Search flights based on user input, including departure date, number of passengers (adults, children, infants), and cabin class.
View Flight Details: Displays flight schedules, prices, flight duration, transit airport (if applicable), transit duration, and additional policies.
Redux Integration: Efficient state management for storing airport data, search parameters, and flight results.
Installation 💻
Prerequisites
Node.js installed on your machine.
React Native environment set up (React Native CLI Quickstart Guide).
A valid RapidAPI key for the Skyscanner API.
Steps to Install
Clone the repository:

bash
Copy code
git clone <repository-url>
cd flight-info-app
Install dependencies:

npm install
# Set up environment variables:

Create an .env file in the root directory.
Add your RapidAPI key:
RAPIDAPI_KEY=your-rapidapi-key

## Run the application:

# For iOS:
bash
Copy code
npx react-native run-ios
# For Android:
bash
Copy code
npx react-native run-android
# Usage 📱
Searching for Flights:
Enter the From and To airports using the autocomplete search.
Select the departure date.
Specify the number of passengers (adults, children, infants).
Choose the cabin class (economy, premium economy, business, or first class).
Tap on the Search Flights button to view the results.
Project Structure 📂
# Key Folders and Files:
src
components: Reusable UI components (e.g., input fields, buttons, list items).
screens: Screens for navigation, including FlightSearchScreen and FlightResultsScreen.
# redux:
actions: Redux actions for fetching airports, flight data, etc.
reducers: Redux reducers for managing app state.
store.js: Configures the Redux store.
styles: Stylesheets for UI components and screens.
App.js: Main entry point of the application.
API Integration 🌐
The app uses the Skyscanner API from RapidAPI to fetch flight schedules and airport information.

# Example API Usage:
Fetch Flight Information:
bash
Copy code
curl --request GET \
--url 'https://skyscanner80.p.rapidapi.com/api/v1/flights/search-one-way?fromId=...&toId=...&departDate=2024-11-30&adults=1&children=1&infants=1&cabinClass=economy&currency=USD&market=US&locale=en-US' \
--header 'x-rapidapi-host: skyscanner80.p.rapidapi.com' \
--header 'x-rapidapi-key: YOUR_RAPIDAPI_KEY'
# API Parameters:
fromId: Airport ID for the departure airport.
toId: Airport ID for the destination airport.
departDate: Flight departure date (YYYY-MM-DD).
cabinClass: Cabin class (economy, premium_economy, business, first).
# Redux State Management 🗂️
Redux Store Structure:
{
  airport: {
    fromAirport: '',   // Selected departure airport
    toAirport: '',     // Selected destination airport
    airportList: [],   // List of airports for autocomplete
  },
  flights: {
    flightResults: [], // List of fetched flight data
    isLoading: false,  // Loading state for API requests
    error: null,       // Error message (if any)
  }
}
# Example Redux Actions:
Airport Actions: Fetching and storing airport data.
Flight Actions: Making API calls for flight search and storing results.
# Dependencies 📦
React Native: For building the mobile application.
Redux: For state management.
Redux Thunk: For handling asynchronous Redux actions.
React Navigation: For handling navigation between screens.
Axios: For API requests.
DateTimePicker: For selecting the departure date.
# Future Enhancements 🔮
Add user authentication.
Save and display past searches.
Display airport codes alongside airport names.
Show live updates on flight prices and schedules
