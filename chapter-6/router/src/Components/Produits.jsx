import React from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'
import Produit from './Produit';


class Produits extends React.Component{
    
    constructor(){
        super();
            this.state = {
                table: [],
              
            }
    }
    
    componentDidMount = () =>{
        
        const URL = ' https://fakestoreapi.com/products/';
        axios(URL).then((res) =>{
           console.log(res.data);
        const list = res.data

        this.setState({
            table: list,
        })

        })
    }

     render(){

        return (
            <div>
                {this.state.table.map((data) => {
                    return(
                        <div key={data.id}>
                            <p>{data.title}</p>
                              <p>{data.price}</p>
                                <img  className='pics' src={data.image} alt='things'/>
                                 <Link to={`/produit/${data.id}`}>Learn More</Link>
                        </div>
                    )
                })}
            </div>
        )

     
    }
    


   
    

}export default Produits;