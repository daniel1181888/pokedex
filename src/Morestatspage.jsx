import React from 'react';
import { useLocation } from 'react-router-dom';


const Pokestat = () => {
    const { selectedPokemon } = useLocation().state;
    return (
        <div>
            {selectedPokemon &&(
                <div className="pokestats">
                  <h2>{selectedPokemon.name}</h2>
                  <p>Height: {selectedPokemon.height}</p>
                  <p>Weight: {selectedPokemon.weight}</p>
                  <p>Base Experience: {selectedPokemon.base_experience}</p>
                  <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
                </div>
              )}
        </div>   
    );
}

function morepokistats(){
    return (
        <div>
            <p>routing test</p>
        </div>   
    );
}


export default Pokestat;
