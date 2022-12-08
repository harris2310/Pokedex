import React, { ChangeEventHandler, FormEvent, useState, useRef, useEffect } from "react";
import "../styles/Navbar.css";
import pokedexURL from "../logo.png";
import fetchPokemonInit from "../utils/fetchPokemonInit";

type Props = { favourites: Array<string>; handlePokemonChange: Function; handleLogoClick: (e: any) => void };

const Navbar = ({ favourites, handlePokemonChange, handleLogoClick }: Props) => {
  const [value, setValue] = useState<string>("");
  const [types, setTypes] = useState<Array<string>>([]);
  const [fetchError, setFetchError] = useState(false);
  const focused = useRef<any>(false);

  // CNTR-F focus search bar
  window.onkeydown = function (e) {
    if (e.key == "f" && e.ctrlKey) {
      e.preventDefault();
      focused.current.focus();
    }
  };
  // Remember to correct event type later
  const handleInputChange = (e: any) => {
    setValue(e.target.value);
    if (fetchError == true) {
      setFetchError(false);
    }
  };
  const handleSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // Αν δεν εχει τιμη το input επεστρεψε τα αρχικα 15
    e.preventDefault();
    if (value == "") {
      const result = await fetchPokemonInit(favourites);
      handlePokemonChange(result);
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then((response) => response.json())
        .then((data) => handlePokemonChange([data]))
        .catch((err) => setFetchError(true));
    }
  };
  const handleTypeSelect = (e: any) => {
    setTypes([e.target.value]);
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
          <option value='0'>Any Type</option>
          <option value='7'>Bug</option>
          <option value='16'>Dragon</option> <option value='18'>Fairy</option> <option value='10'>Fire</option> <option value='8'>Ghost</option> <option value='5'>Ground</option>{" "}
          <option value='1'>Normal</option> <option value='14'>Psychic</option> <option value='9'>Steel</option> <option value='17'>Dark</option> <option value='13'>Electric</option>{" "}
          <option value='2'>Fighting</option>
          <option value='3'>Flying</option>
          <option value='12'>Grass</option>
          <option value='15'>Ice</option>
          <option value='4'>Poison</option>
          <option value='6'>Rock</option>
          <option value='11'>Water</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
