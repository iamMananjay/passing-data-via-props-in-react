import "./Expensescontainer.css";
import Expenses from "./Expenses";
import Card from "../UI/Card";

const Expensescontainer = (props) => {
  // recived a array from App.js Component as from of props
  return (
    //   replace all main div wrapper with component and pass that inside card component
    <Card className="wrapper">
      {/* pass the data from app componet to expenses componet */}
      {props.expensesdetail.map((items) => {
        return (
          <Expenses
            time={items.currentDate}
            title={items.expenseTitle}
            price={items.expensePrice}
          />
        );
      })}
      {/* as we know componet is reuable so we can make component multiple time */}
    </Card>
  );
};

export default Expensescontainer;
