import { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const GameCounter = () => {
  const result = useSelector((state) => state.resultCounter);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (firstTime) {
      setFirstTime(false);
    } else {
      localStorage.setItem("jokenpoResult", result);
    }
  }, [result]);

  return <h2 className="header__score">{result}</h2>;
};

export default GameCounter;
