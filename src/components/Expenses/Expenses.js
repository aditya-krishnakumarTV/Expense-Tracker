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
        {props.item.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
