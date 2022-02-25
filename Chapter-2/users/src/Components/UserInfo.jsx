import React from "react"

export class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        
        
        };
    render(){
     return( 
        <div>  
          <p>{this.props.name} {this.props.email} {this.props.website}</p>;
        </div> 
        )
}

}