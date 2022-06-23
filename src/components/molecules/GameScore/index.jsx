import { GameCounter } from "@/components/atoms";

const GameScore = () => {
  return (
    <div className="header__box">
      <p className="header__text">Score</p>
      <GameCounter></GameCounter>
    </div>
  );
};

export default GameScore;
