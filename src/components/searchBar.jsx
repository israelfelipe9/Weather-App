import React, { useState } from "react";

const SearchBar = ({ fetchCoordinates }) => {
  return (
    <form onSubmit={fetchCoordinates}>
      <input name="city" type="text" placeholder="City" />
      <button type={"submit"}> Search</button>
    </form>
  );
};
export default SearchBar;
