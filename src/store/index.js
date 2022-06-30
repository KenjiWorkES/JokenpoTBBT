import { configureStore, createSlice } from "@reduxjs/toolkit";
import coins from "@/data/coins.json";
import conditions from "@/data/conditions.json";

const gameManager = createSlice({
  name: "coin",
  initialState: {
    coins: coins,
    isPlaying: false,
    playerChoice: 0,
    houseChoice: 0,
    result: 0,
    resultCounter: 0,
  },
  reducers: {
    recoverResult(state, actions) {
      state.resultCounter = actions.payload.result;
    },
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
    calculateResult(state) {
      let hasResult = false;
      conditions.forEach((condition) => {
        if (
          state.playerChoice === condition.win &&
          state.houseChoice === condition.lose
        ) {
          state.result = 2;
          console.log("Win");
          console.log(state.resultCounter);
          state.resultCounter = state.resultCounter + 1;
        }
        if (
          state.houseChoice === condition.win &&
          state.playerChoice === condition.lose
        ) {
          state.result = 1;
          console.log("Lose");
          if (state.resultCounter > 0) {
            state.resultCounter = state.resultCounter - 1;
          }
          console.log(state.resultCounter);
        }
        if (state.houseChoice === state.playerChoice) {
          state.result = 3;
          console.log("Draw");
          console.log(state.resultCounter);
        }
      });
    },
    restartGame(state) {
      state.playerChoice = 0;
      state.houseChoice = 0;
      state.result = 0;
    },
  },
});

const store = configureStore({
  reducer: gameManager.reducer,
});

export const gameActions = gameManager.actions;
export default store;
