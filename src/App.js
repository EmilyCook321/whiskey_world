import React from "react";
import "./App.css";
import logoSrc from "./assets/WHISKEYMANIACS.png";
import List from "./components/List";
import ListItems from "./components/ListItems";
import ListItemImage from "./components/ListItemImage";
import ListItemText from "./components/ListItemText";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Whiskey World</h1>
        <img className="app__logo" src={logoSrc} alt="Whisky World App" />
        <input className="input" placeholder="Get your whiskey..." />
      </header>
      <main className="main">
        <List>
          <ListItems>
            <ListItemImage src={"logoSrc"} alt="Whiskeymaniacs logo" />
            <ListItemText title={""} description={""}></ListItemText>
          </ListItems>
        </List>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
