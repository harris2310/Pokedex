import React, { useState, useEffect } from "react";
import fetchPokemonInit from "../utils/fetchPokemonInit";
import type { PokeList } from "../types";

const useFetchPokemon = (): React.ComponentState => {
  const [pokemon, setPokemon] = useState<PokeList>([]);
  const [favourites, setFavourites] = useState<any>([]);

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
  return { pokemon, loading, favourites };
};

export default useFetchPokemon;
