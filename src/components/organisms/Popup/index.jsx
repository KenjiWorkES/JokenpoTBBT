const Popup = () => {
  return (
    <div id="rules" className="popup">
      <div className="popup__container">
        <div className="popup__header u-margin-bottom-medium">
          <h2 className="popup__title">Rules</h2>
          <a href="#game" className="popup__close">
            <img src="/assets/icon-close.svg" alt="" />
          </a>
        </div>
        <div className="popup__content">
          <img
            className="popup__image"
            src="/assets/image-rules-bonus.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
