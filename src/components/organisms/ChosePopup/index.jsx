import { CoinPentagram } from "@/components/organisms";
import { useDispatch } from "react-redux";
import { gameActions } from "../../../store";

const ChosePopup = () => {
  const dispatch = useDispatch();

  const playerChoiceHandler = (id) => {
    dispatch(gameActions.playerTurn({ id: id }));
    dispatch(gameActions.houseTurn());
  };

  return (
    <div id="choice" className="popup">
      <div className="popup__container">
        <div className="popup__header popup__header--center u-margin-bottom-medium">
          <h2 className="popup__title">Chose One</h2>
        </div>
        <div className="popup__content">
          <CoinPentagram onChose={playerChoiceHandler} />
        </div>
      </div>
    </div>
  );
};

export default ChosePopup;
