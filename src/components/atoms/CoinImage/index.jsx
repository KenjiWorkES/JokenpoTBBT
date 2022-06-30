const CoinImage = ({ image, id, onClick }) => {
  const onClickHandler = (event) => {
    onClick && onClick(event.target.id);
  };

  return <img className="coin__image" src={image}></img>;
};

export default CoinImage;
