import React from 'react';
import Vaccine from './Component/Vaccine';



export default function App() {
  return (
    <div>
      <Vaccine name='Johnson' country='Tibet'/>
      <button>Action</button>
      <Vaccine name='Pfizer' country='France'/>
      <Vaccine name='BioNtech' country='Japan'/>
      <Vaccine name='Moderna' country='Germany'/>
    </div>
  )
}




