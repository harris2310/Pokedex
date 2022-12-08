import React from "react";
import "../styles/PokemonList.css";
import type { PokeList } from "../types";
import PokemonListItem from "./PokemonListItem";

type Props = {
  pokemon: PokeList;
  favourites: Array<number>;
  handleFavouriteToggle: (e: any) => void;
  loading: boolean;
  handleEvolutionClick: (e: any) => void;
  evolutions: any[];
  handleEvolutions: (data: any[]) => void;
  handleRandomizeClick: () => void;
};

function PokemonList({ pokemon, favourites, handleFavouriteToggle, loading, handleEvolutionClick, evolutions, handleEvolutions, handleRandomizeClick }: Props) {
  return (
    <div className='pokemon-list-main'>
      <h2>Pokemon</h2>
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
                <PokemonListItem
                  pok={pok}
                  favourites={favourites}
                  handleFavouriteToggle={handleFavouriteToggle}
                  handleEvolutionClick={handleEvolutionClick}
                  evolutions={evolutions}
                  handleEvolutions={handleEvolutions}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PokemonList;
