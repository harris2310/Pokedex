import React, { useState, useEffect } from "react";
import { fetchEvolutions } from "../utils/fetchEvolutions";

type pok = {
  height: number;
  weight: number;
  name: string;
  species: { name: string; url: string };
  sprites: { front_default: string };
  types: Array<{ slot: number; type: { name: string; url: string } }>;
  stats: Array<{ base_stat: number; effort: number; stat: { name: string; url: string } }>;
};

const useFetchEvolutions = (pok: pok) => {
  const [evolutions, setEvolutions] = useState<Array<any>>([]);
  useEffect(() => {
    (async () => {
      let data = await (await fetch(pok.species.url)).json();
      let ev_data = await (await fetch(data.evolution_chain.url)).json();
      let ev1URL = ev_data.chain.species.url;
      let ev2URL = ev_data.chain?.evolves_to[0]?.species?.url;
      let ev3URL = ev_data.chain?.evolves_to[0]?.evolves_to[0]?.species.url;
      const data1 = await fetchEvolutions(ev1URL);
      const data2 = await fetchEvolutions(ev2URL);
      const data3 = await fetchEvolutions(ev3URL);
      setEvolutions([data1, data2, data3]);
    })();
  });
  return evolutions;
};

export default useFetchEvolutions;
