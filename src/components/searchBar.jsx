const SearchBar = ({ setCity }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(e.target.city.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="city" type="text" placeholder="City" />
      <button type={"submit"}> Search</button>
    </form>
  );
};
export default SearchBar;
