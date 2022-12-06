import React, { useEffect } from "react";
import "../styles/PokemonModal.css";

type Props = { pok: { url: string; name: string }; handleClose: () => void };

const PokemonModal = ({ pok, handleClose }: Props) => {
  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Escape") {
        event.preventDefault();

        // 👇️ your logic here
        handleClose();
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    // 👇️ clean up event listener
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return <div className='modal-content'>PokemonModal {pok.name}</div>;
};

export default PokemonModal;
