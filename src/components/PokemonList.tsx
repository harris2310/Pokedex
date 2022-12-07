import React from "react";
import "../styles/PokemonList.css";
import type { PokeList } from "../types";
import PokemonListItem from "./PokemonListItem";

type Props = { pokemon: PokeList; handleEvolutionClick: () => void };

function PokemonList({ pokemon, handleEvolutionClick }: Props) {
  return (
    <div className='pokemon-list-main'>
      <h2>PokemonList</h2>
      <div className='list-columns'>
        {pokemon.map((pok: any) => {
          return (
            <div key={pok.name}>
              <PokemonListItem pok={pok} handleEvolutionClick={handleEvolutionClick} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonList;
