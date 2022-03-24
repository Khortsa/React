import React from 'react'
import {useParams} from 'react-router-dom';

function withRouter(Component){
 return(props)=>{return<Component params={useParams()}{...props}/>}

}




class Produit extends React.Component{
    constructor(){
        super();
        console.log(this.props.params);
    }
    render(){
        return(
            <div>
                Nothing to learn more
            </div>
        )
    }

}
export default withRouter(Produit);