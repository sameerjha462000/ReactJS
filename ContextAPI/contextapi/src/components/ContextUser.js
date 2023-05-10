import { useContext } from "react";
import NumberContext from "../contexts/NumberContext";
import classes from "./ContextUser.module.css";

const ContextUser = (props) => {
  const value = useContext(NumberContext);
  console.log(value.count);

  const handleIncreaseClick = (event) => {
    value.incrementCount();
  };

  const handleDecreaseClick = (event) => {
    value.decrementCount();
  };

  return (
    <div className={classes.container}>
      <div className={classes.value}>{value.count}</div>
      <button className={classes.button} onClick={handleIncreaseClick}>
        Increase
      </button>
      <button className={classes.button} onClick={handleDecreaseClick}>
        Decrease
      </button>
    </div>
  );
};

export default ContextUser;
