import React, { useState } from "react";
import WeatherComponent from "./components/weatherDisplay";
import SearchBar from "./components/searchBar";
import "./App.css";

function App() {
  const [city, setCity] = useState();

  return (
    <>
      <SearchBar setCity={setCity} />
      <WeatherComponent cityName={city} />
    </>
  );
}

export default App;
