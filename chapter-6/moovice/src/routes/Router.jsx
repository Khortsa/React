import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../Components/Home';
import Weekly from '../Components/Weekly';
import WeeklyBattle from '../Components/WeeklyBattle';
import Popular from '../Components/Popular';
import PopularBattle from '../Components/PopularBattle';
import Favourite from '../Components/Favourite';

class Router extends React.Component{
    render(){
        return (
            <div>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/weekly' element={<Weekly/>}></Route>
              <Route path='/weeklybattle' element={<WeeklyBattle/>}></Route>
              <Route path='/popular' element={<Popular/>}></Route>
              <Route path='/popularbattle' element={<PopularBattle/>}></Route>
              <Route path='/favourite' element={<Favourite/>}></Route>
            </Routes>

            </div>
          )
        
        
    }
}
export default Router;