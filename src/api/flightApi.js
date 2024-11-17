import axios from "axios";
import { FLIGHT_RAPIDAPI_KEY } from "@env";

const API_HOST = "skyscanner80.p.rapidapi.com";

export const getAirports = async (query) => {
  const response = await axios.get(
    `https://${API_HOST}/api/v1/flights/auto-complete`,
    {
      params: { query, market: "US", locale: "en-US" },
      headers: {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": FLIGHT_RAPIDAPI_KEY,
      },
    }
  );
  return response.data.data;
};

export const getFlights = async (params) => {
  console.log("query is ", params);
  const response = await axios.get(
    `https://${API_HOST}/api/v1/flights/search-one-way`,
    {
      params,
      headers: {
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": FLIGHT_RAPIDAPI_KEY,
      },
    }
  );
  console.log("response is ", response.data.data);
  return response.data.data;
};
