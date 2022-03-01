// import React from "react";
// import './App.css';
// import { Box} from "./components/Box";
// import './styles/global.css';




// function App() {
//     const tempMin = -20;
//     const tempMax = 40;
//     const heartMin = 80;
//     const heartMax = 180;
//     const stepsMin = 0;
//     const stepsMax = 50000;

//     return (
//       <div class = 'container-fluid'>
//         <div class = 'row'>
//          <Box icon='local_drink' color='#3A85FF' value='1.5' unit='L'/>
//          <Box icon='directions_walk' color='black' value='3000' unit='steps'/>
//          <Box icon='favorite' color='red' value='120' unit='bpm'/>
//          <Box icon='wb_sunny' color='yellow' value='-10' unit='˚C'/>
//           <p>Heart : {heartMin}</p>
//           <p>Temperature : {tempMin}</p>
//           <p>Steps : {stepsMin}</p>
//         </div>
//       </div>
//     );
// }
// export default App;
import React from "react";
import './App.css';
import './styles/global.css'
import Box from './components/Box';

const tempMin = 20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
		
		constructor(props) {
				super(props);
        this.state = {
          water: 0,
          heart: 120,
          temperature: -10,
          steps: 3000
        }
		} 
    calculateWater (){
      let water = 1.5;
      if(this.state.temperature > -20){
        let addTemp = this.state.temperature -20;
        water+= addTemp * 0.02;
      } if(this.state.heart > 120){
      water+= (this.state.heart - 120) * 0.0008;
    } if (this.state.steps < 1000){
      water+=(this.state.steps -10000) * 0.00002; 
    }
     this.setState({water})
  }
    onHeartChange = (e) =>{
      this.setState ( {
        heart: e.target.value,
      
      });
      this.calculateWater();
    }
    onStepsChange = (e) =>{
      this.setState ( {
        steps: e.target.value,
      
      });
      this.calculateWater();
    }
    onTemperatureChange = (e) =>{
      this.setState ( {
        temperature: e.target.value,
      
      }); 
      this.calculateWater();
    }
   
  
		render() {
				return (
		      <div className="container-fluid">
		        <div className="row">
							
		            {/* Water */}
		            <Box icon="local_drink" value={this.state.water.toFixed(2)} unit="L" color="#3A85FF" />
		            
		            {/* Steps */}
		            <Box icon="directions_walk" min={stepsMin} max={stepsMax} value={this.state.steps} unit="steps" color="black" onChange={this.onStepsChange} />
		            
		            {/* Heart */}
		            <Box icon="favorite" min={heartMin} max={heartMax} value={this.state.heart} unit="bpm" color="red" onChange={this.onHeartChange} />
		            
		            {/* Temperatur */}
		            <Box icon="wb_sunny" min={tempMin} max={tempMax} value={this.state.temperature} unit="°C" color="yellow" onChange={this.onTemperatureChange} />
		        </div>
		      </div>
		    );
      }
    }
export default App;
