import React, { useState, createContext } from "react";
import type { PokeList } from "../types";

const GlobalContext = createContext([{}, () => {}]);

const GlobalContextProvider = (props: React.ReactNode): React.ReactNode => {
  const [pokemon, setPokemon] = useState<PokeList>([]);
  const [favourites, setFavourites] = useState<any>([]);
  const [evolutions, setEvolutions] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return <GlobalContext.Provider value={[pokemon, favourites, evolutions, loading]}>{props.children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalContextProvider };

export {};
