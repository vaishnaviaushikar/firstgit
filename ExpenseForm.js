import React, {useState} from "react";
import "./ExpenseForm.css";
export default function ExpenseForm() {


  const[userInput,setuserInput]=useState({enteredtitle:'',
  enteredamount:'',
  entereddate:''

})
const[enteredtitle,setenteredtitle]=useState('')
  const newtitle=(event)=>{
    // setuserInput({
    //   ...userInput,enteredtitle:event.target.value})
    // setuserInput((prevState)=>{
    //   return {...prevState,enteredtitle:event.target.value}

    // })

    setenteredtitle(event.target.value)

  }

 const [enteredamount,setenteredamount]=useState('')
  const newamount=(event)=>{
    // setuserInput({
    //   ...userInput,enteredamount:event.target.value})
    // setuserInput((prevState)=>{
    //   return {...prevState,enteredamount:event.target.value}

    // })

    setenteredamount(event.target.value)
  }
  const [entereddate,setentereddate]=useState('')
  const newdate=(event)=>{
    // setuserInput({
    //   ...userInput,entereddate:event.target.value})
    // setuserInput((prevState)=>{
    //   return {...prevState,entereddate:event.target.value}})
setentereddate(event.target.value)

  }


  const submitHandler=(e)=>{
    e.preventDefault();

    const expensedata={
      title:enteredtitle,
      amount:enteredamount,
      date:new Date(entereddate)
    }
    console.log(expensedata)

  }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" id="title" onChange={newtitle}/>
          
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" id="amount" min="0.01" step="0.01"  onChange={newamount}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" id="date" min="2019-01-01" max="2022-12-31" onChange={newdate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" id="submit" >Add Expense</button>
      </div>
    </form>
  );
}
