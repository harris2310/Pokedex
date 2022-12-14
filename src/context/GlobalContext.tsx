import React, { useState, createContext, ReactNode } from "react";
import type { Pokemon } from "../types";
import type { GContext } from "../types";

const GlobalContext = createContext<GContext | null>(null);

type Props = {
  children: ReactNode;
};

const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [pokemon, setPokemon] = useState<Pokemon>([]);
  const [favourites, setFavourites] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return <GlobalContext.Provider value={{ pokemon, setPokemon, favourites, setFavourites, loading, setLoading }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
