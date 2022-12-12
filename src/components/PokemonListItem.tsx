import React, { useEffect, useState } from "react";
import "../styles/PokemonListItem.css";
import PokemonModal from "./PokemonModal";

type Props = { pok: any; favourites: Array<number>; handleFavouriteToggle: (e: any) => void; handleEvolutionClick: (e: any, evolutions: any) => void };

function PokemonListItem({ pok, favourites, handleFavouriteToggle, handleEvolutionClick }: Props) {
  let favouriteClass = "";
  if (favourites !== null) {
    if (favourites.includes(pok.id)) {
      favouriteClass = "item-favourite-gold";
    } else {
      favouriteClass = "item-favourite-white";
    }
  } else {
    favouriteClass = "item-favourite-white";
  }
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e: any) => {
    setOpen(false);
  };
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
      <div className={open ? "modal-open" : "modal-closed"}> {open ? <PokemonModal pok={pok} handleClose={handleClose} handleEvolutionClick={handleEvolutionClick} /> : ""}</div>
    </>
  );
}

export default PokemonListItem;
