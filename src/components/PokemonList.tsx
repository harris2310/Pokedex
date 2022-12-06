import React from "react";
import "../styles/PokemonList.css";
import { Pokemon, Props } from "../types";

type Pokemon = { name: string; url: string };

type Props = { pokemon: { count: number; next: string | null; previous: string | null; results: Array<Pokemon> } };

function PokemonList({ pokemon }: Props) {
  console.log(pokemon);
  return (
    <div className='pokemon-list-main'>
      PokemonList
      <div className='list-columns'>
        {pokemon.results.map((pok) => {
          return <div key={pok.name}>{pok.name}</div>;
        })}
      </div>
    </div>
  );
}

export default PokemonList;
