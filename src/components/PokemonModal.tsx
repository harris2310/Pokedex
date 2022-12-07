import React, { useEffect } from "react";
import "../styles/PokemonModal.css";
import type { PokeListModal } from "../types";

const PokemonModal = ({ pok, handleClose }: PokeListModal) => {
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

  return (
    <div className='modal-content'>
      <h3>{pok.name}</h3>
      <div>Height: {pok.height}</div>
      <div>Weight: {pok.weight}</div>
      <div className='types-flex'>
        Types:
        {pok.types.map((t) => {
          return <div>{t.type.name}</div>;
        })}
      </div>
      <div className='stats-flex'>
        Stats:
        {pok.stats.map((s) => {
          let statToShow = "";
          if (s.stat.name == "attack") {
            statToShow = "ATK";
          } else if (s.stat.name == "defense") {
            statToShow = "DEF";
          } else if (s.stat.name == "special-attack") {
            statToShow = "S-ATK";
          } else if (s.stat.name == "special-defense") {
            statToShow = "S-DEF";
          } else if (s.stat.name == "speed") {
            statToShow = "SPD";
          } else if (s.stat.name == "hp") {
            statToShow = "HP";
          }
          return (
            <div>
              {s.base_stat}
              {"  "}
              {statToShow}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonModal;
