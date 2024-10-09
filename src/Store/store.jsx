import { configureStore } from "@reduxjs/toolkit";
import quotefinaldatIs from "./QuoteDataSlice";
const store = configureStore({
  reducer: {
    quote: quotefinaldatIs,
  },
});

export default store;
