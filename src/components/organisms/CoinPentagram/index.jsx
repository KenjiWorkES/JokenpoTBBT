import { GameCoin } from "@/components/molecules";
import { useSelector } from "react-redux/es/exports";

const CoinPentagram = ({ onChose }) => {
  const coinsData = useSelector((state) => state.coins);

  const coinClickHandler = onChose ? onChose : () => {};

  return (
    <div className="coinPentagram">
      <div className="coinPentagram__background">
        {coinsData.map((coin) => (
          <a key={coin.id} href="#game">
            <GameCoin
              id={coin.id}
              key={coin.id}
              image={coin.image}
              color={coin.color}
              position={coin.position}
              onClick={coinClickHandler}
            ></GameCoin>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CoinPentagram;
