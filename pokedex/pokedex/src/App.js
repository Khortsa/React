import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          pokemons:[],
          image: '',
          name: '',
          height: '',
          weight: '',
          type: '', 
          
      }
  }
  componentDidMount() {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
    axios(URL).then(reponse => {
      const pokemons = reponse.data.results;
      pokemons.forEach(pokemon => {
        axios(pokemon.url).then((reponse) => {
          let newPokemons = [...this.state.pokemons]; 
          const pokemonDetail = reponse.data
          newPokemons.push(pokemonDetail)
          this.setState({
            pokemons: newPokemons,
          })
        });
      })
    })
  }
  getPokemonDetails = (pokemon) =>{
    console.log(pokemon);
    this.setState({
      name: pokemon.name,
      height: pokemon.height,
      weight: pokemon.weight,
      type: pokemon.types[0].type.name,
     image: pokemon.sprites.other.home.front_default,

    })

  }
  render() {
    return (
      <>
         <div className= 'container-fluid firstClass'>
           <div className='col-6 text-center  pb-5 secondClass' ><img height={250}src={this.state.image}/></div>
           <div className='col-6 text-center thirdClass'>
             <p>
               Name: {this.state.name}
             </p>
             <p>
             Height: {this.state.height}m
             </p>
             <p>
              Weight: {this.state.weight}kg
             </p>
             <p>
              Type: {this.state.type}
             </p>
           </div>
         </div>
          <div className="cards">
            {
                  this.state.pokemons.map((pokemon, index) => {
                      return (
                          <div className='col-lg-4 col-md-6 col-sm-6 text-center d-inline-block col-6' key={index+pokemon.name}>

                                  <p>
                                      <span><img onClick= {()=> this.getPokemonDetails(pokemon)} src={pokemon.sprites.front_default}  /></span><br/>
                                      {pokemon.name}
                                  </p> 
                              
                          </div>
                      )
                  })
              }
          </div>
      </>
      )
  }
}










