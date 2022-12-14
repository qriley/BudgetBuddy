import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CloseButton from 'react-bootstrap/CloseButton';

class IncomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            income: 0.00,
            type: 1.00,
            title: "income",
            isClosed: false,
            hidden: false
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

    closedChecker = () => {
        var changeClosed = !this.state.isClosed;
        this.setState({ isClosed: changeClosed });
    }

    render() {
        let card;
        if (!this.state.hidden) {

            if (!this.state.isClosed) {
                card = <div className="incomeCard">
                    <form>
                        <h3>Determine your monthly income:</h3>
                        <p>Enter your income after taxes:</p>
                        <div className="input-sm d-flex justify-content-center ">
                            <input className="form-control input-sm"
                                type='text'
                                id='input'
                                placeholder="Income"
                            //onChange={this.myIncomeHandler}
                            />
                            <select className="form-control input-sm" defaultValue="2" onChange={this.perMonthHandler}>
                                <option value="1">Salary</option>
                                <option value="2">Monthly</option>
                                <option value="3">Weekly</option>
                                <option value="4">Hourly (40 Hrs)</option>
                            </select>
                            <button className="form-control input-sm" onClick={this.myIncomeHandler}>Confirm</button>
                        </div>
                        <button onClick={() => this.closedChecker()} type="button" className="margin10 btn btn-sm btn-outline-light">Collapse</button>
                    </form>
                </div>
            } else {
                card =
                    <div className="incomeClosed">
                        <div className="d-flex justify-content-between">
                            <CloseButton onClick={this.handleClose} />
                            <span className="col">{this.state.title}</span>
                            <button onClick={() => this.closedChecker()} className="btn btn-sm btn-outline-light" >Expand</button>
                            <span id="totalCost" type="button" className="col">${this.state.income}</span>
                        </div>
                    </div>;
            }
        } else { card = null; }

        return (
            <div>
                {card}
            </div>
        );

       
    }
}

export default IncomeComponent;