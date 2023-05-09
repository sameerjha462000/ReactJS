import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      type={"submit" || props.type}
      onClick={props.onClick}
      className={classes.button}
    >
      {props.children}
    </button>
  );
}

export default Button;
