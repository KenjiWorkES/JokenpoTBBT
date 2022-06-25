import { configureStore, createSlice } from "@reduxjs/toolkit";
import coins from "@/data/coins.json";

const gameManager = createSlice({
  name: "coin",
  initialState: {
    coins: coins,
    isPlaying: false,
    playerChoice: 0,
    houseChoice: 0,
  },
  reducers: {
    startGame(state) {
      state.isPlaying = !state.isPlaying;
    },
    playerTurn(state, actions) {
      state.playerChoice = actions.payload.id;
    },
    houseTurn(state) {
      state.houseChoice = Math.floor(
        Math.random() * (5 - 1 + 1) + 1
      ).toString();
    },
  },
});

const store = configureStore({
  reducer: gameManager.reducer,
});

export const gameActions = gameManager.actions;
export default store;
