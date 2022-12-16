/* eslint-disable no-restricted-globals */
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import PokemonListItem from "./PokemonListItem";
import usePokemonListItem from "../containers/usePokemonListItem";
import { GlobalContext } from "../context/GlobalContext";

let pok = {
  id: 1,
  height: 7,
  weight: 130,
  name: "Snorlax",
  species: { name: "Snorlax", url: "..." },
  sprites: { front_default: "..." },
  types: { slot: 1, type: { name: "normal", url: "..." } },
  stats: { base_stat: "HP", effort: 0, stat: { name: "HP", url: "..." } },
};

describe("Component should render if favourites is empty", () => {
  beforeAll(() => {});
  test("The test", () => {
    const { container } = render(
      <GlobalContext.Provider value={{ pokemon: [], setPokemon: () => {}, favourites: [], setFavourites: () => {}, loading: false, setLoading: () => {} }}>
        <PokemonListItem pok={pok} />
      </GlobalContext.Provider>,
    );
    fireEvent.click(screen.getByText("★"));
    const star = container.firstChild();
    expect(handleOpen).toBeCalled;
    expect(container).toHaveTextContent("hi");
  });
});
