import { useState, useEffect } from "react";

const WeatherComponent = ({ cityName }) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const fetchWeather = async (lat, long) => {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`
      );
      const newData = await response.json();
      setWeather(newData.current_weather);
      console.log(newData.current_weather);
    };

    const fetchCoordinates = async () => {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
      );
      const newData = await response.json();

      await fetchWeather(
        newData.results[0].latitude,
        newData.results[0].longitude
      );
    };
    if (cityName) {
      fetchCoordinates();
    }
  }, [cityName]);

  return <div>{weather && <p>Temperature: {weather.temperature}</p>}</div>;
};

export default WeatherComponent;
