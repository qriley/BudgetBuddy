import React from 'react';

class ExpenseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        expense: 0,
        perMonth: 1,
        total: 0
     };
  }

  myExpenseHandler = (event) => {
    this.setState({expense: event.target.value});
  }

  perMonthHandler = (event) => {
    var howOften = parseInt(event.target.value);
    this.setState({perMonth: howOften});
  }

  totalCalculator(){
    var calculateTotal = this.state.expense * this.state.perMonth;
    this.setState({total: calculateTotal});
  }
  
  render() {
    return (
    <div className="expenseCard">
      <form>
      <h1>This'll cost yah...:</h1>
      <p>Enter your expense:</p>
      <input
        type='text'
        onChange={this.myExpenseHandler}
      />
        <select defaultValue="1" onChange={this.perMonthHandler}>
            <option value="1">Monthly</option>
            <option value="4">Weekly</option>
            <option value="30">Daily</option>
        </select>
        <button onClick={() => { this.totalCalculator() }}>Confirm</button>
      </form>
      Approximate cost per month:
    <h3 id="totalCost">${this.state.total}</h3>
    </div>
    );
  }
}

export default ExpenseComponent;