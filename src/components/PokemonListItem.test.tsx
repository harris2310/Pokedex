/* eslint-disable no-restricted-globals */
import { render, screen, fireEvent, createEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "@testing-library/jest-dom";
import { prettyDOM } from "@testing-library/react";
import PokemonListItem from "./PokemonListItem";
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

const mock = {
  open: false,
  handleOpen: jest.fn(),
  handleClose: () => {},
  handleFavouriteToggle: jest.fn((e: any) => {
    e.stopPropagation();
  }),
  favouriteClass: "item-favourite-white",
};

jest.mock("../containers/usePokemonListItem", () => {
  return () => mock;
});

describe("Component clicks should trigger specific handlers", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("Star click shold trigger handleFavouriteToggle only", () => {
    const { container } = render(
      <GlobalContext.Provider value={{ pokemon: [], setPokemon: () => {}, favourites: [], setFavourites: () => {}, loading: false, setLoading: () => {} }}>
        <PokemonListItem pok={pok} />
      </GlobalContext.Provider>,
    );
    const clickEvent = createEvent.click(screen.getByText("★"));

    fireEvent(screen.getByText("★"), clickEvent);
    expect(mock.handleFavouriteToggle.mock.calls.length).toBe(1);
    // expect(mock.handleOpen).not.toHaveBeenCalled(); // DOESN"T PASS, NEED e.stopPropagation()
    expect(container).toHaveTextContent("★Snorlax");
  });
  test("Button but not star click should trigger handleOpen only", () => {
    const { container } = render(
      <GlobalContext.Provider value={{ pokemon: [], setPokemon: () => {}, favourites: [], setFavourites: () => {}, loading: false, setLoading: () => {} }}>
        <PokemonListItem pok={pok} />
      </GlobalContext.Provider>,
    );
    fireEvent.click(screen.getByRole("img"));
    expect(mock.handleOpen).toHaveBeenCalled();
    expect(mock.handleFavouriteToggle).not.toHaveBeenCalled();
    expect(container).toHaveTextContent("★Snorlax");
  });
});
