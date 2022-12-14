import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import type { GContext } from "../types";

function usePokemonListItem(pok: any) {
  const [open, setOpen] = useState(false);
  const { favourites, setFavourites } = useContext(GlobalContext) as GContext;
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
  return { open, handleOpen, handleClose, handleFavouriteToggle, favouriteClass };
}

export default usePokemonListItem;
