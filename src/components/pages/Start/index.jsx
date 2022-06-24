import { GameHeader, Popup, CoinPentagram } from "@/components/organisms";
import { PageBackground } from "@/components/atoms";
import RulesButton from "../../atoms/RulesButton";

import ReactDOM from "react-dom";

const StartPage = () => {
  const popup = ReactDOM.createPortal(
    <Popup></Popup>,
    document.getElementById("root-rules")
  );

  return (
    <PageBackground>
      <GameHeader></GameHeader>
      <CoinPentagram></CoinPentagram>
      <RulesButton></RulesButton>
      {popup}
    </PageBackground>
  );
};

export default StartPage;
