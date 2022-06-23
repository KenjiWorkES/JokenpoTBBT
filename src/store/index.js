import { configureStore, createSlice } from "@reduxjs/toolkit";
import coins from "@/data/coins.json";

const coinManager = createSlice({
  name: "coin",
  initialState: {
    coins: coins,
  },
  reducers: {},
});

const store = configureStore({
  reducer: coinManager.reducer,
});

export default store;
