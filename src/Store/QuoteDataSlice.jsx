import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUS = {
  PENDING: "pending",
  IDLE: "idle",
  ERROR: "error",
};

let quoteSlice = createSlice({
  name: "quotedata",
  initialState: {
    Mystate: [],
    status: STATUS.IDLE,
  },

  extraReducers: (builder) => {
    builder
      .addCase(datafetch.fulfilled, (state, action) => {
        state.Mystate = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(datafetch.pending, (state) => {
        state.status = STATUS.PENDING;
      })
      .addCase(datafetch.rejected, (state) => {
        state.status = STATUS.ERROR;
      });
  },
});

export default quoteSlice.reducer;

//My MiddleWare

export const datafetch = createAsyncThunk("data/fetch", async () => {
  const options = {
    method: "GET",
    url: "https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes",
    headers: {
      "x-rapidapi-key": "922a3ac4cfmsha9d191fcf0bed81p16a423jsn7c9f8d163f37",
      "x-rapidapi-host": "quotes-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("A error occure while fetching  quote from API", error);
    return Promise.reject({ error: error.message });
  }
});
