import React from 'react';
import Router from './routes/Router'
import {Link} from 'react-router-dom';



class App extends React.Component{
  render(){
    return(
      <>
        <nav>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to ='/weekly'>Weekly</Link></li>
          <li><Link to ='/weeklybattle'>Weekly-Battle</Link></li>
          <li><Link to ='/popular'>Popular</Link></li>
          <li><Link to ='/popularbattle'>Popular-Battle</Link></li>
          <li><Link to ='/favourite'>Favourite</Link></li>
          

        </nav>
        <div>
          <h1>Moovice</h1>
            <Router/>
        </div>
      </>
    )
  }
}export default App;