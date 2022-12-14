import React from "react";
import "../styles/PokemonListItem.css";
import PokemonModal from "./PokemonModal";
import usePokemonListItem from "../containers/usePokemonListItem";

function PokemonListItem({ pok }: any) {
  const { open, handleOpen, handleClose, handleFavouriteToggle, favouriteClass } = usePokemonListItem(pok);
  return (
    <>
      <div onClick={handleOpen} className={open ? "pokemon-list-item" : "pokemon-list-item-anim"}>
        <div id={pok.id} onClick={handleFavouriteToggle} className={favouriteClass}>
          ★
        </div>
        <img src={pok.sprites.front_default} alt='Default Pokemon' width='90' height='90' />
        <div className='pokemon-name'>
          {/* Για να ειναι το πρωτο γραμμα κεφαλαιο*/}
          {pok.name.charAt(0).toUpperCase() + pok.name.slice(1)}
        </div>
        {/* Αν το state ειναι open render την open class */}
      </div>
      <div className={open ? "modal-open" : "modal-closed"}> {open ? <PokemonModal pok={pok} handleClose={handleClose} /> : ""}</div>
    </>
  );
}

export default PokemonListItem;
