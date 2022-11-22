import React from 'react';

class ExpenseComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalFunction: props.totalFunction,
            expense: 0,
            perMonth: 1,
            total: 0,
            title: "Description"
        };
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
        var calculateTotal = this.state.expense * this.state.perMonth;
        this.setState({ total: calculateTotal.toFixed(2) 
        });
        this.state.totalFunction(this.props.total);
    }

    titleHandler = (event) => {
        this.setState({ title: event.target.value });
    }
    

    render() {
        return (
            <div className="expenseCard">
                <h2>{this.state.title}</h2>
                <form>
                    <h1>This'll cost yah...:</h1>
                    <p>Enter your expense:</p>
                    <input
                        type='text'
                        onChange={this.myExpenseHandler}
                    />
                    <select defaultValue="1" onChange={this.perMonthHandler}>
                        <option value="12">Yearly</option>
                        <option value="1">Monthly</option>
                        <option value="4">Weekly</option>
                        <option value="30">Daily</option>
                    </select>
                    <button onClick={this.totalCalculator}>Confirm</button>
                    <p>Enter your description:</p>
                    <input
                        type='text'
                        onChange={this.titleHandler}
                    />
                </form>
                Approximate cost per month:
                <h3 id="totalCost">${this.state.total}</h3>
            </div>
        );
    }
}

export default ExpenseComponent;