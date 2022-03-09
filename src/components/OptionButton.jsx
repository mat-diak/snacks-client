const OptionButton = ({taskOptions}) => {
  return (
    <button className="btn btn-outline-info" onClick={() => console.log({taskOptions})}>
      +
    </button>
  );
};

export default OptionButton;