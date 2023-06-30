import React from "react";
import "./ExpenseForm.css";
export default function ExpenseForm() {
  const newtitle=(event)=>{
    console.log(event.target.value)
  }
  const newamount=(event)=>{
    console.log(event.target.value)
  }
  const newdate=(event)=>{
    console.log(event.target.value)
  }

  return (
    <form>
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
          <input type="date" id="date" min="2019-01-01" max="2022-12-31" onChange={newdate}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" id="submit">Add Expense</button>
      </div>
    </form>
  );
}
