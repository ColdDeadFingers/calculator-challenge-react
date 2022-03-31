import React from "react";
import { useState } from "react";

export default function Display(){

    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const operators = ["/", "x", "+", "-", "."];

    const updateDisplay = value => {
        setCalc(calc + value);
    }

    return(
        <div className="calculator--display">
            <div className="calculator--screen">
                <p className="values">{calc || "0"}</p>
                <p className="result">{result ? "0" : ""}</p>
            </div>

         </div>
    )
}