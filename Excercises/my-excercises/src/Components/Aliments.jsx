import React from 'react'

const foods = ['rice', 'noodles', 'dumplings', 'bread', 'mushrooms', 'eggs', 'milk' ]


export default function Aliments() {
    
    
  return (
    <div>
        {foods.length > 0 ? <ul>{foods.map(food => <li>{food}</li> )}</ul>: null}
    </div>
  )
}




