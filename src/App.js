import React, { Component } from 'react';
//import { Component, useState } from 'react';
import './App.css';
import IncomeComp from './IncomeComponent.js'
import ExpenseComp from './ExpenseComponent.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import PercentagesSlider from "react-percentages-slider";
import "react-percentages-slider/dist/index.css";
import Slider from './Slider.js';
class App extends Component {
    constructor() {
        super();
        this.state = {
            income: .00,
            expense: .00,
            total: .00,
            components: 1,
            components2: 1,
            rows: [<ExpenseComp className="span10" key={this.components} totalFunction={this.updateTotal} />],
            rows2: [<IncomeComp key={this.components2} incomeFunction={this.incomeTotal} />],
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
                                {this.state.rows}

                            </div>
                            <div className="d-flex justify-content-center">
                                <button className="addButton" onClick={this.addComponent}>
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="45.402px" height="45.402px" viewBox="0 0 45.402 45.402" >
                                        <g>
                                            <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                    </svg>
                                </button>
                                <button className="addButton2" onClick={this.addComponent2}>
                                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        width="45.402px" height="45.402px" viewBox="0 0 45.402 45.402">
                                        <g>
                                            <path d="M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z"/>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                        <g>
                                        </g>
                                    </svg>
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
