import React  from "react"
import { Routes, Route, DefaultRoute} from "react-router-dom";
import Player from "../routes/Player";
import Player2 from '../routes/Player2';

class Router extends React.Component{
    constructor() {
      super();

    }
  
    render() {
      return (
        <div id='players'>
          <Routes>
              <Route path="/"element={<Player/>}/>
              <Route path="/player2"element={<Player2/>}/>
          </Routes>
        </div>
      );
    }
  }
  
  export default Router;