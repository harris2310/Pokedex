import React, { useState, createContext, ReactNode } from "react";
import type { PokeList } from "../types";

const GlobalContext = createContext<any>([]);

type Props = {
  children: ReactNode;
};

const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [pokemon, setPokemon] = useState<PokeList>([]);
  const [favourites, setFavourites] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return <GlobalContext.Provider value={{ pokemon, setPokemon, favourites, setFavourites, loading, setLoading }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
