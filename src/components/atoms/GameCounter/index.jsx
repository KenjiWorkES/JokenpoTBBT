import { useSelector } from "react-redux/es/hooks/useSelector";

const GameCounter = () => {
  const result = useSelector((state) => state.resultCounter);

  return <h2 className="header__score">{result}</h2>;
};

export default GameCounter;
