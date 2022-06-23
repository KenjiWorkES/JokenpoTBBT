import { CoinImage } from "@/components/atoms";

const GameCoin = ({ image, color, position, id }) => {
  const colorClass = color ? `coin--${color}` : "";
  const positionClass = position ? `coin--${position}` : "";

  return (
    <div id={id} className={"coin " + colorClass + " " + positionClass}>
      <div className="coin__background">
        <CoinImage image={image} />
      </div>
    </div>
  );
};

export default GameCoin;
