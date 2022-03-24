import React from "react";
import Card from './Card';
import axios from 'axios';


class PopularBattle extends React.Component{
    constructor(){
        super();
        this.state= {
            movies: [],
            currentBattle: 0,
        }
        
    }
    componentDidMount = ()=>{
        const URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=94079c2fe07a535b419249381dbefdee';
        axios(URL).then((res) =>{
            console.log('Popularbattle res.data.results', res.data.results);
            const movies = res.data.results;
            this.setState({
                movies: movies,
            })
            
        })
    }
    render(){
        console.log('Popularbattle this.state.movies',  this.state.movies);
        return(
            <>
                <div>
                    {this.state.movies.slice(this.state.currentBattle, this.state.currentBattle + 2).map(

                       movie => 
                        

                         <Card key={movie.id} image={`https://image.tmdb.org/t/p/w300/${movie[0].poster_path}`} title={movie[0].title} year={movie[0].release_date} desc={movie[0].overview}/>
                    )
                }
                </div>
        
       
            
                
                
            </>

        )
    
    }
}export default PopularBattle;