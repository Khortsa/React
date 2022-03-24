import React from "react";


function Vaccine (props) {
    
    console.log(props);
        return (
        <div>
            <h1>Vaccine: {props.name} Country: {props.country} </h1>
        </div>
        )
        
}export default Vaccine;
