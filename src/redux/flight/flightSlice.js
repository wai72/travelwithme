import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAirports, getFlights } from "../../api/flightApi";

const initialState = {
  airports: [],
  flights: [],
  loading: false,
  error: null,
};

export const fetchAirports = createAsyncThunk(
  "flight/fetchAirports",
  async (query) => {
    return await getAirports(query);
  }
);

export const fetchFlights = createAsyncThunk(
  "flight/fetchFlights",
  async (params) => {
    return await getFlights(params);
  }
);

const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAirports.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAirports.fulfilled, (state, action) => {
        state.loading = false;
        state.airports = action.payload;
      })
      .addCase(fetchAirports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchFlights.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.flights = action.payload;
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default flightSlice.reducer;
