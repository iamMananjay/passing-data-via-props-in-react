import React, { useState } from "react";
// useState is a hook which is import from react libary
// we can reconized the hook by looking at start value which start with always use
import "./Expenses.css";
import Expensesdate from "./Expensesdate";
const Expenses = (props) => {
  // we received the data from one componet to another inside the function as parameter which store all the data as Object
  // where here all data are pass inside the props object . we can set any name here instead of props
  // now access the value like as object properties
  // {props.title}

  // Now here to change the value of certain div or tag we have to used useState to hold the value and change the value
  // useState is a function which return the array that hold two value where first one is a variable which is store
  // the current value likewise second one is a function which help to change the value or update the value.for instance
  const [title, setTitle] = useState(props.title);

  // make a function to add event to have change on click
  const changeTitle = () => {
    // Now to make any change on event we have to call useState function
    setTitle("New Title added soon...");
  };

  return (
    <>
      <div className="container">
        <Expensesdate time={props.time} />
        {/* making  a multiple compoent where one certain div with name expense-date is written in expensedate component 
        and import in expenses.js component */}
        <div className="expense-title">{title}</div>
        {/* here the title is a varibale which store the props.title */}
        <div className="expense-price">${props.price}</div>
        <button className="changebtn" onClick={changeTitle}>
          Title Change
        </button>
        {/* here in the button to add a event we have to add a function in onclick event same like in javascript */}
      </div>
    </>
  );
};

export default Expenses;
