import React from "react";
import "../styles/Navbar.css";
import pokedexURL from "../logo.png";

import useNavbar from "./useNavbar";

type Props = { handleLogoClick: (e: any) => void };

const Navbar = ({ handleLogoClick }: Props) => {
  const { fetchError, focused, handleInputChange, handleSearchSubmit, handleTypeSelect } = useNavbar();
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
