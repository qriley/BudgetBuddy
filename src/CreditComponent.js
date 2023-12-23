import React from 'react';
import App from './App.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import CloseButton from 'react-bootstrap/CloseButton';

class CreditComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: null,
            rate: 0.0,
            principle: 0.00,
            numOfMonths: 12,
            total: 0.00,
            title: "-",
            title2: null,
            isClosed: false,
            hidden: false
        };
        //this.totalFunction = props.totalFunction;
    }

    myExpenseHandler = (event) => {
        this.setState({ expense: event.target.value });
    }

    rateHandler = (event) => {
        var interest = parseInt(event.target.value);
        var trueInterest = interest * .01;
        this.setState({ rate: trueInterest });

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
                            <h3>This will cost:</h3>
                            <div className="d-flex justify-content-center">
                                <input className="form-control input-sm"
                                    type='text'
                                    onChange={this.myExpenseHandler}
                                    placeholder="Amount"
                                    value={this.state.expense}
                                />
                                <input className="form-select form-control "
                                    type='text'
                                    onChange={this.rateHandler}
                                    placeholder="Rate"
                                    value={this.state.rate}
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
                        Approximate cost per month:
                        <h3 id="totalCost">${this.state.total}</h3>
                        <button onClick={() => this.closedChecker()} type="button" className="btn btn-sm btn-outline-light">Collapse</button>
                    </div>;
            } else {
                card =
                    <div className="debtClosed">
                        <div className="d-flex justify-content-between">
                            <CloseButton onClick={this.handleClose} />
                            <span className="col">{this.state.title}</span>
                            <button onClick={() => this.closedChecker()} className="btn btn-sm btn-outline-light" >Expand</button>
                            <span id="totalCost" type="button" className="col">${this.state.total}</span>
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