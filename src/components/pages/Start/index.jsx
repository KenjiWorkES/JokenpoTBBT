import { CoinPentagram } from "@/components/organisms";
import { GameHeader } from "@/components/organisms";
import { PageBackground } from "@/components/atoms";
import RulesButton from "../../atoms/RulesButton";

const StartPage = () => {
  return (
    <PageBackground>
      <GameHeader></GameHeader>
      <CoinPentagram></CoinPentagram>
      <RulesButton></RulesButton>
    </PageBackground>
  );
};

export default StartPage;
