import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem=(props)=>{


  return (
        <Card className="expense-item">
      <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2> {props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            <div className="expense-item__location">{props.location}</div>
        </div>
        <button >Change Title</button>
        <button>Delete Expense</button>
        </Card>
    );
}
export default ExpenseItem;
