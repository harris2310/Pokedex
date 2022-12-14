import React from "react";
import "../styles/PokemonList.css";
import PokemonListItem from "./PokemonListItem";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

type Props = {
  handleFavouriteToggle: (e: any) => void;
  loading: boolean;
  handleRandomizeClick: () => void;
};

function PokemonList({ handleFavouriteToggle, loading, handleRandomizeClick }: Props) {
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
                <PokemonListItem pok={pok} handleFavouriteToggle={handleFavouriteToggle} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PokemonList;
