import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "@repo/dispatch";

function App() {
  React.useEffect(() => {
    fetch("http://localhost:3001/pizzas/ntfc8NO9UJFn6CLTshMy")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="App">
      <Header name="Dispatch" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
