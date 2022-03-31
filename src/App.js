import React from "react";
import Display from "./components/Display";
import Operators from "./components/Operators";
import Numbers from "./components/Numbers";
import { useState } from "react";

export default function App(){
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const operators = ["/", "x", "+", "-", "."];

    const updateDisplay = value => {
        setCalc(calc + value);
    }

    return (
        <div className="App">
            <div className="calculator">
                <Display />
                <Operators />
                <Numbers />
            </div>
        </div>

    )
}