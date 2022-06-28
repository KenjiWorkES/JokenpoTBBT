import { GameControl, ResultBox } from "@/components/molecules";

const GameArea = () => {
  return (
    <div className="game">
      <GameControl title="You Picked" isPlayerChoice={true} />
      <ResultBox></ResultBox>
      <GameControl title="the house picked" isPlayerChoice={false} />
    </div>
  );
};

export default GameArea;
