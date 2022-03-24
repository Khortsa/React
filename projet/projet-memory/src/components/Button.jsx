import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component{
    render(){
        return(
            <div className='flex-end'>
                <Link to="/">1-Player</Link> | 
                <Link to="/player2">2-Players</Link> 
            </div>
         
        )

    }
}
export default Button;



