import React from 'react';
import { useState } from 'react';
import './App.css';
import IncomeComp from './IncomeComponent.js'
import ExpenseComp from './ExpenseComponent.js'

function App() {

    const total = 0;
    const [components, setComponents] = useState(["Sample Component"]);

    function addComponent() {

        setComponents([...components, "Sample Component"])

    }
    const updateTotal = (toAdd: number)=>{
        total += toAdd
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
                  {components.map((item, i) => (<ExpenseComp parentFunction={updateTotal} />))}
                  
              </div>
              <button onClick={addComponent}>Add Expense</button>

              <div className="incomeTotalCard">
                  <h1 className="incomeTotalDisplay">${ total}</h1>
               </div>
      </div>
    </div>
  );
}

export default App;
