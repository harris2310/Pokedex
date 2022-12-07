import React, { ChangeEventHandler, FormEvent, useState } from "react";
import "../styles/Navbar.css";

type Props = { handlePokemonChange: Function };

const Navbar = ({ handlePokemonChange }: Props) => {
  const [value, setValue] = useState<string>("");
  // Remember to correct event type later
  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((response) => response.json())
      .then((data) => handlePokemonChange(data));
  };
  return (
    <div className='navbar-main'>
      <form onSubmit={handleSearchSubmit}>
        <input placeholder='Type a Pokemon' onChange={handleInputChange} className='search-input' required />
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Navbar;
