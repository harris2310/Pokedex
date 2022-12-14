import React from "react";
import "../styles/PokemonList.css";
import type { PokeList } from "../types";
import PokemonListItem from "./PokemonListItem";
import { useContext } from "react";
import { GlobalContext, GlobalProvider } from "../context/GlobalContext";

type Props = {
  favourites: Array<number>;
  handleFavouriteToggle: (e: any) => void;
  loading: boolean;
  handleRandomizeClick: () => void;
};

function PokemonList({ favourites, handleFavouriteToggle, loading, handleRandomizeClick }: Props) {
  const { pokemon } = useContext(GlobalContext);
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
                <PokemonListItem pok={pok} favourites={favourites} handleFavouriteToggle={handleFavouriteToggle} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PokemonList;
