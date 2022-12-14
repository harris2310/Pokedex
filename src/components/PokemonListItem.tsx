import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../styles/PokemonListItem.css";
import PokemonModal from "./PokemonModal";

type Props = { pok: any };

function PokemonListItem({ pok }: Props) {
  const [open, setOpen] = useState(false);
  const { favourites, setFavourites } = useContext(GlobalContext);
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (e: any) => {
    setOpen(false);
  };

  const handleFavouriteToggle = (e: any) => {
    e.stopPropagation(); // Ωστε να μην κανει trigger και το modal onClick
    const target = parseInt(e.target.id);
    if (favourites.includes(target)) {
      let newFavourites = favourites.filter((f: number) => f !== target);
      console.log(newFavourites);
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
      setFavourites(newFavourites);
    } else {
      let newFavourites = [target, ...favourites];
      localStorage.setItem("favourites", JSON.stringify(newFavourites));
      setFavourites(newFavourites);
    }
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
      <div className={open ? "modal-open" : "modal-closed"}> {open ? <PokemonModal pok={pok} handleClose={handleClose} /> : ""}</div>
    </>
  );
}

export default PokemonListItem;
