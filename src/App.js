import './index.css'
import React from "react";
import PokedexPage from "./PokedexPage";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./NavBar";
import About from "./About";
import logo from "./images/pokemon-logo.png";

function App() {

  return (
    <>
      <Router>
        <div className="app">
          <h1 className="title">
            <img src={logo} alt="pokedex logo" height={200} />
          </h1>
          <NavBar />
          <Routes>
            <Route path="/" element={<PokedexPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
