import React from 'react';
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import CloseButton from 'react-bootstrap/CloseButton';

class CreditComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: null,
            rate: null,
            ratePercent: null,
            principle: null,
            numOfYears: null,
            numOfMonths: null,
            total: null,
            title: "-",
            title2: null,
            isClosed: false,
            hidden: false
        };
        //this.totalFunction = props.totalFunction;
    }

    principleHandler = (event) => {
        this.setState({ principle: event.target.value });
    }

    rateHandler = (event) => {
        if(event.target.value!=null){
        var interest = parseInt(event.target.value);
        var trueInterest = interest * .01;
        this.setState({ 
            rate: trueInterest,
            ratePercent: interest
        });
    }

    }

    monthHandler = (event) => {
        var length = parseInt(event.target.value);
        var trueYears = length/12;
        this.setState({
             numOfYears: trueYears,
         });

    }

    totalCalculator = (event) => {
        console.log("Hit1")
        event.preventDefault();
        var calculateTotal = (this.state.principle * (1+this.state.rate)^this.state.numOfYears);
        var oldVal = this.state.total
        const re = /^[0-9\b]+$/;
        console.log(calculateTotal)

        if ((this.state.expense === '' || re.test(this.state.expense))
            && calculateTotal != this.state.total) {
            
                console.log(calculateTotal)
            this.setState({
                total: calculateTotal,
                expense: calculateTotal/this.state.numOfMonths
            });
            this.props.totalFunction(Number(calculateTotal - oldVal));
        }
    }

    titleHandler = (event) => {
        this.setState({ title: event.target.value });
        this.setState({ title2: event.target.value });
    }

    closedChecker = () => {
        var changeClosed = !this.state.isClosed;
        this.setState({ isClosed: changeClosed });
    }

    handleClose = () => {
        this.setState({
            hidden: true
        });
        this.props.totalFunction(Number(-this.state.total));
    }

    render() {
        let card;
        if (!this.state.hidden) {

            if (!this.state.isClosed) {
                card =
                    <div className="debtCard">
                        <div className="d-flex justify-content-between">
                            <CloseButton onClick={this.handleClose} />
                            <h2>{this.state.title}</h2>
                            <p />
                        </div>
                        <form>
                            <h3>Loan/Debt Expense</h3>
                            <div className="d-flex justify-content-center">
                                <input className="form-control input-sm"
                                    type='text'
                                    onChange={this.principleHandler}
                                    placeholder="Amount"
                                    value={this.state.principle}
                                />
                                <input className="input-sm form-control "
                                    type='text'
                                    onChange={this.rateHandler}
                                    placeholder="Rate in percent"
                                    value={this.state.ratePercent}
                                />
                                <input className="input-sm form-control "
                                    type='text'
                                    onChange={this.monthHandler}
                                    placeholder="Loan Length in Months"
                                    value={this.state.numOfMonths}
                                />
                                <button className="btn btn-sm btn-outline-light form-control" onClick={this.totalCalculator}>Confirm</button>
                            </div>
                            <br />
                            <input className="form-control input-sm"
                                type='text'
                                onChange={this.titleHandler}
                                placeholder="Description"
                                value={this.state.title2}
                            />
                        </form>
                        Approximate cost total:
                        <h3 id="totalCost">${this.state.total}</h3>
                        Approximate cost per month:
                        <h3 id="totalCost">${this.state.expense}</h3>
                        Approximate interest:
                        <h3 id="totalCost">${this.state.total - this.state.principle}</h3>
                        <button onClick={() => this.closedChecker()} type="button" className="btn btn-sm btn-outline-light">Collapse</button>
                    </div>;
            } else {
                card =
                    <div className="debtClosed">
                        <div className="d-flex justify-content-between">
                            <CloseButton onClick={this.handleClose} />
                            <span className="col">{this.state.title}</span>
                            <button onClick={() => this.closedChecker()} className="btn btn-sm btn-outline-light" >Expand</button>
                            <span id="totalCost" type="button" className="col">Total Cost: ${this.state.total}</span>
                            <span id="totalCost" type="button" className="col">Monthly Cost: ${this.state.expense}</span>
                            <span id="totalCost" type="button" className="col">Total interest: ${this.state.expense - this.state.total}</span>
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

export default CreditComponent;