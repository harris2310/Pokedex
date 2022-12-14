import React, { useState, useEffect, useContext } from "react";
import "../styles/PokemonModal.css";
import type { GContext, PokeListModal } from "../types";
import { statToShow } from "../utils/statToShow";
import useFetchEvolutions from "../hooks/useFetchEvolutions";
import { GlobalContext } from "../context/GlobalContext";

const PokemonModal = ({ pok, handleClose }: PokeListModal) => {
  const [evolutionsLoading, setEvolutionsLoading] = useState(true); // loading for evolutions
  const { setPokemon } = useContext(GlobalContext) as GContext;
  const evolutions = useFetchEvolutions(pok);
  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose(event);
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    setEvolutionsLoading(false);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  const handleEvolutionBefore = (e: any) => {
    e.preventDefault();
    const evolutionInd = e.target.getAttribute("data-ev");
    if (e.target.id !== "selected") {
      setPokemon([evolutions[evolutionInd]]);
    }
  };

  return (
    <>
      <div onClick={handleClose}>
        <div className='modal-close-button'>X</div>
      </div>
      <div className='modal-content'>
        <h3> {pok.name.charAt(0).toUpperCase() + pok.name.slice(1)}</h3>
        <div className='pokemon-body-flex'>
          <div>Height: {pok.height}</div>
          <div>Weight: {pok.weight}</div>
          <div className='types-flex'>
            Types:
            {pok.types.map((t) => {
              return <div key={t.type.name}>{t.type.name.toUpperCase()}</div>;
            })}
          </div>
        </div>

        <div className='stats-flex'>
          Stats:
          {pok.stats.map((s) => {
            let stat: string = statToShow(s)!; // Θαυμαστικο ωστε να ξερει η ts οτι δεν ειναι undefined
            return (
              <div key={stat}>
                {s.base_stat}
                {"  "}
                {stat}
              </div>
            );
          })}
        </div>
        <div className='evolutions-flex'>
          Evolutions:
          {/* Hack - Για να μειωθει το layout shift*/}
          {evolutionsLoading ? (
            <div style={{ height: "130px" }}>...</div>
          ) : (
            <>
              {evolutions.map((ev, i): any => {
                if (ev !== undefined) {
                  return (
                    <div key={ev.name} className='evolutions-flex-item'>
                      <img data-ev={i} id={ev.name === pok.name ? "selected" : ""} alt='Evolution' width='60' height='60' src={ev.sprites.front_default} onClick={handleEvolutionBefore} />
                      <div data-ev={i} id={ev.name === pok.name ? "selected" : ""} style={{ fontSize: "15px" }} onClick={handleEvolutionBefore}>
                        {ev.name.charAt(0).toUpperCase() + ev.name.slice(1)}
                      </div>
                    </div>
                  );
                }
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PokemonModal;
