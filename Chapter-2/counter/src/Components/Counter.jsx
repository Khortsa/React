import React from "react";

export function Counter(props){
    return (
        <div>
             <h2> {props.count} </h2>
            <button  style = {{background: "green"}} onClick={props.count !== 0 ? props.substractFunction : ''}>-</button>
            <button  style = {{background: "red"}} onClick={props.addFunction}> + </button>
        </div>
    )
} 
  
  
  
  