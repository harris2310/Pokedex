/*
import React, { useState, useEffect, SetStateAction } from "react";
import fetchPokemonInit from "../utils/fetchPokemonInit";
import type { PokeList } from "../types";

type Props = {
  loading: boolean;
  setPokemon: SetStateAction;
};

const useFetchPokemon = ({ loading, setLoading, setPokemon }: Props): React.ComponentState => {
  useEffect(() => {
    (async () => {
      if (loading === true) {
        const result = await fetchPokemonInit(favouritesArr);
        setPokemon(result);
      }
      setLoading(false);
    })();
  }, [loading]);
  return {};
};

export default useFetchPokemon;
*/

export {};
