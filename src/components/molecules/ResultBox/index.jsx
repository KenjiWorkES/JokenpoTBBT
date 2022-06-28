import { useEffect, useState } from "react";
import { MainButton } from "@/components/atoms";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { gameActions } from "../../../store";

const ResultBox = () => {
  const result = useSelector((state) => state.result);
  const [resultText, setResultText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (result) {
      switch (result) {
        case 1:
          setResultText("You Lose");
          break;
        case 2:
          setResultText("You Win");
          break;
        case 3:
          setResultText("Draw");
          break;
      }
    }
  }, [result]);

  const restarGameHandler = () => {
    dispatch(gameActions.restartGame());
  };

  return (
    <div className="game__resultBox">
      <h3 className="game__resultTitle u-margin-bottom-small">{resultText}</h3>
      <a href="#choice">
        <MainButton
          onClick={restarGameHandler}
          className="mainButton--relative"
          title="Play Again"
        ></MainButton>
      </a>
    </div>
  );
};

export default ResultBox;
