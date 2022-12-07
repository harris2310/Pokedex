import React, { ChangeEventHandler, FormEvent, useState, useRef } from "react";
import "../styles/Navbar.css";

type Props = { handlePokemonChange: Function };

// CNTR-F focus search bar
window.onkeydown = function (e) {
  if (e.key == "f" && e.ctrlKey) {
    e.preventDefault();
    console.log("hi");
  }
};

const Navbar = ({ handlePokemonChange }: Props) => {
  const [value, setValue] = useState<string>("");
  const [fetchError, setFetchError] = useState(false);
  const focused = useRef<any>(false);
  // Remember to correct event type later
  const handleInputChange = (e: any) => {
    setValue(e.target.value);
    if (fetchError == true) {
      setFetchError(false);
    }
  };
  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((response) => response.json())
      .then((data) => handlePokemonChange(data))
      .catch((err) => setFetchError(true));
  };
  return (
    <div className='navbar-main'>
      <form onSubmit={handleSearchSubmit}>
        <input ref={focused} placeholder='Type a Pokemon' onChange={handleInputChange} className={fetchError ? "search-input-error" : "search-input"} required />
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Navbar;
