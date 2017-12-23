import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './Pokemon/pokemon'
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: null
    }
  }
    componentDidMount() {
      var id = Math.floor((Math.random() * 150) + 1);
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(data => data.json()).then( data => {
        this.setState({pokemon:data})
        console.log(data)
      })
  }

  render() {
    return(
      <BrowserRouter>
        <div className="container">
          <h1>Who's that Pokemon?</h1>
          <Pokemon pokemon={this.state.pokemon}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
