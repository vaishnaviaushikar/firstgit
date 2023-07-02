import React from "react";
// import './ExpenseFilter.css'
export default function ExpensesFilter(props) {
  const dropdownhandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div>
      <div className="expense-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownhandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}
