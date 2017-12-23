import React from 'react'
import {Link} from 'react-router-dom'

const Pokemon = ({pokemon}) => {
    if (pokemon) {
    return (
        <div>
            <img style={{filter: "contrast(0%) brightness(50%)"}} width="200" height="auto" src={pokemon.sprites.front_default}>
            </img>
            <h3>{pokemon.name}</h3>
        </div>
    )
}
    else {
        return (
        <div>
            <br/>
            An oldie... but a goodie!
        </div>
        )
    }
    
}

export default Pokemon