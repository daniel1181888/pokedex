import React from 'react';
import { Link } from 'react-router-dom';

const Pokestat = ({selectedPokemon}) => {
    return (
        <div>
            {selectedPokemon &&(
                <div className="pokestats">
                  <h2>{selectedPokemon.name}</h2>
                  <p>Height: {selectedPokemon.height}</p>
                  <p>Weight: {selectedPokemon.weight}</p>
                  <p>Base Experience: {selectedPokemon.base_experience}</p>
                  <img src={selectedPokemon.sprites.front_default} alt={selectedPokemon.name} />
                  <Link to = "./Morestatspage" state = {{selectedPokemon}}>more stats</Link>
                </div>
              )}
        </div>   
    );
}

export default Pokestat;
