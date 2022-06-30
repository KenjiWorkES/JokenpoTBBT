import { GameHeader, Popup, CoinPentagram } from "@/components/organisms";
import { PageBackground, MainButton, RulesButton } from "@/components/atoms";
import { useDispatch } from "react-redux/es/exports";
import { gameActions } from "@/store";

import ReactDOM from "react-dom";

const StartPage = () => {
  const dispatch = useDispatch();

  const startPlayHandler = () => {
    dispatch(gameActions.startGame());
  };

  const popup = ReactDOM.createPortal(
    <Popup></Popup>,
    document.getElementById("root-rules")
  );

  return (
    <PageBackground>
      <GameHeader></GameHeader>
      <CoinPentagram></CoinPentagram>
      <div className="pageBackground__container u-margin-top-medium">
        <a href="#choice">
          <MainButton onClick={startPlayHandler} title="Play Now" />
        </a>
      </div>
      <RulesButton></RulesButton>
      {popup}
    </PageBackground>
  );
};

export default StartPage;
