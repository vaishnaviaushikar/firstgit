import React, {useSate} from "react";
import "./ExpenseForm.css";
export default function ExpenseForm() {

const[enteredtitle,setenteredtitle]=useSate('')
  const newtitle=(event)=>{
    setenteredtitle(event.target.value)

  }

  const [enteredamount,setenteredamount]=useState('')
  const newamount=(event)=>{
    setenteredamount(event.target.value)
  }
  const [entereddate,setentereddate]=useState('')
  const newdate=(event)=>{
    setentereddate(event.target.value)
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
          <input type="date" id="date" min="2019-01-01" max="2022-12-31" onChange={newdate} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" id="submit">Add Expense</button>
      </div>
    </form>
  );
}
