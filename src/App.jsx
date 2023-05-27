import React, { useState } from "react";
import WeatherComponent from "./components/weatherDisplay";
import SearchBar from "./components/searchBar";
import "./App.css";

function App() {
  const [weather, setWeather] = useState();

  const fetchWeather = async (lat, long) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`
    );
    const newData = await response.json();
    setWeather(newData.current_weather);
    console.log(newData.current_weather);
  };

  const fetchCoordinates = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${e.target.city.value}&count=1`
    );
    const newData = await response.json();

    await fetchWeather(
      newData.results[0].latitude,
      newData.results[0].longitude
    );
  };

  return (
    <>
      <SearchBar fetchCoordinates={fetchCoordinates} />
      {weather && <WeatherComponent weather={weather} />}
    </>
  );
}

export default App;
