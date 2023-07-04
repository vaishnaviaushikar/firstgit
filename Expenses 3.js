import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import React ,{useState}from 'react'
import ExpensesFilter from "./ExpensesFilter";


const Expenses=(props) =>{
const[filteredYear,setfilteredyear]=useState('2020')

const filterchangehandler=(selectedYear)=>{
setfilteredyear(selectedYear)
}
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterchangehandler} />
    {props.items.map((expense) => (
      <ExpenseItem
      key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
       
      />
    ))}
    </Card>
    
  );
    }


export default Expenses;
