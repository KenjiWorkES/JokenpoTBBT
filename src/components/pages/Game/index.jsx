import {
  GameHeader,
  Popup,
  GameArea,
  ChosePopup,
} from "@/components/organisms";
import { PageBackground, MainButton, RulesButton } from "@/components/atoms";

import ReactDOM from "react-dom";

const GamePage = () => {
  const popup = ReactDOM.createPortal(
    <Popup></Popup>,
    document.getElementById("root-rules")
  );

  const choicePopup = ReactDOM.createPortal(
    <ChosePopup></ChosePopup>,
    document.getElementById("root-choice")
  );

  return (
    <PageBackground>
      <GameHeader></GameHeader>
      <GameArea />
      <RulesButton></RulesButton>
      {popup}
      {choicePopup}
    </PageBackground>
  );
};

export default GamePage;
