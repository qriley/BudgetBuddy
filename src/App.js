import React, { Component } from 'react';
//import { Component, useState } from 'react';
import './App.css';
import IncomeComp from './IncomeComponent.js'
import ExpenseComp from './ExpenseComponent.js'
class App extends Component {
    constructor() {
        super();
        this.state = {
            income: .00,
            expense: .00,
            total: .00,
            components: 1,
            rows: [<ExpenseComp key={this.components} totalFunction={this.updateTotal} />]
        }

    }
    updateTotal = (toAdd) => {
        var ex = Number(this.state.expense) + Number(toAdd)

        this.setState({ expense: ex });

        var tot = Number(this.state.income) - Number(ex)

        this.setState({ total: tot })

    }

    incomeTotal = (toAdd) => {
        var tot = Number(toAdd) - Number(this.state.expense)

        this.setState({ income: Number(toAdd), total:  tot})
        
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
                        <IncomeComp incomeFunction={this.incomeTotal} />
                        <div className="additionalCards">
                            {this.state.rows}

                        </div>
                        <button className="addButton" onClick={this.addComponent}>+</button>

                        <div className="incomeTotalCard">
                            <h1 className="incomeTotalDisplay">${this.state.total}</h1>
                        </div>
                    </div>
                    {/*<div className="rightCol">*/}
                    {/*    <button className="stratCard">*/}
                    {/*        <h2>*/}
                    {/*            TEST*/}
                    {/*        </h2>*/}
                    {/*    </button>*/}
                    {/*    <button className="stratCard">*/}
                    {/*        <h2>*/}
                    {/*            TEST*/}
                    {/*        </h2>*/}
                    {/*    </button>*/}
                    {/*    <button className="stratCard">*/}
                    {/*        <h2>*/}
                    {/*            TEST*/}
                    {/*        </h2>*/}
                    {/*    </button>*/}
                    {/*    <button className="stratCard">*/}
                    {/*        <h2>*/}
                    {/*            TEST*/}
                    {/*        </h2>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }

}

export default App;
