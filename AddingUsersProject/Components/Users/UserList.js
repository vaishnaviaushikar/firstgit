import React from "react";
import Card from "../UI/Card";
import './UserList.css'
export default function UserList(props) {
  
  return (
    <Card className="users">
    <ul>
      {props.userlist.map((user) => {
        return (
          
          <li
            style={{ listStyleType: "none" }}
            key={Math.random().toString()}
          >{user.username} ({user.age} years old)</li>
          
        );
      })}
    </ul>
    </Card>
   
  );
}
