import React, { useEffect, useState } from "react";
import Navbar from "./layouts/Navbar";
import "./styles/App.css";

function App() {
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
  return (
    <div className='App'>
      <Navbar />
      Pokedex
    </div>
  );
}

export default App;

