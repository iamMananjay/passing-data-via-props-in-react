import React from "react";
import "./Expenses.css";
const Expenses = (props) => {
  // we received the data from one componet to another inside the function as parameter which store all the data as Object
  // where here all data are pass inside the props object . we can set any name here instead of props
  // now access the value like as object properties
  // {props.title}

  // Now for date we have to convert the date in string from
  const currentYear = props.time.getFullYear();
  const currentMonth = props.time.getMonth();
  const currentDate = props.time.getDate();
  return (
    <>
      <div className="container">
        <div className="expense-date">
          <div>{currentYear}</div>-<div>{currentMonth}</div>-
          <div>{currentDate}</div>
        </div>
        <div className="expense-title">{props.title}</div>
        <div className="expense-price">${props.price}</div>
      </div>
    </>
  );
};

export default Expenses;
