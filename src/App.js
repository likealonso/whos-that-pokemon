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
      correct: false
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
    if (this.state.pokemon && this.state.name === this.state.pokemon.name) {
    this.setState({showPokemon: true, name: '', correct: true})
    }
    else if (this.state.pokemon && this.state.name !== this.state.pokemon.name) {
    alert('not correct, try again!')
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
          <Pokemon 
            showPokemon={this.state.showPokemon}
            anotherPokemon={this.anotherPokemon}
            whoThatPokemon={this.whoThatPokemon}
            pokemon={this.state.pokemon}
            difficulty={this.state.difficulty}
            levelChange={this.levelChange}
            name={this.state.name}
            changeName={this.changeName}
            tellMe={this.tellMe}
          />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
