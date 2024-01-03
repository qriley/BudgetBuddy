import React, { Component } from 'react';
//import { Component, useState } from 'react';
import './App.css';
import IncomeComp from './IncomeComponent.js'
import ExpenseComp from './ExpenseComponent.js'
import DebtComp from './CreditComponent.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import PercentagesSlider from "react-percentages-slider";
import "react-percentages-slider/dist/index.css";
import Slider from './Slider.js';
import { FaPlus } from "react-icons/fa";

class App extends Component {
    constructor() {
        super();
        this.state = {
            income: .00,
            expense: .00,
            debt: .00,
            total: .00,
            components: 1,
            components2: 1,
            components3: 1,
            rows: [<ExpenseComp className="span10" key={this.components} totalFunction={this.updateTotal} />],
            rows2: [<IncomeComp key={this.components2} incomeFunction={this.incomeTotal} />],
            rows3: [<DebtComp key={this.components3} debtFunction={this.debtTotal} />],
            recPay: .00,
            debtPay: .00,
            investPay: .00,
            savePay: .00
        }

    }
    updateTotal = (toAdd) => {
        var ex = Number(this.state.expense) + Number(toAdd)

        this.setState({ expense: ex });

        var tot = Number(this.state.income) - Number(ex)

        this.setState({ total: tot })

    }

    updatePays = (per, check) => {
        var temp = this.state.total * (Math.round(per)/100)
        if(check===0)
            this.setState({ recPay: temp.toFixed(2) });
        if (check === 1)
            this.setState({ debtPay: temp.toFixed(2) });
        if (check === 2)
            this.setState({ investPay: temp.toFixed(2) });
        if (check === 3)
            this.setState({ savePay: temp.toFixed(2) });
    }

    incomeTotal = (toAdd) => {
        var tempIncome = Number(toAdd) + this.state.income

        var tot = tempIncome - Number(this.state.expense)

        this.setState({ income: tempIncome, total: tot })
        
    }

    debtTotal = (toAdd) => {
        var ex = Number(this.state.expense) + Number(toAdd)

        this.setState({ expense: ex });

        var tot = Number(this.state.income) - Number(ex)

        this.setState({ total: tot })
        
    }

    addComponent = () => {

        this.setState({ components: this.state.components++ });
        var tempRows = this.state.rows



        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        tempRows.push(<ExpenseComp key={this.components} totalFunction={this.updateTotal} />);

        this.setState({ rows: tempRows });
    }
    addComponent2 = () => {

        this.setState({ components2: this.state.components2++ });
        var tempRows2 = this.state.rows2



        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        tempRows2.push(<IncomeComp key={this.components2} incomeFunction={this.incomeTotal} />);

        this.setState({ rows2: tempRows2 });
    }
    addComponent3 = () => {

        this.setState({ components3: this.state.components3++ });
        var tempRows3 = this.state.rows3



        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        tempRows3.push(<DebtComp key={this.components3} debtFunction={this.debtTotal} />);

        this.setState({ rows3: tempRows3 });
    }

    processPercents = () => {
        this.state.example.forEach((el) => {
            console.log("asek", el.percentage);
        })
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Budget Buddy</h1>
                    <h2>...to help your finances!</h2>
                </header>
                <div className="mainContent container">
                    <div className="row">
                        <div className="leftCol col-md-12">
                            

                            {/*<IncomeComp incomeFunction={this.incomeTotal} />*/}
                            <div className="additionalCards">
                                {this.state.rows2}

                            </div>
                            <div className="additionalCards">
                                {this.state.rows3}

                            </div>
                            <div className="additionalCards">
                                {this.state.rows}

                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="addButton" onClick={this.addComponent}>
                                    <FaPlus className="addsvg"/>
                                </button>
                                <button className="addButton2" onClick={this.addComponent2}>
                                    <FaPlus className="addsvg"/>
                                </button>
                                <button className="addButton3" onClick={this.addComponent3}>
                                    <FaPlus className="addsvg"/>
                                </button>
                                </div>
                            <div className="incomeTotalCard d-flex justify-content-center">
                                <h4>Total:&nbsp;&nbsp;&nbsp;&nbsp;</h4>
                                <h4 className="incomeTotalDisplay">${this.state.total}</h4>
                                <p></p>

                            </div>

                            <div className="percentSlider">
                                <Slider incomeFunction={this.updatePays} />
                            </div>
                            <div className="incomeSplitContain">
                                <div className="row">
                                    <p className="incomeSplitCard col-md-3 col-sm-12 col-xs-12">Recreation Split: ${this.state.recPay}</p>
                                    <p className="incomeSplitCard col-md-3 col-sm-12 col-xs-12">Debt Split: ${this.state.debtPay}</p>
                                    <p className="incomeSplitCard col-md-3 col-sm-12 col-xs-12">Investment Split: ${this.state.investPay}</p>
                                    <p className="incomeSplitCard col-md-3 col-sm-12 col-xs-12">Savings Split: ${this.state.savePay}</p>
                                </div>
                            </div>
                            <a href="http://www.Quinn-Riley.com">This website was built, owned and ran by Quinn Riley. He can make a website for you too! www.Quinn-Riley.com</a>
                        </div>
                    </div>
                        

                </div>
               
            </div>
        );
    }

}

export default App;
