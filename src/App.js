import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon/pokemon'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: null,
      showPokemon: false
    }
  }

  whoThatPokemon = () => {
    this.setState({showPokemon: true})
  }

  anotherPokemon = () => {
    this.fetchPokemon();
  }

  fetchPokemon = () => {
    var id = Math.floor((Math.random() * 150) + 1);
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(data => data.json()).then( data => {
      this.setState({pokemon:data, showPokemon: false})
    })

  }

  componentDidMount() {
    this.fetchPokemon()
  }

  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <h1>Who's that Pokemon?</h1>
          <Pokemon 
            showPokemon={this.state.showPokemon}
            anotherPokemon={this.anotherPokemon}
            whoThatPokemon={this.whoThatPokemon}
            pokemon={this.state.pokemon}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
