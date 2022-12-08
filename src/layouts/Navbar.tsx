import React, { ChangeEventHandler, FormEvent, useState, useRef, useEffect } from "react";
import "../styles/Navbar.css";
import pokedexURL from "../logo.png";
import fetchPokemonInit from "../utils/fetchPokemonInit";
import fetchPokemonByType from "../utils/fetchPokemonByType";

type Props = { favourites: Array<string>; handlePokemonChange: Function; handleLogoClick: (e: any) => void };

const Navbar = ({ favourites, handlePokemonChange, handleLogoClick }: Props) => {
  const [value, setValue] = useState<string>("");
  const [types, setTypes] = useState<string>("Any");
  const [fetchError, setFetchError] = useState(false);
  const focused = useRef<any>(false);

  // CNTR-F focus search bar
  window.onkeydown = function (e) {
    if (e.key === "f" && e.ctrlKey) {
      e.preventDefault();
      focused.current.focus();
    }
  };
  // Remember to correct event type later
  const handleInputChange = (e: any) => {
    setValue(e.target.value.toLowerCase());
    if (fetchError == true) {
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
  return (
    <div className='navbar-main'>
      <div onClick={handleLogoClick} className='pokedex-logo'>
        <img src={pokedexURL} width='40' height='30' alt='pokedex' />
      </div>
      <form onSubmit={handleSearchSubmit}>
        <input ref={focused} placeholder='Type a Pokemon' onChange={handleInputChange} className={fetchError ? "search-input-error" : "search-input"} autoFocus />
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
      <div>
        <select name='type' title='types' className='dropdown-button' onChange={handleTypeSelect}>
          <option value='Any'>Any Type</option>
          <option value='Bug'>Bug</option>
          <option value='Dragon'>Dragon</option> <option value='Fairy'>Fairy</option> <option value='Fire'>Fire</option> <option value='Ghost'>Ghost</option> <option value='Ground'>Ground</option>{" "}
          <option value='Normal'>Normal</option> <option value='Psychic'>Psychic</option> <option value='Steel'>Steel</option> <option value='Dark'>Dark</option>{" "}
          <option value='Electric'>Electric</option> <option value='Fighting'>Fighting</option>
          <option value='Flying'>Flying</option>
          <option value='Grass'>Grass</option>
          <option value='Ice'>Ice</option>
          <option value='Poison'>Poison</option>
          <option value='Rock'>Rock</option>
          <option value='Water'>Water</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
