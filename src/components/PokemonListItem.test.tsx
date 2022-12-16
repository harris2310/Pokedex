import { render } from "@testing-library/react";
import PokemonListItem from "./PokemonListItem";
import usePokemonListItem from "../containers/usePokemonListItem";

let pok = {
  height: 7,
  weight: 130,
  name: "Snorlax",
  species: { name: "Snorlax", url: "..." },
  sprites: { front_default: "..." },
  types: { slot: 1, type: { name: "normal", url: "..." } },
  stats: { base_stat: "HP", effort: 0, stat: { name: "HP", url: "..." } },
};

describe("Component should render if favourites is empty", () => {
  beforeEach(() => {});
  test("The test", () => {
    render(<PokemonListItem pok={pok} />);
    expect(screen).toHaveTextContent("hi");
  });
});
