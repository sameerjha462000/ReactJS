import { createContext, useState } from "react";

const NumberContext = createContext();

const Provider = (props) => {
  const [count, setCount] = useState(5);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const valueToShare = { count, incrementCount, decrementCount };

  return (
    <NumberContext.Provider value={valueToShare}>
      {props.children}
    </NumberContext.Provider>
  );
};

export { Provider };
export default NumberContext;
