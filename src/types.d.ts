export type Pokemon = { name: string; url: string };
export type PokeList = Array<any>;
export type PokeListModal = {
  pok: {
    height: number;
    weight: number;
    name: string;
    species: { name: string; url: string };
    types: Array<{ slot: number; type: { name: string; url: string } }>;
    stats: Array<{ base_stat: number; effort: number; stat: { name: string; url: string } }>;
  };
  handleClose: () => void;
};
