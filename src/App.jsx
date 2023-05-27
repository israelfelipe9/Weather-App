import React, { useState } from "react";
import "./App.css";
import WeatherComponent from "./components/weatherDisplay";
import SearchBar from "./components/searchBar";

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    );
    const newData = await response.json();
    updateWeather(newData);
    console.log(newData);
  };

  return (
    <div>
      <h1>React Weather App</h1>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <SearchBar updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </div>
  );
}

export default App;
