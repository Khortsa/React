import React from 'react'



export function Title(props) {
  return (
    <div>
        <h1>{props.title}</h1>
            <p>{props.para}</p>
             <img src={props.img} alt={props.alt}/>
    </div>
  )
}




