import React from 'react';
import{Link} from 'react-router-dom';
import Router from './routes/Route';



function App(){
  return(
    
      <nav >
        <div className='d-block'>
         <Link to='/'>Home</Link>
         <Link to='/Login'>Login</Link>
        </div>
     
        <Router/>
      </nav>
      


  )
}
export default App;