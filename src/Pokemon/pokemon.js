import React from 'react'

const Pokemon = ({pokemon}) => {
    if (pokemon) {
    return (
        <div>
            <img width="200" height="auto" src={pokemon.sprites.front_default}></img>
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