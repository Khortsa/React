import React from 'react'
import Game from '../components/Game'
import Score from '../components/Score';

class Player extends React.Component{
    constructor() {
      super();
    }
  
    render() {
      return (
        <div className='container'>
          <Game />
       </div>
      );
    }
  }
  
export default Player;