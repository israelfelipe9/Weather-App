import { useState, useEffect } from "react";

const WeatherComponent = ({ cityName }) => {
  const [weather, setWeather] = useState();
  const [cityData, setCityData] = useState();

  useEffect(() => {
    const fetchWeather = async (lat, long) => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`
        );
        const newData = await response.json();
        setWeather(newData.current_weather);
        console.log(newData.current_weather);
      } catch (err) {
        setWeather(null);
      }
    };

    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1`
        );
        const newData = await response.json();
        setCityData(newData.results[0]);
        console.log(newData.results[0]);
        await fetchWeather(
          newData.results[0].latitude,
          newData.results[0].longitude
        );
      } catch (err) {
        console.log(err);
        setCityData(null);
        setWeather(null);
      }
    };
    if (cityName) {
      fetchCoordinates();
    }
  }, [cityName]);

  return (
    <div>
      <h1> Weather Display</h1>
      {cityData === null && <p>City not found</p>}
      {cityData && (
        <div>
          <h2>
            {cityData.name} - {cityData.country}
          </h2>
          <p>Latitude: {cityData.latitude}</p>
          <p>Longitude: {cityData.longitude}</p>
          <p>Population: {cityData.population}</p>
          <p>Timezone: {cityData.timezone}</p>
        </div>
      )}
      {weather && (
        <div>
          <h2>Weather</h2>
          <p>
            Now is {weather.is_day === 0 ? "Night" : "Day"} in {cityData.name}
          </p>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Direction: {weather.winddirection}°</p>
          <p>Wind Speed: {weather.windspeed}Km/h</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
