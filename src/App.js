import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Pokestat from './pokestat';



function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(data => setPokemonList(data.results));
  }, []);

  function handleClick(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then(response => response.json())
      .then(data => setSelectedPokemon(data));
  }

  function handleFavorite(pokemon) {
    alert(pokemon.name + " toegevoegd aan favorieten");
    const button = document.querySelector(`#${pokemon.name}-btn`);
    console.log(button);
    if(button.classList.contains("checked")){
      button.classList.remove("checked");
    } else {
      button.classList.add("checked");
    }
  }

  return (
      <div className='maindoos'>
        <div className='pokelist'>
          <img id="poketitle" src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png" />
          <h1 className='poketitle'></h1>
          <ul>
            {pokemonList.map(pokemon => (
              <li key={pokemon.name}>
                <button onClick={() => handleClick(pokemon)}>{pokemon.name}</button>
                <button id = {pokemon.name + "-btn"} onClick={() => handleFavorite(pokemon)}>Favorite</button>
              </li>
            ))}
          </ul>
          <Pokestat selectedPokemon={selectedPokemon} />
        </div>
      </div>
  );
}


export default App;


