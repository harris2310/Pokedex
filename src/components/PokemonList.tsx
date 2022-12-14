import React, { useEffect } from "react";
import "../styles/PokemonList.css";
import PokemonListItem from "./PokemonListItem";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import fetchRandom from "../utils/fetchRandom";
import fetchPokemonInit from "../utils/fetchPokemonInit";

function PokemonList() {
  const { pokemon, setPokemon, loading, setLoading, setFavourites } = useContext(GlobalContext);

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

  const handleRandomizeClick = async () => {
    setLoading(true);
    const result = await fetchRandom();
    setPokemon(result);
    setLoading(false);
  };

  return (
    <div className='pokemon-list-main'>
      <h2>Pokedex</h2>
      <button type='button' className='randomize-button' onClick={handleRandomizeClick}>
        Randomize
      </button>
      {loading ? (
        <div className='loading'></div>
      ) : (
        <div className='list-columns'>
          {pokemon.map((pok: any) => {
            return (
              <div key={pok.name}>
                <PokemonListItem pok={pok} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PokemonList;
