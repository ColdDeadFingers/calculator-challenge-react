import React from "react";

export default function Operators(props){
    return(
        <div className="calculator--operators">
            <button onClick={props.divide}>/</button>
            <button onClick={props.multiply}>*</button>
            <button onClick={props.add}>+</button>
            <button onClick={props.subtract}>-</button>
            <button onClick={props.del}>DEL</button>
        </div>
    )
}