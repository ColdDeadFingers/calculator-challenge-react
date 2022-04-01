import React from "react";
import Display from "./components/Display";
import Operators from "./components/Operators";
import Numbers from "./components/Numbers";
import { useState } from "react";

export default function App(){
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");

    const operators = ["/", "*", "+", "-", "."];

    const updateDisplay = value => {
        if (operators.includes(value) && calc === "" ||
            operators.includes(value) && operators.includes(calc.slice(-1))) {
            return;
        }
        setCalc(calc + value);

        if (!operators.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
        };

    const deletelast = () => {
        setCalc(prevState => {
            return prevState.slice(0, -1);
        });
    }

    return (
        <div className="App">
            <div className="calculator">
                <Display 
                value = {calc || "0"}
                result = {result || "0"}
                />

                <Operators
                
                divide = {() => updateDisplay("/")}
                multiply = {() => updateDisplay("*")}
                add = {() => updateDisplay("+")}
                subtract = {() => updateDisplay("-")}
                equals = {() => calculate()}
                del = {() => deletelast()}
                />


                <Numbers 
                
                zero = {() => updateDisplay("0")}
                one = {() => updateDisplay("1")}
                two = {() => updateDisplay("2")}
                three = {() => updateDisplay("3")}
                four = {() => updateDisplay("4")}
                five = {() => updateDisplay("5")}
                six = {() => updateDisplay("6")}
                seven = {() => updateDisplay("7")}
                eight = {() => updateDisplay("8")}
                nine = {() => updateDisplay("9")}
                dot = {() => updateDisplay(".")}
                />
            </div>
        </div>

    )
}