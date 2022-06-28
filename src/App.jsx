import React, { useEffect } from "react";
import { StartPage, GamePage } from "@/components/pages";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "./store";

function App() {
  const isPlaying = useSelector((state) => state.isPlaying);
  const dispatch = useDispatch();

  useEffect(() => {
    let recoveredResult = 0;
    if (localStorage.getItem("jokenpoResult")) {
      recoveredResult = localStorage.getItem("jokenpoResult");
    }
    dispatch(gameActions.recoverResult({ result: recoveredResult }));
  }, []);

  return (
    <>
      {!isPlaying && <StartPage />}
      {isPlaying && <GamePage />}
    </>
  );
}

export default App;
