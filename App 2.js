import logo from "./logo.svg";
import "./App.css";
import React,{useState} from 'react'



import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";
const App=()=>{
  const [expenses,setExpenses] =useState([
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location:"Super Market"
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),location:'Electronic Store'  },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location:"Policy Bazaar"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location:"Local Market"
    },
  ]);

  const AddingExpenseHandler=(expense)=>{
setExpenses((prevExpenses)=>[expense,...prevExpenses])

  }
//console.log(expenses)
  return (
    <>
      <div className="App">
       <NewExpense onAddingExpense={AddingExpenseHandler}/>
        <div className="expenses">
        <Expenses  items={expenses}/>
        </div>
        
      </div>
    </>
  );
}

export default App;
