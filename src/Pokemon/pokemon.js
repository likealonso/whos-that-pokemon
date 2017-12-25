import React from 'react'
import {Link} from 'react-router-dom'

const Pokemon = ({pokemon, whoThatPokemon, showPokemon, anotherPokemon}) => {
    let color = ""
    let filter = ""
    if (pokemon && showPokemon) {
            color = "black"
            filter = "contrast(100%) brightness(100%)"
        }
    else if (pokemon && !showPokemon) {
        color = 'white'
        filter= 'contrast(0%) brightness(50%)'
    }

    else if (!pokemon) {
        return <div>hold on</div>
    }
        
    return (
        <div>
            <img style={{filter: filter}} width="200" height="auto" src={pokemon.sprites.front_default}>
            </img><br/><br/>
            <button onClick={whoThatPokemon} className="btn btn-primary">Tell me!</button>&nbsp;&nbsp;
            <button onClick={anotherPokemon} className="btn btn-danger">I'll guess another one</button>
            <h3 style={{color: color}}>It's {pokemon.name.toUpperCase()}!</h3>
        </div>
    )
}

export default Pokemon