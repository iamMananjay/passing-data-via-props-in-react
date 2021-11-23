import "./Expensesdate.css";
import React from "react";

const Expensesdate = (props) => {
  // here we received the data as form of props from parent component(App.js) to child(Expenses.js)
  //  and from child to inner child component(Expensesdate.js)

  // Now for date we have to convert the date in string from
  const currentYear = props.time.getFullYear();
  const currentMonth = props.time.getMonth();
  const currentDate = props.time.getDate();
  return (
    <div className="expense-date">
      <div>{currentYear}</div>-<div>{currentMonth}</div>-
      <div>{currentDate}</div>
    </div>
  );
};

export default Expensesdate;
