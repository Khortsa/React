import React from "react"

export function UserInfo (props){
     return ( 
        <div>  
          <h3>{props.name}</h3>
          <p> {props.email} {props.website}</p>
        </div> 
        )
};