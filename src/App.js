import "./App.css";
import logoSrc from "./assets/WHISKEYMANIACS.png";
import React, { useState, useEffect } from "react";
import WhiskeyList from "./components/WhiskeyList";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Whiskey World</h1>
        <img className="app__logo" src={logoSrc} alt="Whisky World App" />
        <input className="input" placeholder="Get your whiskey..." />
      </header>
      <main className="main">
        <WhiskeyList></WhiskeyList>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
