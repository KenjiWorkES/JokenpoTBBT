import { MainButton } from "@/components/atoms";

const ResultBox = () => {
  return (
    <div className="game__resultBox">
      <h3 className="game__resultTitle u-margin-bottom-small">You Lose</h3>
      <MainButton
        className="mainButton--relative"
        title="Play Again"
      ></MainButton>
    </div>
  );
};

export default ResultBox;
