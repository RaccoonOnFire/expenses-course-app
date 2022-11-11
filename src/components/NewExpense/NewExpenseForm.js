import React, { useState } from "react";
import "./NewExpenseForm.css";

function NewExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const addedExpense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onAddedExpenseData(addedExpense);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Nazwa</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Kwota</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Data</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Dodaj</button>
        <button type="button" onClick={props.onCancelButtonPressed}>Schowaj</button>
      </div>
    </form>
  );
}

export default NewExpenseForm;
