import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const GameCounter = () => {
  const result = useSelector((state) => state.resultCounter);
  const [counter, setCounter] = useState(result);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
      setCounter(result);
    } else {
      localStorage.setItem("jokenpoResult", result);
      setCounter(result);
    }
  }, [result]);

  return <h2 className="header__score">{counter}</h2>;
};

export default GameCounter;
