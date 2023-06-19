import "./searchBar.css";

const SearchBar = ({ setCity }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.city.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="searchInput"
        name="city"
        type="text"
        placeholder="City"
      />
      <button className="searchButton" type={"submit"}>
        {" "}
        Search
      </button>
    </form>
  );
};
export default SearchBar;
