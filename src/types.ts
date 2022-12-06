export type Pokemon = { name: string; url: string };
export type PokeList = { pokemon: { count: number; next: string | null; previous: string | null; results: Array<Pokemon> } };
