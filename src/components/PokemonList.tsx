import React from "react";
import "../styles/PokemonList.css";
import type { PokeList } from "../types";
import PokemonListItem from "./PokemonListItem";

type Props = { pokemon: PokeList };

function PokemonList({ pokemon }: Props) {
  return (
    <div className='pokemon-list-main'>
      PokemonList
      <div className='list-columns'>
        {pokemon.results.map((pok: { url: string; name: string }) => {
          return (
            <div key={pok.name}>
              <PokemonListItem pok={pok} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonList;
