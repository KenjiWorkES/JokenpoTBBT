import { useState, useEffect } from "react";

import { GameCoin } from "@/components/molecules";
import { useSelector } from "react-redux";

const GameControl = ({ title, isPlayerChoice }) => {
  const [hasChoice, setHasChoice] = useState(false);

  const coinsData = useSelector((state) => state.coins);
  const playerChoice = useSelector((state) => state.playerChoice);
  const houseChoice = useSelector((state) => state.houseChoice);

  const houseCoin = coinsData.filter((coin) => coin.id === houseChoice);
  const playerCoin = coinsData.filter((coin) => coin.id === playerChoice);

  useEffect(() => {
    if (playerChoice && houseChoice) {
      setHasChoice(true);
    } else {
      setHasChoice(false);
    }
  }, [playerChoice, houseChoice]);

  return (
    <div className="game__control">
      <h3 className="game__title u-margin-bottom-big">{title}</h3>
      <div className="game__coinArea">
        {isPlayerChoice && hasChoice && (
          <GameCoin
            id={playerCoin[0].id}
            image={playerCoin[0].image}
            color={playerCoin[0].color}
            game="game"
          />
        )}
        {!isPlayerChoice && hasChoice && (
          <GameCoin
            id={houseCoin[0].id}
            image={houseCoin[0].image}
            color={houseCoin[0].color}
            game="game"
          />
        )}
      </div>
    </div>
  );
};

export default GameControl;
