import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";


export default function Form(props) {
  
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const[error,seterror]=useState();
  const[collegename,setcollegename]=useState('')
function collagenamehandler(e){
  e.preventDefault();
  setcollegename(e.target.value);
  
}

  function nameonchange(e) {
    setUsername(e.target.value);
  }
  function Agechangehandler(e) {
    setAge(e.target.value);
  }
  function AddUserHandler(e) {
    e.preventDefault();
    
    if (username.trim().length === 0 || age.trim().length === 0) {

      seterror({title:'Invalid Credentials',message:"Please enter valid inputs"});
      return;
    }
    if (+age < 1) {
      seterror({title:"Invalid Age",message:"Please enter valid age"})
      
      return;
    }

    const obj = {
      username: username,
      age: age,
      college:collegename
    };
    setUsername("");
    setAge("");
    setcollegename("");
    props.onSubmit(obj);
    
  }
  
  const errorhandler=()=>{
    seterror(null)
  }
  return (
  <div>
    
   {error && <Modal title={error.title} message={error.message} onConfirm={errorhandler}></Modal>}
    <Card>
      <form action="" onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <br />
        <input
          id="username"
          type="text"
          value={username}
          onChange={nameonchange}
        />
        <br />
        <label htmlFor="age">Age(Years)</label>
        <br />
        <input
          type="number"
          value={age}
          id="age"
          // min="0"
          onChange={Agechangehandler}
        />
        <br />
        <label htmlFor="collegename">College Name</label>
        <br />
        <input type="text" id="collegename" value={collegename} onChange={collagenamehandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
}
