import React from "react";



export function Box(props){
    return (
        <div class = 'box col-sm-3 col-6' background-color = 'white'>
            <span className= 'material-icons' style = {{fontSize: 100, color: props.color}}>{props.icon}</span>
            <p>{props.value}{props.unit}</p>
        </div>

    );
}
