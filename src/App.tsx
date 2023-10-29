import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { CountryProvider } from "./context";

function App() {
  return (
    <div className="App">
      <CountryProvider>
        <Header />
        <Home />
      </CountryProvider>
    </div>
  );
}

export default App;
