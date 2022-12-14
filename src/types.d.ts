import { SetStateAction } from "react";

export type Pokemon = Array<{
  height: number;
  weight: number;
  name: string;
  species: { name: string; url: string };
  sprites: { front_default: string };
  types: Array<{ slot: number; type: { name: string; url: string } }>;
  stats: Array<{ base_stat: number; effort: number; stat: { name: string; url: string } }>;
}>;
export type PokeList = Array<any>;
export type PokeListModal = {
  pok: {
    height: number;
    weight: number;
    name: string;
    species: { name: string; url: string };
    sprites: { front_default: string };
    types: Array<{ slot: number; type: { name: string; url: string } }>;
    stats: Array<{ base_stat: number; effort: number; stat: { name: string; url: string } }>;
  };
  handleClose: (e: any) => void;
};

export type GContext = {
  pokemon: Pokemon;
  setPokemon: Dispatch<SetStateAction<Pokemon>>;
  favourites: Array<any>;
  setFavourites: Dispatch<SetStateAction<any[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};
