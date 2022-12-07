import React, { useState } from "react";
import "../styles/PokemonListItem.css";
import PokemonModal from "./PokemonModal";

type Props = { pok: { url: string; name: string } };

function PokemonListItem({ pok }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseClick = (e: any) => {
    console.log(e.target);
    if (open == true) {
      if (!e.target.classList.contains("modal-content")) {
        setOpen(false);
      }
    }
  };
  return (
    <div onClick={handleCloseClick}>
      <button onClick={handleOpen} type='button'>
        {pok.name}
      </button>
      {/* Αν το state ειναι open render την open class */}
      <div className={open ? "modal-open" : "modal-closed"}>
        {" "}
        <PokemonModal pok={pok} handleClose={handleClose} />
      </div>
    </div>
  );
}

export default PokemonListItem;
