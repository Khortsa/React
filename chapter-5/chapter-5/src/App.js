import axios from 'axios';
import React from "react";



 class App extends React.Component {
 
    constructor(props) {
      super(props);
      this.state = {
        pi: null,
        }
      }
      // componentDidMount() {
      //   axios.get('https://api.pi.delivery/v1/pi?start=0&numberOfDigits=30').then(res =>{
      //     console.log(res.data.content);
      componentDidMount = () => {
        const URL = 'https://api.pi.delivery/v1/pi?start=0&numberOfDigits=30';
        axios(URL).then((res) => {
          console.log("This: ", this);
          let content = res.data.content;
          let pi = content[0] + ',' + content.subString(1);
          this.setState({
            pi
          })
        })
      }
        render(){
          return(
            <>
            {(this.state.pi) ? <h2>{this.state.pi}</h2> : <h2>Aucune valeur disponible</h2>}
            </>
          )

      }

}export default App;



