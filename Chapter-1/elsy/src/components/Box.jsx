// import React from "react";



// export function Box(props){
//     return (
//         <div class = 'box col-sm-3 col-6' background-color = 'white'>
//             <span className= 'material-icons' style = {{fontSize: 100, color: props.color}}>{props.icon}</span>
//             <p>{props.value}{props.unit}</p>
//         </div>

//     );
// }
import React from "react";

export default class Box extends React.Component {
    renderInput() {
        if(this.props.icon !== 'local_drink'){
           return (<input type = 'range' min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChange}/>)
        } else {
            return(
            
                <div>
                    
                </div>
            )

        }
       
    }
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons" style={{fontSize: "100px", color: this.props.color}}>
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
                {this.renderInput()}
            </div>
        );
    } 
  
}
