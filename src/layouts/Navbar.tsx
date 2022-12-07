import React, { ChangeEventHandler, FormEvent, useState, useRef, useEffect } from "react";
import "../styles/Navbar.css";
import pokedexURL from "../logo.png";
import fetchPokemonInit from "../utils/fetchPokemonInit";

type Props = { handlePokemonChange: Function; handleLogoClick: (e: any) => void };

const Navbar = ({ handlePokemonChange, handleLogoClick }: Props) => {
  const [value, setValue] = useState<string>("");
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
    e.preventDefault();
    if (value == "") {
      const result = await fetchPokemonInit();
      handlePokemonChange(result);
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        .then((response) => response.json())
        .then((data) => handlePokemonChange([data]))
        .catch((err) => setFetchError(true));
    }
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
    </div>
  );
};

export default Navbar;
