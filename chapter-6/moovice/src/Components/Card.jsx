import React from 'react';

class Card extends React.Component{
   
            

    render(){
        return(
            <>
                <img src={this.props.image} alt={this.props.pics}/>
                <p>{this.props.title}</p>
                <p>{this.props.year}</p>
                <p>{this.props.desc}</p>
                <p>{this.props.state.currentBattle}</p>
             


            </>
        )
    }
}export default Card;