import React from "react";
import { useState } from "react";

export default function Display(props){

    return(
        <div className="calculator--display">
            <div className="calculator--screen">
                <p className="values">{props.value}</p>
                <p className="result">{props.result}</p>
            </div>

         </div>
    )
}