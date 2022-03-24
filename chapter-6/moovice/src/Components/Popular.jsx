import React from "react";
import axios from 'axios';
import Card from './Card';

class Home extends React.Component{
    constructor(){
        super();

        this.state ={
            movies: [],
            title: 'no movie',
        }
    }
    componentDidMount =() =>{
        const URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=94079c2fe07a535b419249381dbefdee';
        axios(URL).then((res) =>{
            console.log(res.data);
           const movie = res.data.results;
            this.setState({
                movies: movie
            })

        })
      

    } 

        render(){
            console.log(this.state)
            return (
                <div>
                   
                    {this.state.movies.map((data, index) => {
                        return(
                           
                            <Card image={`https://image.tmdb.org/t/p/w300/${data.poster_path}`} alt='pics' key={index} title={data.title} year={data.release_date} desc={data.overview}/> 
                            
                        )
                    })}
                </div>
        )}
    
}export default Home;