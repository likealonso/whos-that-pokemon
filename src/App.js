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
      showPokemon: false,
      difficulty: 1,
      name: '',
      message: ''
    }
  }

  levelChange = () => {
    if (this.state.difficulty === 1) {
      this.setState({difficulty: 2})
    }
    else if (this.state.difficulty === 2) {
      this.setState({difficulty:1})
    }
  }

  whoThatPokemon = (e) => {
    e.preventDefault();
    if (this.state.pokemon && this.state.name === this.state.pokemon.name || this.state.name === this.state.pokemon.name.charAt(0).toUpperCase() + this.state.pokemon.name.slice(1)) {
    this.setState({showPokemon: true, name: this.state.pokemon.name, message: 'Correct!'})
    }
    else if (this.state.showPokemon === true) {
      this.setState({name: '', message: 'Try another pokemon'});
      }
    else if (this.state.pokemon && this.state.name !== this.state.pokemon.name) {
    this.setState({name: '', message: 'Nope! Try again.'});
    }
  }

  tellMe = () => {
    this.setState({showPokemon: true})
  }

  changeName = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.value
    })
  }

  anotherPokemon = () => {
    this.fetchPokemon();
  }

  fetchPokemon = () => {
    var id = Math.floor((Math.random() * 150) + 1);
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(data => data.json()).then( data => {
      this.setState({pokemon:data, showPokemon: false, message: '', name: ''})
    })
  }

  componentDidMount() {
    this.fetchPokemon()
  }

  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <Pokemon 
            showPokemon={this.state.showPokemon}
            anotherPokemon={this.anotherPokemon}
            whoThatPokemon={this.whoThatPokemon}
            pokemon={this.state.pokemon}
            difficulty={this.state.difficulty}
            levelChange={this.levelChange}
            name={this.state.name}
            message={this.state.message}
            changeName={this.changeName}
            tellMe={this.tellMe}
            isGuessTrue={this.isGuessTrue}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
