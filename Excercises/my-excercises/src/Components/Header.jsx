import React from 'react'


export function Header(props) {
  return (
    <header>
        <h1>{props.head}</h1>
        <img src={props.pic} alt={props.desc}/>
        <p>{props.paragraph}</p>
    </header>
  )
}


