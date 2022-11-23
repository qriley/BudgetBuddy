import React, { Component } from 'react';
//import { Component, useState } from 'react';
import './App.css';
import IncomeComp from './IncomeComponent.js'
import ExpenseComp from './ExpenseComponent.js'
class App extends Component {
    constructor() {
        super();
        this.state = {
            total: .00,
            components: 1,
            rows: [<ExpenseComp key={this.components} totalFunction={this.updateTotal} />]
        }

    }
    updateTotal = (toAdd,doNum) => {
    console.log(toAdd)
    console.log(this.state.total)
    if (doNum== 0) {
        var amount = Number(this.state.total) + Number(toAdd)
        this.setState({ total: amount });
        console.log(this.state.total)
    }else {
        var amount = Number(this.state.total) - Number(toAdd)
        this.setState({ total: amount });
        console.log(this.state.total)
    }
}

addComponent = () => {

    this.setState({ components: this.state.components++ });
    var tempRows = this.state.rows



    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    tempRows.push(<ExpenseComp key={this.components} totalFunction={this.updateTotal} />);

    this.setState({ rows: tempRows });
}


render() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Budget Buddy</h1>
                <h3>...to help your finances!</h3>
            </header>
            <div className="mainContent">
                <div className="leftCol">
                    <IncomeComp totalFunction={this.updateTotal}/>
                    <div className="additionalCards">
                        {this.state.rows}

                    </div>
                    <button onClick={this.addComponent}>Add Expense</button>

                    <div className="incomeTotalCard">
                        <h1 className="incomeTotalDisplay">${this.state.total}</h1>
                    </div>
                </div>
                <div className="rightCol">
                    <button className="stratCard">
                        <h2>
                            TEST
                        </h2>
                    </button>
                    <button className="stratCard">
                        <h2>
                            TEST
                        </h2>
                    </button>
                    <button className="stratCard">
                        <h2>
                            TEST
                        </h2>
                    </button>
                    <button className="stratCard">
                        <h2>
                            TEST
                        </h2>
                    </button>
                </div>
            </div>
        </div>
    );
}

}

export default App;
