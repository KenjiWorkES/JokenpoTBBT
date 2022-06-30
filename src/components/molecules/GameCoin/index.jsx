import { CoinImage } from "@/components/atoms";

const GameCoin = ({ image, color, position, id, game, onClick }) => {
  const colorClass = color ? `coin--${color}` : "";
  const positionClass = position ? `coin--${position}` : "";
  const gameClass = game ? `coin--${game}` : "";

  const onClickHandler = (event) => {
    onClick && onClick(event.target.id);
  };

  return (
    <button
      id={id}
      className={"coin " + colorClass + " " + positionClass + " " + gameClass}
      onClick={onClickHandler}
    >
      <span className="coin__action"></span>
      <div className="coin__background">
        <CoinImage id={id} image={image} />
      </div>
    </button>
  );
};

export default GameCoin;
