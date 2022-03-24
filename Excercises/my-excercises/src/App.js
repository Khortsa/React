import React from "react";
import Produits from "./Components/Produits";
// import Aliments from "./Components/Aliments";
// import {Title} from "./Components/Title";
// import {Header} from "./Components/Header";



export default function App() {
  return (
    <div>
      <Produits/>
    </div>
  )
}


// export default function App() {
//   return (
//     <ul>
//     <Aliments/>
//     </ul>
//   )
// }



// export default class App extends React.Component {
//   constructor(props){
//     super(props);
//   }

//   render(){
//   return (
//     <div>
//       <Title img="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg" alt="mountain" title ="New excercise" para="A mountain standing tall with might and honour"/>
//       {/* <Title img ={this.props.img} alt={this.props.alt}/> */}
//       <Header head="This header" pic="https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832_1280.jpg" alt="sun" paragraph="This is an image of the sun rising in the morning or the sun about to set"/>
//     </div>
//   )
//   }
// }
