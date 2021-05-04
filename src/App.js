import React from 'react';
import logo from './logo.svg';
import './App.css';
import IncomeComp from './IncomeComponent.js'
import ExpenseComp from './ExpenseComponent.js'

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Budget Buddy</h1>
        <h3>...to help your finances!</h3>
      </header>
      <div className="mainContent">
        <IncomeComp />
        <div className="additionalCards">
          <ExpenseComp />
        </div>
        <button onClick={() => { alert("Clicked!")}}>Add Expense</button>
      </div>
    </div>
  );
}

export default App;
