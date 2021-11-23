import React from "react";
import "./App.css";
import Expensescontainer from "./Components/Expenses/Expensescontainer";

const App = () => {
  const overallExpensenDetail = [
    {
      id: 1,
      currentDate: new Date(),
      expenseTitle: "School Fee",
      expensePrice: 300,
    },
    {
      id: 2,
      currentDate: new Date(),
      expenseTitle: "Insurance",
      expensePrice: 600,
    },
    {
      id: 3,
      currentDate: new Date(),
      expenseTitle: "College Fee",
      expensePrice: 500,
    },
    {
      id: 4,
      currentDate: new Date(),
      expenseTitle: "House Rent",
      expensePrice: 400,
    },
  ];

  return (
    <div>
      {/* passing a overallExpensenDetail array as a from of props to Expensescontainer */}
      <Expensescontainer expensesdetail={overallExpensenDetail} />
    </div>
  );
};

export default App;
