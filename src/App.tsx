import React, { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import Navbar from "./layouts/Navbar";
import "./styles/App.css";
import type { PokeList } from "./types";
import fetchPokemonInit from "./utils/fetchPokemonInit";
import fetchRandom from "./utils/fetchRandom";

function App() {
  const [pokemon, setPokemon] = useState<PokeList>([]);
  const [favourites, setFavourites] = useState<any>([]);
  const [evolutions, setEvolutions] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setLoading(true); // Οχι ιδανικο επειδη δεν ειναι synchrounous το set
      let favouritesArr = JSON.parse(localStorage.getItem("favourites")!); // fetch favourites from Local storage
      if (favouritesArr == null) {
        favouritesArr = [];
      }
      setFavourites(favouritesArr);
      const result = await fetchPokemonInit(favouritesArr);
      setPokemon(result);
      setLoading(false);
    })();
  }, []);

  const handlePokemonChange = (data: any) => {
    setPokemon(data);
  };

  const handleLogoClick = async (e: any) => {
    setLoading(true); // Οχι ιδανικο επειδη δεν ειναι synchrounous το set
    const result = await fetchPokemonInit(favourites);
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
  const handleFavouriteToggle = (e: any) => {
    e.stopPropagation(); // Ωστε να μην κανει trigger και το modal onClick
    const target = parseInt(e.target.id);
    if (favourites.includes(target)) {
      let newFavourites = favourites.filter((f: number) => f !== target);
      console.log(newFavourites);
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
      setFavourites(newFavourites);
    } else {
      let newFavourites = [target, ...favourites];
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
      setFavourites(newFavourites);
    }
  };
  const handleRandomizeClick = async () => {
    setLoading(true);
    const result = await fetchRandom();
    setPokemon(result);
    setLoading(false);
  };
  return (
    <div className='App'>
      <Navbar favourites={favourites} handlePokemonChange={handlePokemonChange} handleLogoClick={handleLogoClick} />
      <PokemonList
        pokemon={pokemon}
        favourites={favourites}
        handleFavouriteToggle={handleFavouriteToggle}
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

