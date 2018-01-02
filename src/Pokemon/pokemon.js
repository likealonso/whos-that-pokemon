import React from 'react'

const Pokemon = ({pokemon, whoThatPokemon, showPokemon, anotherPokemon, difficulty, levelChange}) => {
    let color = ""
    let filter = ""
    let level = ""
    let flip = ""

    if (pokemon && showPokemon && difficulty === 1) {
        color = "white"
        filter = "contrast(100%) brightness(100%)"
        level = pokemon.sprites.front_default
        flip = "Level: easy"
    }

    else if (pokemon && showPokemon && difficulty === 2) {
        color = "white"
        filter = "contrast(100%) brightness(100%)"
        level = pokemon.sprites.back_default
        flip = "Level: medium"
    }

    else if (pokemon && !showPokemon && difficulty === 1) {
        color = '#F90F03'
        filter= 'contrast(0%) brightness(10%)'
        level = pokemon.sprites.front_default
        flip = "Level: easy"
    }

    else if (pokemon && !showPokemon && difficulty === 2) {
        color = '#F90F03'
        filter= 'contrast(0%) brightness(10%)'
        level = pokemon.sprites.back_default
        flip = "Level: medium"
    }
    
    else if (!pokemon) {
        return (
            <div>
                 <img style={{width:70, height:"auto", margin: 50}} src={"https://i.imgur.com/LwiQ3fL.png"}></img>
            </div>
        )
    }
   
    return (
        <div>
            <br/>
            <img style={{width:250, height:"auto"}} src={"https://i.imgur.com/fmSJtwq.png"}></img>
            <img style={{width:70, height:"auto"}} src={"https://i.imgur.com/LwiQ3fL.png"}></img>
            <br/>
            <br/>
            <img style={{filter: filter, margin: "0px 100px 0px 50px"}} width="200" height="auto" src={level}>
            </img><br/><br/>
            <button style={{margin: "0px 5px 15px 5px"}} onClick={whoThatPokemon} className="btn btn-primary">Tell me!</button>
            <button style={{margin: "0px 5px 15px 5px"}} onClick={anotherPokemon} className="btn btn-danger">Guess another one</button>
            <button style={{margin: "0px 5px 15px 5px"}} onClick={levelChange} className="btn btn-default">{flip}</button>
            <br/><br/>
            <h3 style={{color: color}}>It's {pokemon.name.toUpperCase()}!</h3>
        </div>
    )
}

export default Pokemon