import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class IncomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            income: 0,
            type: 1.00
        };
    }

    myIncomeHandler = (event) => {
        event.preventDefault();
        const re = /^[0-9\b]+$/;
        var inputVal = document.getElementById("input").value;
        
        if (inputVal === '' || re.test(inputVal)) {
            var totOverType = (inputVal / this.state.type)
            var adder = Number(totOverType).toFixed(2)
            this.setState({ income: adder });

            this.props.incomeFunction(adder);
        }
        //document.getElementsByClassName("incomeTotalDisplay")[0].innerHTML = this.state.income;

    }

    perMonthHandler = (event) => {
        var howOften = event.target.value;

        if (howOften == 1) {
            this.setState({ type: 12.00});
        } else if(howOften == 2)
        {
            this.setState({ type: 1.00 });
        } else if(howOften == 3)
        {
            this.setState({ type: 0.25 });
        } else if(howOften == 4)
        {
            this.setState({ type: 0.00625 });
        }

    }

    render() {
        return (
            <div className="incomeCard">
                <form>
                    <h1>Determine your monthly income:</h1>
                    <p>Enter your income after taxes:</p>
                    <div className="d-flex justify-content-center">
                        <input className="form textFields"
                            type='text'
                            id='input'
                        //onChange={this.myIncomeHandler}
                        />
                        <select className="form" defaultValue="2" onChange={this.perMonthHandler}>
                            <option value="1">Salary</option>
                            <option value="2">Monthly</option>
                            <option value="3">Weekly</option>
                            <option value="4">Hourly (40 Hrs)</option>
                        </select>
                        <button className="form" onClick={this.myIncomeHandler}>Confirm</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default IncomeComponent;