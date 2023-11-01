import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { CountryProvider } from "./context/countryContext";
import Footer from "./components/Footer";
import { SearchProvider } from "./context/searchContext";

function App() {
  return (
    <div className="App">
      <CountryProvider>
        <SearchProvider>
          <Header />
          <Home />
          <Footer />
        </SearchProvider>
      </CountryProvider>
    </div>
  );
}

export default App;
