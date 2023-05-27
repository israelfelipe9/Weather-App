const WeatherComponent = ({ weather }) => {
  return (
    <div>
      <p>Temperature: {weather.temperature}</p>
    </div>
  );
};

export default WeatherComponent;
