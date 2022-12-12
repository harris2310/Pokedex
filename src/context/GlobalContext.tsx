/*
import React, { useState, createContext, ReactNode } from "react";
import type { PokeList } from "../types";

const GlobalContext = createContext();

type Props = {
  children: ReactNode;
};

const GlobalContextProvider: React.FC<Props> = ({ children }) => {
  const [pokemon, setPokemon] = useState<PokeList>([]);
  const [favourites, setFavourites] = useState<any>([]);
  const [evolutions, setEvolutions] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  return <GlobalContext.Provider value={{ pokemon, favourites, evolutions, loading }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalContextProvider };

*/
export {};
