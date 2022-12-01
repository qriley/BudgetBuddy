import React, { useState } from "react";
import PercentagesSlider from "react-percentages-slider";
import "react-percentages-slider/dist/index.css";

export default function Slider() {
    const [example, setExample] = useState([
        { text: "Recreation", color: "#e9c46a", percentage: 25 },
        { text: "Debt Pay", color: "#e76f51", percentage: 25 },
        { text: "Investing", color: "#2a9d8f", percentage: 25 },
        { text: "Savings", color: "#2a7c9d", percentage: 25 }
    ]);

    example.forEach((el) => {
        console.log("asek", el.percentage);
    });

    return (
        <div className="">
            <PercentagesSlider
                divisions={example}
                setDivisions={setExample}/>
        </div>
    );
}
