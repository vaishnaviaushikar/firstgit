import logo from './logo.svg';
import './App.css';
import React from'react';

import ExpenseItem  from './Components/Expenses/ExpenseItem';

const App=()=>{

  const expenses=[
    {
      title:'Car Insurance',
      amount:6454,
      date:new Date(2022,10,20),
      location:"New Delhi"
    },
{title:'Petrol',
amount:3223,date:new Date(2022,7,20),location:"HP petrolium"},
{title:'Grocery',
amount:4332,date:new Date(2021,8,29),location:"Wall street"},
{title:'Rent',
amount:3442,date:new Date(2020,10,20),location:"sp galaxy"},
{
  title:'other',amount:4634,date:new Date(2022,5,7),location:"graffity"
}
]

  
return (
  <div>
    <h2>Lets get started!</h2>

    {expenses.map((expense, index) => (
      <ExpenseItem
        key={index}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        location={expense.location}
      />
    ))}
  </div>
);
}

export default App;
