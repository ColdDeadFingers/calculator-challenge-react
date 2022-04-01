import React from "react";

export default function Numbers(props){
    return(
        <div className="calculator--digits">
            <button onClick={props.zero}>0</button>
            <button onClick={props.dot}>.</button>
            <button onClick={props.equals}>=</button>
            <button onClick={props.one}>1</button>
            <button onClick={props.two}>2</button>
            <button onClick={props.three}>3</button>
            <button onClick={props.four}>4</button>
            <button onClick={props.five}>5</button>
            <button onClick={props.six}>6</button>
            <button onClick={props.seven}>7</button>
            <button onClick={props.eight}>8</button>
            <button onClick={props.nine}>9</button>
        </div>
    )
}