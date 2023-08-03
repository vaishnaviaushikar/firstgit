import React, { useState, useEffect,useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer=(state,action)=>{
  if(action.type=== 'USER_INPUT'){
    return {value: action.val , isvalid: action.val.includes('@') };

  }
  if(action.type=== "INPUT_BLUR"){
    return {value: state.value , isvalid: state.value.includes("@")};
  }
  return {value:'' , isvalid:false };
}

const passwordReducer=(state,action)=>{
 if(action.type==="USER_INPUT"){
  return {value:action.val, isvalid:action.val.trim().length>6}
  
 }
 if(action.type=== "INPUT_BLUR"){
  return {value: state.value , isvalid: state.value.trim().length>6};
}
return {value:'' , isvalid:false };
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [collegename, setcollegename] = useState("");
  const [collegeValid, setCollegeValid] = useState();

  const [emailstate,dispatchEmail]=useReducer(emailReducer,{value:'' , isvalid:undefined });
  const [passwordstate,dispatchPassword]=useReducer(passwordReducer,{value:'' , isvalid:null })

  // useEffect(() => {
  //   const timeout=setTimeout(()=>{ setFormIsValid(
  //     enteredEmail.includes("@") &&
  //       enteredPassword.trim().length > 6 &&
  //       collegename.trim().length > 0
  //   )},500);

  //  return ()=>{
  //   clearTimeout(timeout)
  //  }
  // }, [enteredEmail,enteredPassword,collegename]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type:"USER_INPUT",val:event.target.value})

    setFormIsValid(
      event.target.value.includes("@") &&
      passwordstate.isvalid &&
        collegename.trim().length > 0
    )
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type:"USER_INPUT",val:event.target.value})
    setFormIsValid(
      emailstate.isvalid&&
      event.target.value.trim().length > 6 &&
        collegename.trim().length > 0
    )
  };
  const collegeChangeHandler = (event) => {
    setcollegename(event.target.value);
    setFormIsValid(
      emailstate.isvalid &&
      passwordstate.invalid &&
         event.target.value.trim().length > 0
     )
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailstate.isvalid);
    dispatchEmail({type:'INPUT_BLUR'})
    
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type:'INPUT_BLUR'})

  };

  const validateCollegeNameHandler = (e) => {
    setCollegeValid(collegename.trim().length > 0);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin( emailstate.value, passwordstate.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailstate.isvalid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={ emailstate.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordstate.isvalid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={ passwordstate.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collegeValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="collegename">College Name</label>
          <br />
          <input
            type="text"
            id="collegename"
            onChange={collegeChangeHandler}
            onBlur={validateCollegeNameHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
