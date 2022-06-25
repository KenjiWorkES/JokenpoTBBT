const MainButton = ({ title, className, onClick }) => {
  const modifyClasses = className ? className : "";
  const onClickHandler = onClick ? onClick : () => {};

  return (
    <button onClick={onClickHandler} className={"mainButton" + modifyClasses}>
      {title}
    </button>
  );
};

export default MainButton;
