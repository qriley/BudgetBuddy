import React from 'react';
import { useState } from 'react';
import './App.css';
import IncomeComp from './IncomeComponent.js'
import ExpenseComp from './ExpenseComponent.js'

function App() {

    const [components, setComponents] = useState(["Sample Component"]);

    function addComponent() {

        setComponents([...components, "Sample Component"])

    }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Budget Buddy</h1>
        <h3>...to help your finances!</h3>
      </header>
      <div className="mainContent">
        <IncomeComp />
              <div className="additionalCards">
                  {components.map((item, i) => (<ExpenseComp />)) }
                  
              </div>
              <button onClick={addComponent }>Add Expense</button>
      </div>
    </div>
  );
}

export default App;
