import React from "react";
import PokemonList from "./components/PokemonList";
import Navbar from "./layouts/Navbar";
import "./styles/App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <PokemonList />
    </div>
  );
}

export default App;

