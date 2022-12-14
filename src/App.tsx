import React, { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import Navbar from "./layouts/Navbar";
import "./styles/App.css";
import type { PokeList } from "./types";
import fetchPokemonInit from "./utils/fetchPokemonInit";
import fetchRandom from "./utils/fetchRandom";
import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";
//import useFetchPokemon from "./hooks/useFetchPokemon";

function App() {
  const { pokemon, setPokemon, favourites, setFavourites } = useContext(GlobalContext);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      let favouritesArr = JSON.parse(localStorage.getItem("favourites")!); // fetch favourites from Local storage
      // Το κανω empty array αν ειναι Null για να ναι πιο ευκολο να χειριστω οταν δεν εχει favourites το local Storage
      if (favouritesArr == null) {
        favouritesArr = [];
      }
      setFavourites(favouritesArr);
      setLoading(true); // Οχι ιδανικο επειδη δεν ειναι synchrounous το set
      const result = await fetchPokemonInit(favouritesArr);
      setPokemon(result);
      setLoading(false);
    })();
  }, []);

  const handleLogoClick = async (e: any) => {
    setLoading(true); // Οχι ιδανικο επειδη δεν ειναι synchrounous το set
    const result = await fetchPokemonInit(favourites);
    setPokemon(result);
    setLoading(false);
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
      <Navbar handleLogoClick={handleLogoClick} />
      <PokemonList handleFavouriteToggle={handleFavouriteToggle} loading={loading} handleRandomizeClick={handleRandomizeClick} />
    </div>
  );
}

export default App;

