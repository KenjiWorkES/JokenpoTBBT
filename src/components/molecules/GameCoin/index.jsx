import { CoinImage } from "@/components/atoms";

const GameCoin = ({ image, color }) => {
  return (
    <div className="coin">
      <div className="coin__background">
        <CoinImage image={image} />
      </div>
    </div>
  );
};

export default GameCoin;
