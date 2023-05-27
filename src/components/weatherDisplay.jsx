const WeatherComponent = (props) => {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");

  return (
    <>
      <h1> Weather in {weather.name} </h1>
      <h2>
        Tempearture: <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
        {`  |  ${weather?.weather[0].description}`}
      </h2>
    </>
  );
};

export default WeatherComponent;
