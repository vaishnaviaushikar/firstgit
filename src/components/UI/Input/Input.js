import React from "react";
import classes from './Input1.module.css'
export default function Input(props) {
  return (
    <div
      className={`${classes.control} ${
        props.isvalid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}
