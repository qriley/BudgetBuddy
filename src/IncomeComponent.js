import React from 'react';

class IncomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            income: 0
        };
    }

    myIncomeHandler = (event) => {
        event.preventDefault();
        const re = /^[0-9\b]+$/;
        var inputVal = document.getElementById("input").value;
        if (inputVal === '' || re.test(inputVal)) {
            
            this.setState({ income: inputVal });

            this.props.totalFunction(this.state.income, 0);
        }
        //document.getElementsByClassName("incomeTotalDisplay")[0].innerHTML = this.state.income;

    }
    render() {
        return (
            <div className="incomeCard">
                <form>
                    <h1>Determine your monthly income:</h1>
                    <p>Enter your monthly income after taxes:</p>
                    <input
                        type='text'
                        id='input'
                    //onChange={this.myIncomeHandler}
                    />
                    <button onClick={this.myIncomeHandler}>Confirm</button>
                </form>
            </div>
        );
    }
}

export default IncomeComponent;