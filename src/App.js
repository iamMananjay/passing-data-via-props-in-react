import React from "react";
import Expenses from "./Components/Expenses";
import "./App.css";

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
      {/* pass the data from app componet to expenses componet */}
      {overallExpensenDetail.map((items) => {
        return (
          <Expenses
            time={items.currentDate}
            title={items.expenseTitle}
            price={items.expensePrice}
          />
        );
      })}
      {/* as we know componet is reuable so we can make component multiple time */}
    </div>
  );
};

export default App;
