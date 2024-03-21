const Increment = (props) => {
  const funcState = props.func;

  return <button onClick={funcState}>+</button>;
};

export default Increment;
