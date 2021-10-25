import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";

const SearchBar = ({ handleSearchText, searchText }) => {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => handleSearchText(e.target.value)}
        value={searchText}
      ></input>

      <FcSearch className="searchIcon" />
    </div>
  );
};

export default SearchBar;
