import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const expenseFilterHandler = (expenseFilterYear) => {
    setFilteredYear(expenseFilterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultSelected={filteredYear}
          onExpenseFilterSelect={expenseFilterHandler}
        />
        <ExpenseItem
          title={props.item[0].title}
          amount={props.item[0].amount}
          date={props.item[0].date}
        />
        <ExpenseItem
          title={props.item[1].title}
          amount={props.item[1].amount}
          date={props.item[1].date}
        />
        <ExpenseItem
          title={props.item[2].title}
          amount={props.item[2].amount}
          date={props.item[2].date}
        />
        <ExpenseItem
          title={props.item[3].title}
          amount={props.item[3].amount}
          date={props.item[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
