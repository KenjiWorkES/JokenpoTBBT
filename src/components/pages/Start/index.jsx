import { CoinPentagram } from "@/components/organisms";
import { GameHeader } from "@/components/organisms";
import { PageBackground } from "@/components/atoms";

const StartPage = () => {
  return (
    <PageBackground>
      <GameHeader></GameHeader>
      <CoinPentagram></CoinPentagram>
    </PageBackground>
  );
};

export default StartPage;
