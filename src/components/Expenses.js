import React, { useState } from "react";
import ExpenseItem from "./ExpensItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [choosenFilterDate, setChoosenFilterDate] = useState("2022");

  const dateChangedHandler = (newDate) => {
    console.log(newDate);
    setChoosenFilterDate(newDate);
  };

  const filteredExpensesByDate = props.items.filter(function (expense) {
    return expense.date.getFullYear().toString() === choosenFilterDate;
  });

  return (
    <div>
      <ExpenseFilter
        selected={choosenFilterDate}
        onDataChanged={dateChangedHandler}
      />

      <div className="expenses">
        {filteredExpensesByDate.length > 0 ? <h2>Lista wydatków</h2> : <p></p>}
        <ExpensesChart expenses={filteredExpensesByDate}/>
        {filteredExpensesByDate.length === 0 ? (
          <h2>Brak wydatków</h2>
        ) : (
          filteredExpensesByDate.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Expenses;
