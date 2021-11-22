import React from "react";
import "./Expenses.css";
const Expenses = () => {
  return (
    <>
      <h1>Daily Expenses</h1>
      <div className="container">
        <div className="expense-date">october 5</div>
        <div className="expense-title">School Fee</div>
        <div className="expense-price">$300</div>
      </div>
    </>
  );
};

export default Expenses;
