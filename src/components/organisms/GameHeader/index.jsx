import { GameScore } from "@/components/molecules";

const GameHeader = () => {
  return (
    <section className="header u-margin-bottom-medium">
      <img className="header__logo" src="/assets/logo-bonus.svg" />
      <GameScore />
    </section>
  );
};

export default GameHeader;
