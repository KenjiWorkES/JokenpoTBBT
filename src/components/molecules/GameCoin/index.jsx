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
      className={"coin " + colorClass + " " + positionClass + " " + gameClass}
    >
      <span className="coin__action" id={id} onClick={onClickHandler}></span>
      <div className="coin__background">
        <CoinImage id={id} image={image} />
      </div>
    </button>
  );
};

export default GameCoin;
