import React from "react";
import "../styles/PokemonList.css";
import type { PokeList } from "../types";
import PokemonListItem from "./PokemonListItem";

type Props = { pokemon: PokeList; handleEvolutionClick: (e: any) => void; evolutions: any[]; handleEvolutions: (data: any[]) => void; handleRandomizeClick: () => void };

function PokemonList({ pokemon, handleEvolutionClick, evolutions, handleEvolutions, handleRandomizeClick }: Props) {
  return (
    <div className='pokemon-list-main'>
      <h2>Pokemon</h2>
      <button type='button' className='randomize-button' onClick={handleRandomizeClick}>
        Randomize
      </button>
      <div className='list-columns'>
        {pokemon.map((pok: any) => {
          return (
            <div key={pok.name}>
              <PokemonListItem pok={pok} handleEvolutionClick={handleEvolutionClick} evolutions={evolutions} handleEvolutions={handleEvolutions} />
            </div>
          );
        })}
      </div>
      <button type='button'>Load More Pokemon</button>
    </div>
  );
}

export default PokemonList;
