import React, { useState, useContext, useRef, FormEvent, SyntheticEvent } from "react";
import fetchPokemonInit from "../utils/fetchPokemonInit";
import { GlobalContext } from "../context/GlobalContext";
import fetchPokemonByType from "../utils/fetchPokemonByType";
import { GContext } from "../types";

function useNavbar() {
  const [value, setValue] = useState<string>("");
  const [types, setTypes] = useState<string>("Any");
  const [fetchError, setFetchError] = useState(false);
  const { favourites, setPokemon, setLoading } = useContext(GlobalContext) as GContext;
  const focused = useRef<any>(false);

  const handlePokemonChange = (data: any) => {
    setPokemon(data);
  };

  const handleLogoClick = async (e: any) => {
    setLoading(true); // Οχι ιδανικο επειδη δεν ειναι synchrounous το set
    const result = await fetchPokemonInit(favourites);
    setPokemon(result);
    setLoading(false);
  };

  // CNTR-F focus search bar
  window.onkeydown = function (e) {
    if (e.key === "f" && e.ctrlKey) {
      e.preventDefault();
      focused.current.focus();
    }
  };
  // Remember to correct event type later
  const handleInputChange = (e: SyntheticEvent) => {
    setValue((e.target as HTMLInputElement)!.value.toLowerCase());
    if (fetchError === true) {
      setFetchError(false);
    }
  };
  // Δεν θα πρεπε να ναι στο navbar αυτη η function ισως
  const handleSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // Αν δεν εχει τιμη το input επεστρεψε τα αρχικα 15
    e.preventDefault();
    // Χρειαζεται refactor, πολλα if, πρεπει να γινει πιο γενικο
    if (value === "") {
      if (types !== "Any") {
        const result = await fetchPokemonByType(types);
        handlePokemonChange(result);
      } else {
        const result = await fetchPokemonInit(favourites);
        handlePokemonChange(result);
      }
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (types !== "Any") {
            // Αν ειναι καποιο type selected
            data.types.map((typeFetched: any) => {
              // Αν το type του fetched pokemon ειναι ιδιο με το selected
              if (typeFetched.type.name === types.toLowerCase()) {
                handlePokemonChange([data]);
              }
            });
          } else {
            handlePokemonChange([data]);
          }
        })
        .catch((err) => setFetchError(true));
    }
  };
  const handleTypeSelect = (e: any) => {
    setTypes(e.target.value);
  };
  return { value, types, fetchError, focused, handleInputChange, handleSearchSubmit, handleTypeSelect, handleLogoClick };
}

export default useNavbar;
