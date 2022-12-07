import React, { useState, useEffect } from "react";
import "../styles/PokemonModal.css";
import type { PokeListModal } from "../types";
import { statToShow } from "../utils/statToShow";
import { fetchPokemon } from "../utils/fetchPokemon";

const PokemonModal = ({ pok, handleClose, handleEvolutionClick }: PokeListModal) => {
  const [evolutions, setEvolutions] = useState<Array<any>>([]);
  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
      }
    };
    document.addEventListener("keydown", keyDownHandler);
    (async () => {
      let data = await (await fetch(pok.species.url)).json();
      let ev_data = await (await fetch(data.evolution_chain.url)).json();
      let ev1URL = ev_data.chain.species.url;
      let ev2URL = ev_data.chain?.evolves_to[0]?.species?.url;
      let ev3URL = ev_data.chain?.evolves_to[0]?.evolves_to[0]?.species.url;
      const data1 = await fetchPokemon(ev1URL);
      const data2 = await fetchPokemon(ev2URL);
      const data3 = await fetchPokemon(ev3URL);
      setEvolutions([data1, data2, data3]);
    })();
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
          return <div key={t.type.name}>{t.type.name.toUpperCase()}</div>;
        })}
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
        {evolutions.map((ev, i): any => {
          console.log(evolutions[i]);
          return (
            <div key={ev.name} className='evolutions-flex-item'>
              <img alt='Evolution' width='60' height='60' src={ev.sprites.front_default} onClick={handleEvolutionClick} />
              <div style={{ fontSize: "15px" }} onClick={handleEvolutionClick}>
                {ev.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonModal;
