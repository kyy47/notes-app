import React from "react";

function Search({ onSearch, keyword }) {
  return (
    <input
      type="text"
      name="text"
      placeholder="Search Note"
      className="search"
      value={keyword}
      onChange={(e) => onSearch(e)}
    />
  );
}

export default Search;
