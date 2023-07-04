import './ExpensesList.css'
import React from 'react'
import ExpenseItem from './ExpenseItem'
export default function ExpensesList(props) {

    let expensecontent=props.items.map((expense) => (
        <ExpenseItem
        key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
         
        />
    ))
  if(props.items.length===0)
  {
    return <h2 className="expenses-list__fallback"> Found no expenses </h2>
  }
  else if(props.items.length==1){

  
  return( 
   <> {expensecontent}
  <h2>only single expense here</h2>
  </>
  )}
  
  return (
    
    <ul className="expenses-list">
{expensecontent}
    </ul>

  )
}
