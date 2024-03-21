const Button = ({ counter, sign, setCounter }) => {
  return (
    <div>
      {sign === "-" ? (
        <button
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
      ) : (
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      )}
    </div>
  );
};

export default Button;
