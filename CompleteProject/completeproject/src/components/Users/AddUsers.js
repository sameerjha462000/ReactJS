import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";

import classes from "./AddUsers.module.css";

function AddUser(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    // the + sign at the start of the enteredAge is to convert it into a number.
    if (+enteredAge < 1) {
      return;
    }

    // console.log(enteredName, enteredAge);
    setEnteredAge("");
    setEnteredName("");
  };

  const handleNameChange = (event) => {
    setEnteredName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredName}
          onChange={handleNameChange}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={handleAgeChange}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
