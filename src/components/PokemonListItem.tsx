import React, { useEffect, useState } from "react";
import "../styles/PokemonListItem.css";
import PokemonModal from "./PokemonModal";

type Props = { pok: any; handleEvolutionClick: (e: any) => void; evolutions: any[]; handleEvolutions: (data: any[]) => void };

function PokemonListItem({ pok, handleEvolutionClick, evolutions, handleEvolutions }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = (e: any) => {
    console.log("hi");
    console.log(open);
    setOpen(false);
  };
  return (
    <>
      <div onClick={handleOpen} className={open ? "pokemon-list-item" : "pokemon-list-item-anim"}>
        <img src={pok.sprites.front_default} alt='Default Pokemon' width='90' height='90' />
        <div className='pokemon-name'>
          {/* Για να ειναι το πρωτο γραμμα κεφαλαιο*/}
          {pok.name.charAt(0).toUpperCase() + pok.name.slice(1)}
        </div>
        {/* Αν το state ειναι open render την open class */}
      </div>
      <div className={open ? "modal-open" : "modal-closed"}>
        {" "}
        {open ? <PokemonModal pok={pok} handleClose={handleClose} handleEvolutionClick={handleEvolutionClick} evolutions={evolutions} handleEvolutions={handleEvolutions} /> : ""}
      </div>
    </>
  );
}

export default PokemonListItem;
