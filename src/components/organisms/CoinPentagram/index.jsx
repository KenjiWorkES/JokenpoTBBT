import { GameCoin } from "@/components/molecules";
import { useSelector } from "react-redux/es/exports";

const CoinPentagram = () => {
  const coinsData = useSelector((state) => state.coins);

  return (
    <div className="coinPentagram">
      <div className="coinPentagram__background">
        {coinsData.map((coin) => (
          <GameCoin
            id={coin.id}
            key={coin.id}
            image={coin.image}
            color={coin.color}
            position={coin.position}
          ></GameCoin>
        ))}
      </div>
    </div>
  );
};

export default CoinPentagram;
