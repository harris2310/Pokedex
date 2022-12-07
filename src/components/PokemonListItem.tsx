import React, { useState } from "react";
import "../styles/PokemonListItem.css";
import PokemonModal from "./PokemonModal";

type Props = { pok: any; handleEvolutionClick: (e: any) => void };

function PokemonListItem({ pok, handleEvolutionClick }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseClick = (e: any) => {
    console.log(e.target);
    if (open === true) {
      if (!e.target.classList.contains("modal-content")) {
        setOpen(false);
      }
    }
  };
  return (
    <div onClick={handleOpen} className='pokemon-list-item'>
      <img src={pok.sprites.front_default} alt='Default Pokemon' width='90' height='90' />
      <div onClick={handleOpen} className='pokemon-name'>
        {/* Για να ειναι το πρωτο γραμμα κεφαλαιο*/}
        {pok.name.charAt(0).toUpperCase() + pok.name.slice(1)}
      </div>
      {/* Αν το state ειναι open render την open class */}
      <div className={open ? "modal-open" : "modal-closed"}> {open ? <PokemonModal pok={pok} handleClose={handleClose} handleEvolutionClick={handleEvolutionClick} /> : ""}</div>
    </div>
  );
}

export default PokemonListItem;
