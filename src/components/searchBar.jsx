const SearchBar = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <h1>Find Weather of your city</h1>
      <form onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>Search</button>
      </form>
    </>
  );
};
export default SearchBar;
