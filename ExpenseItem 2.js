import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from 'react'

const ExpenseItem=(props)=>{

const[amount,setamount]=useState(props.amount)

const clickHandler=()=>{
  setamount('100')

}
  return (
        <Card className="expense-item">
      <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2> {props.title}</h2>
            <div className="expense-item__location">{props.location}</div>
            <div className="expense-item__price">${amount}</div>
            
        </div>
        <button onClick={clickHandler}>Change Expense Amount</button>
        <button>Delete Expense</button>
        </Card>
    );
}
export default ExpenseItem;
