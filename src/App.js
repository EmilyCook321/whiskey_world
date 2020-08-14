import React from "react";
import "./App.css";
import Logo from "./assets/WHISKEYMANIACS.png";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Whiskey World</h1>
        <img className="app__logo" src={Logo}></img>{" "}
        <input className="input" placeholder="Get your stuff..." />
        <alt>"Whisky World App"</alt>
      </header>
      <main className="main"></main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
