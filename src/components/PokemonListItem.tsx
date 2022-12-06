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
  return (
    <div>
      <button onClick={handleOpen} type='button'>
        {pok.name}
      </button>
      <div className={open ? "modal-open" : "modal-closed"}>
        <PokemonModal pok={pok} handleClose={handleClose} />
      </div>
    </div>
  );
}

export default PokemonListItem;
