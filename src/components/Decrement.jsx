const Decrement = (props) => {
  const counter = props.counter;

  const setCounter = props.setCounter;

  return (
    <button
      onClick={() => {
        setCounter(counter - 1);
      }}
    >
      -
    </button>
  );
};

export default Decrement;
