import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Card from "./Components/UI/Card";
import Form from "./Components/Users/Form";

import UserList from "./Components/Users/UserList";
function App() {
  const [userlist, setUserlist] = useState([]);

  function SubmitHandler(obj) {
    setUserlist((prevlist) => {
      return [...prevlist, { username: obj.username, age: obj.age }];
    });
  }
  return (
    <div className="App">
      <Form onSubmit={SubmitHandler} />
      <UserList userlist={userlist} />
    </div>
  );
}

export default App;
