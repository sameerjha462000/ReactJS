import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { Fragment } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    // <>
    //   <AddUser onAddUser={addUserHandler} />
    //   <UsersList users={usersList} />
    // </>

    // or we may have written React.Fragment
    // <React.Fragment>
    //   <AddUser onAddUser={addUserHandler} />
    //   <UsersList users={usersList} />
    // </React.Fragment>

    // This is applicable when we imported {Fragment} from 'react
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
