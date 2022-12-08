import React, { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import Navbar from "./layouts/Navbar";
import "./styles/App.css";
import type { PokeList } from "./types";
import fetchPokemonInit from "./utils/fetchPokemonInit";
import fetchRandom from "./utils/fetchRandom";

function App() {
  const [pokemon, setPokemon] = useState<PokeList>([]);
  const [evolutions, setEvolutions] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true); // Οχι ιδανικο επειδη δεν ειναι synchrounous το set
      const result = await fetchPokemonInit();
      setPokemon(result);
      setLoading(false);
    })();
  }, []);

  const handlePokemonChange = (data: any) => {
    console.log(data);
    setPokemon(data);
  };

  const handleLogoClick = async (e: any) => {
    setLoading(true); // Οχι ιδανικο επειδη δεν ειναι synchrounous το set

    const result = await fetchPokemonInit();
    setPokemon(result);
    setLoading(false);
  };

  const handleEvolutionClick = (e: any) => {
    const evolutionInd = e.target.getAttribute("data-ev");
    if (e.target.id !== "selected") {
      setPokemon([evolutions[evolutionInd]]);
    }
  };
  const handleEvolutions = (data: Array<any>) => {
    setEvolutions(data);
  };
  const handleRandomizeClick = async () => {
    setLoading(true);
    const result = await fetchRandom();
    setPokemon(result);
    setLoading(false);
  };
  return (
    <div className='App'>
      <Navbar handlePokemonChange={handlePokemonChange} handleLogoClick={handleLogoClick} />
      <PokemonList
        pokemon={pokemon}
        loading={loading}
        handleEvolutionClick={handleEvolutionClick}
        evolutions={evolutions}
        handleEvolutions={handleEvolutions}
        handleRandomizeClick={handleRandomizeClick}
      />
    </div>
  );
}

export default App;

