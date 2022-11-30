import React from 'react';
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css';


class ExpenseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: 0,
            perMonth: 1,
            total: 0,
            title: "Description",
            isClosed: false
        };
        //this.totalFunction = props.totalFunction;
    }

    myExpenseHandler = (event) => {
        this.setState({ expense: event.target.value });
    }

    perMonthHandler = (event) => {
        var howOften = parseInt(event.target.value);

        if (howOften == 12) {
            this.setState({ perMonth: 1 / howOften });
        }
        else {
            this.setState({ perMonth: howOften });
        }

    }

    totalCalculator = (event) => {
        event.preventDefault();
        var calculateTotal = (this.state.expense * this.state.perMonth).toFixed(2);
        var oldVal = this.state.total
        const re = /^[0-9\b]+$/;
        if ((this.state.expense === '' || re.test(this.state.expense))
            && calculateTotal != this.state.total) {
            
            this.setState({
                total: calculateTotal
            });
            this.props.totalFunction(Number(calculateTotal - oldVal));
        }
    }

    titleHandler = (event) => {
        this.setState({ title: event.target.value });
    }

    closedChecker = () => {
        var changeClosed = !this.state.isClosed;
        this.setState({ isClosed: changeClosed });
    }

    render() {
        let card;

        if (!this.state.isClosed) {
            card =
                <div className="expenseCard">
                    <h2>{this.state.title}</h2>
                    <form>
                        <h1>This'll cost yah...:</h1>
                        <p>Enter your expense:</p>
                    <div className="d-flex justify-content-center">
                            <input className="form textFields"
                                type='text'
                                onChange={this.myExpenseHandler}
                            />
                            <select className="form" defaultValue="1" onChange={this.perMonthHandler}>
                                <option value="12">Yearly</option>
                                <option value="1">Monthly</option>
                                <option value="4">Weekly</option>
                                <option value="30">Daily</option>
                            </select>
                            <button className="form" onClick={this.totalCalculator}>Confirm</button>
                        </div>
                        <p>Enter your description:</p>
                        <input className="form textFields"
                            type='text'
                            onChange={this.titleHandler}
                        />
                    </form>
                    Approximate cost per month:
                <h3 id="totalCost">${this.state.total}</h3>
                <button onClick={() => this.closedChecker()} type="button" className="btn btn-sm btn-outline-light">Collapse</button>
                </div>;
        } else {
            card =
                <div className="expenseClosed">
                <div className="d-flex justify-content-between">
                        <span className="col">{this.state.title}</span>
                        <button onClick={() => this.closedChecker()} className="btn btn-sm btn-outline-light" >Expand</button>
                        <span id="totalCost" type="button" className="col">${this.state.total}</span>
                    </div>
                </div>;
        }

        return (
        <div>
            { card }
        </div>    
        );
    }
}

export default ExpenseComponent;