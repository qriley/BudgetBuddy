import React from 'react';

class IncomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        income: 0
     };
  }
  myIncomeHandler = (event) => {
    this.setState({income: event.target.value});
  }
  render() {
    return (
    <div className="incomeCard">
      <form>
      <h1>Determine your monthly income:</h1>
      <p>Enter your monthly income after taxes:</p>
      <input
        type='text'
        onChange={this.myIncomeHandler}
      />

      </form>
    </div>
    );
  }
}

export default IncomeComponent;