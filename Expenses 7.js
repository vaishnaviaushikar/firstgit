import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import React ,{useState}from 'react'
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import ExpensesChart from "./ExpensesChart";

const Expenses=(props) =>{
const[filteredYear,setfilteredyear]=useState('2020')
// const[allExpenses,setallExpenses]=useState(props.items);
const filterchangehandler=(selectedYear)=>{
setfilteredyear(selectedYear)};
const filteredExpenses=props.items.filter((expense)=>{
 return expense.date.getFullYear().toString()===filteredYear;

})



  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterchangehandler} />
      <ExpensesChart expenses={filteredExpenses}/>
   <ExpensesList items={filteredExpenses} />
    </Card>
    
  )
  
  
  }

export default Expenses;
