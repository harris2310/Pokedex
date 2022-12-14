import React, { useState, createContext, ReactNode } from "react";
import type { PokeList } from "../types";

const GlobalContext = createContext<any>([]);

type Props = {
  children: ReactNode;
};

const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [pokemon, setPokemon] = useState<PokeList>([]);
  return <GlobalContext.Provider value={{ pokemon, setPokemon }}>{children}</GlobalContext.Provider>;
};

export { GlobalContext, GlobalProvider };
