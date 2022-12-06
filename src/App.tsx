import React, { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import Navbar from "./layouts/Navbar";
import "./styles/App.css";
import type { PokeList } from "./types";

function App() {
  const [pokemon, setPokemon] = useState<PokeList>({ count: 0, next: null, previous: null, results: [] });

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  const handlePokemonChange = (data: any) => {
    setPokemon({ count: 0, next: null, previous: null, results: [data] });
  };

  return (
    <div className='App'>
      <Navbar handlePokemonChange={handlePokemonChange} />
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;

