import React from "react";
import { StartPage, GamePage } from "@/components/pages";
import { useSelector } from "react-redux";

function App() {
  const isPlaying = useSelector((state) => state.isPlaying);

  return (
    <>
      {!isPlaying && <StartPage />}
      {isPlaying && <GamePage />}
    </>
  );
}

export default App;
