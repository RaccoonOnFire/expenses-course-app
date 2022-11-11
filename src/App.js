import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Ubezpieczenie",
      amount: (1234.56).toFixed(2),
      date: new Date(2022, 2, 12),
    },
    {
      id: "e2",
      title: "Farelka",
      amount: (300.0).toFixed(2),
      date: new Date(2022, 9, 7),
    },
    {
      id: "e3",
      title: "Zakupy",
      amount: (35.0).toFixed(2),
      date: new Date(2021, 5, 22),
    },
    {
      id: "e4",
      title: "Obiad",
      amount: (12.5).toFixed(2),
      date: new Date(2022, 6, 23),
    },
    {
      id: "e5",
      title: "Plecak",
      amount: (12.5).toFixed(2),
      date: new Date(2020, 6, 23),
    },
    {
      id: "e6",
      title: "Myszka",
      amount: (30.5).toFixed(2),
      date: new Date(2020, 6, 23),
    },
    {
      id: "e7",
      title: "Monitor",
      amount: (550.00).toFixed(2),
      date: new Date(2021, 6, 23),
    },
  ];


function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense) {
    
    
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
