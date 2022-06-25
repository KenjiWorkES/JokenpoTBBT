import { GameControl } from "@/components/molecules";

const GameArea = () => {
  return (
    <div className="game">
      <GameControl title="You Picked" isPlayerChoice={true} />
      <GameControl title="the house picked" isPlayerChoice={false} />
    </div>
  );
};

export default GameArea;
