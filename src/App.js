import React from "react";
import logo from "./logo.svg";
import { CounterUseSelector } from "./features/counter-use-selector/CounterUseSelector";
import { CounterConnect } from "./features/counter-connect/CounterConnect";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading title="useSelector hook" />
        <CounterUseSelector />
        <Heading title="connect" />
        <CounterConnect />
      </header>
    </div>
  );
}

function Heading({ title }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ width: "50px", height: "50px" }}
      />
      <h1>{title}</h1>
    </div>
  );
}

export default App;
