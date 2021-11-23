import React from "react";
import "./Expenses.css";
import Expensesdate from "./Expensesdate";
const Expenses = (props) => {
  // we received the data from one componet to another inside the function as parameter which store all the data as Object
  // where here all data are pass inside the props object . we can set any name here instead of props
  // now access the value like as object properties
  // {props.title}

  return (
    <>
      <div className="container">
        <Expensesdate time={props.time} />
        {/* making  a multiple compoent where one certain div with name expense-date is written in expensedate component 
        and import in expenses.js component */}
        <div className="expense-title">{props.title}</div>
        <div className="expense-price">${props.price}</div>
      </div>
    </>
  );
};

export default Expenses;
