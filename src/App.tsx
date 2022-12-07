import React, { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import Navbar from "./layouts/Navbar";
import "./styles/App.css";
import type { PokeList } from "./types";

function App() {
  const [pokemon, setPokemon] = useState<PokeList>([]);
  const [evolutions, setEvolutions] = useState<Array<any>>([]);

  useEffect(() => {
    let pokePromises: Array<any> = [];
    for (let i = 1; i <= 15; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      pokePromises.push(fetch(url).then((res) => res.json()));
    }
    // οταν ολοκληρωθουν τα fetch βαζω τα pokemon σε state
    Promise.all(pokePromises).then((result) => {
      setPokemon(result);
    });
  }, []);

  const handlePokemonChange = (data: any) => {
    setPokemon([data]);
  };

  const handleEvolutionClick = (e: any) => {
    const evolution = e.target.getAttribute("data-ev");
    setPokemon([evolutions[evolution]]);
  };
  const handleEvolutions = (data: Array<any>) => {
    setEvolutions(data);
  };
  return (
    <div className='App'>
      <Navbar handlePokemonChange={handlePokemonChange} />
      <PokemonList pokemon={pokemon} handleEvolutionClick={handleEvolutionClick} evolutions={evolutions} handleEvolutions={handleEvolutions} />
    </div>
  );
}

export default App;

