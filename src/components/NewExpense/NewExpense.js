import React, { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm";

function NewExpense(props) {
  const [buttonClicked, setButtonClicked] = useState(false);

  function addedExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  function hideNewExpenses() {
    setButtonClicked(true);
  }
  function showNewExpenses() {
    setButtonClicked(false);
  }

  return (
    <div className="new-expense">
      {buttonClicked === false ? (
        <button onClick={hideNewExpenses}>Dodaj wydatek</button>
      ) : (
        <NewExpenseForm
          onAddedExpenseData={addedExpenseDataHandler}
          onCancelButtonPressed={showNewExpenses}
        />
      )}
    </div>
  );
}

export default NewExpense;
