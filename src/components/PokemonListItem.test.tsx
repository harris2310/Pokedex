import { render } from "react-dom";
import PokemonListItem from "./PokemonListItem";

let pok = {
  height: 7,
  weight: 130,
  name: "Snorlax",
  species: { name: "Snorlax", url: "..." },
  sprites: { front_default: "..." },
  types: { slot: 1, type: { name: "normal", url: "..." } },
  stats: { base_stat: "HP", effort: 0, stat: { name: "HP", url: "..." } },
};
/*
describe("Component should render if favourites is empty", () => {
  beforeEach(() => {
    jest.spyOn;
  });
  test("The test", () => {
    const { container} = render(<PokemonListItem favourites={[]} pok={pok} evolutions={[]} handleFavouriteToggle={() => void} />);
  });
});
*/
