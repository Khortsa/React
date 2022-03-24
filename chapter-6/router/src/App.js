import React from 'react';
import Home from './Components/Home';
import Produits from './Components/Produits';
import Produit from './Components/Produit';
import {Routes, Route, Link} from 'react-router-dom';
import  './App.css';

class App extends React.Component{
 render(){
   return(
     <>
        <div>
          <nav>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/produits'>Produits</Link>
              </li>
          </nav>
        </div>
    
        <Routes>
          <Route exact path= '/' element={<Home/>}></Route>
          <Route path='/produits' element={<Produits/>}></Route>
          <Route path='/produit/:produitId' element={<Produit/>}></Route>
        </Routes>
     </>
   )
 }


}
export default App;
