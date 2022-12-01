import React, { useState } from "react";
import PercentagesSlider from "react-percentages-slider";
import "react-percentages-slider/dist/index.css";

export default function Slider(props) {
    const [example, setExample] = useState([
        { text: "Recreation", color: "#e9c46a", percentage: 25 },
        { text: "Debt Pay", color: "#e76f51", percentage: 25 },
        { text: "Investing", color: "#2a9d8f", percentage: 25 },
        { text: "Savings", color: "#2a7c9d", percentage: 25 }
    ]);


    const doClick = () => {
        var count = 0;
        example.forEach((el) => {

            props.incomeFunction(el.percentage, count);
            count++;
        });
    }
    

    return (
        <div className="row">
            <div className="col-md-11">
                <PercentagesSlider
                    divisions={example}
                    setDivisions={setExample} />
            </div>
            <div className="col-md-1">
                <button className="btn btn-light" onClick={doClick}>Refresh</button>
            </div>
            
        </div>
    );
}
